'use strict';
// Original ingredient sprites, drawn in a small, deliberately chunky coordinate space.
window.SaladArt = (() => {
  const INK='#284b36';
  function poly(c,pts,fill,stroke=INK,line=1.5){c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=line;c.lineJoin='miter';c.stroke();}}
  function box(c,x,y,w,h,color){c.fillStyle=color;c.fillRect(x,y,w,h);}
  function oval(c,x,y,rx,ry,color,stroke){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fillStyle=color;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=1.5;c.stroke();}}
  function line(c,pts,color,width=1.5){c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.strokeStyle=color;c.lineWidth=width;c.stroke();}
  function sprite(c,id,x=0,y=0,scale=1,rot=0){
    c.save();c.translate(x,y);c.rotate(rot);c.scale(scale,scale);
    switch(id){
      case 'lettuce':
        poly(c,[[-21,-4],[-17,-4],[-17,-12],[-9,-12],[-9,-18],[0,-18],[0,-15],[10,-15],[10,-10],[19,-10],[19,-1],[23,-1],[23,8],[15,8],[15,14],[6,14],[6,19],[-3,19],[-3,14],[-14,14],[-14,7],[-21,7]],'#83b956');
        poly(c,[[-15,-3],[-7,-3],[-7,-11],[0,-11],[0,-7],[9,-7],[9,1],[15,1],[15,8],[4,8],[4,13],[-4,13],[-4,7],[-11,7]],'#a4cf6b',null);line(c,[[0,16],[0,3],[-7,-5]],'#4f803f',2);line(c,[[0,6],[10,-3]],'#4f803f',2);break;
      case 'tomato':
        poly(c,[[-16,-7],[-10,-15],[7,-16],[17,-7],[18,7],[9,16],[-8,17],[-17,8]],'#d95741');
        poly(c,[[-11,-5],[-7,-10],[7,-11],[12,-4],[11,7],[5,11],[-7,11],[-12,4]],'#f58054',null);
        line(c,[[0,-10],[0,11]],'#f4aa6c',2);line(c,[[-10,-5],[10,6]],'#f4aa6c',2);line(c,[[9,-7],[-9,7]],'#f4aa6c',2);
        [[-5,-5],[5,-4],[-5,5],[5,6]].forEach(([a,b])=>box(c,a,b,2,3,'#fce2a0'));break;
      case 'carrot':
        [[-15,-7,26,4,-.2],[-10,3,28,4,.25],[-16,10,24,4,-.4],[-6,-14,21,4,.4]].forEach(([a,b,w,h,r])=>{c.save();c.rotate(r);box(c,a,b,w,h,'#a7662d');box(c,a,b,w,h-1,'#efa044');c.restore()});break;
      case 'apple':case 'tofu': {
        const apple=id==='apple';poly(c,[[-14,-8],[2,-16],[18,-8],[2,0]],apple?'#fff0ba':'#f4d896');poly(c,[[-14,-8],[2,0],[2,17],[-14,8]],apple?'#e9d69a':'#c69244');poly(c,[[2,0],[18,-8],[18,8],[2,17]],apple?'#f3e3af':'#e6bc66');
        if(apple){line(c,[[-14,-6],[-14,8],[1,15]],'#ce6250',3);}else{[[-7,-6],[2,-10],[8,-5],[5,5],[11,2]].forEach(([a,b])=>box(c,a,b,3,2,'#b9823b'));}break;}
      case 'blueberry':
        poly(c,[[-11,-13],[7,-14],[15,-6],[16,7],[7,15],[-8,14],[-15,5],[-15,-5]],'#626796');box(c,-9,-9,6,4,'#969dc6');poly(c,[[2,-7],[5,-3],[10,-3],[7,1],[8,6],[3,3],[-1,6],[0,1],[-4,-3],[1,-3]],'#3d466e',null);break;
      case 'strawberry':
        poly(c,[[-16,-6],[-11,-13],[10,-13],[17,-5],[12,8],[2,20],[-8,9]],'#df6370');poly(c,[[-6,-12],[-14,-18],[-4,-16],[0,-22],[5,-16],[14,-18],[8,-10]],'#72944e');[[-8,-3],[3,-5],[9,1],[-5,5],[1,11]].forEach(([a,b])=>box(c,a,b,2,3,'#f9d18e'));break;
      case 'orange':case 'lemon': {
        const lemon=id==='lemon';poly(c,[[-20,-10],[20,-10],[18,2],[12,13],[0,19],[-12,13],[-18,2]],lemon?'#e7cc60':'#ec9a32');poly(c,[[-16,-8],[16,-8],[13,2],[8,10],[0,14],[-9,9],[-14,1]],lemon?'#fff0a1':'#ffd179',null);[[[-1,-7],[-10,8]],[[0,-7],[0,13]],[[2,-7],[10,8]]].forEach(p=>line(c,p,lemon?'#d0b64b':'#e9a346',1.5));break;}
      case 'ginger':poly(c,[[-20,-5],[-10,-13],[5,-12],[18,-4],[15,7],[2,13],[-14,10]],'#ddc398');poly(c,[[-16,-4],[-7,-10],[5,-9],[14,-3],[11,6],[1,9],[-11,7]],'#f3dfb4',null);line(c,[[-10,-3],[8,1]],'#dec394');line(c,[[-6,3],[5,5]],'#dec394');break;
      case 'seeds': [[-9,-5,-.5],[7,-7,.3],[1,9,.6]].forEach(([a,b,r])=>{c.save();c.translate(a,b);c.rotate(r);poly(c,[[0,-9],[5,-3],[4,5],[0,8],[-4,3],[-4,-4]],'#718e53');line(c,[[0,-5],[0,5]],'#a2b473',1);c.restore()});break;
      case 'walnut':poly(c,[[-14,-4],[-9,-12],[-2,-9],[5,-14],[13,-7],[12,3],[16,8],[6,14],[-1,11],[-10,14],[-16,6]],'#bc9464');line(c,[[-7,-8],[-5,-1],[-10,5],[-3,9]],'#7d5d3e',3);line(c,[[4,-8],[7,-1],[1,3],[6,9]],'#7d5d3e',3);box(c,-2,-5,3,4,'#dfb681');break;
      case 'onion':
        c.beginPath();c.ellipse(0,0,19,13,-.2,.1,Math.PI*1.7);c.strokeStyle='#875178';c.lineWidth=6;c.stroke();c.beginPath();c.ellipse(0,0,19,13,-.2,.1,Math.PI*1.7);c.strokeStyle='#e7b8cc';c.lineWidth=3;c.stroke();break;
      case 'olives':oval(c,0,0,13,17,'#70804d',INK);oval(c,0,-1,6,8,'#354735');box(c,-7,-9,3,5,'#a8af73');break;
      case 'tuna':
        [[-9,-4,-.3],[5,-6,.3],[-4,7,.1],[10,6,-.2]].forEach(([a,b,r])=>{c.save();c.translate(a,b);c.rotate(r);poly(c,[[-9,-6],[3,-8],[10,-2],[5,7],[-7,6]],'#d6b09d','#8d7165',1);line(c,[[-4,-4],[-2,4]],'#efc9b6');c.restore()});break;
      case 'salmon':poly(c,[[-24,-7],[-10,-16],[17,-11],[24,4],[11,15],[-17,10]],'#ec9578');[[-15,-7],[-5,-10],[5,-8],[15,-5]].forEach(([a,b])=>line(c,[[a,b],[a+3,b+8],[a+1,b+17]],'#ffcdad',2));line(c,[[-17,10],[11,15],[24,4]],'#ae6856',3);break;
      case 'egg':
        poly(c,[[-15,-9],[-8,-18],[5,-18],[16,-9],[19,4],[13,15],[0,19],[-12,15],[-19,4]],'#fff5d9');poly(c,[[-8,-4],[-2,-8],[6,-6],[10,1],[7,9],[-1,11],[-9,6]],'#edbf42','#cf9f32',1);box(c,-5,-3,5,3,'#ffdc69');break;
      case 'sardine':case 'anchovy':{
        const a=id==='anchovy';poly(c,[[-25,0],[-16,-8],[9,-7],[20,-2],[28,-9],[24,0],[28,9],[18,4],[7,9],[-16,7]],a?'#a8997a':'#a2b3af');line(c,[[-19,-2],[11,-3]],a?'#796b55':'#617f82',3);line(c,[[-17,4],[12,4]],'#dce1ca',2);box(c,-17,-3,3,3,'#263f38');break;}
      case 'chicken':case 'steak':{
        const s=id==='steak';poly(c,[[-24,-4],[-17,-13],[2,-16],[23,-6],[20,9],[9,15],[-17,11]],s?'#985c46':'#d3ac71');poly(c,[[-19,-3],[-13,-9],[1,-12],[18,-4],[15,5],[6,10],[-13,7]],s?'#c58774':'#f0d3a2',null);[-13,-3,7].forEach(a=>line(c,[[a,-6],[a+6,7]],s?'#754c3b':'#9d7549',3));break;}
      case 'shrimp':
        poly(c,[[-14,-12],[-4,-18],[10,-16],[19,-7],[19,5],[11,14],[-1,14],[-6,6],[3,8],[10,3],[10,-5],[3,-9],[-6,-6],[-11,0],[-20,-2],[-17,-8]],'#efa78b');line(c,[[2,-15],[0,-9]],'#c57b66',2);line(c,[[13,-9],[8,-5]],'#c57b66',2);line(c,[[17,2],[10,1]],'#c57b66',2);poly(c,[[-13,-9],[-23,-13],[-20,-5],[-25,-1],[-15,0]],'#cf7965');break;
    }
    c.restore();
  }
  function icon(canvas,id){const c=canvas.getContext('2d');c.clearRect(0,0,canvas.width,canvas.height);sprite(c,id,canvas.width/2,canvas.height/2,canvas.width/60);}
  function rng(seed){return ()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;};}
  function pieces(items,positions){const result=[];for(const item of items){const d=SALAD.ingredients.find(x=>x.id===item.id);if(!d)continue;const rand=rng([...d.id].reduce((a,b)=>a*31+b.charCodeAt(0),7));const count=d.pieces;for(let i=0;i<count;i++){const radius=Math.sqrt(rand())*.83,theta=rand()*Math.PI*2;const key=d.id+':'+i;const pos=positions[key];result.push({key,id:d.id,x:pos?pos[0]:Math.cos(theta)*radius,y:pos?pos[1]:Math.sin(theta)*radius,rot:rand()*Math.PI*2,scale:(d.id==='lettuce'?1.9:.95+rand()*.25)*Math.pow(item.factor,.18),level:d.id==='lettuce'?0:1});}}return result;}
  function project(x,y,angle){const cs=Math.cos(angle),sn=Math.sin(angle);return [360+(x*cs-y*sn)*235,253+(x*sn+y*cs)*132];}
  function unproject(px,py,angle){const x=(px-360)/235,y=(py-253)/132;return [x*Math.cos(angle)+y*Math.sin(angle),-x*Math.sin(angle)+y*Math.cos(angle)];}
  function clamp(x,y){const r=Math.hypot(x,y);return r>.9?[x*.9/r,y*.9/r]:[x,y];}
  function draw(canvas,items,positions,angle,options={}){
    const c=canvas.getContext('2d');c.clearRect(0,0,720,540);c.imageSmoothingEnabled=false;
    // Counter tiles and sparse pixel sparkles frame the bowl without covering the food.
    c.strokeStyle='#cbdcbf';c.lineWidth=1;for(let x=-400;x<1100;x+=100){line(c,[[x,460],[x+400,220]],'#dbe5d0',1);line(c,[[x,460],[x-400,220]],'#dbe5d0',1);}
    oval(c,363,433,237,28,'#b8caa9');oval(c,363,431,190,17,'#a5b99a');
    c.beginPath();c.moveTo(94,251);c.bezierCurveTo(102,360,183,421,360,430);c.bezierCurveTo(537,421,618,360,626,251);c.closePath();c.fillStyle='#bfdbca';c.fill();c.lineWidth=4;c.strokeStyle=INK;c.stroke();
    oval(c,360,253,266,153,'#fcfbea',INK);oval(c,360,253,247,138,items.length?'#e7edca':'#e1e9d3');
    oval(c,360,269,222,113,items.length?'#d7e4b7':'#d5e1c8');
    let all=pieces(items,positions);all.sort((a,b)=>a.level-b.level||project(a.x,a.y,angle)[1]-project(b.x,b.y,angle)[1]);
    c.save();c.beginPath();c.ellipse(360,253,244,135,0,0,Math.PI*2);c.clip();
    for(const p of all){const [x,y]=project(p.x,p.y,angle);const dy=options.dropId===p.id?-(options.drop||0):0;oval(c,x+2,y+7,18*p.scale,7*p.scale,'#5c744d22');sprite(c,p.id,x,y+dy,p.scale,p.rot+angle*.35);if(options.selected===p.key){c.setLineDash([3,3]);oval(c,x,y,27,22,'#ffffff00','#1d6556');c.setLineDash([]);}}
    if(options.dressing&&options.dressing!=='none'&&all.length){const dressing=SALAD.dressings.find(d=>d.id===options.dressing);c.globalAlpha=.7;for(let i=0;i<4;i++){c.beginPath();c.moveTo(220+i*65,201);c.bezierCurveTo(180+i*65,260,240+i*65,280,217+i*65,320);c.strokeStyle=dressing.color;c.lineWidth=3;c.stroke();}c.globalAlpha=1;}
    c.restore();
    // Transparent front of the glass bowl, with a thick lip and pixel highlights.
    c.beginPath();c.ellipse(360,253,266,153,0,0,Math.PI);c.lineWidth=6;c.strokeStyle=INK;c.stroke();c.beginPath();c.ellipse(360,250,260,150,0,.06,Math.PI-.06);c.lineWidth=3;c.strokeStyle='#f9fff3';c.stroke();
    line(c,[[137,332],[149,350],[162,360]],'#f8fff0',6);line(c,[[179,372],[191,380]],'#f8fff0',5);line(c,[[526,373],[543,360]],'#e8f7e6',5);
    c.save();c.translate(360,414);c.rotate(angle);box(c,-7,-3,14,6,'#426e56');c.restore();
    if(options.sparkle){[[126,122],[583,174],[571,358]].forEach(([x,y])=>{box(c,x-3,y-12,6,24,'#7d9864');box(c,x-12,y-3,24,6,'#7d9864');});}
    return all;
  }
  return {sprite,icon,pieces,project,unproject,clamp,draw,rng};
})();
