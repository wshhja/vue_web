<template>
  <div>
      <div id="lunbotu">
        <el-carousel :interval="5000" type="card" height="400px">
          <el-carousel-item>
            <img src="/static/img/1.jpg"/>
          </el-carousel-item>
          <el-carousel-item>
            <img src="/static/img/2.jpeg"/>
          </el-carousel-item>
          <el-carousel-item>
            <img src="/static/img/3.jpg"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <el-row :gutter="24" class="tit">
          <el-col :span="12" :offset="4" class="el-icon-star-on"><div class="el-icon-star-on title">新闻速递</div></el-col>
          <el-col :span="18" :offset="5"><div class="line"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6" v-for="(o, index) in 9" :key="o" :offset="1">
            <el-card :body-style="{ padding: '0px' }" shadow="hover" class="newscard">
              <img src="/static/img/1.jpg" class="image" v-show="index != 3">
              <div style="padding-bottom: 20px; line-height: 80px;">
                <span>test</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
import ACTIONS from '../../store/actions-types'
export default {
  data: () => ({
    show: true,
    currentDate: new Date()
  }),
  created () {
    let self = this
    self.$store.dispatch(ACTIONS.GET_NEWS, self)
  },
  mounted() {
    let self = this
    self.handleAnimate()
  },
  methods:{
    handleAnimate() {
      var a,b,c;
      a=$(window).height();	
      $(window).scroll(function(){		
        var b=$(this).scrollTop();
        $(".newscard").each(function(){
          c=$(this).offset().top;							
          if(a+b>c){
            $(this).addClass("move");
          }
          else{
            $(this).removeClass("move")
          }
        })
      })
	  }
  }
}
</script>
<style>
/* <!--轮播图--> */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 100px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /* <!--卡片--> */
  .move { animation:move 1s;}
  @keyframes move{
    from{ opacity:0; margin-left:500px;}
    to{ opacity:1; margin-left:0;}
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 2px;
    line-height: 2px;
  }
  .image {
    width: 100%;
    /* display: block; */
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
  .el-col{
    margin-bottom: 20px;
  }
  /* <!--标题格式--> */
  .title{
    font-size: 25px;
  }
  .line {
    width: 100%;
    height: 5px;
    background-color: cornflowerblue;
  }
</style>
