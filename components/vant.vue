<template>
  <div>
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o" name="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" name="message">消息</van-tabbar-item>
      <van-tabbar-item icon="friends-o" name="shopcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" name="person">个人信息</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    const onChange = (index) =>{//alert(index)
      return navigateTo({ path: index})
    }
    return { active,onChange };
  },
}
</script>

<style lang="less">

</style>