{"level":"critical","time":1661161162768,"ns":"sqd:processor","err":{"query":"INSERT INTO \"token\"(\"id\", \"symbol\", \"name\", \"decimals\", \"total_supply\", \"trade_volume\", \"trade_volume_usd\", \"untracked_volume_usd\", \"tx_count\", \"total_liquidity\", \"derived_eth\") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11), ($12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22), ($23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33), ($34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44), ($45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55), ($56, $57, $58, $59, $60, $61, $62, $63, $64, $65, $66), ($67, $68, $69, $70, $71, $72, $73, $74, $75, $76, $77), ($78, $79, $80, $81, $82, $83, $84, $85, $86, $87, $88), ($89, $90, $91, $92, $93, $94, $95, $96, $97, $98, $99), ($100, $101, $102, $103, $104, $105, $106, $107, $108, $109, $110), ($111, $112, $113, $114, $115, $116, $117, $118, $119, $120, $121), ($122, $123, $124, $125, $126, $127, $128, $129, $130, $131, $132), ($133, $134, $135, $136, $137, $138, $139, $140, $141, $142, $143), ($144, $145, $146, $147, $148, $149, $150, $151, $152, $153, $154), ($155, $156, $157, $158, $159, $160, $161, $162, $163, $164, $165), ($166, $167, $168, $169, $170, $171, $172, $173, $174, $175, $176), ($177, $178, $179, $180, $181, $182, $183, $184, $185, $186, $187), ($188, $189, $190, $191, $192, $193, $194, $195, $196, $197, $198), ($199, $200, $201, $202, $203, $204, $205, $206, $207, $208, $209), ($210, $211, $212, $213, $214, $215, $216, $217, $218, $219, $220), ($221, $222, $223, $224, $225, $226, $227, $228, $229, $230, $231), ($232, $233, $234, $235, $236, $237, $238, $239, $240, $241, $242), ($243, $244, $245, $246, $247, $248, $249, $250, $251, $252, $253), ($254, $255, $256, $257, $258, $259, $260, $261, $262, $263, $264), ($265, $266, $267, $268, $269, $270, $271, $272, $273, $274, $275), ($276, $277, $278, $279, $280, $281, $282, $283, $284, $285, $286), ($287, $288, $289, $290, $291, $292, $293, $294, $295, $296, $297), ($298, $299, $300, $301, $302, $303, $304, $305, $306, $307, $308), ($309, $310, $311, $312, $313, $314, $315, $316, $317, $318, $319), ($320, $321, $322, $323, $324, $325, $326, $327, $328, $329, $330), ($331, $332, $333, $334, $335, $336, $337, $338, $339, $340, $341), ($342, $343, $344, $345, $346, $347, $348, $349, $350, $351, $352), ($353, $354, $355, $356, $357, $358, $359, $360, $361, $362, $363), ($364, $365, $366, $367, $368, $369, $370, $371, $372, $373, $374), ($375, $376, $377, $378, $379, $380, $381, $382, $383, $384, $385), ($386, $387, $388, $389, $390, $391, $392, $393, $394, $395, $396), ($397, $398, $399, $400, $401, $402, $403, $404, $405, $406, $407), ($408, $409, $410, $411, $412, $413, $414, $415, $416, $417, $418), ($419, $420, $421, $422, $423, $424, $425, $426, $427, $428, $429), ($430, $431, $432, $433, $434, $435, $436, $437, $438, $439, $440), ($441, $442, $443, $444, $445, $446, $447, $448, $449, $450, $451), ($452, $453, $454, $455, $456, $457, $458, $459, $460, $461, $462), ($463, $464, $465, $466, $467, $468, $469, $470, $471, $472, $473), ($474, $475, $476, $477, $478, $479, $480, $481, $482, $483, $484), ($485, $486, $487, $488, $489, $490, $491, $492, $493, $494, $495), ($496, $497, $498, $499, $500, $501, $502, $503, $504, $505, $506), ($507, $508, $509, $510, $511, $512, $513, $514, $515, $516, $517), ($518, $519, $520, $521, $522, $523, $524, $525, $526, $527, $528), ($529, $530, $531, $532, $533, $534, $535, $536, $537, $538, $539), ($540, $541, $542, $543, $544, $545, $546, $547, $548, $549, $550), ($551, $552, $553, $554, $555, $556, $557, $558, $559, $560, $561), ($562, $563, $564, $565, $566, $567, $568, $569, $570, $571, $572), ($573, $574, $575, $576, $577, $578, $579, $580, $581, $582, $583), ($584, $585, $586, $587, $588, $589, $590, $591, $592, $593, $594), ($595, $596, $597, $598, $599, $600, $601, $602, $603, $604, $605), ($606, $607, $608, $609, $610, $611, $612, $613, $614, $615, $616), ($617, $618, $619, $620, $621, $622, $623, $624, $625, $626, $627), ($628, $629, $630, $631, $632, $633, $634, $635, $636, $637, $638), ($639, $640, $641, $642, $643, $644, $645, $646, $647, $648, $649), ($650, $651, $652, $653, $654, $655, $656, $657, $658, $659, $660), ($661, $662, $663, $664, $665, $666, $667, $668, $669, $670, $671), ($672, $673, $674, $675, $676, $677, $678, $679, $680, $681, $682), ($683, $684, $685, $686, $687, $688, $689, $690, $691, $692, $693), ($694, $695, $696, $697, $698, $699, $700, $701, $702, $703, $704) ON CONFLICT ( \"id\" ) DO UPDATE SET \"id\" = EXCLUDED.\"id\", \"symbol\" = EXCLUDED.\"symbol\", \"name\" = EXCLUDED.\"name\", \"decimals\" = EXCLUDED.\"decimals\", \"total_supply\" = EXCLUDED.\"total_supply\", \"trade_volume\" = EXCLUDED.\"trade_volume\", \"trade_volume_usd\" = EXCLUDED.\"trade_volume_usd\", \"untracked_volume_usd\" = EXCLUDED.\"untracked_volume_usd\", \"tx_count\" = EXCLUDED.\"tx_count\", \"total_liquidity\" = EXCLUDED.\"total_liquidity\", \"derived_eth\" = EXCLUDED.\"derived_eth\"","parameters":["0xacc15dc74880c9944775448304b263d191c6077f","WGLMR","Wrapped GLMR",18,"2850995.612402102392354119","85589975.133663582625384635","257830959.30469545787561360095581932988582374252","257834902.0352219595167948168919371532628614866056",407533,"1873280.944095772276119687","1","0xcd3b51d98478d53f4515a306be565c6eebef1d58","GLINT","Beamswap Token",18,"0","3353413396.589577699793747593","35446675.4826987782515696440800672344295930220439840648319441492357","35446730.5696559767432845710271328627707069585355",84659,"266476145.89718112462092802","0.00103915127958263213","0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b","USDC","USD Coin",6,"21454297.4807","298769210.101687","300012246.463468312085378591751106582690790339089504150590960494043607801502","299832243.5936346078482557488780231515789634906526",435542,"3241065.130563","1.5894869822675935874998352002748488677275","0xe4c90cebed25d390632fb2448a1739bd44eef1a1","CAMEL","BeamCamel",9,"1000000000000000","0","0","0",0,"0","0","0xc4c07a63e18832e9c045810b6efb08209168b738","BLOB","Blob",9,"100","0","0","0",0,"0.063245554","0","0x42e274e2ce602a348aaddb3299ab46fc838a3d73","BEAM-LP","BeamSwap LPs",18,"0.001313351834106992","0","0","0",0,"0","0","0xc9baa8cfdde8e328787e29b4b078abf2dadc2055","BNB","Binance",18,"6534.260753775739590847","38821.079839726448977385","312.76419505125680651116","7879550.2178967388368352442817023054600560027325",45265,"977.320898706414854553","0","0x6894c5dfeb8e780dc9f8fcaa3a18e749d1ee3a6e","SafeMoonBeam","SafeMoonBeam",18,"10000000","0","0","0",0,"0","0","0x28474055ee4990a7dba67b44344f454b529e1f09","COA","Coin A",18,"266666666","0","0","0",0,"0","0","0xe3e43888fa7803cdc7bea478ab327cf1a0dc11a7","FLARE","Flare Token",18,"42465208.032223204001901269","0.454321656639862742","0.08249103974549078011","0.04124551987274539007",1,"0.554321656639862742","0","0xd6f9d061b8c64b557ad2db0f9e995f8a182a6f36","CAMELp","CAMEL Printer",6,"1000000000000000","0","0","0",0,"0","0","0xded8576697294664524a8a91537b4af30e38ebdd","TST","Test",18,"1000000","0","0","0",0,"0","0","0x63ad68e28ac2378641836b89fa056f81d6bbf4f0","ATOM","ATOM",9,"105","0","0","0",0,"0.000000001","0","0x49f87f6c09b22cbc19e2d41258ca76e0bbe7aa72","fUSDT","fakeUSDT",18,"1000000000","100100.678464728294992049","0","0",2,"49826569.770537388784672504","0","0x085416975fe14c2a731a97ec38b9bf8135231f62","UST","Axelar Wrapped UST",6,"1219285.308441","58.587221","0","0",9,"46.787609","0","0xa649325aa7c5093d12d6f98eb4378deae68ce23f","BUSD","Binance-Peg BUSD Token",18,"19620519.069789420500628091","58782286.173288935370552232","44703287.659607946991689458897131164559247080530000047740001610291426613465","52482086.8665487349074330469400742855889797526181",103540,"1220922.313626112153140343","1.55489810205621826812","0x99178a770bc3e6391d9ad03aadc599560bd79dc0","BEAM-LP","BeamSwap LPs",18,"0.00017248930401622","0","0","0",0,"0","0","0x7a42cfe30b40aef7e307eba4b6a7e4497c1ca0ae","BEAM-LP","BeamSwap LPs",18,"0.003000000000074999","0","0","0",0,"0","0","0x28c3971794d95637218aa87159125b070ce69664","LUNAR","LUNAR Token",18,"97911.720456613456800173","0.000000002399811932","1.39479655724484958983","0.69739827862242479492",2,"0.000000002399811973","0","0x7b282ab2671304a526e4bee1f184206db9bff184","BEAM-LP","BeamSwap LPs",18,"0.001313351834106992","0","0","0",0,"0","0","0x4204cad97732282d261fbb7088e07557810a6408","SHARE","Beamshare Token",18,"1896773.870409502489234545","970642.888992251959530414","14073.93050560670315772188913016654720736251","19107.1652670306394192345775772224286671259301",2653,"4518.477406659152774845","0.00153117212865710991","0x9d3307f43fbbaae5b5f3a858bb0a7008c84fef5c","ATOM","ATOM",9,"100","1302.881752865","0","20331.4282882670995814259022707918455335590174",417,"14.497049803","0","0x34e99168439bb217572504f485f350a161abb2b2","BMOGE","Beamoge",9,"100000000","0","0","0",0,"0","0","0xffffffff1fcacbd218edc0eba20fc2308c778080","xcDOT","xcDOT",10,"475121.1551662576","14131.3460064141","115725.7004670977053696055019169609068475143739840648319441492357","115858.2078416619958450966648756610928367478172",1853,"6994.2385039024","10.561129474398359846918138735805297293724","0x825eb25e0c9a0f811ffbf3200d4b0144edfc15b1","test","test",9,"100000000","0","0","0",0,"0","0","0x81044bb18a7211a902aa5f27320edb6d77044ea5","T","test",18,"10000","0","0","0",0,"0","0","0x27292cf0016e5df1d8b37306b2a98588acbd6fca","axlATOM","Axelar Wrapped ATOM",6,"66883.278701","0.189992","0","0",9,"0.072894","0","0x922d641a426dcffaef11680e5358f34d97d112e1","WBTC","Wrapped BTC",8,"46.36984696","0.00006956","18.27264818629803013751","9.13632409314901506876",109,"0.00000291","0","0xb60590313975f0d98821b6cab5ea2a6d9641d7b6","MSCP","Moonscape",18,"262545741.896124205763968492","0","0","0",0,"0","0","0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73","USDT","Tether USD",6,"8881509.3917","6593046.742675","6595423.949236374092263731297622111280543082465527049539912251880751512774","6635210.6982248087632125106754157569314080979043",9756,"707208.676297","1.634154776059235571762336217841239650688380641700876226468104","0xdcae1f3e1aef28d388db1ac2584a438f6374dc56","TST","Test",18,"1000000","0","0","0",0,"0","0","0x595c8481c48894771ce8fade54ac6bf59093f9e8","BIFI","beefy.finance",18,"0.0832358","795.167467351951240122","1043347.32493622254382632976762512974972696144","1043469.2025322285834199942213223498554043271706",3622,"30.554039887362889693","648.81053828266035966487","0x0f9cf146e871ed2c1af0503359f3250c33a401be","BEAM-LP","BeamSwap LPs",18,"0.005477225575119212","0","0","0",0,"0","0","0xa98fcfdb684a894d26b91f85cebfc4cd51f95875","PORK","Porkoink",18,"21000000","9172954.624221433586522148","76.104313581110813280608763927070834001","75.4692609438450661193601392479127671274155",81,"1746012.956388633046258127","0.00001451623794286289","0xac5e538559bdd79992ecfae6575c36ee270d768b","COB","Coin B",18,"266666666","0","0","0",0,"0","0","0x5b1b435a39fde8817916fca0e6d9dc90bb3d75e0","日内瓦","日内瓦",18,"1000000","410394.530382430889973856","4.79248450468336144219","2.39624225234168072109",2,"541063.096733638566809852","0","0x11b01313799a50a460e703970168829ecbc1c04e","World Cup","World Cup",1,"1000000000000000","0","0","0",0,"0","0","0xa88dce7bfe9a0b25ef3d2a277bb15ce424737d39","BEAM-LP","BeamSwap LPs",18,"0.001313351834106992","0","0","0",0,"0","0","0x3bf486658a3720b1672cb21b5aea03ce4a5cd718","D","dallauansparrow",18,"10000","0","0","0",0,"0","0","0x8e70cd5b4ff3f62659049e74b6649c6603a0e594","USDT","Tether USD",6,"4776797.712044","100.766544","500.54525169492076208375","250.28102050632917676703",6,"0.016812","0","0x8f552a71efe5eefc207bf75485b356a0b3f01ec9","USDC","USD Coin",6,"35962517.542721","267524.351214","262656.4378310296344018485076580303886294443091698928882728961267722896","263653.0784482653142226085580843265049056387226",4758,"49884.778635","1.55836899216938514098","0x65b09ef8c5a096c5fd3a80f1f7369e56eb932412","BEANS","MoonBeans",18,"1000000","183453.507156413596823619","168200.16881913516413856539022527344569955883","167276.401828260188308011687386054602673422632",1465,"60624.416881332379569374","0.27503829263569565476","0x3405a1bd46b85c5c029483fbecf2f3e611026e45","MATIC","Matic",18,"427906.004346221418587","0","0","0",0,"0","0","0xd5c830f8c680543a4356fb1b14798a0919cec174","SAFE","SAFEMOONBEAM",9,"1000000000000000","0","0","0",0,"0","0","0xf2dc7653a5af3512dd64a7dfb36f7a7ff9c0540d","DUSTY","DustyDunes Token",18,"183590244.168313487767911573","288842194.999961920561983433","3309.06455037103175601353693686060358185575","3311.0629426124155522023802555345238501133921",627,"15584122.294572086897654831","0.0000048205371441175","0x5601a8978493d2a0d796915ba1752572376b94ab","BEAM-LP","BeamSwap LPs",18,"64.57539372553955466","0","0","0",0,"0","0","0x19d2f0cf1fc41de2b8fd4a98065ab9284e05cf29","1BEAM","OneBeam",18,"350449953.01368849834545815","0","0","0",0,"0.000000000000011015","0","0x7d45bfa99e7098cd026e2c6921662f1ec26c7231","BUSD","BUSD",18,"10000","0","0","0",0,"0","0","0x1575352ee631cbeaaaae0744b04578ab587243e6","BEAM-LP","BeamSwap LPs",18,"0.018438426471259835","0","0","0",0,"0","0","0xf60dad4ed5f79a6331d7fbb35be19d2250f25d92","omni","Omnitokens",18,"888000000000","0","0","0",0,"0","0","0x2dfc76901bb2ac2a5fa5fc479590a490bbb10a5f","CGS","Cougar Token",18,"20000000","180532718.1040014571798849","454486.899644820067828124323053732712197561349379930171106867829116531669","541770.1018954038075515458593106949311714933989",7945,"21201779.494123930091105369","0.00012880243023592572","0x972958f64576a8d78b69c5c536a15da0e9f9fc2b","BLOB","Blob",9,"100","5.12","0","39.8781348834288615065431135565898103498292",13,"6.100306075","0","0xfa9343c3897324496a05fc75abed6bac29f8a40f","ETH","Ethereum",18,"461.7654756","13434.968482937817645172","33085178.303031192719053278049179327743776719741319317865011624736238205796","33082881.3434543265749316204862843011320306701207",70589,"155.10939804672096293","1668.927771437654034944444620601482108851679404935356482953998325","0x6fef4e8b0ea76d0608c3ec868c0f040a5249826a","fBTC","fakeBTC",18,"1000000000","2","0","0",2,"996.532339093668487699","0","0x999df923d21379289623cefa12ac570e57cb2343","SHBY","sharkbaby",18,"1000000000","490869.354547789714708732","0.287248111254633732240157946506520735831500570229625516385272249455","0.143624055627316866093582798356030895586",24,"982767.64489471936914218","0","0xc19281f22a075e0f10351cd5d6ea9f0ac63d4327","FTM","Fantom",18,"74762.1542","4436106.83435543836726459","4149928.253577498155031882651567132182099062239871662412507442779364833435","4123628.7612459051729399251936763465963936972009",23061,"122840.107816228398238261","0.38135757844302580412","0x765277eebeca2e31912c9946eae1021199b39c61","DAI","Dai Stablecoin",18,"5818900.202","2681387.184372518061074729","2644717.668619631596724298126025383309296163282735679744522284014665565308","2663739.332481430687895378617287667560431226785",5061,"429938.97758698821410817","1.61957003497695693234986859884789301851688476250903522624328","0xc7a7a2137ea1930deaf164e316746335d83d2504","ATOM","ATOM",9,"100","0","0","0",0,"0","0","0x1628062480ba639ac8e3f674935338694d9ffc52","ATOM","ATOM",9,"100","0","0","0",0,"0.00001","0","0x5e6a1b6a1b99a2c1b5fcf8a5bf4e556e4d8ba6a1","DBBB","DONTBUY",9,"100","0","0","0",0,"0","0","0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b","USDC","USD Coin",6,"23705132.313159","0","0","0",0,"0","0","0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73","USDT","Tether USD",6,"6192694.266008","0","0","0",0,"0","0","0x765277eebeca2e31912c9946eae1021199b39c61","DAI","Dai Stablecoin",18,"1190113.5732716364011538","0","0","0",0,"0","0","0xa649325aa7c5093d12d6f98eb4378deae68ce23f","BUSD","Binance-Peg BUSD Token",18,"1992519.734574953618829063","0","0","0",0,"0","0"],"driverError":{"length":239,"name":"error","severity":"ERROR","code":"21000","hint":"Ensure that no rows proposed for insertion within the same command have duplicate constrained values.","file":"nodeModifyTable.c","line":"2049","routine":"ExecOnConflictUpdate","stack":"error: ON CONFLICT DO UPDATE command cannot affect row a second time\n    at Parser.parseErrorMessage (/squid/node_modules/pg-protocol/dist/parser.js:287:98)\n    at Parser.handlePacket (/squid/node_modules/pg-protocol/dist/parser.js:126:29)\n    at Parser.parse (/squid/node_modules/pg-protocol/dist/parser.js:39:38)\n    at Socket.<anonymous> (/squid/node_modules/pg-protocol/dist/index.js:11:42)\n    at Socket.emit (node:events:527:28)\n    at addChunk (node:internal/streams/readable:315:12)\n    at readableAddChunk (node:internal/streams/readable:289:9)\n    at Socket.Readable.push (node:internal/streams/readable:228:10)\n    at TCP.onStreamRead (node:internal/stream_base_commons:190:23)"},"length":239,"severity":"ERROR","code":"21000","hint":"Ensure that no rows proposed for insertion within the same command have duplicate constrained values.","file":"nodeModifyTable.c","line":"2049","routine":"ExecOnConflictUpdate","stack":"QueryFailedError: ON CONFLICT DO UPDATE command cannot affect row a second time\n    at PostgresQueryRunner.query (/squid/node_modules/typeorm/driver/postgres/PostgresQueryRunner.js:211:19)\n    at runMicrotasks (<anonymous>)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\n    at async InsertQueryBuilder.execute (/squid/node_modules/typeorm/query-builder/InsertQueryBuilder.js:106:33)\n    at async /squid/node_modules/@subsquid/typeorm-store/lib/store.js:25:21\n    at async /squid/lib/processor.js:101:5\n    at async TypeormDatabase.runTransaction (/squid/node_modules/@subsquid/typeorm-store/lib/database.js:110:13)\n    at async TypeormDatabase.transact (/squid/node_modules/@subsquid/typeorm-store/lib/database.js:64:24)\n    at async Runner.process (/squid/node_modules/@subsquid/substrate-processor/lib/processor/runner.js:164:17)"}}