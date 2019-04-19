<template>
  <div class="header">
    <el-col :span="24">
    <el-row :gutter="24" id="icon">
      <el-col :span="6"><img src="/static/img/gongsi.png"></el-col>
      <el-col :span="1" :offset="10"><img src="/static/img/qq.png"></el-col>
      <el-col :span="1" :offset="0" ><img src="/static/img/shouji.png"></el-col>
    </el-row>
    <el-row>
      <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">公司概况</el-menu-item>
      <el-menu-item index="3">产品方案</el-menu-item>
      <el-submenu index="4">
        <template slot="title">服务专区</template>
        <el-menu-item index="4-1">上海籍</el-menu-item>
        <el-menu-item index="4-2">非上海籍</el-menu-item>
        <el-menu-item index="4-3">应届毕业生</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">联系我们</el-menu-item>
    </el-menu>
    </el-row>
    </el-col>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  margin-top: 10px;
}
.el-menu-demo {
  width: 100%;
}
</style>
