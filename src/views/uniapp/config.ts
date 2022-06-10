import { ItypeMenu, IDetailMenu, IDetailConfig } from "./type";
export const typeMenu: ItypeMenu[] = [
  {
    name: "轮播",
    id: 1
  },
  {
    name: "表单",
    id: 2
  },
  {
    name: "标题",
    id: 3
  },
  {
    name: "栅格布局",
    id: 4
  },
  {
    name: "导航",
    id: 5
  },
  {
    name: "商品",
    id: 6
  },
  {
    name: "上传附件",
    id: 7
  },
  {
    name: "按钮",
    id: 8
  },
  {
    name: "搜索",
    id: 9
  }
];

export const detailMenu: IDetailMenu[] = [
  {
    id: 1,
    children: [
      {
        id: 1,
        preview: require("@/assets/uniapp/preview/swiper1.png")
      }
    ]
  },
  {
    id: 2,
    children: [
      {
        id: 11,
        preview: require("@/assets/uniapp/preview/form1.png")
      },
      {
        id: 12,
        preview: require("@/assets/uniapp/preview/form2.png")
      },
      {
        id: 13,
        preview: require("@/assets/uniapp/preview/form3.png")
      },
      {
        id: 14,
        preview: require("@/assets/uniapp/preview/form4.png")
      },
      {
        id: 15,
        preview: require("@/assets/uniapp/preview/form5.png")
      }
    ]
  },
  {
    id: 3,
    children: [
      {
        id: 31,
        preview: require("@/assets/uniapp/preview/title1.png")
      },
      {
        id: 32,
        preview: require("@/assets/uniapp/preview/title2.png")
      },
      {
        id: 33,
        preview: require("@/assets/uniapp/preview/title3.png")
      }
    ]
  },
  {
    id: 4,
    children: [
      {
        id: 41,
        preview: require("@/assets/uniapp/preview/gird1.png")
      }
    ]
  },
  {
    id: 5,
    children: [
      {
        id: 51,
        preview: require("@/assets/uniapp/preview/nav1.png")
      },
      {
        id: 52,
        preview: require("@/assets/uniapp/preview/nav2.png")
      },
      {
        id: 53,
        preview: require("@/assets/uniapp/preview/nav3.png")
      },
      {
        id: 54,
        preview: require("@/assets/uniapp/preview/nav4.png")
      }
    ]
  },
  {
    id: 6,
    children: [
      {
        id: 61,
        preview: require("@/assets/uniapp/preview/goods1.png")
      },
      {
        id: 62,
        preview: require("@/assets/uniapp/preview/goods2.png")
      }
    ]
  },
  {
    id: 7,
    children: [
      {
        id: 71,
        preview: require("@/assets/uniapp/preview/upload1.png")
      },
      {
        id: 72,
        preview: require("@/assets/uniapp/preview/upload2.png")
      },
      {
        id: 73,
        preview: require("@/assets/uniapp/preview/upload3.png")
      },
      {
        id: 74,
        preview: require("@/assets/uniapp/preview/upload4.png")
      }
    ]
  },
  {
    id: 8,
    children: [
      {
        id: 81,
        preview: require("@/assets/uniapp/preview/button1.png")
      },
      {
        id: 82,
        preview: require("@/assets/uniapp/preview/button2.png")
      },
      {
        id: 83,
        preview: require("@/assets/uniapp/preview/button3.png")
      },
      {
        id: 84,
        preview: require("@/assets/uniapp/preview/button4.png")
      },
      {
        id: 85,
        preview: require("@/assets/uniapp/preview/button5.png")
      },
      {
        id: 86,
        preview: require("@/assets/uniapp/preview/button6.png")
      }
    ]
  },
  {
    id: 9,
    children: [
      {
        id: 91,
        preview: require("@/assets/uniapp/preview/search1.png")
      },
      {
        id: 92,
        preview: require("@/assets/uniapp/preview/search2.png")
      }
    ]
  }
];

export const detailConfig: IDetailConfig[] = [
  {
    id: 1,
    name: "swiper1"
  },
  {
    id: 11,
    name: "form1"
  },
  {
    id: 12,
    name: "form2"
  },
  {
    id: 13,
    name: "form3"
  },
  {
    id: 14,
    name: "form4"
  },
  {
    id: 15,
    name: "form5"
  },
  {
    id: 31,
    name: "title1"
  },
  {
    id: 32,
    name: "title2"
  },
  {
    id: 33,
    name: "title3"
  },
  {
    id: 41,
    name: "gird1"
  },
  {
    id: 51,
    name: "nav1"
  },
  {
    id: 52,
    name: "nav2"
  },
  {
    id: 53,
    name: "nav3"
  },
  {
    id: 54,
    name: "nav4"
  },
  {
    id: 61,
    name: "goods1"
  },
  {
    id: 62,
    name: "goods2"
  },
  {
    id: 71,
    name: "upload1"
  },
  {
    id: 72,
    name: "upload2"
  },
  {
    id: 73,
    name: "upload3"
  },
  {
    id: 74,
    name: "upload4"
  },
  {
    id: 81,
    name: "button1"
  },
  {
    id: 82,
    name: "button2"
  },
  {
    id: 83,
    name: "button3"
  },
  {
    id: 84,
    name: "button4"
  },
  {
    id: 85,
    name: "button5"
  },
  {
    id: 86,
    name: "button6"
  },
  {
    id: 91,
    name: "search1"
  },
  {
    id: 92,
    name: "search2"
  }
];
