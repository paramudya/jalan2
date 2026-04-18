// KRL station landmarks (dummy/placeholder data — swap for real POIs later)
// Each station maps to an array of nearby landmarks:
//   { name, type, walk_min, meters, lat, lng }
window.KRL_LANDMARKS = {
  "Bogor": [
    {
      "name": "Kafe Bogor Baru",
      "type": "Cafe",
      "walk_min": 4,
      "meters": 320,
      "lat": -6.597523651997935,
      "lng": 106.78787705107442
    },
    {
      "name": "Taman Bogor Indah",
      "type": "Park",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.597652715292684,
      "lng": 106.7950009004773
    },
    {
      "name": "Alun-alun Bogor Utara",
      "type": "Square",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.588340870005163,
      "lng": 106.79215737231398
    }
  ],
  "Cilebut": [
    {
      "name": "Warung Cilebut Utara",
      "type": "Eatery",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.534607906440928,
      "lng": 106.80411738874072
    },
    {
      "name": "Kafe Cilebut Sentosa",
      "type": "Cafe",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.534046673910552,
      "lng": 106.80321968294595
    },
    {
      "name": "Taman Cilebut Timur",
      "type": "Park",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.529471109504912,
      "lng": 106.80327493751683
    }
  ],
  "Bojong Gede": [
    {
      "name": "Taman Bojong Baru",
      "type": "Park",
      "walk_min": 4,
      "meters": 320,
      "lat": -6.493252560159219,
      "lng": 106.80219444721779
    },
    {
      "name": "Alun-alun Bojong Indah",
      "type": "Square",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.491081400398046,
      "lng": 106.81096388195552
    },
    {
      "name": "Sekolah Bojong Utara",
      "type": "School",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.502660919124299,
      "lng": 106.8047
    }
  ],
  "Citayam": [
    {
      "name": "Alun-alun Citayam Timur",
      "type": "Square",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.464094943581169,
      "lng": 106.81368653476828
    },
    {
      "name": "Sekolah Citayam Jaya",
      "type": "School",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.4651029048977495,
      "lng": 106.81437108326645
    },
    {
      "name": "Pasar Citayam Raya",
      "type": "Market",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.467193810942503,
      "lng": 106.81035723375899
    }
  ],
  "Depok": [
    {
      "name": "Kafe Depok Jaya",
      "type": "Cafe",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.40750473816755,
      "lng": 106.81702097442884
    },
    {
      "name": "Taman Depok Raya",
      "type": "Park",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.412322909586213,
      "lng": 106.8290466707775
    },
    {
      "name": "Alun-alun Depok Baru",
      "type": "Square",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.397061769515949,
      "lng": 106.8238457110041
    }
  ],
  "Depok Baru": [
    {
      "name": "Taman Depok Raya",
      "type": "Park",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.3978590966117475,
      "lng": 106.82173507441489
    },
    {
      "name": "Alun-alun Depok Baru",
      "type": "Square",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.386613203853066,
      "lng": 106.81699400758184
    },
    {
      "name": "Sekolah Depok Indah",
      "type": "School",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.394045362124438,
      "lng": 106.82985666635761
    }
  ],
  "Pondok Cina": [
    {
      "name": "Kafe Pondok Raya",
      "type": "Cafe",
      "walk_min": 4,
      "meters": 320,
      "lat": -6.372020297074828,
      "lng": 106.83288927595636
    },
    {
      "name": "Taman Pondok Baru",
      "type": "Park",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.376780816955777,
      "lng": 106.83462050887998
    },
    {
      "name": "Alun-alun Pondok Indah",
      "type": "Square",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.378140965493191,
      "lng": 106.83511514685816
    }
  ],
  "Universitas Indonesia": [
    {
      "name": "Minimart Universitas Raya",
      "type": "Shop",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.361072740555485,
      "lng": 106.83583266060323
    },
    {
      "name": "Warung Universitas Baru",
      "type": "Eatery",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.353437093000509,
      "lng": 106.8327442972462
    },
    {
      "name": "Kafe Universitas Indah",
      "type": "Cafe",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.357928345689098,
      "lng": 106.82272405074326
    }
  ],
  "Universitas Pancasila": [
    {
      "name": "Kafe Universitas Baru",
      "type": "Cafe",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.333835101475884,
      "lng": 106.8321472509028
    },
    {
      "name": "Taman Universitas Indah",
      "type": "Park",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.33602980801342,
      "lng": 106.82600554936032
    },
    {
      "name": "Alun-alun Universitas Utara",
      "type": "Square",
      "walk_min": 14,
      "meters": 1120,
      "lat": -6.344410133397987,
      "lng": 106.82699617324427
    }
  ],
  "Lenteng Agung": [
    {
      "name": "Sekolah Lenteng Jaya",
      "type": "School",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.329896679407226,
      "lng": 106.83120654817893
    },
    {
      "name": "Pasar Lenteng Raya",
      "type": "Market",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.3244015760941386,
      "lng": 106.83956557009807
    },
    {
      "name": "Klinik Lenteng Baru",
      "type": "Clinic",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.3356441886075086,
      "lng": 106.8307311919748
    }
  ],
  "Tanjung Barat": [
    {
      "name": "Minimart Tanjung Timur",
      "type": "Shop",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.303622741483446,
      "lng": 106.84540947390656
    },
    {
      "name": "Warung Tanjung Jaya",
      "type": "Eatery",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.308857057714968,
      "lng": 106.84839796777949
    },
    {
      "name": "Kafe Tanjung Raya",
      "type": "Cafe",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.313850008961317,
      "lng": 106.84218375861987
    }
  ],
  "Pasar Minggu": [
    {
      "name": "Minimart Pasar Utara",
      "type": "Shop",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.279610791632972,
      "lng": 106.84665254603534
    },
    {
      "name": "Warung Pasar Sentosa",
      "type": "Eatery",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.28355814947259,
      "lng": 106.84017434964083
    },
    {
      "name": "Kafe Pasar Timur",
      "type": "Cafe",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.2919790490373355,
      "lng": 106.84279681042925
    }
  ],
  "Pasar Minggu Baru": [
    {
      "name": "Masjid Pasar Sentosa",
      "type": "Mosque",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.267621638545683,
      "lng": 106.84113156559674
    },
    {
      "name": "Minimart Pasar Timur",
      "type": "Shop",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.266480833296028,
      "lng": 106.84924044563627
    },
    {
      "name": "Warung Pasar Jaya",
      "type": "Eatery",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.277155226711988,
      "lng": 106.84908623827492
    }
  ],
  "Duren Kalibata": [
    {
      "name": "Alun-alun Duren Jaya",
      "type": "Square",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.256054081005732,
      "lng": 106.8456543832901
    },
    {
      "name": "Sekolah Duren Raya",
      "type": "School",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.266654380287805,
      "lng": 106.84300834792037
    },
    {
      "name": "Pasar Duren Baru",
      "type": "Market",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.263257797417925,
      "lng": 106.85439083442385
    }
  ],
  "Cawang": [
    {
      "name": "Warung Cawang Timur",
      "type": "Eatery",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.24327172204705,
      "lng": 106.85418326742082
    },
    {
      "name": "Kafe Cawang Jaya",
      "type": "Cafe",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.24570817825292,
      "lng": 106.8623191219764
    },
    {
      "name": "Taman Cawang Raya",
      "type": "Park",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.255123839556884,
      "lng": 106.85889577792301
    }
  ],
  "Tebet": [
    {
      "name": "Klinik Tebet Sentosa",
      "type": "Clinic",
      "walk_min": 4,
      "meters": 320,
      "lat": -6.22428239350644,
      "lng": 106.85544128070393
    },
    {
      "name": "Masjid Tebet Timur",
      "type": "Mosque",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.232620668418363,
      "lng": 106.85507474126983
    },
    {
      "name": "Minimart Tebet Jaya",
      "type": "Shop",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.225243273546829,
      "lng": 106.86441930794035
    }
  ],
  "Manggarai": [
    {
      "name": "Masjid Manggarai Jaya",
      "type": "Mosque",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.215244677612985,
      "lng": 106.8520794708148
    },
    {
      "name": "Minimart Manggarai Raya",
      "type": "Shop",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.219083316332098,
      "lng": 106.8504486056782
    },
    {
      "name": "Warung Manggarai Baru",
      "type": "Eatery",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.218611487539129,
      "lng": 106.84777579520492
    }
  ],
  "Cikini": [
    {
      "name": "Alun-alun Cikini Raya",
      "type": "Square",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.191711122445268,
      "lng": 106.8402990729223
    },
    {
      "name": "Sekolah Cikini Baru",
      "type": "School",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.200610578913249,
      "lng": 106.8477194957181
    },
    {
      "name": "Pasar Cikini Indah",
      "type": "Market",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.202929333787361,
      "lng": 106.83458456049706
    }
  ],
  "Gondangdia": [
    {
      "name": "Sekolah Gondangdia Indah",
      "type": "School",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.181103754895534,
      "lng": 106.83031860872903
    },
    {
      "name": "Pasar Gondangdia Utara",
      "type": "Market",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.1871508369502415,
      "lng": 106.82598614857477
    },
    {
      "name": "Klinik Gondangdia Sentosa",
      "type": "Clinic",
      "walk_min": 14,
      "meters": 1120,
      "lat": -6.195507397650543,
      "lng": 106.83229406453995
    }
  ],
  "Juanda": [
    {
      "name": "Taman Juanda Indah",
      "type": "Park",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.165603209880422,
      "lng": 106.82732589175626
    },
    {
      "name": "Alun-alun Juanda Utara",
      "type": "Square",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.161840903388253,
      "lng": 106.83043518933458
    },
    {
      "name": "Sekolah Juanda Sentosa",
      "type": "School",
      "walk_min": 14,
      "meters": 1120,
      "lat": -6.162300132443384,
      "lng": 106.83971667027802
    }
  ],
  "Sawah Besar": [
    {
      "name": "Minimart Sawah Sentosa",
      "type": "Shop",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.158172740555486,
      "lng": 106.83373097791241
    },
    {
      "name": "Warung Sawah Timur",
      "type": "Eatery",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.151966712454962,
      "lng": 106.83041766599513
    },
    {
      "name": "Kafe Sawah Jaya",
      "type": "Cafe",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.15606577778476,
      "lng": 106.82332670244688
    }
  ],
  "Mangga Besar": [
    {
      "name": "Masjid Mangga Indah",
      "type": "Mosque",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.154473047331292,
      "lng": 106.82572463267684
    },
    {
      "name": "Minimart Mangga Utara",
      "type": "Shop",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.155206005430351,
      "lng": 106.83312105201055
    },
    {
      "name": "Warung Mangga Sentosa",
      "type": "Eatery",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.145875646891075,
      "lng": 106.83654553149967
    }
  ],
  "Jayakarta": [
    {
      "name": "Kafe Jayakarta Baru",
      "type": "Cafe",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.1448217944792045,
      "lng": 106.82766999013559
    },
    {
      "name": "Taman Jayakarta Indah",
      "type": "Park",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.136600071951916,
      "lng": 106.82823346426784
    },
    {
      "name": "Alun-alun Jayakarta Utara",
      "type": "Square",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.139006189057497,
      "lng": 106.81666243350043
    }
  ],
  "Jakarta Kota": [
    {
      "name": "Alun-alun Jakarta Sentosa",
      "type": "Square",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.140721453141303,
      "lng": 106.81507658960446
    },
    {
      "name": "Sekolah Jakarta Timur",
      "type": "School",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.14294136820574,
      "lng": 106.81520074182467
    },
    {
      "name": "Pasar Jakarta Jaya",
      "type": "Market",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.14520157964035,
      "lng": 106.81486894748855
    }
  ],
  "Matraman": [
    {
      "name": "Taman Matraman Raya",
      "type": "Park",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.198340903388253,
      "lng": 106.86166482894811
    },
    {
      "name": "Alun-alun Matraman Baru",
      "type": "Square",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.207899488106862,
      "lng": 106.86503939373117
    },
    {
      "name": "Sekolah Matraman Indah",
      "type": "School",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.202154637875562,
      "lng": 106.85354619952165
    }
  ],
  "Jatinegara": [
    {
      "name": "Masjid Jatinegara Raya",
      "type": "Mosque",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.213196997284824,
      "lng": 106.86798916163501
    },
    {
      "name": "Minimart Jatinegara Baru",
      "type": "Shop",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.220816737095126,
      "lng": 106.87120425643249
    },
    {
      "name": "Warung Jatinegara Indah",
      "type": "Eatery",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.208770925622256,
      "lng": 106.87423318450442
    }
  ],
  "Klender": [
    {
      "name": "Minimart Klender Timur",
      "type": "Shop",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.21614083716656,
      "lng": 106.88875605760353
    },
    {
      "name": "Warung Klender Jaya",
      "type": "Eatery",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.217541423136976,
      "lng": 106.90156803459467
    },
    {
      "name": "Kafe Klender Raya",
      "type": "Cafe",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.224524360133576,
      "lng": 106.8884506238962
    }
  ],
  "Buaran": [
    {
      "name": "Masjid Buaran Utara",
      "type": "Mosque",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.215881951528292,
      "lng": 106.91136308205846
    },
    {
      "name": "Minimart Buaran Sentosa",
      "type": "Shop",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.224726546247747,
      "lng": 106.91822804015813
    },
    {
      "name": "Warung Buaran Timur",
      "type": "Eatery",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.222250737949264,
      "lng": 106.90231288701148
    }
  ],
  "Klender Baru": [
    {
      "name": "Sekolah Klender Raya",
      "type": "School",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.2238017452531285,
      "lng": 106.92013838073078
    },
    {
      "name": "Pasar Klender Baru",
      "type": "Market",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.22602950159408,
      "lng": 106.9242596934349
    },
    {
      "name": "Klinik Klender Indah",
      "type": "Clinic",
      "walk_min": 14,
      "meters": 1120,
      "lat": -6.222979221827982,
      "lng": 106.9318612846189
    }
  ],
  "Cakung": [
    {
      "name": "Sekolah Cakung Jaya",
      "type": "School",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.22156371657286,
      "lng": 106.94389824886002
    },
    {
      "name": "Pasar Cakung Raya",
      "type": "Market",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.221679459308431,
      "lng": 106.93614194275175
    },
    {
      "name": "Klinik Cakung Baru",
      "type": "Clinic",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.211237947691389,
      "lng": 106.94275141652402
    }
  ],
  "Rawa Bebek": [
    {
      "name": "Sekolah Rawa Utara",
      "type": "School",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.219815408105929,
      "lng": 106.96189142509118
    },
    {
      "name": "Pasar Rawa Sentosa",
      "type": "Market",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.230224445803536,
      "lng": 106.95952375992984
    },
    {
      "name": "Klinik Rawa Timur",
      "type": "Clinic",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.2218437060548775,
      "lng": 106.94822508897252
    }
  ],
  "Kranji": [
    {
      "name": "Taman Kranji Timur",
      "type": "Park",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.223056386373513,
      "lng": 106.98190552399335
    },
    {
      "name": "Alun-alun Kranji Jaya",
      "type": "Square",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.2294591628334395,
      "lng": 106.99064400539352
    },
    {
      "name": "Sekolah Kranji Raya",
      "type": "School",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.222428694411714,
      "lng": 106.97802642872712
    }
  ],
  "Bekasi": [
    {
      "name": "Taman Bekasi Indah",
      "type": "Park",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.2372967901195775,
      "lng": 107.00437455043902
    },
    {
      "name": "Alun-alun Bekasi Utara",
      "type": "Square",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.243227280873925,
      "lng": 107.00137835052901
    },
    {
      "name": "Sekolah Bekasi Sentosa",
      "type": "School",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.238957057714967,
      "lng": 106.99520280945309
    }
  ],
  "Bekasi Timur": [
    {
      "name": "Pasar Bekasi Timur",
      "type": "Market",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.241965492281979,
      "lng": 107.0235128485218
    },
    {
      "name": "Klinik Bekasi Jaya",
      "type": "Clinic",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.245689208367028,
      "lng": 107.02105234552954
    },
    {
      "name": "Masjid Bekasi Raya",
      "type": "Mosque",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.247011510458785,
      "lng": 107.01575956808806
    }
  ],
  "Tambun": [
    {
      "name": "Sekolah Tambun Timur",
      "type": "School",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.260836283427139,
      "lng": 107.04450149683906
    },
    {
      "name": "Pasar Tambun Jaya",
      "type": "Market",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.260720540691568,
      "lng": 107.05225843957656
    },
    {
      "name": "Klinik Tambun Raya",
      "type": "Clinic",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.271867223334328,
      "lng": 107.04548579191464
    }
  ],
  "Cibitung": [
    {
      "name": "Taman Cibitung Timur",
      "type": "Park",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.274678253759715,
      "lng": 107.08020454399387
    },
    {
      "name": "Alun-alun Cibitung Jaya",
      "type": "Square",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.270883357685057,
      "lng": 107.08944183014066
    },
    {
      "name": "Sekolah Cibitung Raya",
      "type": "School",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.264851608292467,
      "lng": 107.07821776050085
    }
  ],
  "Metland Telagamurni": [
    {
      "name": "Taman Metland Baru",
      "type": "Park",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.279905755229392,
      "lng": 107.10997031782962
    },
    {
      "name": "Alun-alun Metland Indah",
      "type": "Square",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.281442631491651,
      "lng": 107.11387280869813
    },
    {
      "name": "Sekolah Metland Utara",
      "type": "School",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.279283701054822,
      "lng": 107.11675116916324
    }
  ],
  "Cikarang": [
    {
      "name": "Minimart Cikarang Sentosa",
      "type": "Shop",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.259805578894991,
      "lng": 107.15212356350378
    },
    {
      "name": "Warung Cikarang Timur",
      "type": "Eatery",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.2498739794228335,
      "lng": 107.14380068954962
    },
    {
      "name": "Kafe Cikarang Jaya",
      "type": "Cafe",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.263511510458785,
      "lng": 107.15184052463108
    }
  ],
  "Pondok Jati": [
    {
      "name": "Alun-alun Pondok Baru",
      "type": "Square",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.200254081005731,
      "lng": 106.86225470718196
    },
    {
      "name": "Sekolah Pondok Indah",
      "type": "School",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.210308181930487,
      "lng": 106.86008320710904
    },
    {
      "name": "Pasar Pondok Utara",
      "type": "Market",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.208861262937002,
      "lng": 106.87351921998638
    }
  ],
  "Kramat": [
    {
      "name": "Alun-alun Kramat Sentosa",
      "type": "Square",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.188805056418832,
      "lng": 106.85981078163911
    },
    {
      "name": "Sekolah Kramat Timur",
      "type": "School",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.187746610952627,
      "lng": 106.85984769949134
    },
    {
      "name": "Pasar Kramat Jaya",
      "type": "Market",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.1863046417931224,
      "lng": 106.86105372541262
    }
  ],
  "Gang Sentiong": [
    {
      "name": "Sekolah Gang Sentosa",
      "type": "School",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.177873338476211,
      "lng": 106.84697871633335
    },
    {
      "name": "Pasar Gang Timur",
      "type": "Market",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.170836516299535,
      "lng": 106.85160508078765
    },
    {
      "name": "Klinik Gang Jaya",
      "type": "Clinic",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.1773989956597095,
      "lng": 106.859416527826
    }
  ],
  "Pasar Senen": [
    {
      "name": "Kafe Pasar Raya",
      "type": "Cafe",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.170121578809704,
      "lng": 106.84319620986652
    },
    {
      "name": "Taman Pasar Baru",
      "type": "Park",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.178501231213015,
      "lng": 106.83593432897825
    },
    {
      "name": "Alun-alun Pasar Indah",
      "type": "Square",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.173271653007323,
      "lng": 106.85159120823631
    }
  ],
  "Kemayoran": [
    {
      "name": "Sekolah Kemayoran Utara",
      "type": "School",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.166098423905861,
      "lng": 106.83793581298465
    },
    {
      "name": "Pasar Kemayoran Sentosa",
      "type": "Market",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.160997587526867,
      "lng": 106.83666560327799
    },
    {
      "name": "Klinik Kemayoran Timur",
      "type": "Clinic",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.153639559909621,
      "lng": 106.83862840417895
    }
  ],
  "Rajawali": [
    {
      "name": "Sekolah Rajawali Baru",
      "type": "School",
      "walk_min": 4,
      "meters": 320,
      "lat": -6.143047694611188,
      "lng": 106.8364801970085
    },
    {
      "name": "Pasar Rajawali Indah",
      "type": "Market",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.13681130647163,
      "lng": 106.83303303467933
    },
    {
      "name": "Klinik Rajawali Utara",
      "type": "Clinic",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.143867687124827,
      "lng": 106.8271195567309
    }
  ],
  "Kampung Bandan": [
    {
      "name": "Masjid Kampung Raya",
      "type": "Mosque",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.129481166588065,
      "lng": 106.81656162120113
    },
    {
      "name": "Minimart Kampung Baru",
      "type": "Shop",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.128075783925184,
      "lng": 106.82573601335334
    },
    {
      "name": "Warung Kampung Indah",
      "type": "Eatery",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.1258794185705705,
      "lng": 106.81524939147808
    }
  ],
  "Angke": [
    {
      "name": "Pasar Angke Baru",
      "type": "Market",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.144072491426181,
      "lng": 106.80372426985808
    },
    {
      "name": "Klinik Angke Indah",
      "type": "Clinic",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.139920950962665,
      "lng": 106.80310279557449
    },
    {
      "name": "Masjid Angke Utara",
      "type": "Mosque",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.139213046058932,
      "lng": 106.79994692486805
    }
  ],
  "Duri": [
    {
      "name": "Alun-alun Duri Indah",
      "type": "Square",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.16586480434428,
      "lng": 106.79648306992203
    },
    {
      "name": "Sekolah Duri Utara",
      "type": "School",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.164411102539648,
      "lng": 106.79379808566412
    },
    {
      "name": "Pasar Duri Sentosa",
      "type": "Market",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.161396910468297,
      "lng": 106.79183138695922
    }
  ],
  "Karet": [
    {
      "name": "Klinik Karet Sentosa",
      "type": "Clinic",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.20346331389482,
      "lng": 106.81582285047377
    },
    {
      "name": "Masjid Karet Timur",
      "type": "Mosque",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.199628553625663,
      "lng": 106.82205756503097
    },
    {
      "name": "Minimart Karet Jaya",
      "type": "Shop",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.1901166836679025,
      "lng": 106.81764860901042
    }
  ],
  "Sudirman": [
    {
      "name": "Sekolah Sudirman Sentosa",
      "type": "School",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.199702873804441,
      "lng": 106.82110528465809
    },
    {
      "name": "Pasar Sudirman Timur",
      "type": "Market",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.199330413141465,
      "lng": 106.81900597312554
    },
    {
      "name": "Klinik Sudirman Jaya",
      "type": "Clinic",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.198854336910562,
      "lng": 106.81474479779948
    }
  ],
  "Tanah Abang": [
    {
      "name": "Minimart Tanah Sentosa",
      "type": "Shop",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.181651261823327,
      "lng": 106.81485587591192
    },
    {
      "name": "Warung Tanah Timur",
      "type": "Eatery",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.180181522182188,
      "lng": 106.81119536105037
    },
    {
      "name": "Kafe Tanah Jaya",
      "type": "Cafe",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.179979127856958,
      "lng": 106.80479704203337
    }
  ],
  "Palmerah": [
    {
      "name": "Sekolah Palmerah Indah",
      "type": "School",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.204973871447511,
      "lng": 106.80042479485503
    },
    {
      "name": "Pasar Palmerah Utara",
      "type": "Market",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.208444674354126,
      "lng": 106.79086758654094
    },
    {
      "name": "Klinik Palmerah Sentosa",
      "type": "Clinic",
      "walk_min": 14,
      "meters": 1120,
      "lat": -6.2188311128408635,
      "lng": 106.80124835889829
    }
  ],
  "Kebayoran": [
    {
      "name": "Minimart Kebayoran Baru",
      "type": "Shop",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.246055334326135,
      "lng": 106.78375214442418
    },
    {
      "name": "Warung Kebayoran Indah",
      "type": "Eatery",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.2451985120033475,
      "lng": 106.77972549205683
    },
    {
      "name": "Kafe Kebayoran Utara",
      "type": "Cafe",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.241856493311147,
      "lng": 106.77551026709793
    }
  ],
  "Pondok Ranji": [
    {
      "name": "Warung Pondok Timur",
      "type": "Eatery",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.281806931038155,
      "lng": 106.74635870281318
    },
    {
      "name": "Kafe Pondok Jaya",
      "type": "Cafe",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.284226546247747,
      "lng": 106.73437117195895
    },
    {
      "name": "Taman Pondok Raya",
      "type": "Park",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.269832776665671,
      "lng": 106.7391857258206
    }
  ],
  "Jurangmangu": [
    {
      "name": "Klinik Jurangmangu Baru",
      "type": "Clinic",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.287863313894819,
      "lng": 106.71802253194524
    },
    {
      "name": "Masjid Jurangmangu Indah",
      "type": "Mosque",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.284719014980381,
      "lng": 106.72780679340038
    },
    {
      "name": "Minimart Jurangmangu Utara",
      "type": "Shop",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.274516683667902,
      "lng": 106.71984858462058
    }
  ],
  "Sudimara": [
    {
      "name": "Warung Sudimara Raya",
      "type": "Eatery",
      "walk_min": 4,
      "meters": 320,
      "lat": -6.283990107163599,
      "lng": 106.70951755952477
    },
    {
      "name": "Kafe Sudimara Baru",
      "type": "Cafe",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.291552699863323,
      "lng": 106.7083065541074
    },
    {
      "name": "Taman Sudimara Indah",
      "type": "Park",
      "walk_min": 14,
      "meters": 1120,
      "lat": -6.289512774767948,
      "lng": 106.69904618812195
    }
  ],
  "Rawa Buntu": [
    {
      "name": "Klinik Rawa Utara",
      "type": "Clinic",
      "walk_min": 4,
      "meters": 320,
      "lat": -6.322347694611189,
      "lng": 106.66121881842882
    },
    {
      "name": "Masjid Rawa Sentosa",
      "type": "Mosque",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.325658572547427,
      "lng": 106.65754697050981
    },
    {
      "name": "Minimart Rawa Timur",
      "type": "Shop",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.32971403982737,
      "lng": 106.65912332868893
    }
  ],
  "Serpong": [
    {
      "name": "Sekolah Serpong Indah",
      "type": "School",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.34077565580031,
      "lng": 106.66409649275137
    },
    {
      "name": "Pasar Serpong Utara",
      "type": "Market",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.328862506993621,
      "lng": 106.66066834372434
    },
    {
      "name": "Klinik Serpong Sentosa",
      "type": "Clinic",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.338524433301543,
      "lng": 106.67321537439246
    }
  ],
  "Cisauk": [
    {
      "name": "Alun-alun Cisauk Indah",
      "type": "Square",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.328205056418831,
      "lng": 106.64271211864867
    },
    {
      "name": "Sekolah Cisauk Utara",
      "type": "School",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.327096126803001,
      "lng": 106.64347033868751
    },
    {
      "name": "Pasar Cisauk Sentosa",
      "type": "Market",
      "walk_min": 14,
      "meters": 1120,
      "lat": -6.324707220567079,
      "lng": 106.64743061300179
    }
  ],
  "Cicayur": [
    {
      "name": "Pasar Cicayur Jaya",
      "type": "Market",
      "walk_min": 4,
      "meters": 320,
      "lat": -6.348,
      "lng": 106.61900767042992
    },
    {
      "name": "Klinik Cicayur Raya",
      "type": "Clinic",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.35364083852655,
      "lng": 106.61864612923367
    },
    {
      "name": "Masjid Cicayur Baru",
      "type": "Mosque",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.354894358199116,
      "lng": 106.62587695315885
    }
  ],
  "Parung Panjang": [
    {
      "name": "Klinik Parung Jaya",
      "type": "Clinic",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.339702850022097,
      "lng": 106.56300391322713
    },
    {
      "name": "Masjid Parung Raya",
      "type": "Mosque",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.340800053963937,
      "lng": 106.56247396169806
    },
    {
      "name": "Minimart Parung Baru",
      "type": "Shop",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.339875357094893,
      "lng": 106.56021875521783
    }
  ],
  "Cilejit": [
    {
      "name": "Taman Cilejit Timur",
      "type": "Park",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.3401971810060385,
      "lng": 106.50525636897892
    },
    {
      "name": "Alun-alun Cilejit Jaya",
      "type": "Square",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.338156365890532,
      "lng": 106.50289440209856
    },
    {
      "name": "Sekolah Cilejit Raya",
      "type": "School",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.335569905352052,
      "lng": 106.50189528455837
    }
  ],
  "Daru": [
    {
      "name": "Minimart Daru Indah",
      "type": "Shop",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.338478246655573,
      "lng": 106.47979553729618
    },
    {
      "name": "Warung Daru Utara",
      "type": "Eatery",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.335863582454316,
      "lng": 106.48307679012606
    },
    {
      "name": "Kafe Daru Sentosa",
      "type": "Cafe",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.332288842210019,
      "lng": 106.48264813540796
    }
  ],
  "Tenjo": [
    {
      "name": "Klinik Tenjo Jaya",
      "type": "Clinic",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.352201078766346,
      "lng": 106.44927926545346
    },
    {
      "name": "Masjid Tenjo Raya",
      "type": "Mosque",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.351096905471252,
      "lng": 106.44142955617066
    },
    {
      "name": "Minimart Tenjo Baru",
      "type": "Shop",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.344045723599281,
      "lng": 106.44845281664475
    }
  ],
  "Tigaraksa": [
    {
      "name": "Warung Tigaraksa Sentosa",
      "type": "Eatery",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.353393068961846,
      "lng": 106.42994054251031
    },
    {
      "name": "Kafe Tigaraksa Timur",
      "type": "Cafe",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.353586726876126,
      "lng": 106.43846493085498
    },
    {
      "name": "Taman Tigaraksa Jaya",
      "type": "Park",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.365367223334329,
      "lng": 106.43711458959484
    }
  ],
  "Cikoya": [
    {
      "name": "Klinik Cikoya Utara",
      "type": "Clinic",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.360002850022097,
      "lng": 106.41960383841221
    },
    {
      "name": "Masjid Cikoya Sentosa",
      "type": "Mosque",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.3581000989338845,
      "lng": 106.41705208761637
    },
    {
      "name": "Minimart Cikoya Timur",
      "type": "Shop",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.359672618994326,
      "lng": 106.41629841167493
    }
  ],
  "Maja": [
    {
      "name": "Alun-alun Maja Utara",
      "type": "Square",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.365969571361199,
      "lng": 106.39114905749811
    },
    {
      "name": "Sekolah Maja Sentosa",
      "type": "School",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.370903490506257,
      "lng": 106.39072427055495
    },
    {
      "name": "Pasar Maja Timur",
      "type": "Market",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.373225077764698,
      "lng": 106.3853442987436
    }
  ],
  "Citeras": [
    {
      "name": "Warung Citeras Indah",
      "type": "Eatery",
      "walk_min": 4,
      "meters": 320,
      "lat": -6.3742236519979345,
      "lng": 106.33052240741365
    },
    {
      "name": "Kafe Citeras Utara",
      "type": "Cafe",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.374505760849978,
      "lng": 106.33344639129295
    },
    {
      "name": "Taman Citeras Sentosa",
      "type": "Park",
      "walk_min": 14,
      "meters": 1120,
      "lat": -6.372483068860841,
      "lng": 106.33938509482715
    }
  ],
  "Rangkasbitung": [
    {
      "name": "Pasar Rangkasbitung Baru",
      "type": "Market",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.349570208722438,
      "lng": 106.24915931666966
    },
    {
      "name": "Klinik Rangkasbitung Indah",
      "type": "Clinic",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.347941957544458,
      "lng": 106.24989533177441
    },
    {
      "name": "Masjid Rangkasbitung Utara",
      "type": "Mosque",
      "walk_min": 13,
      "meters": 1040,
      "lat": -6.344343181009743,
      "lng": 106.25148258586658
    }
  ],
  "Grogol": [
    {
      "name": "Minimart Grogol Sentosa",
      "type": "Shop",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.170855334326134,
      "lng": 106.79155199433288
    },
    {
      "name": "Warung Grogol Timur",
      "type": "Eatery",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.171169515432874,
      "lng": 106.78667617820099
    },
    {
      "name": "Kafe Grogol Jaya",
      "type": "Cafe",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.166580843980031,
      "lng": 106.78403016345976
    }
  ],
  "Pesing": [
    {
      "name": "Klinik Pesing Jaya",
      "type": "Clinic",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.169982495803827,
      "lng": 106.76520174752916
    },
    {
      "name": "Masjid Pesing Raya",
      "type": "Mosque",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.173952526618651,
      "lng": 106.7696916315198
    },
    {
      "name": "Minimart Pesing Baru",
      "type": "Shop",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.169789837246014,
      "lng": 106.77464643831873
    }
  ],
  "Bojong Indah": [
    {
      "name": "Kafe Bojong Indah",
      "type": "Cafe",
      "walk_min": 5,
      "meters": 400,
      "lat": -6.165554331898847,
      "lng": 106.74393900365465
    },
    {
      "name": "Taman Bojong Utara",
      "type": "Park",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.15733507120335,
      "lng": 106.74789281473164
    },
    {
      "name": "Alun-alun Bojong Sentosa",
      "type": "Square",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.168735757988511,
      "lng": 106.75238642645282
    }
  ],
  "Rawa Buaya": [
    {
      "name": "Minimart Rawa Sentosa",
      "type": "Shop",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.159951261823327,
      "lng": 106.73405576298649
    },
    {
      "name": "Warung Rawa Timur",
      "type": "Eatery",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.158481522182188,
      "lng": 106.73039539811907
    },
    {
      "name": "Kafe Rawa Jaya",
      "type": "Cafe",
      "walk_min": 14,
      "meters": 1120,
      "lat": -6.157823676153647,
      "lng": 106.72343559830277
    }
  ],
  "Kalideres": [
    {
      "name": "Minimart Kalideres Sentosa",
      "type": "Shop",
      "walk_min": 6,
      "meters": 480,
      "lat": -6.162105578894991,
      "lng": 106.70542296563654
    },
    {
      "name": "Warung Kalideres Timur",
      "type": "Eatery",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.152173979422834,
      "lng": 106.69710163530755
    },
    {
      "name": "Kafe Kalideres Jaya",
      "type": "Cafe",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.166472661504663,
      "lng": 106.70543397718428
    }
  ],
  "Poris": [
    {
      "name": "Pasar Poris Timur",
      "type": "Market",
      "walk_min": 4,
      "meters": 320,
      "lat": -6.161353010946447,
      "lng": 106.66984446366595
    },
    {
      "name": "Klinik Poris Jaya",
      "type": "Clinic",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.16208881250898,
      "lng": 106.67268738128341
    },
    {
      "name": "Masjid Poris Raya",
      "type": "Mosque",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.16546043748589,
      "lng": 106.67548017058822
    }
  ],
  "Batu Ceper": [
    {
      "name": "Pasar Batu Baru",
      "type": "Market",
      "walk_min": 4,
      "meters": 320,
      "lat": -6.165153010946447,
      "lng": 106.65404447831314
    },
    {
      "name": "Klinik Batu Indah",
      "type": "Clinic",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.165514187511545,
      "lng": 106.65828382095478
    },
    {
      "name": "Masjid Batu Utara",
      "type": "Mosque",
      "walk_min": 14,
      "meters": 1120,
      "lat": -6.169822374982042,
      "lng": 106.66177483259632
    }
  ],
  "Tangerang": [
    {
      "name": "Masjid Tangerang Timur",
      "type": "Mosque",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.183674325026087,
      "lng": 106.62591731164274
    },
    {
      "name": "Minimart Tangerang Jaya",
      "type": "Shop",
      "walk_min": 12,
      "meters": 960,
      "lat": -6.175660857277602,
      "lng": 106.63609514713917
    },
    {
      "name": "Warung Tangerang Raya",
      "type": "Eatery",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.17428009031419,
      "lng": 106.62260437667089
    }
  ],
  "Ancol": [
    {
      "name": "Sekolah Ancol Raya",
      "type": "School",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.12296038908601,
      "lng": 106.82987025663853
    },
    {
      "name": "Pasar Ancol Baru",
      "type": "Market",
      "walk_min": 8,
      "meters": 640,
      "lat": -6.121118053483423,
      "lng": 106.8298436961854
    },
    {
      "name": "Klinik Ancol Indah",
      "type": "Clinic",
      "walk_min": 9,
      "meters": 720,
      "lat": -6.1191842147841475,
      "lng": 106.83053236012563
    }
  ],
  "Tanjung Priok": [
    {
      "name": "Pasar Tanjung Indah",
      "type": "Market",
      "walk_min": 7,
      "meters": 560,
      "lat": -6.104334507718021,
      "lng": 106.87558837332328
    },
    {
      "name": "Klinik Tanjung Utara",
      "type": "Clinic",
      "walk_min": 10,
      "meters": 800,
      "lat": -6.099288489541215,
      "lng": 106.87746031457993
    },
    {
      "name": "Masjid Tanjung Sentosa",
      "type": "Mosque",
      "walk_min": 11,
      "meters": 880,
      "lat": -6.098627338495337,
      "lng": 106.88363365396206
    }
  ]
};
