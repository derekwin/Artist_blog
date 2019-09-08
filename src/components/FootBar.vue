<template>

    <div class="row  justify-center ">
        <div class="col-md-6  shadow-10 bg-green-1 glossy" >
            
            <div class="q-pa-md row justify-center">
                <q-chip clickable color="green" text-color="white" icon="fab fa-vuejs" square>vue.js</q-chip>
                <q-chip clickable color="blue" text-color="white" icon="img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg" square>
                    quasar
                </q-chip>
                <q-chip clickable color="pink-4" text-color="white" icon="img:https://flask.palletsprojects.com/en/1.1.x/_static/flask-icon.png" square>
                    <span>flask</span>
                </q-chip>
            </div>

            
            <div class="q-pa-md q-gutter-xs row justify-center ">
                <q-avatar 
                clickable 
                @click="$router.push('/wechat')"
                size="35px" 
                color="grey-2" 
                text-color="white" 
                icon="img:https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico" 
                />
                
                <q-avatar 
                clickable 
                @click="$router.push('/qq')"
                size="35px" 
                color="grey-3" 
                text-color="white" 
                icon="img:https://im.qq.com/favicon.ico" 
                />
                
                <q-avatar 
                clickable 
                @click="go_site('https://space.bilibili.com/390346133')"
                size="35px" 
                color="grey-4" 
                text-color="white" 
                icon="img:https://space.bilibili.com/favicon.ico" 
                />

                <q-avatar 
                clickable 
                @click="go_site('https://www.linkedin.com/in/%E6%99%8B%E5%B0%A7-%E5%88%98-596535141/')"
                size="35px" 
                color="grey-5" 
                text-color="white" 
                icon="img:https://static-exp2.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" 
                />

                <q-avatar   
                clickable 
                @click="go_site('https://music.163.com/#/artist?id=30791627')"
                size="35px" 
                color="grey-6" 
                text-color="white" 
                icon="img:http://s1.music.126.net/style/favicon.ico?v20180823" 
                />

                <q-avatar   
                clickable 
                @click="go_site('https://seclee.tuchong.com/')"
                size="35px" 
                color="grey-7" 
                text-color="white" 
                icon="img:http://static.tuchong.net/images/favicon.ico?1" 
                />

                <q-avatar   
                clickable 
                @click="go_site('https://weibo.com/5752406796/profile?topnav=1&wvr=6&is_all=1')"
                size="35px" 
                color="grey-8" 
                text-color="white" 
                icon="img:https://weibo.com/favicon.ico" 
                />

                <q-avatar   
                clickable 
                @click="go_site('https://github.com/derekwin')"
                size="35px" 
                color="grey-9" 
                text-color="white" 
                icon="fab fa-github" 
                />
                
                <q-avatar   
                clickable 
                @click="go_site('https://metapop.com/seclee')"
                size="35px" 
                color="grey-10" 
                text-color="white" 
                icon="img:https://uia.metapop.com/assets/images/favicon/favicon-196x196.png"  
                />
            </div>
            
            <div class="q-pa-xs row justify-center">
                <p class="text-green-10 center"> Released under the MIT.</p>
            </div>
            <div class="q-pa-none row justify-center">
                <p class="text-green-10 center"> Copyright © 2019 seclee(derekliu)</p>
            </div>
            <div class="q-pa-xs row justify-center">
                <p class="text-green-10 center"> 晋ICP备17001289号-1</p>
                
            </div>

        </div>
    </div>
</template>

<script>
export default {
    methods: {
        go_site(url) {
            window.open(url)
        },
  }
}
</script>

<style lang="stylus" scoped>
    .my-menu-pic 
      height 100%
      max-height 150px
</style> 


vue  flask  quasar