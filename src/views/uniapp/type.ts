/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-12 09:38:22
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-16 15:32:07
 * @FilePath: /admin/src/views/uniapp/type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface ItypeMenu {
  name: string;
  id: number;
}
export interface IDMChildren {
  id: number;
  preview: any;
}
export interface IDetailMenu {
  id: number;
  children: IDMChildren[];
}

export interface IDetailConfig {
  id: number;
  name: string;
}
