<template>
    <q-page-container>
      <q-page>
    <!--   issue
       <q-img src="../assets/bg_pic/dark_dawn.jpg">
          <div >
            
          </div>
    </q-img> -->
    <!-- <img src="../assets/bg_pic/dark_dawn.jpg"> -->
        <div class="row justify-between">
          <q-parallax :src="require('@/assets/bg_pic/color_dark.jpg')" :height="800" :speed="1.0">
            <h1 class='text-white text-center'>SECLEE</h1>
            <h5 class="text-white text-center">Welcome to seclee's persional website</h5>
          </q-parallax>
        </div>

        <div class="row justify-center ">
          <div class="col-11 col-md-auto">
            <q-timeline color="secondary">    
              <q-timeline-entry class="text-green-10" heading>
                远古时期
              </q-timeline-entry>
              
              <q-timeline-entry 
              class="text-green-10"
              title="blog.geeklab.club (v.0.1)"
              subtitle="November,2016"
              >
                <div class="text-black"> 
                  <b class="text-green-10">~</b> 2016年末，极客协会官网上线，远古时期的个人站搭建在协会官网的服务器上，域名采用了geeklab.club的子域名blog。<br> <b class="text-green-10">~</b> 当时的网站是基于wordpress的blog模板搭建的，后来陆陆续续在上面写了一些关于python爬虫的文章，文章价值不高，所以在后续迁移的过程中，也就没有保留下来。
                </div>
              </q-timeline-entry>

              <q-timeline-entry class="text-green-10" heading>
                  近代
              </q-timeline-entry>

              <q-timeline-entry 
              class="text-green-10"
              title="域名：seclee.com"
              subtitle="October,2017"
              >
                <div class="text-black">
                  <b class="text-green-10">~</b> 2017年国庆节，购入seclee.com域名，自此个人网站开始使用该域名。
                </div>
              </q-timeline-entry>

              <q-timeline-entry 
              class="text-green-10"
              title="上线：blog.seclee.com (v.1.0)"
              subtitle="November,2017"
              >
                <div class="text-black">
                  <b class="text-green-10">~</b> 2017年11月初，个人网站全新改版，重新上线。新网站基于ghost开源blog，搭建在外网服务器上。
                  <br><b class="text-green-10">~</b> 网站主体分为两部分。一部分是www主机名下的个人页面，使用HTML5实现的展示首页，另一部分是blog主机名下的ghost博客，用于记录各种教程，笔记。
                </div>
              </q-timeline-entry>

              <q-timeline-entry 
              class="text-green-10"
              title="近代的结束"
              subtitle="April,2019"
              >
                <div class="text-black">
                  <b class="text-green-10">~</b> 2019年4月末，服务器供应商毫无预兆的破产。由于安装的ghost版本有更新问题，当时网站是没有备份的。就这样，累计一年半，多达数十篇精华教程的近代版本blog突然去世。
                </div>
              </q-timeline-entry>
            </q-timeline>

            <q-parallax :src="require('@/assets/bg_pic/test.jpg')" :height="300" >
              <h4 class='text-white text-center'>No sweet without sweat.</h4>
            </q-parallax>

            <q-timeline color="secondary">
              <q-timeline-entry class="text-green-10" heading>
                    NOW
              </q-timeline-entry>

              <q-timeline-entry 
              class="text-green-10"
              title="v.2.0计划"
              subtitle="June,2019"
              >
                  <div class="text-black">
                    <b class="text-green-10">~</b> 2019年6月，开始学习vue，blog2.0拯救计划正式开始。
                  </div>
              </q-timeline-entry>

              <q-timeline-entry 
              class="text-green-10"
              title="v.2.0开工"
              subtitle="August,2017"
              >
                <div class="text-black">
                  <b class="text-green-10">~</b> 2019年8月，正式开工，新网站基于vue，接入quasar作为前端框架，flask提供后端服务。
                </div>
              </q-timeline-entry>

              <q-timeline-entry 
              class="text-green-10"
              title="重生：www.seclee.com(v.2.0)"
              subtitle="August,2019"
              >
                <div class="text-black">
                  <b class="bg-green-10 text-white text-h5">-  name : Artist  -</b><br><br>
                  <b class="text-green-10">~</b> 历时四个月，重新上线。
                  <br><b class="text-green-10">~</b> 2.0站点包括四个部分，<br>1.blog页面，存放各种文章教程，<br>2.gallery页面，存放个人的摄影作品，<br>3.Music页面，存放个人的自媒体平台内容，<br>4.plugins页面，后续拓展本站功能，预计加入在线图片处理系统等功能。
                </div>
              </q-timeline-entry>
              <q-separator color="green" insert  class=" row items-start q-gutter-md "/>
            </q-timeline>
            
            <div class="q-pa-md">
              <q-chip 
              clickable 
              @click="go_site('https://github.com/derekwin')" 
              class="bg-green-8 text-white shadow-8" 
              >
                <q-avatar class="shadow-5 text-black bg-green-6"  icon="fab fa-github-alt"/>
                @derekwin
              </q-chip>
              <q-chip icon="fas fa-hand-point-left" class="bg-white">click to my github</q-chip>
            </div>


            <div class="q-pa-md row items-start q-gutter-md justify-center" >
              <q-card  class="my-card shadow-7" >                 
                <q-img :src="require('@/assets/bg_pic/giphy.gif')"  >
                <div class="absolute-bottom text-white text-h6">
                  <span @click="go_site('https://github.com/derekwin/Artist_blog')">开源blog系统：Artist</span>
                </div>
                </q-img>
                <q-card-section>
                  <span class="text-subtitle1">基于vue&quasar&flask的<span class="text-green-10">多端自适应</span>开源博客</span>
                </q-card-section>
                  <q-card-actions >
                  <q-btn flat round color="red" icon="fab fa-github" @click="go_site('https://github.com/derekwin/Artist_blog')"/>
                  <q-btn flat round color="teal" icon="bookmark" />
                  <q-btn flat round color="primary" icon="share" />
                </q-card-actions>
              </q-card>

              <q-card  class="my-card shadow-7" >                 
                <q-img :src="require('@/assets/bg_pic/color.jpg')" class="my-card-pic">
                <div class="absolute-bottom text-white text-h6">
                  <span @click="go_site('https://github.com/derekwin/Artist_blog')">色差计算系统</span>
                </div>
                </q-img>
                <q-card-section>
                  <span class="text-subtitle1">基于python3&tkinter&opencv&pillow的<span class="text-green-10">图像采集，预处理，色差计算</span>工具</span>
                </q-card-section>
                  <q-card-actions >
                  <q-btn flat round color="red" icon="fab fa-github" @click="go_site('https://github.com/derekwin/Software-for-calculating-chromatic-aberration')"/>
                  <q-btn flat round color="teal" icon="bookmark" />
                  <q-btn flat round color="primary" icon="share" />
                </q-card-actions>
              </q-card>

              <q-card  class="my-card shadow-7" >                 
                <q-img :src="require('@/assets/bg_pic/desktop.jpg')" class="my-card-pic">
                <div class="absolute-bottom text-white text-h6">
                  <span @click="go_site('https://github.com/derekwin/Artist')">色差计算系统</span>
                </div>
                </q-img>
                <q-card-section>
                  <span class="text-subtitle1">基于python3&tkinter&opencv&pillow的<span class="text-green-10">图像采集，预处理，色差计算</span>工具</span>
                </q-card-section>
                  <q-card-actions >
                  <q-btn flat round color="red" icon="fab fa-github" @click="go_site('https://github.com/derekwin/Software-for-calculating-chromatic-aberration')"/>
                  <q-btn flat round color="teal" icon="bookmark" />
                  <q-btn flat round color="primary" icon="share" />
                </q-card-actions>
              </q-card>

            </div>

            <div class="q-pa-md">
              <q-card class="my_card">
                <q-parallax :src="require('@/assets/bg_pic/color_dark.jpg')" :height="400" >
                  <h2 class="bg-white text-green-10"><b>About me</b></h2>
                  <q-btn color="green" icon="fas fa-hand-point-right" label="more" @click="$router.push('/about')" />
                </q-parallax>

              </q-card>
            </div>

          </div>
          
        </div>
        
      </q-page>
    </q-page-container>
 
</template>

<script>


export default {

  name: 'PageHome',
  components:{
    
  },
  methods: {
        go_site(url) {
            window.open(url)
        },
  }

}
</script>


<style lang="stylus" scoped>
    .my-card
      width 100%
      max-width 350px
    .my-card-pic 
      height 100%
      max-height 350px
</style>   
