<template>
  <div>
    <el-container>
      <el-header height="200px"> <Header id="header"></Header></el-header>
      <el-main><router-view id="content"></router-view></el-main>
      <el-footer height="120px">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import header from './zujian/header.vue'
export default {
  name: 'HelloWorld',
  created () {
    this.$router.replace('/homepage')
  },
  components: {
    'Header': header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-header, .el-footer {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #B3C0D1;
}
.el-footer{
  padding-bottom: 0px;
}
</style>
