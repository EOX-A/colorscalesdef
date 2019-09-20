
/**
 * Main module of colorscalesdef which exports the colorscales definition.
 * @name colorscalesdef
 * @author: Daniel Santillan
 */


export let colorscales = {
    'viridis': {
        colors: ['#440154','#470f62','#481d6f','#472a79','#453681','#414286','#3c4d8a','#37588c','#32628d','#2e6c8e','#2a768e','#267f8e','#23898d','#1f928c','#1e9b89','#20a585','#28ae7f','#35b778','#45bf6f','#59c764','#70ce56','#88d547','#a2da37','#bdde26','#d7e219','#f1e51c','#fde724'],
        positions: [0,0.0391,0.0781,0.1172,0.1563,0.1953,0.2344,0.2734,0.3125,0.3516,0.3906,0.4297,0.4688,0.5078,0.5469,0.5859,0.625,0.6641,0.7031,0.7422,0.7813,0.8203,0.8594,0.8984,0.9375,0.9766,1.0]
    },
    'inferno': {
        colors: ['#000003','#040316','#0f092d','#1d0c45','#2e0a5a','#400966','#500d6c','#60136e','#70196e','#801f6b','#902468','#a02a62','#af315b','#be3852','#cc4148','#d94d3d','#e45a31','#ed6825','#f37918','#f88a0b','#fb9d06','#fbb014','#f9c32a','#f5d745','#f1e968','#f5f891','#fcfea4'],
        positions: [0,0.0391,0.0781,0.1172,0.1563,0.1953,0.2344,0.2734,0.3125,0.3516,0.3906,0.4297,0.4688,0.5078,0.5469,0.5859,0.625,0.6641,0.7031,0.7422,0.7813,0.8203,0.8594,0.8984,0.9375,0.9766,1.0]
    },
    'plasma' : {
        colors: ['#0c0786','#250591','#380499','#49029f','#5901a4','#6800a7','#7801a8','#8607a6','#9511a1','#a21c9a','#ae2791','#b93388','#c33e7f','#cd4975','#d6556d','#de6064','#e56c5b','#ec7853','#f2854a','#f79241','#faa039','#fdaf31','#fdbe29','#fcce25','#f8df24','#f2f026','#eff821'],
        positions: [0,0.0391,0.0781,0.1172,0.1563,0.1953,0.2344,0.2734,0.3125,0.3516,0.3906,0.4297,0.4688,0.5078,0.5469,0.5859,0.625,0.6641,0.7031,0.7422,0.7813,0.8203,0.8594,0.8984,0.9375,0.9766,1.0]
    },
    'twilight': {
        colors: ['#e1d8e2','#dbd8df','#d2d5da','#c5cfd4','#b6c7cf','#a7c0ca','#98b7c7','#8baec5','#80a5c3','#769bc1','#6e92bf','#6887be','#647dbc','#6172b9','#5f67b6','#5e5bb1','#5e4fac','#5d43a4','#5c379b','#592b90','#552182','#4f1972','#471460','#3e1151','#371043','#32113a','#321237','#391139','#43123e','#4f1443','#5c1648','#691a4c','#761e4f','#822450','#8d2c50','#98344f','#a13e4f','#a94950','#b05451','#b65f54','#bc6b59','#c0775f','#c48368','#c78f72','#ca9c80','#cda88f','#d0b39f','#d4beb0','#d9c8c1','#ddd1d0','#e0d6db','#e1d8e1'],
        positions: [0,0.0196,0.0392,0.0588,0.0784,0.098,0.1176,0.1373,0.1569,0.1765,0.1961,0.2157,0.2353,0.2549,0.2745,0.2941,0.3137,0.3333,0.3529,0.3725,0.3922,0.4118,0.4314,0.451,0.4706,0.4902,0.5098,0.5294,0.549,0.5686,0.5882,0.6078,0.6275,0.6471,0.6667,0.6863,0.7059,0.7255,0.7451,0.7647,0.7843,0.8039,0.8235,0.8431,0.8627,0.8824,0.902,0.9216,0.9412,0.9608,0.9804,1.0]
    },
    'twilight_shifted': {
        colors: ['#301437','#361142','#3F1251','#491564','#521C79','#58278B','#5C359A','#5E43A5','#5E52AD','#5F60B4','#606EB8','#637BBC','#6888BE','#7094C0','#7AA0C2','#87ABC4','#96B6C7','#A7C0CB','#B9C9D0','#CBD2D7','#D8D8DE','#E1D9E2','#E0D7DB','#DDD0CE','#D8C5BB','#D2B8A7','#CEAB92','#CA9C80','#C78E71','#C37F64','#BE705B','#B86255','#B15452','#A84750','#9E3B50','#922F50','#852650','#761F4F','#67194C','#571647','#481341','#3B113B','#331237'],
        positions: [0.0,0.02362,0.04724,0.07087,0.09449,0.11811,0.14173,0.16535,0.18898,0.21260,0.23622,0.25984,0.28346,0.30709,0.33071,0.35433,0.37795,0.40157,0.42520,0.44882,0.47244,0.49606,0.51969,0.54331,0.56693,0.59055,0.61417,0.63780,0.66142,0.68504,0.70866,0.73228,0.75591,0.77953,0.80315,0.82677,0.85039,0.87402,0.89764,0.92126,0.94488,0.96850,1]
    },
    'magma': {
        colors: ['#000003','#040415','#0e0a2a','#1a1041','#281159','#390f6e','#4a1079','#5a157e','#691c80','#792281','#892881','#992d7f','#a9327c','#b93778','#ca3e72','#d9466a','#e65162','#f0605d','#f7715b','#fb8460','#fd9768','#feaa74','#febc82','#fdcf92','#fde1a3','#fcf3b5','#fbfcbf'],
        positions: [0,0.0391,0.0781,0.1172,0.1563,0.1953,0.2344,0.2734,0.3125,0.3516,0.3906,0.4297,0.4688,0.5078,0.5469,0.5859,0.625,0.6641,0.7031,0.7422,0.7813,0.8203,0.8594,0.8984,0.9375,0.9766,1.0]
    },
    'cividis': {
        colors: ['#00224d','#00295e','#003070','#16366f','#273d6d','#34446c','#3f4b6b','#49526b','#52596c','#5b606e','#64676f','#6d6e72','#757575','#7e7d78','#878478','#918c77','#9b9376','#a59b73','#afa370','#b9ab6d','#c4b468','#cebc62','#d9c55a','#e4ce51','#efd846','#fbe136','#fde737'],
        positions: [0,0.0391,0.0781,0.1172,0.1563,0.1953,0.2344,0.2734,0.3125,0.3516,0.3906,0.4297,0.4688,0.5078,0.5469,0.5859,0.625,0.6641,0.7031,0.7422,0.7813,0.8203,0.8594,0.8984,0.9375,0.9766,1.0]
    },
    'rainbow': {
        colors: ['#96005A','#0000C8','#0019FF','#0098FF','#2CFF96','#97FF00','#FFEA00','#FF6F00','#FF0000'],
        positions: [0,0.125,0.25,0.375,0.5,0.625,0.75,0.875,1]
    },
    'jet': {
        colors: ['#000083','#003CAA','#05FFFF','#FFFF00','#FA0000','#800000'],
        positions: [0,0.125,0.375,0.625,0.875,1]
    },
    'hsv': {
        colors: ['#ff0000','#fdff02','#f7ff02','#00fc04','#00fc0a','#01f9ff','#0200fd','#0800fd','#ff00fb','#ff00f5','#ff0006'],
        positions: [0,0.169,0.173,0.337,0.341,0.506,0.671,0.675,0.839,0.843,1]
    },
    'hot': {
        colors: ['#000000','#e60000','#ffd200','#ffffff'],
        positions: [0,0.3,0.6,1]
    },
    'cool': {
        colors: ['#00ffff','#ff00ff'],
        positions: [0,1]
    },
    'spring': {
        colors: ['#ff00ff','#ffff00'],
        positions: [0,1]
    },
    'summer': {
        colors: ['#008066','#ffff66'],
        positions: [0,1]
    },
    'autumn': {
        colors: ['#ff0000','#ffff00'],
        positions: [0,1]
    },
    'winter': {
        colors: ['#0000ff','#00ff80'],
        positions: [0,1]
    },
    'bone': {
        colors: ['#000000','#545474','#a9c8c8','#ffffff'],
        positions: [0,0.376,0.753,1]
    },
    'copper': {
        colors: ['#000000','#ffa066','#ffc77f'],
        positions: [0,0.804,1]
    },
    'greys': {
        colors: ['#000000','#ffffff'],
        positions: [0,1]
    },
    'yignbu': {
        colors: ['#081d58','#253494','#225ea8','#1d91c0','#41b6c4','#7fcdbb','#c7e9b4','#edf8d9','#ffffd9'],
        positions: [0,0.125,0.25,0.375,0.5,0.625,0.75,0.875,1]
    },
    'greens': {
        colors: ['#00441b','#006d2c','#238b45','#41ab5d','#74c476','#a1d99b','#c7e9c0','#e5f5e0','#f7fcf5'],
        positions: [0,0.125,0.25,0.375,0.5,0.625,0.75,0.875,1]
    },
    'yiorrd': {
        colors: ['#800026','#bd0026','#e31a1c','#fc4e2a','#fd8d3c','#feb24c','#fed976','#ffeda0','#ffffcc'],
        positions: [0,0.125,0.25,0.375,0.5,0.625,0.75,0.875,1]
    },
    'bluered': {
        colors: ['#0000ff','#ff0000'],
        positions: [0,1]
    },
    'rdbu': {
        colors: ['#050aac','#6a89f7','#bebebe','#dcaa84','#e6915a','#b20a1c'],
        positions: [0,0.35,0.5,0.6,0.7,1]
    },
    'picnic': {
        colors: ['#0000ff','#3399ff','#66ccff','#99ccff','#ccccff','#ffffff','#ffccff','#ff99ff','#ff66cc','#ff6666','#ff0000'],
        positions: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
    },
    'portland': {
        colors: ['#0c3383','#0a88ba','#f2d338','#f28f38','#d91e1e'],
        positions: [0,0.25,0.5,0.75,1]
    },
    'blackbody': {
        colors: ['#000000','#e60000','#e6d200','#ffffff','#a0c8ff'],
        positions: [0,0.2,0.4,0.7,1]
    },
    'earth': {
        colors: ['#000082','#00b4b4','#28d228','#e6e632','#784614','#ffffff'],
        positions: [0,0.1,0.2,0.4,0.6,1]
    },
    'electric': {
        colors: ['#000000','#1e0064','#780064','#a05a00','#e6c800','#fffadc'],
        positions: [0,0.15,0.4,0.6,0.8,1]
    },
    'blackwhite': {
        colors: ['#000000','#ffffff'],
        positions: [0,1]
    },
    'coolwarm': {
        colors: ['#0000ff','#ffffff','#ff0000'],
        positions: [0,0.5,1]
    },
    'copper': {
        colors: ['#000000','#ffa066','#ffc77f'],
        positions: [0,0.804,1]
    },
    'diverging_1': {
      colors: ['#400040','#36005b','#2d0076','#240091','#1b00ad','#1200c8','#0900e3','#0000ff','#042eff','#095cff','#0d8bff','#12b9ff','#17e7ff','#3fffff','#8cffff','#d8ffff','#ffffd4','#ffff7f','#ffff2a','#ffed00','#ffcc00','#ffaa00','#ff8700','#ff6600','#ff4400','#ff2100','#ff0000','#ff002e','#ff005c','#ff008b','#ff00b9','#ff00e7'],
      positions: [0.00000,0.03175,0.06349,0.09524,0.12698,0.15873,0.19048,0.22222,0.25397,0.28571,0.31746,0.34921,0.38095,0.41270,0.44444,0.47619,0.50794,0.53968,0.57143,0.60317,0.63492,0.66667,0.69841,0.73016,0.76190,0.79365,0.82540,0.85714,0.88889,0.92063,0.95238,0.98413]
    },
    'diverging_2': {
        colors: ['#000000','#030aff','#204aff','#3c8aff','#77c4ff','#f0ffff','#f0ffff','#f2ff7f','#ffff00','#ff831e','#ff083d','#ff00ff'],
        positions: [0,0.0000000001,0.1,0.2,0.3333,0.4666,0.5333,0.6666,0.8,0.9,0.999999999999,1]
    },
    'redblue': {
        colors: ['#ff0000','#0000ff'],
        positions: [0,1]
    },
    'ylgnbu': {
        colors: ['#081d58','#253494','#225ea8','#1d91c0','#41b6c4','#7fcdbb','#c7e9b4','#edf8d9','#ffffd9'],
        positions: [1,0.875,0.75,0.625,0.5,0.375,0.25,0.125,0]
    },
    'turbo': {
        colors:['#30123b','#341b51','#372466','#3a2d79','#3d358b','#3f3e9c','#4146ac','#434eba','#4456c7','#455ed3','#4666dd','#476ee6','#4776ee','#467df4','#4685fa','#458cfd','#4294ff','#3e9bfe','#3aa3fc','#35abf8','#2fb2f4','#2ab9ee','#25c0e7','#20c7df','#1ccdd8','#1ad4d0','#18d9c8','#18dec0','#19e3b9','#1de7b2','#22ebaa','#2aefa1','#32f298','#3cf58e','#46f884','#52fa7a','#5dfc6f','#69fd66','#75fe5c','#80ff53','#8bff4b','#96fe44','#9ffd3f','#a7fc3a','#affa37','#b7f735','#bef434','#c6f034','#cdec34','#d4e735','#dbe236','#e1dd37','#e7d739','#ecd13a','#f1cb3a','#f5c53a','#f8be39','#fbb838','#fcb136','#fea933','#fea130','#fe992c','#fe9029','#fc8725','#fb7e21','#f9751d','#f66c19','#f36315','#f05b12','#ec530f','#e84b0c','#e4450a','#df3f08','#da3907','#d43305','#ce2d04','#c82803','#c12302','#b91e02','#b21a01','#a91601','#a11201','#980e01','#8e0a01','#850702','#7a0403','#7d0609'],
        positions:[0,0.0117,0.0234,0.0352,0.0469,0.0586,0.0703,0.082,0.0938,0.1055,0.1172,0.1289,0.1406,0.1523,0.1641,0.1758,0.1875,0.1992,0.2109,0.2227,0.2344,0.2461,0.2578,0.2695,0.2813,0.293,0.3047,0.3164,0.3281,0.3398,0.3516,0.3633,0.375,0.3867,0.3984,0.4102,0.4219,0.4336,0.4453,0.457,0.4688,0.4805,0.4922,0.5039,0.5156,0.5273,0.5391,0.5508,0.5625,0.5742,0.5859,0.5977,0.6094,0.6211,0.6328,0.6445,0.6563,0.668,0.6797,0.6914,0.7031,0.7148,0.7266,0.7383,0.75,0.7617,0.7734,0.7852,0.7969,0.8086,0.8203,0.832,0.8438,0.8555,0.8672,0.8789,0.8906,0.9023,0.9141,0.9258,0.9375,0.9492,0.9609,0.9727,0.9844,0.9961,1]
    },
    'ylorrd': {
        colors: ['#800026','#bd0026','#e31a1c','#fc4e2a','#fd8d3c','#feb24c','#fed976','#ffeda0','#ffffcc'],
        positions: [1,0.875,0.75,0.625,0.5,0.375,0.25,0.125,0]
    }
};