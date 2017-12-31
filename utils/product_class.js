module.exports = {
  Data: classData,
}

function classData() {
  var arr = {
    instrument_list: [
      {
        id: '1',
        class_name: '离心机',
        lt_class: [
          { id: '11', name: '超速离心机' },
          { id: '12', name: '高速/冷冻离心机' },
          { id: '13', name: '大容量离心机' },
          { id: '14', name: '台式离心机', },
          { id: '15', name: '迷你离心机', },
          { id: '16', name: '专用离心机', },
          { id: '17', name: '其他离心机', }
        ]
      }, {
        id: '2',
        class_name: '培养/干燥箱',
        lt_class: [
          { id: '21', name: 'CO2培养箱' },
          { id: '22', name: '低温培养箱' },
          { id: '23', name: '植物培养箱' },
          { id: '24', name: '生化培养箱' },
          { id: '25', name: '杂交箱/杂交仪' },
          { id: '26', name: '恒温/恒湿培养箱' },
          { id: '27', name: '厌氧培养箱' },
          { id: '28', name: '霉菌培养箱' },
          { id: '29', name: '振荡培养箱' },
          { id: '210', name: '干燥箱' },
          { id: '211', name: '药品试验箱' },
          { id: '212', name: '其他培养箱' }
        ]
      }, {
        id: '3',
        class_name: '同位素/放射测量',
        lt_class: [
          { id: '31', name: '液体闪烁仪' },
          { id: '32', name: 'γ计数器' },
          { id: '33', name: '其他同位素仪' }
        ]
      }, {
        id: '4',
        class_name: '显微系统',
        lt_class: [
          { id: '41', name: '生物显微镜' },
          { id: '42', name: '倒置显微镜' },
          { id: '43', name: '实体/体式显微镜' },
          { id: '44', name: '电子显微镜/扫描探针' },
          { id: '45', name: '显微成像' },
          { id: '46', name: '显微操作' },
          { id: '47', name: '共聚焦显微镜' },
          { id: '48', name: '显微镜配件/滤光片' },
          { id: '49', name: '其他' }
        ]
      }, {
        id: '5',
        class_name: '发光显影成像',
        lt_class: [
          { id: '51', name: '电泳仪' },
          { id: '52', name: '电泳槽' },
          { id: '53', name: '国产凝胶成像' },
          { id: '54', name: '进口凝胶成像' },
          { id: '55', name: '化学发光成像' },
          { id: '56', name: '生物/化学发光检测' }
        ]
      }, {
        id: '6',
        class_name: '医学检验仪器',
        lt_class: [
          { id: '61', name: '酶标仪' },
          { id: '62', name: '洗板机' },
          { id: '63', name: '微生物仪器' },
          { id: '64', name: '渗透压仪' },
          { id: '65', name: '其他医学检验仪器' }
        ]
      }, {
        id: '7',
        class_name: 'PCR仪',
        lt_class: [
          { id: '71', name: '普通PCR仪' },
          { id: '72', name: '梯度PCR仪' },
          { id: '73', name: '定量PCR仪' }
        ]
      }, {
        id: '8',
        class_name: '紫外设备',
        lt_class: [
          { id: '81', name: '紫外投射/分析仪' },
          { id: '82', name: '紫外/核算蛋白检测仪' }
        ]
      }, {
        id: '9',
        class_name: '谱学仪器',
        lt_class: [
          { id: '91', name: '光谱/分光光度计' },
          { id: '92', name: '液相色谱' },
          { id: '93', name: '气相色谱' },
          { id: '94', name: '质谱仪' },
          { id: '95', name: '波谱/磁共振' },
          { id: '96', name: '气体发生器' }
        ]
      }, {
        id: '10',
        class_name: '低温/制冷/恒温',
        lt_class: [
          { id: '101', name: '低温冰箱' },
          { id: '102', name: '液氮仪器' },
          { id: '103', name: '冻干机' },
          { id: '104', name: '制冰机' },
          { id: '105', name: '恒温槽/水浴/油浴' },
          { id: '106', name: '冷却水循环' },
          { id: '107', name: '金属浴/干式恒温器' },
          { id: '108', name: '其他温度设备/程序降温仪' }
        ]
      }, {
        id: '11',
        class_name: '理化分析',
        lt_class: [
          { id: '111', name: '酸度计/PH计' },
          { id: '112', name: '离子计/电导计' },
          { id: '113', name: '粒度仪' },
          { id: '114', name: '旋光仪/糖度计' },
          { id: '115', name: '其他理化分析/SPR' }
        ]
      }, {
        id: '12',
        class_name: '基因/蛋白/细胞分析',
        lt_class: [
          { id: '121', name: 'DNA/有机/多肽合成仪' },
          { id: '122', name: 'DNA测序/基因分析仪' },
          { id: '123', name: '细胞分析仪' },
          { id: '124', name: '蛋白质组仪器' }
        ]
      }, {
        id: '13',
        class_name: '纯水/超滤/浓缩',
        lt_class: [
          { id: '131', name: '超纯水' },
          { id: '132', name: '膜过滤/超滤/微滤' },
          { id: '133', name: '浓缩仪' },
          { id: '134', name: '旋转蒸发仪' },
          { id: '135', name: '反应釜' }
        ]
      }, {
        id: '14',
        class_name: '发酵罐/细胞反应器',
        lt_class: [
          { id: '141', name: '国产发酵罐' },
          { id: '142', name: '进口发酵罐' },
          { id: '143', name: '细胞反应器' },
          { id: '144', name: '发酵罐配套产品' }
        ]
      }, {
        id: '15',
        class_name: '天平',
        lt_class: [
          { id: '151', name: '微量天平' },
          { id: '152', name: '分析天平' },
          { id: '153', name: '精密天平' },
          { id: '154', name: '其他天平及附件' }
        ]
      }, {
        id: '16',
        class_name: '植物生理生态',
        lt_class: [
          { id: '161', name: '植物生理仪器' },
          { id: '162', name: '土壤/生态仪器' }
        ]
      }, {
        id: '17',
        class_name: '生物安全设备',
        lt_class: [
          { id: '171', name: '超净工作台' },
          { id: '172', name: '生物安全柜' },
          { id: '173', name: '消毒/灭菌器' },
          { id: '174', name: '生物安全防护' },
          { id: '175', name: '超声波清洗' },
          { id: '176', name: '洗瓶机' }
        ]
      }, {
        id: '18',
        class_name: '转基因仪',
        lt_class: [
          { id: '181', name: '转基因仪' },
          { id: '182', name: '电泳槽' },
          { id: '183', name: '国产凝胶成像' },
          { id: '184', name: '进口凝胶成像' },
          { id: '185', name: '化学发光成像' },
          { id: '186', name: '生物/化学发光检测' }
        ]
      }, {
        id: '19',
        class_name: '动物生理仪器',
        lt_class: [
          { id: '191', name: '电生理仪器' },
          { id: '192', name: '膜片钳' },
          { id: '193', name: '脑立体定位仪' },
          { id: '194', name: '切片机' },
          { id: '195', name: '动物行为' },
          { id: '196', name: '动物实验仪器' },
          { id: '197', name: '动物麻醉机' },
          { id: '198', name: '动物活体成像' }
        ]
      }, {
        id: '20',
        class_name: '各类泵',
        lt_class: [
          { id: '201', name: '蠕动泵/恒流泵' },
          { id: '202', name: '注射泵' },
          { id: '203', name: '真空泵及其他泵' }
        ]
      }, {
        id: '21',
        class_name: '移液/实验自动化',
        lt_class: [
          { id: '211', name: '移液器' },
          { id: '212', name: '移液工作站' },
          { id: '213', name: '核酸提取纯化' },
          { id: '214', name: '样本储存管理' },
          { id: '215', name: '收集器' },
          { id: '216', name: '其他自动化设备' }
        ]
      }, {
        id: '22',
        class_name: '生物芯片',
        lt_class: [
          { id: '221', name: '生物芯片处理' },
          { id: '222', name: '生物芯片处理' },
          { id: '223', name: '生物芯片扫描仪' },
          { id: '224', name: '生物信息软件' }
        ]
      }, {
        id: '23',
        class_name: '样品处理设备',
        lt_class: [
          { id: '231', name: '搅拌器' },
          { id: '232', name: '匀浆器' },
          { id: '233', name: '混合器' },
          { id: '234', name: '研磨' },
          { id: '235', name: '均质/粉碎' },
          { id: '236', name: '摇床/振荡器' },
          { id: '237', name: '脱色摇床' },
          { id: '238', name: '超声波粉碎/细胞破碎' },
          { id: '239', name: '微波消解' }
        ]
      }, {
        id: '24',
        class_name: '实验耗材',
        lt_class: [
          { id: '241', name: '细胞培养耗材' },
          { id: '242', name: '色谱柱' },
          { id: '243', name: '层析材料' },
          { id: '244', name: '过滤耗材' },
          { id: '245', name: '试管/离心管' },
          { id: '246', name: '吸头' },
          { id: '247', name: '移液管' },
          { id: '248', name: '试剂瓶' },
          { id: '249', name: '其他实验耗材' }
        ]
      }, {
        id: '25',
        class_name: '试剂',
        lt_class: [
          { id: '251', name: '分子试剂' },
          { id: '252', name: '生化试剂' },
          { id: '253', name: '细胞生物学试剂' },
          { id: '254', name: '血清/培养基' },
          { id: '255', name: '免疫/诊断试剂' },
          { id: '256', name: '抗体' },
          { id: '257', name: '神经生物学试剂' },
          { id: '258', name: '标准品/对照品' },
          { id: '259', name: '食品检测试剂' },
          { id: '2510', name: '植物试剂' },
          { id: '2511', name: '动物试剂' },
          { id: '2512', name: '其他生物试剂' }]
      }, {
        id: '26',
        class_name: '实验动物/细胞株',
        lt_class: [
          { id: '261', name: '实验动物' },
          { id: '262', name: '动物器具' },
          { id: '263', name: '动物手术器械' },
          { id: '264', name: '细胞株/菌株' }
        ]
      }, {
        id: '27',
        class_name: '实验室家具',
        lt_class: [
          { id: '271', name: '通风台' },
          { id: '272', name: '通风柜' },
          { id: '273', name: '药品柜' }
        ]
      }, {
        id: '28',
        class_name: '其他仪器',
        lt_class: [
          { id: '281', name: '药检/制药仪器' },
          { id: '282', name: '环境检测仪器' },
          { id: '283', name: '食品饮料仪器' },
          { id: '284', name: '图书' },
          { id: '285', name: '其他实验仪器' }
        ]
      }
    ],
    service_list: [
      {
        id: '31',
        class_name: '生物研发服务',
        lt_class: [
          { id: '311', name: '芯片与生物信息学' },
          { id: '312', name: '转基因' },
          { id: '313', name: '测序/合成' },
          { id: '314', name: '免疫与抗体' },
          { id: '315', name: '分子与细胞' },
          { id: '316', name: '其他生物研发' }
        ]
      }, {
        id: '32',
        class_name: '仪器服务',
        lt_class: [
          { id: '321', name: '分析测试' },
          { id: '322', name: '仪器共享' },
          { id: '323', name: '仪器维修' },
          { id: '324', name: '仪器定制改装' }
        ]
      }]
  }
  return arr;
} 