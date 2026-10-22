'use strict';
window.SALAD = {
  ingredients: [
    {id:'lettuce',name:'Lettuce',group:'Garden',amount:60,unit:'g',color:'#75ab54',pieces:18},
    {id:'tomato',name:'Tomatoes',group:'Garden',amount:80,unit:'g',color:'#e55c46',pieces:6},
    {id:'carrot',name:'Shredded carrot',group:'Garden',amount:30,unit:'g',color:'#ed9439',pieces:10},
    {id:'apple',name:'Apple cubes',group:'Fruit',amount:60,unit:'g',color:'#e3cc91',pieces:6},
    {id:'blueberry',name:'Blueberries',group:'Fruit',amount:40,unit:'g',color:'#68649d',pieces:7},
    {id:'strawberry',name:'Strawberries',group:'Fruit',amount:60,unit:'g',color:'#d95c65',pieces:5},
    {id:'orange',name:'Orange slices',group:'Fruit',amount:70,unit:'g',color:'#f4ad43',pieces:5},
    {id:'lemon',name:'Lemon pieces',group:'Fruit',amount:15,unit:'g',color:'#ecd16a',pieces:3},
    {id:'ginger',name:'Thin-sliced ginger',group:'Garden',amount:3,unit:'g',color:'#debd83',pieces:5},
    {id:'seeds',name:'Pumpkin seeds',group:'Crunch',amount:10,unit:'g',color:'#688550',pieces:9},
    {id:'walnut',name:'Crushed walnuts',group:'Crunch',amount:15,unit:'g',color:'#ab805a',pieces:6},
    {id:'onion',name:'Red onion slices',group:'Garden',amount:15,unit:'g',color:'#a7719b',pieces:5},
    {id:'olives',name:'Olives',group:'Garden',amount:25,unit:'g',color:'#71805a',pieces:5},
    {id:'tuna',name:'Tuna',group:'Protein',amount:100,unit:'g',color:'#c99889',pieces:5},
    {id:'salmon',name:'Salmon',group:'Protein',amount:120,unit:'g',color:'#e78f71',pieces:4},
    {id:'egg',name:'Boiled egg slices',group:'Protein',amount:1,unit:'egg',color:'#edce67',pieces:4},
    {id:'sardine',name:'Sardines',group:'Protein',amount:90,unit:'g',color:'#8d9e9c',pieces:3},
    {id:'anchovy',name:'Anchovies',group:'Protein',amount:15,unit:'g',color:'#92846d',pieces:4},
    {id:'chicken',name:'Grilled chicken',group:'Protein',amount:120,unit:'g',color:'#cba470',pieces:4},
    {id:'steak',name:'Grilled steak',group:'Protein',amount:120,unit:'g',color:'#a56d59',pieces:4},
    {id:'shrimp',name:'Grilled shrimp',group:'Protein',amount:100,unit:'g',color:'#eaa58d',pieces:4},
    {id:'tofu',name:'Pan-fried tofu',group:'Protein',amount:120,unit:'g',color:'#d8b264',pieces:5}
  ],
  dressings:[
    {id:'lemon-oil',name:'Lemon–olive oil',short:'Lemon & olive oil',color:'#d9bf60',amount:'1 tbsp olive oil + 1 tsp lemon juice',parts:[['Olive oil',1,'tbsp'],['Lemon juice',1,'tsp']],steps:'Whisk the olive oil and lemon juice together. Season to taste.'},
    {id:'balsamic',name:'Balsamic vinaigrette',short:'Balsamic',color:'#775244',parts:[['Olive oil',2,'tsp'],['Balsamic vinegar',1,'tsp'],['Dijon mustard',0.25,'tsp']],steps:'Whisk the olive oil, balsamic vinegar and Dijon mustard together.'},
    {id:'tahini',name:'Tahini',short:'Tahini',color:'#d4bb8a',parts:[['Tahini',2,'tsp'],['Lemon juice',1,'tsp'],['Water',2,'tsp']],steps:'Stir the tahini and lemon juice together. Whisk in the water until pourable.'},
    {id:'yogurt',name:'Yogurt dressing',short:'Yogurt',color:'#e4e3d5',parts:[['Plain yogurt',1,'tbsp'],['Lemon juice',1,'tsp'],['Olive oil',1,'tsp']],steps:'Stir the yogurt, lemon juice and olive oil together. Season to taste.'},
    {id:'goddess',name:'Green goddess',short:'Green goddess',color:'#83a865',parts:[['Plain yogurt',1,'tbsp'],['Chopped mixed herbs',1,'tbsp'],['Lemon juice',1,'tsp'],['Olive oil',1,'tsp']],steps:'Blend the yogurt, herbs, lemon juice and olive oil until smooth. Season to taste.'},
    {id:'miso',name:'Miso ginger-carrot',short:'Miso ginger-carrot',color:'#da9a51',parts:[['Finely grated carrot',1,'tbsp'],['White miso',1,'tsp'],['Rice vinegar',1,'tsp'],['Olive oil',1,'tsp'],['Grated ginger',0.25,'tsp'],['Water',1,'tsp']],steps:'Blend the grated carrot, miso, vinegar, oil, ginger and water until smooth.'},
    {id:'none',name:'No dressing',short:'No dressing',color:'#f0eee2',parts:[],steps:'Leave undressed, or finish at the table as you like.'}
  ],
  presets:[
    {id:'garden',name:'Garden Party',tag:'The classic crunch',icon:'tomato',color:'#dceac7',items:['lettuce','tomato','carrot','onion','olives','seeds','egg'],dressing:'lemon-oil'},
    {id:'berry',name:'Berry Good',tag:'Sweet meets savory',icon:'strawberry',color:'#f4dbdc',items:['lettuce','apple','blueberry','strawberry','walnut','chicken'],dressing:'yogurt'},
    {id:'tokyo',name:'Tokyo Crunch',tag:'A little umami',icon:'tofu',color:'#f3e5bb',items:['lettuce','carrot','orange','ginger','seeds','tofu'],dressing:'miso'},
    {id:'coastal',name:'Coastal Club',tag:'A seaside situation',icon:'tuna',color:'#d8e9e9',items:['lettuce','tomato','lemon','onion','olives','tuna'],dressing:'balsamic'},
    {id:'power',name:'Power Bowl',tag:'Big bowl energy',icon:'steak',color:'#e8dfd0',items:['lettuce','tomato','carrot','onion','seeds','steak','egg'],dressing:'goddess'}
  ]
};
