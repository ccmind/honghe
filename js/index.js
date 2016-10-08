var currentMapMenu = "food";
$(function() {
    initBarChart('map_chart', currentMapMenu);

    initOnePie('onepie', 1, 30);
    initOnePie('twopie', 2, 60);
    initOnePie('threepie', 3, 90);

    $("#mapContentDiv").show(50);
})

function showMapDiv(obj) {
    //石屏 红河  绿春  建水  元阳  泸西  弥勒  开远  个旧  蒙自  金平  屏边  河口
    var name = $(obj).attr("namex");
    if (name == undefined) {
        return;
    }
    var mapConHtml = "";
    if (name == "shiping") {
        $("#mapContentDiv").css("right", "200px");
        $("#mapContentDiv").css("top", "50px");
        if (currentMapMenu == "food") {
            mapConHtml = "<h4 style='align:center'>石屏美食Top5</h4><p>1.石屏豆腐   53.4<br />2. 石屏豆腐皮    49.7<br />3.  杨梅           36.7<br />4.  八面煎鱼       30.2<br />5.花豆叶         28.43<br /></p>";

        } else if (currentMapMenu == "hotel") {
            mapConHtml = "<h4 style='align:center'>石屏酒店Top5</h4><p>1.石屏天逸酒店        986.42<br />2. 石屏建源酒店        786.1<br />3.  石屏天源酒店        746.15<br />4.  石屏名典假日酒店    705.6<br />5.  石屏红琪宾馆        642.1<br /></p>";

        } else if (currentMapMenu == "car") {
            mapConHtml = "<h4 style='align:center'>石屏租车Top5</h4><p>1.济源汽车租赁公司        74万<br />2.  顺和租车公司            67万<br />3.  龙彪自驾租车公司        62.1万<br />4. 石屏四代租车公司          59.8万<br />5.  ......<br /></p>";

        } else if (currentMapMenu == "income") {
            mapConHtml = "<h4 style='align:center'>石屏景区收入排行Top5</h4><p>宝秀郑营古村：2600万<br />2. 石屏古城：2020万<br />3. 异龙湖：1864万<br />4. 秀山风景区: 1500万<br />5.  焕文公园：1063万<br /></p>";


        } else if (currentMapMenu == "play") {
            mapConHtml = "<h4 style='align:center'>石屏娱乐场所排行Top5</h4><p>1.千百度酒吧：年收入2700万元<br />2. 黄金海岸娱乐会所：年收入2500万元<br />3.  天湖娱乐会所：年收入2300万元<br />4.  明星量贩KTV：年收入2100万元<br />5.  蓝景KTV：年收入1800万元<br /></p>";

        } else if (currentMapMenu == "special") {
            mapConHtml = "<h4 style='align:center'>石屏特产消费排行Top5</h4><p>1.石屏豆腐：年收入9.26亿<br />2.  杨梅：年收入2.7亿元<br />3.  石屏碰柑：年收入1100万元<br />4. 荔枝酥：年收入1000万元<br />5.  那刀辣：年收入800万元<br /></p>";

        }

    } else if (name == "honghe") {
        $("#mapContentDiv").css("right", "200px");
        $("#mapContentDiv").css("top", "50px");

        if (currentMapMenu == "food") {
            mapConHtml = "<h4 style='align:center'>红河美食Top5</h4><p>1.竹筒饭         84<br />2.     炸知了         79<br />3.酸汤猪脚       68  <br />4.炸蚂蚱         60.33 <br />5.  手抓饭         51<br /></p>";

        } else if (currentMapMenu == "hotel") {
            mapConHtml = "<h4 style='align:center'>红河酒店Top5</h4><p>1.红河云梯酒店         756.49<br />2.    红河宏馨宾馆         730.1         <br />3.红河同心大酒店       642.16 <br />4.河县马帮客栈       522  <br />5.  红河吉奥宾馆         512.11<br /></p>";

        } else if (currentMapMenu == "car") {
            mapConHtml = "<h4 style='align:center'>红河租车Top5</h4><p>1.云南帝庆汽车销售有限公司蒙自分公司  120.5万<br />2.  红河州哈尼梯田旅游汽车服务有限公司 109.51万<br />3.  蒙自顺安汽车租赁有限公司 86万<br />4. 蒙自西部兴蒙汽车租赁有限公司  79万<br />5.  蒙自好兄弟汽车租赁有限公司   76.3万<br /></p>";

        } else if (currentMapMenu == "income") {
            mapConHtml = "<h4 style='align:center'>红河景区收入排行Top5</h4><p>1.撒玛坝梯田景区：500万<br />2.  马帮城楼景区：438万<br />3. 迤撒镇：400万<br />4. 作夫村：320万<br />5. 十二龙泉：240万<br /></p>";

        } else if (currentMapMenu == "play") {
            mapConHtml = "<h4 style='align:center'>红河娱乐场所排行Top5</h4><p>1.歌王娱乐会所：年收入2100万元<br />2.  红都KTV：年收入2000万元<br />3.  移动人网吧会所：年收入1600万元<br />4.  撒玛坝梯田山庄：年收入1500万元<br />5.  健康保健按摩足疗：年收入1300万元<br /></p>";

        } else if (currentMapMenu == "special") {
            mapConHtml = "<h4 style='align:center'>红河特产消费排行Top5</h4><p>1.红米：年收入8.4亿元<br />2. 棕片：年收入3.5亿元<br />3. 小黄牛干巴：年收入5000万元 <br />4.   蜜多萝：年收入5000万元<br />5. 葛根粉：年收入352万元<br /></p>";

        }
    } else if (name == "lvchun") {
        $("#mapContentDiv").css("right", "200px");
        $("#mapContentDiv").css("top", "50px");

        if (currentMapMenu == "food") {
            mapConHtml = "<h4 style='align:center'>绿春美食Top5</h4><p>1.哈尼糯米粑粑       75<br />2. 绿春玛玉茶         71.32<br />3.  哈尼族石蹦炖蛋     65<br />4.  哈尼竹筒鸡         59.34<br />5. 哈尼豆豉           48.2<br /></p>";

        } else if (currentMapMenu == "hotel") {
            mapConHtml = "<h4 style='align:center'>绿春酒店Top5</h4><p>1.绿春和谐酒店                    542.2<br />2.  绿春东仰大酒店                 503.21<br />3.  绿春梯田时光酒店                423.1<br />4.  绿春绿洲宾馆                   324.15<br />5.  绿春赢融印象酒店      210.04<br /></p>";

        } else if (currentMapMenu == "car") {
            mapConHtml = "<h4 style='align:center'>绿春租车Top5</h4><p>1.云南帝庆汽车销售有限公司蒙自分公司  120.5万<br />2.  红河州哈尼梯田旅游汽车服务有限公司 109.51万<br />3.  蒙自顺安汽车租赁有限公司 86万<br />4. 蒙自西部兴蒙汽车租赁有限公司  79万<br />5.  蒙自好兄弟汽车租赁有限公司   76.3万<br /></p>";

        } else if (currentMapMenu == "income") {
            mapConHtml = "<h4 style='align:center'>绿春景区收入排行Top5</h4><p>1.东仰风情园：500万<br />2.  春县博物馆 ：350万 <br />3. 水源林（基本没收入）：306万<br />4.  黄连山：287万<br />5.  宋壁石林溶洞群：260万<br /></p>";

        } else if (currentMapMenu == "play") {
            mapConHtml = "<h4 style='align:center'>绿春娱乐场所排行Top5</h4><p>1.凡人歌KTV：年收入2300万元<br />2.  东仰娱乐会所：年收入2100万元<br />3.  二两歌厅：年收入2000万元<br />4.  新天地网吧：年收入1700万元<br />5.  夜未央休闲会所：年收入1400万元<br /></p>";

        } else if (currentMapMenu == "special") {
            mapConHtml = "<h4 style='align:center'>绿春特产消费排行Top5</h4><p>1.竹笋：年收入4000万元<br />2. 绞股蓝、年收入3100万<br />3.  黑木耳：年收入3000万元<br />4.  玛玉茶：年收入2300万元<br />5.  胡椒：年收入1600万元<br /></p>";

        }
    } else if (name == "jianshui") {
        $("#mapContentDiv").css("right", "200px");
        $("#mapContentDiv").css("top", "50px");

        if (currentMapMenu == "food") {
            mapConHtml = "<h4 style='align:center'>建水美食Top5</h4><p>1.汽锅鸡         109.6<br />2.  烧豆腐          95<br />3.  草芽           89.7<br />4. 燕窝酥         70.1<br />5. 狮子糕         62.3<br /></p>";

        } else if (currentMapMenu == "hotel") {
            mapConHtml = "<h4 style='align:center'>建水酒店Top5</h4><p>1.建水听紫云度假酒店     852.2<br />2.  建水临安酒店           726.44<br />3. 建水临安客栈           683.41<br />4.  建水福源大酒店         677.11<br />5.  建水同心大酒店         567.9<br /></p>";

        } else if (currentMapMenu == "car") {
            mapConHtml = "<h4 style='align:center'>建水租车Top5</h4><p>1.建水县安安租车公司         85万<br />2.  建水县到处跑租车公司         80.7万<br />3.建水商务旅游汽车租赁公司      75.9万  <br />4.建水明光租车公司             69万<br />5. ...... <br /></p>";

        } else if (currentMapMenu == "income") {
            mapConHtml = "<h4 style='align:center'>建水景区收入排行Top5</h4><p>1.建水朱家花园：6212.09万元<br />2. 燕子洞：6193万元<br />3. 文庙旅游区：4326万元<br />4.  团山古村：3220万元<br />5. 学政考棚：1090万元<br /></p>";

        } else if (currentMapMenu == "play") {
            mapConHtml = "<h4 style='align:center'>建水娱乐场所排行Top5</h4><p>1.锦秀缘私人会所：年收入3400万元<br />2. 天上人间娱乐会所：年收入3000万元<br />3. 牧歌KTV：年收入2900万元<br />4. 喜临门量贩KTV：年收入2800万元<br />5.  东方公主：年收入2500万元<br /></p>";

        } else if (currentMapMenu == "special") {
            mapConHtml = "<h4 style='align:center'>建水特产消费排行Top5</h4><p>1.紫陶：年收入2.3亿元<br />2.酸甜石榴：年收入2亿元<br />3. 普雄水泡梨：年收入6000万元<br />4. 燕窝酥：年收入4000万元<br />5. 狮子糕：年收入1000万元<br /></p>";

        }
    } else if (name == "yuanyang") {
        $("#mapContentDiv").css("right", "200px");
        $("#mapContentDiv").css("top", "50px");

        if (currentMapMenu == "food") {
            mapConHtml = "<h4 style='align:center'>元阳美食Top5</h4><p>1.红米           147<br />2.  牛干巴         120.3<br />3.  香蕉           106.3<br />4. 哈尼蘸水       86.4<br />5.    烧黄鳝         80<br /></p>";

        } else if (currentMapMenu == "hotel") {
            mapConHtml = "<h4 style='align:center'>元阳酒店Top5</h4><p>1.元阳云上天上多依树景观客栈      846.1<br />2.  花窝窝客栈                       720<br />3. 元阳听山小舍客栈               645.22<br />4.  元阳天宇大酒店                 621.16<br />5. 元阳红琪民宿                  465.54<br /></p>";

        } else if (currentMapMenu == "car") {
            mapConHtml = "<h4 style='align:center'>元阳租车Top5</h4><p>1.能投源汽车租赁有限公司    113万<br />2.  元阳县顺达汽车租赁有限公司   108万<br />3.  莱恩租车公司                 96.3万<br />4.  茂源汽车出租公司             90万<br />5.  元阳县至尊租车公司           86万<br /></p>";

        } else if (currentMapMenu == "income") {
            mapConHtml = "<h4 style='align:center'>元阳景区收入排行Top5</h4><p>1.元阳哈尼梯田：11027.51万元<br />2.  老虎嘴梯田景区：368万<br />3. 多依树：100万<br />4.  坝达景区：89万<br />5.  箐口（村落）：60万2<br /></p>";

        } else if (currentMapMenu == "play") {
            mapConHtml = "<h4 style='align:center'>元阳娱乐场所排行Top5</h4><p>1.皇室养生会所：年收入2300万元<br />2. 云梯顺捷康体中心：年收入2000万元<br />3.  东方银座壹号店：年收入1800万元<br />4. 盛世王朝KTV：年收入1700万元<br />5.  水玲珑量贩KTV：年收入1500万元<br /></p>";

        } else if (currentMapMenu == "special") {
            mapConHtml = "<h4 style='align:center'>元阳特产消费排行Top5</h4><p>1.梯田牌干巴：年收入5000万元<br />2.  云雾茶：年收入3000万元<br />3. 飘香豆豉：年收入1800万元<br />4.  紫山药：年收入400万元<br />5.  元阳鲁沙梨：年收入200万元<br /></p>";

        }
    } else if (name == "luxi") {
        $("#mapContentDiv").css("right", "200px");
        $("#mapContentDiv").css("top", "50px");

        if (currentMapMenu == "food") {
            mapConHtml = "<h4 style='align:center'>泸西美食Top5</h4><p>1.洋芋片        54<br />2. 青玉米粑粑     46.7<br />3.  葱花粑粑       42.1<br />4.  豆沙油粽       38.4<br />5. 泸西酸辣椒     26.9<br /></p>";

        } else if (currentMapMenu == "hotel") {
            mapConHtml = "<h4 style='align:center'>泸西酒店Top5</h4><p>1.泸西红木酒店            809.3<br />2.  泸西皇朝大酒店          723.14<br />3.  泸西雅致酒店            672.1<br />4. 泸西宏夤宾馆            503.19<br />5.  泸西钱隆商务宾馆        486.00<br /></p>";

        } else if (currentMapMenu == "car") {
            mapConHtml = "<h4 style='align:center'>泸西租车Top5</h4><p>1.金昆租车有限责任公司    75万<br />2. 泸西县丰达租赁有限公司   63万<br />3.  泸西县顺风租赁有限公司    60.2万<br />4.  泸西金鹏汽车租赁有限公司   49万<br />5. 泸西大众租车企业           46.8万<br /></p>";

        } else if (currentMapMenu == "income") {
            mapConHtml = "<h4 style='align:center'>泸西景区收入排行Top5</h4><p>1.泸西阿庐古洞：16989.92万元<br />2. 城子村：1109.5万<br />3.  阿庐古洞国家地质公园：700万<br />4.  钟秀公园：533.6万<br />5.  阿拉湖风景区：481.4万<br /></p>";

        } else if (currentMapMenu == "play") {
            mapConHtml = "<h4 style='align:center'>泸西娱乐场所排行Top5</h4><p>1.金色年华娱乐会所会所：年收入4000万元<br />2. 金利商务会所KTV：年收入3300万元<br />3.  北冰洋KTV茶影吧：年收入3000万元<br />4. 凯斯时尚娱乐会所：年收入2800万元<br />5. 新视听量贩KTV：年收入2500万元<br /></p>";

        } else if (currentMapMenu == "special") {
            mapConHtml = "<h4 style='align:center'>泸西特产消费排行Top5</h4><p>1.灯盏花：年收入4亿元<br />2.  泸西高原梨：年收入2.61亿元<br />3. 荞酒：年收入2500万元<br />4. 荞：年收入1900万元<br />5. 松子酒：年收入1000万元<br /></p>";

        }
    } else if (name == "mile") {
        $("#mapContentDiv").css("right", "200px");
        $("#mapContentDiv").css("top", "50px");
        mapConHtml = "";

        if (currentMapMenu == "food") {
            mapConHtml = "<h4 style='align:center'>弥勒美食Top5</h4><p>1.卤鸡          126.34<br />2.  羊汤锅         106.57<br />3. 红酒           103.4<br />4.  弥勒传统菜      85.7<br />5.  冬瓜糖          72.9<br /></p>";

        } else if (currentMapMenu == "hotel") {
            mapConHtml = "<h4 style='align:center'>弥勒酒店Top5</h4><p>1.弥勒湖泉酒店           1564.41<br />2. 弥勒泊心温泉精品酒店   1203.1<br />3.  弥勒湖泉外滩酒店       864.9<br />4.  弥勒丽景酒店           786.19<br />5.  弥勒湖泉湾一号家庭公寓 756.7<br /></p>";

        } else if (currentMapMenu == "car") {
            mapConHtml = "<h4 style='align:center'>弥勒租车Top5</h4><p>1.弥勒车立方汽车租赁公司         142万<br />2. 弥勒市聚源汽车租赁有限公司      120万<br />3. 弥勒富佳租车公司              109.6万<br />4. 弥勒航城汽车租赁公司          97.4万<br />5. 弥勒泓霖汽车租赁公司          89.3万<br /></p>";

        } else if (currentMapMenu == "income") {
            mapConHtml = "<h4 style='align:center'>弥勒景区收入排行Top5</h4><p>1.弥勒湖泉生态景区：89533.95万元<br />2.可邑小镇：5633.18万元<br />3.  红酒庄：5043.76万元<br />4.  白龙洞风景区：4322.76万元<br />5. 锦屏山：3243万元<br /></p>";

        } else if (currentMapMenu == "play") {
            mapConHtml = "<h4 style='align:center'>弥勒娱乐场所排行Top5</h4><p>1.爱尚KTV：年收入4000万元<br />2.  中成音乐广场：年收入3300万元<br />3.  水乡温泉水疗会所：年收入3000万元<br />4. 水泊农庄：年收入2800万元<br />5.  鑫甲玉泉温泉度假酒店：年收入2500万元<br /></p>";

        } else if (currentMapMenu == "special") {
            mapConHtml = "<h4 style='align:center'>弥勒特产消费排行Top5</h4><p>1.葡萄：年收入7亿<br />2. 红河卷烟：年收入4.71亿<br />3.  西瓜：年收入500万<br />4. 核桃：年收入300万<br />5.  骨头参：年收入300万2<br /></p>";

        }
    } else if (name == "kaiyuan") {
        $("#mapContentDiv").css("right", "200px");
        $("#mapContentDiv").css("top", "50px");

        if (currentMapMenu == "food") {
            mapConHtml = "<h4 style='align:center'>开远美食Top5</h4><p>1.蜜桃           56.37<br />2. 铁路菜场小卷粉       50.12<br />3.  油淋鸡        49.61<br />4. 豆沙粑粑       43.2<br />5.  酸萝卜、腌白菜       35.67<br /></p>";

        } else if (currentMapMenu == "hotel") {
            mapConHtml = "<h4 style='align:center'>开远酒店Top5</h4><p>1.开远滇南翠怡酒店       752.33<br />2. 开远福永银发大酒店     698.4<br />3.  开远滇南大酒店         564.2<br />4.  开远8090时尚酒店      520.3<br />5. 开远军供宾馆           501.36<br /></p>";

        } else if (currentMapMenu == "car") {
            mapConHtml = "<h4 style='align:center'>开远租车Top5</h4><p>1.开远三友平安汽车租赁公司    76.3万<br />2. ......<br />3.  ......<br />4.  ......<br />5.  ......<br /></p>";

        } else if (currentMapMenu == "income") {
            mapConHtml = "<h4 style='align:center'>开远景区收入排行Top5</h4><p>1.南洞—凤凰谷旅游区：2400万<br />2. 灵芝湖森林公园：1900万<br />3.  云窝寺：1365万<br />4.  泸江公园：1000万<br />5.  旧寨村：865万<br /></p>";

        } else if (currentMapMenu == "play") {
            mapConHtml = "<h4 style='align:center'>开远娱乐场所排行Top5</h4><p>1.吉劲网络会所：年收入3300万元<br />2. 开远皇朝KTV：年收入3000-万元<br />3.  coco酒吧：年收入3000万元<br />4.辉煌网络休闲中心：年收入2000万元<br />5.  非同凡响主题KTV：年收入1800万元<br /></p>";

        } else if (currentMapMenu == "special") {
            mapConHtml = "<h4 style='align:center'>开远特产消费排行Top5</h4><p>1.蜜桃：年收入2000万<br />2. 东山李：年收入1500万<br />3.  开远甜椒：年收入1000万<br />4.  甜藠头：年收入700万<br />5. 小卷粉：年收入500万<br /></p>";

        }
    } else if (name == "gejiu") {
        $("#mapContentDiv").css("right", "200px");
        $("#mapContentDiv").css("top", "50px");
        if (currentMapMenu == "food") {
            mapConHtml = "<h4 style='align:center'>个旧美食Top5</h4><p>1.个旧烧烤      83.24<br />2.  油淋干巴      76.35<br />3.  木瓜凉水      35<br />4.  水泡梨        33.26<br />5.  酱粑粑        28.79<br /></p>";

        } else if (currentMapMenu == "hotel") {
            mapConHtml = "<h4 style='align:center'>个旧酒店Top5</h4><p>1.沙甸品质生活馆        862.11<br />2.  个旧云锡宾馆          812.32<br />3.  个旧王与后精品酒店    764.00<br />4. 个旧赛了目宾馆        652.1<br />5.  个旧良友商务酒店      503.16<br /></p>";

        } else if (currentMapMenu == "car") {
            mapConHtml = "<h4 style='align:center'>个旧租车Top5</h4><p>1.红河州欧盛经贸有限公司   103.6万<br />2. 红河州骏骐汽车租赁有限公司  97.4万<br />3.  红河州能投源汽车租赁有限公司   93万<br />4. 个旧同行时代汽车租赁有限公司   86.9万<br />5. 个旧市顺驰汽车租赁有限公司   74万<br /></p>";

        } else if (currentMapMenu == "income") {
            mapConHtml = "<h4 style='align:center'>个旧景区收入排行Top5</h4><p>1.个旧丫沙底瀑布温泉：1500万<br />2. 个旧锡文化创意产业园：834万<br />3.  戈贾森林公园：760万<br />4.  老阴山：621万<br />5. 尼格蓝色温泉：550万<br /></p>";

        } else if (currentMapMenu == "play") {
            mapConHtml = "<h4 style='align:center'>个旧娱乐场所排行Top5</h4><p>1.尚菲主题KTV：年收入3400万元<br />2. 畅想娱乐KTV：年收入3100万元<br />3.  蓝精灵网络会所：年收入3000万元<br />4.  唱吧KTV俱乐部：年收入2500万元<br />5.  新安所蘸水卷粉     31.2<br /></p>";

        } else if (currentMapMenu == "special") {
            mapConHtml = "<h4 style='align:center'>个旧特产消费排行Top5</h4><p>1.锡工艺品：年收入2亿元<br />2. 水泡梨：年收入3000万元<br />3.  鬼火绿小米辣系列：年收入2000万<br />4.  斗姆格卤鸡：年收入1000万元<br />5. ......<br /></p>";

        }

    } else if (name == "mengzi") {
        $("#mapContentDiv").css("right", "200px");
        $("#mapContentDiv").css("top", "50px");

        if (currentMapMenu == "food") {
            mapConHtml = "<h4 style='align:center'>蒙自美食Top5</h4><p>1.过桥米线   120<br />2.  甜石榴    80<br />3.  年糕      56<br />4.  枇杷      43.8<br />5.  新安所蘸水卷粉     31.2<br /></p>";

        } else if (currentMapMenu == "hotel") {
            mapConHtml = "<h4 style='align:center'>蒙自酒店Top5</h4><p>1. 红河官房大酒店 921.56 <br />2.  蒙自君悦天下酒店       721.30<br />3.  蒙自天源大酒店         654.2<br />4.  蒙自佰泰大酒店         542.81<br />5.  蒙自绿宝锦华大酒店     492.64<br /></p>";

        } else if (currentMapMenu == "car") {
            mapConHtml = "<h4 style='align:center'>蒙自租车Top5</h4><p>1.云南帝庆汽车销售有限公司蒙自分公司  120.5万<br />2.  红河州哈尼梯田旅游汽车服务有限公司 109.51万<br />3. 蒙自顺安汽车租赁有限公司 86万<br />4.  蒙自西部兴蒙汽车租赁有限公司  79万<br />5.  蒙自好兄弟汽车租赁有限公司   76.3万<br /></p>";

        } else if (currentMapMenu == "income") {
            mapConHtml = "<h4 style='align:center'>蒙自景区收入排行Top5</h4><p>1. 南湖公园风景区：2000万         <br />2.碧色寨：1600万  <br />3.尼苏小镇：1543万   <br />4.国立西南联大大学蒙自分校纪念馆：962万 <br />5.红河州博物馆：600万 <br /></p>";

        } else if (currentMapMenu == "play") {
            mapConHtml = "<h4 style='align:center'>蒙自娱乐场所排行Top5</h4><p>1.星乐会主题量贩KTV：年收入8500万元<br />2.  上可CC酒吧：年收入7000万元<br />3.  苏荷酒吧：年收入6000万元<br />4. 金聚点量贩KTV：年收入4000万元<br />5. 大唐盛世商务会所：年收入3000万元<br /></p>";

        } else if (currentMapMenu == "special") {
            mapConHtml = "<h4 style='align:center'>蒙自特产消费排行Top5</h4><p>1.大枇杷：年收入3亿元<br />2.  石榴：年收入2.8亿元<br />3.  小红枣：年收入2750万元<br />4.  刀烟：年收入2500万<br />5. 年糕：年收入2000万<br /></p>";

        }
    } else if (name == "jinping") {
        $("#mapContentDiv").css("right", "200px");
        $("#mapContentDiv").css("top", "50px");

        if (currentMapMenu == "food") {
            mapConHtml = "<h4 style='align:center'>金平美食Top5</h4><p>1.香蕉            84.12<br />2.    芒果            80 <br />3. 火夹清蒸乳饼    79.64 <br />4. 紫糯米          72 <br />5.菠萝蜜          68.57<br /></p>";

        } else if (currentMapMenu == "hotel") {
            mapConHtml = "<h4 style='align:center'>金平酒店Top5</h4><p>1.金平金河大酒店       564.26<br />2.金平绿宝西隆酒店     502.14 <br />3.金平云梯酒店         476.91 <br />4.  金平金达宾馆         376.54<br />5.  金平金龙宾馆         357.4<br /></p>";

        } else if (currentMapMenu == "car") {
            mapConHtml = "<h4 style='align:center'>金平租车Top5</h4><p>1.金平县平安租车公司         72万<br />2.  金平县一嗨租车公司         69万<br />3.  ......<br />4. ......<br />5. ......<br /></p>";

        } else if (currentMapMenu == "income") {
            mapConHtml = "<h4 style='align:center'>金平景区收入排行Top5</h4><p>1.金平蝴蝶谷：28764.98万元<br />2.  勐拉大佛寺：98万<br />3.  勐拉温泉：60万<br />4. 拉登瀑布：25万<br />5.  金平烈士陵园：20万<br /></p>";

        } else if (currentMapMenu == "play") {
            mapConHtml = "<h4 style='align:center'>金平娱乐场所排行Top5</h4><p>1.正丰娱乐商务会所：年收入2500万元<br />2.  钻石年华KTV：年收入2000万元<br />3. 金色阳光KTV：年收入1700万元<br />4. 金三角KTV：年收入1500万元<br />5.  北极星网络会所：年收入1000万元<br /></p>";

        } else if (currentMapMenu == "special") {
            mapConHtml = "<h4 style='align:center'>金平特产消费排行Top5</h4><p>1.天宝蕉:年收入1800万元<br />2. 小米辣:年收入1600万元<br />3.  草果:年收入1600万元<br />4. 灵芝酒:年收入700万<br />5.  紫糯米:年收入500万<br /></p>";

        }
    } else if (name == "pingbian") {
        $("#mapContentDiv").css("right", "200px");
        $("#mapContentDiv").css("top", "50px");

        if (currentMapMenu == "food") {
            mapConHtml = "<h4 style='align:center'>屏边美食Top5</h4><p>1.壮族花米饭      59<br />2.  包谷饭          52.64<br />3.  小米辣柠檬鸡    47<br />4.  白河凉鸡        39.68<br />5.  干椒辣子鸡      32<br /></p>";

        } else if (currentMapMenu == "hotel") {
            mapConHtml = "<h4 style='align:center'>屏边酒店Top5</h4><p>1.屏边大围山酒店       842.21<br />2.  屏边锦绣宾馆         722.11<br />3.  屏边八福168主题酒店 674.56<br />4.  屏边鑫达宾馆         594.2<br />5. 屏边金盛缘宾馆       463.23<br /></p>";

        } else if (currentMapMenu == "car") {
            mapConHtml = "<h4 style='align:center'>屏边租车Top5</h4><p>1.云南帝庆汽车销售有限公司蒙自分公司  120.5万  <br />2. 红河州哈尼梯田旅游汽车服务有限公司 109.51万<br />3. 蒙自顺安汽车租赁有限公司 86万<br />4.蒙自西部兴蒙汽车租赁有限公司  79万<br />5.  蒙自好兄弟汽车租赁有限公司   76.3万<br /></p>";

        } else if (currentMapMenu == "income") {
            mapConHtml = "<h4 style='align:center'>屏边景区收入排行Top5</h4><p>1.大围山国家森林公园：780万<br />2. 五家寨人字桥：80万<br />3.  莲花洞石窟：67万<br />4. 白河温泉：50万<br />5.  石洞村溶洞：46.3万<br /></p>";

        } else if (currentMapMenu == "play") {
            mapConHtml = "<h4 style='align:center'>屏边娱乐场所排行Top5</h4><p>1.佰亿商务会所：年收入3000万元<br />2. 屏边大围山假日会所：年收入2500万元<br />3.   盛世皇廷会所：年收入2300万元<br />4.   金都娱乐商务会所、年收入2000万元<br />5.  音乐房子KTV：年收入1500万元<br /></p>";

        } else if (currentMapMenu == "special") {
            mapConHtml = "<h4 style='align:center'>屏边特产消费排行Top5</h4><p>1.云雾茶：年收入5000万元<br />2. 熊胆粉:年收入5000万元 <br />3. 熊胆酒：年收入3000万元<br />4.糯米香茶：年收入1000万元 <br />5. 铁皮石斛：年收入1000万元<br /></p>";

        }
    } else if (name == "hekou") {
        $("#mapContentDiv").css("right", "200px");
        $("#mapContentDiv").css("top", "50px");

        if (currentMapMenu == "food") {
            mapConHtml = "<h4 style='align:center'>河口美食Top5</h4><p>1.越南小卷粉       125<br />2. 春卷             103<br />3. 凉皮             94<br />4.  河口牛肉粉       90.45<br />5.  菠萝蜜           74.61<br /></p>";

        } else if (currentMapMenu == "hotel") {
            mapConHtml = "<h4 style='align:center'>河口酒店Top5</h4><p>1.河口金帝商务大酒店            1414.41<br />2. 河口云岭新河湾酒店             912.21<br />3.  7天连锁酒店                      851<br />4. 河口亚洲主题酒店                  803<br />5.  河口华旭商务大酒店              513.3<br /></p>";

        } else if (currentMapMenu == "car") {
            mapConHtml = "<h4 style='align:center'>河口租车Top5</h4><p>1.河口诚信汽车租赁有限责任公司    76万<br />2. 河口天祥汽车租赁有限公司       68.3万<br />3.  河口边城租车公司            65万<br />4.  河口冰岛租车公司           59.7万<br />5.  河口敏捷租车公司          53万<br /></p>";

        } else if (currentMapMenu == "income") {
            mapConHtml = "<h4 style='align:center'>河口景区收入排行Top5</h4><p>1.越南城：3640万<br />2.  河口口岸：2708万<br />3.  南溪河漂流：2000万<br />4.  花鱼洞国家森林公园：1760万<br />5.  戈浩避暑山庄：1000万<br /></p>";

        } else if (currentMapMenu == "play") {
            mapConHtml = "<h4 style='align:center'>河口娱乐场所排行Top5</h4><p>1.闵红国际会所：年收入7000万元<br />2.  音乐房子KTV：年收入6500万元<br />3.  盛世皇廷：年收入5000万元天王时尚娱乐<br />4. 黄金海岸KTV：年收入4000万元<br />5.  会所：年收入3000万元<br /></p>";

        } else if (currentMapMenu == "special") {
            mapConHtml = "<h4 style='align:center'>河口特产消费排行Top5</h4><p>1.河口香蕉：年收入7.5亿元<br />2.  各式越南商品：年收入3.5亿元<br />3. 无眼菠萝：年收入4500万元<br />4. 河口牛肉粉：年收入4000万元<br />5.  鸭仔蛋：年收入300万元<br /></p>";

        }
    }
    $("#mapContentDiv").html(mapConHtml);
    $("#mapContentDiv").show(50);
}

function hideMapDiv11(obj) {
    $("#mapContentDiv").hide(50);
}

function switchMapMenu(obj) {
    var name = $(obj).attr("name");
    currentMapMenu = name;
    $($(obj).parent().siblings()).removeClass("active");
    $(obj).parent().addClass("active");
    if (name == "food") {
        initBarChart('map_chart', name);
    } else if (name == "hotel") {
        initBarChart('map_chart', name);
    } else if (name == "car") {
        initPieChart('map_chart', name);
    } else if (name == "income") {
        initBarChart('map_chart', name);
    } else if (name == "play") {
        initPieChart('map_chart', name);
    } else if (name == "special") {
        initBarChart('map_chart', name);
    }
}

//柱状图 折线图
function initBarChart(id, chartName) {

    var myChart = echarts.init(document.getElementById(id),'roma');
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '',
            x: 'center'
        },
        tooltip: {},
        xAxis: {

        },
        yAxis: {
            name: ""
        },
        series: [{
            name: '',
            type: '',
            data: []
        }]
    };

    if (chartName == "food") {
        option.title.text = "2015年红河州餐饮收入分析图";
        option.xAxis.name = "月";
        option.xAxis.data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        option.yAxis.name = "收入(亿)";
        option.series[0].name = "餐饮收入";
        option.series[0].type = "bar";
        option.series[0].data = [7.5, 1.2, 3.4, 2, 6.4, 4.4, 5.4, 5.2, 3.6, 2.3, 4.4, 6.5];
    } else if (chartName == "hotel") {
        option.title.text = "2015年红河州住宿时间与消费分析图";
        option.xAxis.name = "天";
        option.xAxis.data = ["1", "2", "3", "4", "5", "6", "7"];
        option.yAxis.name = "消费金额(元)";
        option.series[0].name = "消费金额";
        option.series[0].type = "bar";
        option.series[0].data = [150, 280, 360, 500, 630, 710, 810];
    } else if (chartName == "income") {
        option.title.text = "红河州旅游收入县市排行榜";
        option.xAxis.type = "value";
        option.yAxis.data = ["弥勒", "建水", "金平", "泸西", "元阳"];
        // option.yAxis.name = "地区";
        option.yAxis.type = "category";
        option.series[0].name = "收入(亿)";
        option.series[0].type = "bar";
        option.series[0].data = [36, 27.06, 22.3, 21, 20.59];
    } else if (chartName == "special") {
        option.title.text = "红河州购物所收入占比";
        // option.xAxis.name = "年";
        option.xAxis.data = ["2013年", "2014年", "2015年"];
        option.yAxis.name = "收入(亿)";
        option.series[0].name = "收入(亿)";
        option.series[0].type = "line";
        option.series[0].data = [823.8, 700.9, 603];
    }
    myChart.setOption(option);
}
//饼图
function initPieChart(id, chartName) {
    var myChart = echarts.init(document.getElementById(id),'roma');
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '',
            // subtext: '纯属虚构',
            x: 'center'
        },
        tooltip: {
            show: false,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            data: []
        },
        series: [{
            name: '',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    if (chartName == "car") {
        option.title.text = "红河州交通出行比例";
        option.legend.data = ['火车', '客车', '自驾', '电动车', '公交车', '出租车']
        option.series[0].name = "交通出行比例";
        var obj1 = new Object();
        obj1.value = 53;
        obj1.name = "火车";
        var obj2 = new Object();
        obj2.value = 21.2;
        obj2.name = "客车";
        var obj3 = new Object();
        obj3.value = 11.2;
        obj3.name = "自驾";
        var obj4 = new Object();
        obj4.value = 4.6;
        obj4.name = "电动车";
        var obj5 = new Object();
        obj5.value = 5.43;
        obj5.name = "公交车";
        var obj6 = new Object();
        obj6.value = 4.57;
        obj6.name = "出租车";
        option.series[0].data.push(obj1);
        option.series[0].data.push(obj2);
        option.series[0].data.push(obj3);
        option.series[0].data.push(obj4);
        option.series[0].data.push(obj5);
        option.series[0].data.push(obj6);
    } else if (chartName == "play") {

        option.title.text = "红河州游乐场所收入占比";
        option.legend.data = ['KTV', '网吧', '洗浴', '桑拿', '歌舞团']
        option.series[0].name = "游乐场所收入占比";
        var obj1 = new Object();
        obj1.value = 28;
        obj1.name = "KTV";
        var obj2 = new Object();
        obj2.value = 12;
        obj2.name = "网吧";
        var obj3 = new Object();
        obj3.value = 19;
        obj3.name = "洗浴";
        var obj4 = new Object();
        obj4.value = 33;
        obj4.name = "桑拿";
        var obj5 = new Object();
        obj5.value = 8;
        obj5.name = "歌舞团";
        option.series[0].data.push(obj1);
        option.series[0].data.push(obj2);
        option.series[0].data.push(obj3);
        option.series[0].data.push(obj4);
        option.series[0].data.push(obj5);
    }
    myChart.setOption(option);
}

function initOnePie(id, flag, data) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a}:{c}%"
        },
        legend: {
            show: false,
            orient: 'vertical',
            x: 'left',
            data: ['其他', '主要']
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '60%'],
            center: ['45%', '53.5%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    textStyle: {
                        fontSize: '50'
                    }
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 60,
                name: '60%',
                itemStyle: {
                    normal: {
                        color: '#e71c75'
                    }
                }

            }, {
                value: 40,
                name: '',
                itemStyle: {
                    normal: {
                        color: '#e5e5e5'
                    }
                }
            }]
        }]
    };

    if (flag == 1) {
        option.series[0].name = "旅游资源占比";
        option.series[0].data[0].itemStyle.normal.color = '#c00009';
    } else if (flag == 2) {
        option.series[0].name = "景区级别";
        option.series[0].data[0].itemStyle.normal.color = '#f59120';
    } else if (flag == 3) {
        option.series[0].name = "收入占比";
        option.series[0].data[0].itemStyle.normal.color = '#8cc63e';
    }

    option.series[0].data[0].value = data;
    option.series[0].data[0].name = data + "%";
    option.series[0].data[1].value = parseInt(100 - data);
    myChart.setOption(option);
}


function changeChart(obj) {
    var name = $(obj).attr("name");
    if (name == "mengzi") {
        $("#areaName").text("蒙自");
        $("#jingdianCount").text("10个");
        $("#jingquCount").text("2个");
        $("#shouru").text("200万元");

        initOnePie('onepie', 1, 20);
        initOnePie('twopie', 2, 90);
        initOnePie('threepie', 3, 80);


    } else if (name = "gejiu") {
        $("#areaName").text("个旧");
        $("#jingdianCount").text("20个");
        $("#jingquCount").text("5个");
        $("#shouru").text("240万元");

        initOnePie('onepie', 1, 50);
        initOnePie('twopie', 2, 80);
        initOnePie('threepie', 3, 90);
    }
}