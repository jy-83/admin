<template>
  <div class="uniapp">
    <el-container class="container">
      <el-header class="header">
        <el-button type="danger" size="default" :icon="DeleteFilled"
          >清空画布</el-button
        >
        <el-button size="default" :icon="Download">生成文件</el-button>
        <el-button type="primary" size="default" :icon="FolderAdd"
          >保存</el-button
        >
      </el-header>
      <el-main class="main">
        <el-container class="containerChild">
          <el-aside class="leftAside">
            <el-container>
              <el-aside class="typeMenu scroll">
                <ul>
                  <li
                    v-for="item in typeMenu"
                    :key="item.id"
                    :class="{ active: item.id == typeId }"
                    @click="changeType(item.id)"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </el-aside>
              <el-container class="detailMenu scrollY scroll">
                <ul>
                  <VueDraggable
                    v-model="detailList"
                    item-key="id"
                    @end="end"
                    :group="{
                      name: 'editor',
                      pull: 'clone',
                      put: false
                    }"
                  >
                    <template #item="{ element }">
                      <li style="width: 100%">
                        <img :src="element.preview" style="width: 100%" />
                      </li>
                    </template>
                  </VueDraggable>
                </ul>
              </el-container>
            </el-container>
          </el-aside>
          <el-main class="mainChild">
            <div
              class="editor scrollY scroll"
              :class="{ editorHas: pageJson.background }"
            >
              <VueDraggable
                item-key="id"
                :group="{ name: 'editor', put: true }"
                style="height: 100%"
                @add.prevent="add"
                v-model="editorJson"
                @end="end"
              >
                <template #item="{ element, index }">
                  <div :class="{ activeComponent: currentComponent === index }">
                    <component :is="element.name" :key="index"></component>
                  </div>
                </template>
              </VueDraggable>
            </div>
          </el-main>
          <el-aside class="rightAside">
            <el-tabs stretch v-model="currentTab">
              <el-tab-pane label="页面配置" name="first">
                <el-form label-width="100">
                  <el-form-item label="页面背景色">
                    <el-radio-group v-model="pageJson.background">
                      <el-radio-button :label="false">#ffffff</el-radio-button>
                      <el-radio-button :label="true">#f8f8f8</el-radio-button>
                    </el-radio-group>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </el-aside>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { DeleteFilled, Download, FolderAdd } from "@element-plus/icons-vue";
import { typeMenu, detailMenu, detailConfig } from "./config";
import { IDMChildren, IDetailConfig } from "./type";
import _ from "lodash";
import VueDraggable from "vuedraggable";
import {
  swiper1,
  form1,
  form2,
  form3,
  form4,
  form5,
  title1,
  title2,
  gird1,
  nav1,
  nav2,
  nav3,
  nav4,
  goods1
} from "@/components/uniapp/index";
export default defineComponent({
  components: {
    VueDraggable,
    swiper1,
    form1,
    form2,
    form3,
    form4,
    form5,
    title1,
    title2,
    gird1,
    nav1,
    nav2,
    nav3,
    nav4,
    goods1
  },
  setup() {
    let typeId = ref(); //最左侧选中样式的id
    let detailList = ref<IDMChildren[]>([]); //左侧选中样式下面的子样式列表
    let editorJson = ref<IDetailConfig[]>([]); //中间部分的json
    let pageJson = ref({
      background: false
    });
    const changeDetailList = (id: number) => {
      detailList.value = _.cloneDeep(
        detailMenu.filter((item) => {
          return item.id === id;
        })[0].children
      );
    }; //修改最左侧的id获取到的样式列表事件
    const changeType = (id: number) => {
      typeId.value = id;
      changeDetailList(id);
    }; //最左侧的点击事件
    const add = (e: any) => {
      let { newIndex, oldIndex } = e;
      let currentId = detailList.value[oldIndex].id;
      let currentComponent = detailConfig.find((item) => item.id === currentId);
      if (currentComponent) {
        editorJson.value[newIndex] = currentComponent;
      }
    };
    const end = (e: any) => {
      console.log(e);
    };
    const currentTab = ref("first");
    //当前选中的组件索引
    let currentComponent = ref(0);
    changeType(1);
    return {
      DeleteFilled,
      Download,
      FolderAdd,
      typeMenu,
      changeType,
      typeId,
      detailList,
      editorJson,
      add,
      currentComponent,
      end,
      currentTab,
      pageJson
    };
  }
});
</script>

<style scoped lang="scss">
.uniapp {
  height: 100%;
  .container {
    height: 100%;
    .header {
      padding: 0;
      box-shadow: var(--el-box-shadow-lighter);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .main {
      padding: 0;
      .containerChild {
        height: 100%;
        .leftAside {
          height: 100%;
          box-shadow: var(--el-box-shadow-lighter);
          position: relative;
          z-index: 1;
          width: 400px;
          .el-container {
            height: 100%;
            .typeMenu {
              width: 100px;
              height: 100%;
              overflow-y: auto;
              background-color: rgb(12, 33, 53);
              ul {
                list-style: none;
                padding: 0;
                margin: 0;
                color: rgb(183, 189, 195);
                li {
                  padding: 20px 0 20px 20px;
                  cursor: pointer;
                  &.active {
                    background-color: var(--el-color-primary);
                    color: #fff;
                  }
                }
              }
            }
            .detailMenu {
              ul {
                width: 100%;
                padding: 0;
                padding: 0 20px;
                list-style: none;
                box-sizing: border-box;
                margin: 0;
                li {
                  margin: 20px 0;
                  box-shadow: var(--el-box-shadow);
                  img {
                    width: 100%;
                    cursor: move;
                  }
                }
              }
            }
          }
        }
        .rightAside {
          height: 100%;
          box-shadow: var(--el-box-shadow-lighter);
        }
        .mainChild {
          height: 100%;
          padding: 0;
          background-color: #f8f8f8;
          display: flex;
          align-items: center;
          justify-content: center;
          .editorHas {
            background-color: $background !important;
          }
          .editor {
            width: 375px;
            height: calc(100% - 40px);
            background: #fff;
            overflow-y: auto;
            box-shadow: var(--el-box-shadow-lighter);
            list-style: none;

            image {
              width: 375px;
            }
          }
        }
      }
    }
  }
}

.activeComponent {
  // border: 2px dashed $color;
}
::v-deep .el-tabs__content {
  padding: 0 15px;
}
</style>
