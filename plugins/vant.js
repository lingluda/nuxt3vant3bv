import { defineNuxtPlugin } from '#app';
import { Row, Col, Icon, Image, Cell, CellGroup,Tabbar, TabbarItem,Uploader } from 'vant';

// 目前在 nuxt 中无法按需引入样式，因此采用手动引入的方式
import 'vant/lib/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .use(Row)
    .use(Col)
    .use(Image)
    .use(Icon)
    .use(TabbarItem)
    .use(Tabbar)
    .use(Uploader)
    .use(Cell)
    .use(CellGroup);
    //Tabbar, TabbarItem
});