// 博茨瓦纳各地区边界数据（简化坐标，适配画布）
// 坐标系：x(0-800), y(0-900)

const BOTSWANA_DISTRICTS = {
  KGALAGADI: {
    name: 'KGALAGADI',
    points: [[50,620],[180,580],[220,650],[200,780],[100,820],[50,750]],
  },
  GHANZI: {
    name: 'GHANZI',
    points: [[180,380],[320,360],[340,480],[300,560],[180,580],[160,500]],
  },
  NGAMILAND: {
    name: 'NGAMILAND',
    points: [[160,180],[320,160],[340,360],[320,360],[180,380],[160,300]],
  },
  CHOBE: {
    name: 'CHOBE',
    points: [[320,100],[500,80],[520,200],[480,240],[340,260],[320,160]],
  },
  CENTRAL: {
    name: 'CENTRAL',
    points: [[320,260],[520,200],[560,280],[540,480],[380,500],[340,480],[340,260]],
  },
  KWENENG: {
    name: 'KWENENG',
    points: [[220,560],[380,500],[400,580],[360,640],[220,650],[220,560]],
  },
  SOUTHERN: {
    name: 'SOUTHERN',
    points: [[180,650],[360,640],[380,720],[340,780],[200,780],[180,700]],
  },
  NORTH_EAST: {
    name: 'NORTH EAST',
    points: [[540,200],[660,220],[640,360],[540,380],[520,280],[540,200]],
  },
  KGATLENG: {
    name: 'KGATLENG',
    points: [[400,540],[540,480],[560,560],[520,620],[400,620],[400,540]],
  },
  SOUTH_EAST: {
    name: 'SOUTH EAST',
    points: [[380,620],[520,620],[520,700],[400,720],[360,680],[380,620]],
  },
};

// 11个观测站点
const OBSERVATION_SITES = [
  { id: 1,  name: 'Mabuasehube',  x: 160, y: 660, district: 'KGALAGADI' },
  { id: 2,  name: 'Tshane',       x: 190, y: 620, district: 'KGALAGADI' },
  { id: 3,  name: 'Hukuntsi',     x: 230, y: 580, district: 'KGALAGADI' },
  { id: 4,  name: 'Kanye',        x: 370, y: 700, district: 'SOUTHERN' },
  { id: 5,  name: 'Gaborone',     x: 430, y: 670, district: 'SOUTH_EAST' },
  { id: 6,  name: 'Serowe',       x: 490, y: 450, district: 'CENTRAL' },
  { id: 7,  name: 'Palapye',      x: 500, y: 510, district: 'CENTRAL' },
  { id: 8,  name: 'Kasane',       x: 460, y: 110, district: 'CHOBE' },
  { id: 9,  name: 'Kazungula',    x: 500, y: 85,  district: 'CHOBE' },
  { id: 10, name: 'Maun',         x: 300, y: 300, district: 'NGAMILAND' },
  { id: 11, name: 'Shakawe',      x: 175, y: 210, district: 'NGAMILAND' },
];

// 湿地区域（雨季会有蝴蝶聚集）
const WETLANDS = [
  { x: 200, y: 250, rx: 40, ry: 55 },
  { x: 390, y: 320, rx: 45, ry: 50 },
  { x: 420, y: 370, rx: 30, ry: 35 },
];

// 四个迁徙阶段的配置
const MIGRATION_PHASES = [
  {
    id: 1,
    name: 'Early Aggregation',
    period: 'Feb 11 – Feb 28',
    description: '白色雌蝶在博茨瓦纳南部湿地大量聚集，尚未开始定向飞行。',
    direction: null,       // 无方向
    density: 0.4,
    sites: [1, 2, 3, 4, 5],  // 活跃站点
    color: '#a8d8a8',
  },
  {
    id: 2,
    name: 'Initiation',
    period: 'Mar 1',
    description: 'Mabuasehube保护区开始出现定向飞行，方向尚不稳定。',
    direction: 65,         // 角度（ENE方向约65度）
    density: 0.5,
    sites: [1, 2, 3],
    color: '#f9e784',
  },
  {
    id: 3,
    name: 'Peak Migration',
    period: 'Mar 2 – Mar 22',
    description: '方向稳定为ENE，密度持续高涨。晴天飞行，阴天暂停。',
    direction: 65,
    density: 0.9,
    sites: [1, 2, 3, 4, 5, 6, 7],
    color: '#f4a261',
  },
  {
    id: 4,
    name: 'Decline',
    period: 'Apr 1 – Apr 21',
    description: '主要迁徙在四月初结束，北部地区仍有零星活动。',
    direction: 65,
    density: 0.2,
    sites: [8, 9, 10, 11],
    color: '#a8c0e8',
  },
];