/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-12 15:46:10
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-06-09 15:22:03
 * @FilePath: /admin/src/components/uniapp/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const files = require.context("./src", true, /\.vue/);
const components: { [key: string]: any } = {};
files.keys().forEach((key) => {
  const componentName = key.replace(/^\.\/(.*)\.\w+$/, "$1").split("/")[1];
  components[componentName] = files(key).default;
});
export default components;
