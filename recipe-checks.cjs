const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const ctx={TextEncoder,TextDecoder,btoa,atob,console};ctx.window=ctx;vm.createContext(ctx);
const sourceRoot=fs.existsSync('dist/data.js')?'dist':'.';
for(const f of ['data.js','art.js','core.js'])vm.runInContext(fs.readFileSync(sourceRoot+'/'+f,'utf8'),ctx);
const {SALAD:D,SaladArt:A,SaladCore:C}=ctx;
const copy=x=>JSON.parse(JSON.stringify(x));
assert.equal(D.ingredients.length,22);assert.equal(D.dressings.length,7);
for(const ingredient of D.ingredients)assert.ok(Number.isFinite(ingredient.kcalPer100g)&&ingredient.kcalPer100g>0,`${ingredient.id} needs a calorie estimate`);
for(const p of D.presets){const recipe=C.fromPreset(p,3);assert.deepEqual(copy(C.decode(C.encode(recipe))),copy(recipe));}
let recipe=C.fromPreset(D.presets[0],2);recipe.name='Wow! おいしい 🥗 <script>alert(1)</script>';
recipe.positions={'tomato:0':[.3,-.4]};assert.deepEqual(copy(C.decode(C.encode(recipe))),copy(recipe));
assert.equal(C.quantity({id:'lettuce',factor:1},2),'120 g');assert.equal(C.quantity({id:'egg',factor:1.25},2),'2.5 eggs');
const gardenNutrition=C.nutrition(C.fromPreset(D.presets[0],1));assert.equal(gardenNutrition.items.find(i=>i.id==='lettuce').kcalPerGram,.15);assert.equal(gardenNutrition.dressingKcal,120);assert.ok(Math.abs(gardenNutrition.totalKcal-324.1)<1e-9);assert.ok(Math.abs(gardenNutrition.totalGrams-288.5)<1e-9);assert.ok(Math.abs(gardenNutrition.kcalPerGram-gardenNutrition.totalKcal/gardenNutrition.totalGrams)<1e-12);
const doubledNutrition=C.nutrition(C.fromPreset(D.presets[0],2));assert.equal(doubledNutrition.totalKcal,gardenNutrition.totalKcal*2);assert.equal(doubledNutrition.perServingKcal,gardenNutrition.totalKcal);
const eggNutrition=C.nutrition({items:[{id:'egg',factor:1}],dressing:'none',servings:2});assert.equal(eggNutrition.items[0].grams,100);assert.equal(eggNutrition.items[0].kcal,155);assert.equal(eggNutrition.totalGrams,100);
assert.throws(()=>C.validate({...recipe,items:[{id:'lettuce'},{id:'lettuce'}]}));
assert.throws(()=>C.validate({...recipe,items:[{id:'unknown'}]}));
assert.throws(()=>C.validate({...recipe,dressing:'unknown'}));
assert.throws(()=>C.decode('garbage!'));assert.throws(()=>C.decode('A'.repeat(24001)));
const bounded=C.validate({...recipe,servings:900,items:[{id:'lettuce',factor:-7}],angle:Infinity,positions:{'lettuce:0':[99,99],'lettuce:100':[1,1],'__proto__':[1,1]}});
assert.equal(bounded.servings,12);assert.equal(bounded.items[0].factor,.25);assert.equal(bounded.angle,0);assert.ok(Math.hypot(...bounded.positions['lettuce:0'])<.902);assert.equal(Object.keys(bounded.positions).length,1);
const all={...recipe,items:D.ingredients.map(i=>({id:i.id,factor:1})),positions:{}};
const pieces=A.pieces(all.items,{});pieces.forEach(p=>all.positions[p.key]=[p.x,p.y]);
const full=C.decode(C.encode(all));assert.equal(Object.keys(full.positions).length,pieces.length);assert.equal(full.items.length,22);assert.ok(C.encode(all).length<24000);
for(const angle of [0,.5,1.8,5]){const point=A.project(.2,-.3,angle);const back=A.unproject(...point,angle);assert.ok(Math.abs(back[0]-.2)<1e-10&&Math.abs(back[1]+.3)<1e-10);}
assert.ok(C.preparation(C.fromPreset(D.presets[2])).some(s=>s.includes('miso')));
console.log('PASS: ingredient coverage; calorie density and dressing estimates; serving scaling; preset and Unicode share round-trips; invalid links; schema bounds; arrangement preservation; rotation coordinates; dressing instructions.');
