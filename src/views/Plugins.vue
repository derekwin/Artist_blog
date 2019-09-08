<template>
    <q-page-container>
        <q-page padding>
           <div class="column col-md-6">

                <div class="q-pa-md col ">
                    <div class="q-pa-md row items-start q-gutter-md justify-center" >
                    <q-card class="my-card-title shadow-0">

                        <div class="text-center text-h2">
                            锻造铺
                            <q-badge transparent align="middle" color="orange">
                                v.1.0.0
                            </q-badge>
                        </div>
                        <div class="text-center">
                        <h6>一些功能侧重图像处理的在线工具</h6>
                        </div>
                    </q-card>
                    </div>
                </div>
                <!--no.1-->
                <div class="q-px-md q-py-xl  col bg-green-1 ">
                    <div class="row justify-center ">
                        <!-- <div class="ifpadphone() ? 'row ' : 'row div-orange-class '"> -->

                        <div class="col col-md-4 " >
                            <q-card class="my-card ">
                            <q-item>
                                <q-item-section avatar>
                                <q-avatar icon="fas fa-puzzle-piece" />
                                </q-item-section>

                                <q-item-section>
                                <q-item-label class="q-px-none"><b>文档照片矫正工具</b></q-item-label>
                                </q-item-section>
                            </q-item>  
                            <div class="q-pa-none row items-start q-gutter-md justify-center" > 
                            <img :src="require('@/assets/bg_pic/color.jpg')" class="my-img"/>
                            <img :src="require('@/assets/bg_pic/color.jpg')" class="my-img"/>
                            </div>
                            <q-card-actions align="around">
                                <q-btn flat round color="red" icon="fab fa-github" @click="go_site('https://github.com/derekwin/Software-for-calculating-chromatic-aberration')"/>
                                <q-btn flat round color="teal" icon="bookmark" />
                                <q-btn flat round color="primary" icon="share" />
                            </q-card-actions>
                            </q-card>   
                        </div>
                        <div class="col-6 col-md-6  " >
                            <q-card class="q-pa-md my-card-big ">
                                <div class="q-pa-md">

                                    <div>
                                        <subtitle1 ><b>工具状态</b>：相关模块开发中，敬请期待</subtitle1>
                                    </div>
                                    <br>
                                    <div>
                                        <b>发布时间</b>：XX.XX.XXXX    
                                    </div>  
                                    <br>    
                                    <div>
                                        <b>功能</b>：矫正倾斜的文档照片     
                                    </div>  
                                    <br>
                                    <div>
                                        <b>原理</b>：基于LAB特征点检测的图像校准   
                                    </div>
                                </div>
                                <div><br></div> 
                                <q-separator color="green" inset />
                                <div><br></div>    
                                <div class="q-py-sm q-px-md" >
                                        
                                    <q-chip clickable glossy color="orange-9" text-color="white" icon="fas fa-hand-point-right" class="glossy shadow-10">
                                        run
                                    </q-chip> 
                                    <q-chip clickable glossy color="grey-9" text-color="white" icon="fab fa-github" class="glossy shadow-10">
                                        open
                                    </q-chip> 
                                    <!-- <q-chip clickable @click="go_site('https://space.bilibili.com/390346133')" glossy color="orange-9" text-color="white" icon="fas fa-hand-point-right" class="glossy shadow-10">
                                        open
                                    </q-chip>  -->
                                </div>
                            </q-card>
                        </div>
                        </div>

                    <!-- </div> -->
                </div>

                <!--no.2-->
                <div class="q-px-md q-py-xl  col  bg-blue-1 ">
                    <div class="row justify-center ">
                        <!-- <div class="ifpadphone() ? 'row ' : 'row div-orange-class '"> -->

                        <div class="col col-md-4 " >
                            <q-card class="my-card ">
                            <q-item>
                                <q-item-section avatar>
                                <q-avatar icon="fas fa-puzzle-piece" />
                                </q-item-section>

                                <q-item-section>
                                <q-item-label class="q-px-none"><b>图像融合工具</b></q-item-label>
                                </q-item-section>
                            </q-item>  
                            <div class="q-pa-none row items-start q-gutter-md justify-center" > 
                            <img :src="require('@/assets/bg_pic/dark_dawn.jpg')" class="my-img"/>
                            <img :src="require('@/assets/bg_pic/dark_dawn.jpg')" class="my-img"/>
                            </div>
                            <q-card-actions align="around">
                                <q-btn flat round color="red" icon="fab fa-github" @click="go_site('https://github.com/derekwin/Software-for-calculating-chromatic-aberration')"/>
                                <q-btn flat round color="teal" icon="bookmark" />
                                <q-btn flat round color="primary" icon="share" />
                            </q-card-actions>
                            </q-card>   
                        </div>
                        <div class="col-6 col-md-6  " >
                            <q-card class="q-pa-md my-card-big ">
                                <div class="q-pa-md">
                                    <div>
                                        <subtitle1 ><b>工具状态</b>：相关模块开发中，敬请期待</subtitle1>
                                    </div>
                                    <br>
                                    <div>
                                        <b>发布时间</b>：XX.XX.XXXX    
                                    </div>    
                                    <br>  
                                    <div>
                                        <b>功能</b>：对多源图像进行融合     
                                    </div> 
                                    <br> 
                                    <div>
                                        <b>原理</b>：基于LAB特征点检测的图像校准，基于非下采样的contourlet变化的多源图像融合   
                                    </div>
                                </div>
                                <div><br></div> 
                                <q-separator color="green" inset />
                                <div><br></div>    
                                <div class="q-py-sm q-px-md" >
                                        
                                    <q-chip clickable glossy color="orange-9" text-color="white" icon="fas fa-hand-point-right" class="glossy shadow-10">
                                        run
                                    </q-chip> 
                                    <q-chip clickable glossy color="grey-9" text-color="white" icon="fab fa-github" class="glossy shadow-10">
                                        open
                                    </q-chip> 
                                    <!-- <q-chip clickable @click="go_site('https://space.bilibili.com/390346133')" glossy color="orange-9" text-color="white" icon="fas fa-hand-point-right" class="glossy shadow-10">
                                        open
                                    </q-chip>  -->
                                </div>
                            </q-card>

                            <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
                                <q-btn fab icon="keyboard_arrow_up" color="accent" />
                            </q-page-scroller>
                        </div>
                        </div>

                    <!-- </div> -->
                </div>



           </div>
        </q-page>
    </q-page-container>
</template>

<script>
export default {
    data () {
    return {
      tab: 'mails',
      splitterModel: 20
    }
  },


    methods: {
        go_site(url) {
            window.open(url)
        },
        ifpadphone() {
            if(window.matchMedia("(max-width: 850px)").matches)
                return 1
            else
                return 0
        } ,
  }
}
</script>


<style lang="stylus" scoped>
    .my-card
        width 100%
        max-width 600px
    .my-card-big 
        width 100%
        max-width 1300px
    .my-img
        width 100%
        max-width 150px
        height 100%
        max-height 200px
    .div-orange-class
        height 100%
        max-height 1000px
    .my-card-title
        height 100%
    
</style>