// // // //商品信息
const products = [
  {
    id: 1,

    image: "DM_20240607230047_024.jpg",
    description1:
      "小米12 Pro 天玑版 天玑9000+处理器 5000万疾速影像 2K超视感屏 120Hz高刷 67W快充",
    description2:
      "天玑9000+处理器、5160mAh大电量、2KAmoled超视感屏【点击购买小米11Ultra，戳】",
    price: 2999,
    type: "黑色 128G",
  },
  {
    id: 2,

    image: "DM_20240607230047_025.jpg",
    description1:
      "Redmi K50 天玑8100 2K柔性直屏 OIS光学防抖 67W快充 5500mAh大电量",
    description2:
      "【品质好物】天玑8100，2K直屏，5500mAh大电量【Note12Pro火热抢购中】",
    price: 2099,
    type: "墨羽 128G",
  },
  {
    id: 3,

    image: "DM_20240607230047_026.jpg",
    description1:
      "小米 Xiaomi Book Pro 14 2022 锐龙版 2.8K超清大师屏 高端轻薄笔记本电脑",
    description2:
      "【双十一大促来袭】指定型号至高优惠1000，以旧换新至高补贴1000元，晒单赢好礼",
    price: 5999,
    type: "新小米Pro 14英寸 2.8K屏 R7 16G 512",
  },
  {
    id: 4,

    image: "DM_20240607230047_027.jpg",
    description1:
      "Apple iPhone 14(A2884)128GB 支持移动联通电信5G 双卡双待手机,",
    description2:
      "【11.11大爱超大爱】指定iPhone14产品限时限量领券立减601元!!!部分iPhone产品现货抢购确认收货即送原厂手机壳10元优惠券!!!猛戳",
    price: 5999,
    type: "黑色 128G",
  },
  {
    id: 5,

    image: "2.jpg",
    description1: "HUAWEI Mate 50 直屏旗舰 超光变XMAGE影像 北斗卫星消息",
    description2:
      "【华为Mate50新品上市】内置66W华为充电套装，超光变XMAGE影像,北斗卫星消息，鸿蒙操作系统3.0！立即抢购！华为新品可持续计划，猛戳》 ",
    price: 4999,
    type: "黑色 128G",
  },
  {
    id: 6,

    image: "3.jpg",
    description1:
      "OPPO Reno8 8GB+128GB 鸢尾紫 新配色上市 80W超级闪充 5000万水光人像三摄",
    description2:
      "【11.11提前购机享价保，好货不用等，系统申请一键价保补差!】【Reno8Pro爆款优惠】 ",
    price: 2999,
    type: "紫色 128G",
  },
  {
    id: 7,

    image: "1.jpg",
    description1: "华为 HUAWEI P20 ",
    description2:
      "AI智慧全面屏 6GB +64GB 亮黑色 全网通版 移动联通电信4G手机 双卡双待手机 双卡双待 ",
    price: 3699,
    type: "金色 128G",
  },
  {
    id: 8,

    image: "6.jpg",
    description1:
      "小米 红米5A 全网通版 3GB+32GB 香槟金 移动联通电信4G手机 双卡双待",
    description2:
      "8天超长待机，137g轻巧机身，高通骁龙处理器小米6X低至1299，点击抢购 ",
    price: 1999,
    type: "金色 128G",
  },
  {
    id: 9,

    image: "5.png",
    description1:
      "万和（Vanward)燃气热水器天然气家用四重防冻直流变频节能全新升级增压水伺服恒温高抗风",
    description2:
      "【家电11.11享低价，抢到手价不高于1199】【发布种草秀享好礼！同价11.11买贵补差】爆款超一级能效零冷水】  ",
    price: 1699,
    type: "JSQ25-565W13【13升】【恒温旗舰款】",
  },
];

// 用户信息
const users = [
  {
    name: "小明",
    username: "xiaoming",
    password: 123456,
    iPhone: 18961511111,
    address: "广东省 深圳市 福田区 东晓街道",
    cart: [
      { id: 1, productId: 1, num: 1, isCheck: false },
      { id: 2, productId: 2, num: 1, isCheck: false },
    ],
    order: [
      {
        username: "xiaoming",
        time: "2024-5-11 15:37:16",
        id: 1,
        fs: "微信",
        products: [
          { id: 1, productId: 1, num: 1 },
          { id: 2, productId: 2, num: 1 },
        ],
        status: true,
        totalPrice: 9999,
      },
      {
        fs: "微信",
        username: "xiaoming",
        time: "2024-5-11 15:37:16",
        id: 2,
        products: [{ id: 1, productId: 3, num: 1 }],
        status: false,
        totalPrice: 9999,
      },
      {
        fs: "微信",
        username: "xiaoming",
        time: "2024-5-11 15:37:16",
        id: 3,
        products: [{ id: 1, productId: 3, num: 1 }],
        status: false,
        totalPrice: 9999,
      },
    ],
    totalPrice: 0,
  },
];

// //轮播图

const carousel = [
  "DM_20240607230047_020.jpg",
  "DM_20240607230047_021.jpg",
  "DM_20240607230047_022.jpg",
  "DM_20240607230047_001.png",

  "DM_20240607230047_002.png",
  "DM_20240607230047_004.png",
  "DM_20240607230047_005.png",
];

// // 分类;
const classify = {
  clothes: [
    { img: "1.png", name: "T恤" },
    { img: "2.jpg", name: "外套" },
    { img: "3.jpg", name: "休闲裤" },
    { img: "4.jpg", name: "牛仔裤" },
    { img: "5.jpg", name: "衬衫" },
  ],
  car: [
    { img: "1.png", name: "全新整车" },
    { img: "2.jpg", name: "车载电器" },
    { img: "3.jpg", name: "维修保养" },
    { img: "4.jpg", name: "汽车装饰" },
  ],
  computer: [
    { img: "1.jpg", name: "平板电脑" },
    { img: "2.jpg", name: "笔记本" },
    { img: "3.jpg", name: "硬盘" },
  ],
  electrical: [
    { img: "1.jpg", name: "电视" },
    { img: "2.jpg", name: "空调" },
    { img: "3.jpg", name: "洗衣机" },
    { img: "4.jpg", name: "冰箱" },
    { img: "5.jpg", name: "厨卫大电" },
  ],
  furniture: [
    { img: "1.jpg", name: "厨房卫浴" },
    { img: "2.jpg", name: "灯饰照明" },
    { img: "3.jpg", name: "五金工具" },
    { img: "4.jpg", name: "卧室家具" },
    { img: "5.jpg", name: "客厅家具" },
  ],
  iphone: [
    { img: "1.jpg", name: "手机通信" },
    { img: "2.jpg", name: "手机配件" },
    { img: "3.jpg", name: "摄像摄影" },
    { img: "4.jpg", name: "影音娱乐" },
    { img: "5.jpg", name: "数码配件" },
  ],
};

// //全部订单
const allOrder = [
  {
    username: "xiaoming",
    time: "2024-5-11 15:37:16",
    id: 1,
    fs: "微信",
    products: [
      { id: 1, productId: 1, num: 1 },
      { id: 2, productId: 2, num: 1 },
    ],
    status: true,
    totalPrice: 9999,
  },
  {
    fs: "微信",
    username: "xiaoming",
    time: "2024-5-11 15:37:16",
    id: 2,
    products: [{ id: 1, productId: 3, num: 1 }],
    status: false,
    totalPrice: 9999,
  },
  {
    fs: "微信",
    username: "xiaoming",
    time: "2024-5-11 15:37:18",
    id: 3,
    products: [{ id: 1, productId: 3, num: 1 }],
    status: false,
    totalPrice: 9999,
  },
];

// // 管理员;
const adim = { username: "admin", password: 123456 };

let productsString;

// productsString = JSON.stringify(products);
// localStorage.setItem("products", productsString);

// productsString = JSON.stringify(users);
// localStorage.setItem("users", productsString);

// productsString = JSON.stringify(allOrder);
// localStorage.setItem("allOrder", productsString);

// productsString = JSON.stringify(carousel);
// localStorage.setItem("carousel", productsString);

// productsString = JSON.stringify(classify);
// localStorage.setItem("classify", productsString);

// productsString = JSON.stringify(adim);
// localStorage.setItem("adim", productsString);
