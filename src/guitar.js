'use strict';

const guitar = [
  792,
  414,
  551,
  679,
  1039,
  2032,
  1439,
  1590,
  1743,
  2367,
  2502,
  2663,
  2807,
  3144,
  3407,
  3551,
  3695,
  3838,
  4183,
  4423,
  4567,
  4711,
  4895,
  5872,
  5526,
  5654,
  5798,
  6632,
  6496,
  6654,
  6806,
  6951,
  8122,
  7575,
  7718,
  7870,
  8006,
  8359,
  8639,
  8790,
  8942,
  9103,
  9447,
  9671,
  9823,
  9974,
  10143,
  10512,
  10734,
  10886,
  11031,
  11183,
  11550,
  11798,
  11958,
  12110,
  12702,
  12607,
  12854,
  12998,
  13158,
  14102,
  13638,
  13886,
  14031,
  14190,
  14350,
  14710,
  14982,
  15135,
  15792,
  15663,
  15863,
  16038,
  16207,
  20996,
  21502,
  21395,
  21538,
  21674,
  22090,
  22338,
  22474,
  22625,
  22785,
  23138,
  23409,
  23547,
  23705,
  23858,
  24209,
  24473,
  24609,
  24761,
  24945,
  26052,
  25546,
  25681,
  25842,
  26361,
  26547,
  26705,
  26849,
  27001,
  27331,
  27617,
  27761,
  27914,
  28073,
  28426,
  28609,
  28785,
  28937,
  29089,
  29457,
  29642,
  29794,
  29937,
  30505,
  30737,
  30898,
  31057,
  31522,
  31609,
  31882,
  32025,
  32185,
  32329,
  32689,
  32961,
  33105,
  33732,
  37962,
  38502,
  38402,
  38546,
  38699,
  39066,
  79338,
  79483,
  79634,
  79794,
  80154,
  80394,
  80538,
  80683,
  80834,
  81211,
  81442,
  81586,
  81746,
  81900,
  82592,
  90805,
  91045,
  91180,
  92192,
  91781,
  92053,
  92189,
  92356,
  92502,
  92852,
  93109,
  93602,
  93422,
  93556,
  93918,
  94181,
  94324,
  94486,
  94645,
  95013,
  95822,
  95380,
  95541,
  95686,
  96053,
  96862,
  96437,
  96588,
  96741,
  97102,
  97333,
  97476,
  97638,
  97797,
  98173,
  98357,
  98502,
  98653,
  98812,
  99181,
  99428,
  99581,
  99741,
  99886,
  100612,
  100525,
  100660,
  100828,
  100988,
  101341,
  101596,
  101740,
  101893,
  102054,
  102388,
  102556,
  102732,
  102876,
  107714,
  107946,
  108106,
  108342,
  108371,
  108746,
  109026,
  109162,
  109323,
  109482,
  109842,
  110082,
  110622,
  110387,
  110539,
  110898,
  111122,
  111662,
  111418,
  111587,
  111946,
  112187,
  112340,
  112498,
  112650,
  113010,
  113422,
  113386,
  113545,
  113706,
  114050,
  114982,
  114450,
  114594,
  114761,
  115106,
  115355,
  115498,
  115657,
  116082,
  116371,
  116522,
  116682,
  116834,
  117218,
  117514,
  117650,
  117810,
  117970,
  118902,
  118523,
  118698,
  118825,
  118986,
  119323,
  119602,
  119756,
  119913,
  124594,
  124850,
  124994,
  125154,
  125982,
  125674,
  125946,
  126091,
  126582,
  126402,
  126770,
  127041,
  127194,
  127355,
  127507,
  127858,
  128107,
  128502,
  128402,
  128586,
  128930,
  129193,
  129506,
  137450,
  137721,
  137889,
  138026,
  138186,
  138601,
  138874,
  139017,
  139161,
  180132,
  179658,
  179921,
  180066,
  180209,
  180377,
  180761,
  181033,
  181161,
  182212,
  181785,
  181945,
  182129,
  183042,
  182458,
  182826,
  183121,
  183582,
  183411,
  183569,
  183913,
  184168,
  185122,
  184457,
  184594,
  184954,
  185622,
  185369,
  185529,
  185673,
  186026,
  186332,
  186394,
  186537,
  186689,
  187073,
  188122,
  187465,
  187617,
  188065,
  188329,
  188457,
  188626,
  189105,
  189337,
  189481,
  189633,
  190201,
  190449,
  190601,
  190753,
  191332,
  191497,
  191649,
  191801,
  192412,
  192536,
  192681,
  192825,
  193652,
  193537,
  193689,
  193905,
  194480,
  194657,
  194785,
  194937,
  195089,
  195433,
  195657,
  195808,
  195945,
  196105,
  196465,
  196720,
  196857,
  197009,
  197481,
  197705,
  197857,
  198009,
  198578,
  198825,
  198968,
  199121,
  199652,
  199625,
  199880,
  200041,
  200201,
  200730,
  200920,
  201073,
  201522,
  201385,
  201752,
  201929,
  202642,
  202712,
  203041,
  203185,
  203346,
  203489,
  203904,
  204152,
  204892,
  204448,
  204913,
  205169,
  206042,
  205473,
  205889,
  206105,
  206562,
  206497,
  206952,
  207208,
  207337,
  207497,
  208033,
  208892,
  208425,
  209064,
  209892,
  209432,
  209593,
  210081,
  210441,
  210576,
  211057,
  211329,
  211472,
  211632,
  211808,
  212572,
  212730,
  213332,
  213393,
  213561,
  213714,
  213857,
  214812,
  214761,
  215822,
  215520,
  215665,
  215808,
  217202,
  216872,
  217353,
  217584,
  217745,
  217889,
  218041,
  218441,
  223048
]