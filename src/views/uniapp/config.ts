/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-12 09:37:00
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-16 17:25:42
 * @FilePath: /admin/src/views/uniapp/config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
    id: 31,
    name: "title1"
  },
  {
    id: 32,
    name: "title2"
  }
];
