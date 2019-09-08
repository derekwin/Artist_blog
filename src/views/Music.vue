<template>
    <q-page-container>
        <q-page >
    
            <div class="q-px-none q-py-lg row items-start q-gutter-md justify-center" >
                <!-- <q-parallax :src="require('@/assets/bg_pic/color_dark.jpg')" :height="720" >     -->
                    <q-parallax :src="require('@/assets/bg_pic/color_dark.jpg')" :height="200" >
                        <h1 class="text-green-1 text-center">Music is Power</h1>
                    </q-parallax> 

                    <div class="column col-md-10  " >

                        <div :class="ifsuperscreen() ? 'col bg-yellow-5 shadow-6' : 'col bg-yellow-5 div-yellow-class shadow-6'"  >
                            
                            
                            <div class="q-pa-md row items-start q-gutter-md justify-center" > 
                                
                                <q-card  dark bordered class=" my-card bg-grey-3 shadow-4">                           
                                    <q-img :src="require('@/assets/bg_pic/netease.png')" >
                                    </q-img>

                                    <q-separator color="red" inset />

                                    <div class="q-py-sm q-px-md">
                                        <q-chip color="green-4" text-color="grey-3" icon="bookmark" square>
                                            producer
                                        </q-chip>
                                        <q-chip color="teal" text-color="grey-3" icon="bookmark" square>
                                            future house
                                        </q-chip>
                                        <q-chip color="green-4" text-color="grey-3" icon="bookmark" square>
                                            light music
                                        </q-chip>
                                        <q-chip color="green-4" text-color="grey-3" icon="bookmark" square>
                                            beat-box
                                        </q-chip>
                                        <q-chip color="teal" text-color="grey-3" icon="bookmark" square>
                                            soundhunter
                                        </q-chip>   
                                        <q-chip color="green-4" text-color="grey-3" icon="bookmark" square>
                                            Cipher Record
                                        </q-chip>
                                    </div> 
                                    <q-separator color="red" inset />
                                    <div class="q-py-sm q-px-md justify-center">
                                    <q-chip color="red-4" text-color="grey-3"  square>
                                        部分版权受限歌曲需要跳转到网易页面才可播放
                                    </q-chip>
                                    </div>
                                    <q-separator color="red" inset />
                                    <div class="q-py-none q-px-md justify-center">
                                    <iframe  frameborder="no" border="0" 
                                    marginwidth="0" marginheight="0" width=360 height=400 
                                    src="//music.163.com/outchain/player?type=0&id=2601053966&auto=0&height=430">
                                    </iframe> 
                                    </div>
                                    <q-separator color="red" inset />

                                    <div class="q-py-sm q-px-md">
                                        
                                        <q-chip clickable @click="go_site('https://music.163.com/#/artist?id=30791627')" glossy color="red-8" text-color="white" icon="fas fa-hand-point-right" class="glossy shadow-10">
                                        Click to my home-page
                                        </q-chip>   
                                    </div>
                                </q-card>
                            
                                <q-card dark bordered class=" my-card bg-green-1 shadow-4">                           
                                    <q-img :src="require('@/assets/bg_pic/album1.png')" class="album-pic">
                                    </q-img>

                                    <div class="q-py-sm q-px-md">
                                        <q-chip color="teal" text-color="grey-3" icon="bookmark" square>
                                            lofi-house
                                        </q-chip>
                                        <q-chip color="green-4" text-color="grey-3" icon="bookmark" square>
                                            Cipher Record
                                        </q-chip>
                                    </div>
                                    <q-separator color="red" inset />
                                    <div class="q-py-sm q-px-md">
                                        
                                        <q-chip clickable @click="go_site('https://music.163.com/#/song?id=1344305631')" glossy color="red-8" text-color="white" icon="fas fa-hand-point-right" class="glossy shadow-10">
                                        The version without vocal
                                        </q-chip>   
                                        <q-chip clickable @click="go_site('https://music.163.com/#/program?id=2059389442')" glossy color="red-8" text-color="white" icon="fas fa-hand-point-right" class="glossy shadow-10">
                                        Full version
                                        </q-chip> 
                                    </div>
                                </q-card>
                                
                                <!--iframe 实现不了实时动态刷新框体大小，必须刷新才能生效-->
                                <!--for small screen-->
                                <iframe v-if="ifpadphone()" frameborder="no" border="0" 
                                marginwidth="0" marginheight="0" width=410 height=400 
                                src="//music.163.com/outchain/player?type=0&id=406084783&auto=0&height=430">
                                </iframe>  
                                <!--for md  screen-->
                                <iframe v-else-if="ifsuperscreen()" frameborder="no" border="0" 
                                marginwidth="0" marginheight="0" width=800 height=400 
                                src="//music.163.com/outchain/player?type=0&id=406084783&auto=0&height=430">
                                </iframe>
                                <!--for big screen-->
                                <iframe v-else frameborder="no" border="0" 
                                marginwidth="0" marginheight="0" width=410 height=800 
                                src="//music.163.com/outchain/player?type=0&id=406084783&auto=0&height=430">
                                </iframe>
                                

                            </div>
                        </div>

                        <!--metapop-->
                        <div :class="ifpadphone() ? 'col bg-blue shadow-6' : 'col bg-blue div-blue-class shadow-6'"  >
                            
                            
                            <div class="q-pa-md row items-start q-gutter-md justify-center" > 
                            
                                <q-card dark bordered class=" my-card bg-grey-3 shadow-4">                           
                                    <q-img :src="require('@/assets/bg_pic/metapop.png')" >
                                    </q-img>

                                    <q-separator color="red" inset />

                                    <div class="q-py-sm q-px-md">
                                        <q-chip color="teal" text-color="grey-3" icon="bookmark" square>
                                            producer
                                        </q-chip>
                                        <q-chip color="green-4" text-color="grey-3" icon="bookmark" square>
                                            Remix
                                        </q-chip>
                                        <q-chip color="green-4" text-color="grey-3" icon="bookmark" square>
                                            EDM
                                        </q-chip>
                                        <q-chip color="green-4" text-color="grey-3" icon="bookmark" square>
                                            house-music
                                        </q-chip>
                                        <q-chip color="teal" text-color="grey-3" icon="bookmark" square>
                                            Competition
                                        </q-chip>
                                    </div>
                                    <q-separator color="red" inset />
                                    <div class="q-py-sm q-px-md">
                                        
                                        <q-chip clickable @click="go_site('https://metapop.com/seclee')" glossy color="grey-9" text-color="white" icon="fas fa-hand-point-right" class="glossy shadow-10">
                                        Click to my home-page
                                        </q-chip>   
                                    </div>
                                </q-card>
                            
                                <q-card dark bordered class=" my-card bg-green-1 shadow-4">                           
                                    <q-img :src="require('@/assets/bg_pic/album2.png')" class="album-pic">
                                    </q-img>

                                    <div class="q-py-sm q-px-md">
                                        
                                        <q-chip color="green-4" text-color="grey-3" icon="bookmark" square>
                                            Remix
                                        </q-chip>
                                        <q-chip color="teal" text-color="grey-3" icon="bookmark" square>
                                            EDM
                                        </q-chip>
                                    </div>
                                    <q-separator color="red" inset />
                                    <div class="q-py-sm q-px-md">
                                        
                                        <q-chip clickable @click="go_site('https://metapop.com/seclee/tracks/yours-andrew-huang-seclee-remix-/81676')" glossy color="grey-9" text-color="white" icon="fas fa-hand-point-right" class="glossy shadow-10">
                                        Click to this album
                                        </q-chip>   
                                    </div>
                                </q-card>
                            </div>
                        </div>
                        
                        <!--bilibili-->
                        <div :class="ifpadphone() ? 'col bg-orange-5 shadow-6' : 'col bg-orange-5 div-orange-class shadow-6'"  >
                            
                            
                            <div class="q-pa-md row items-start q-gutter-md justify-center" > 
                            
                                <q-card dark bordered class=" my-card bg-grey-3 shadow-4">                           
                                    <q-img :src="require('@/assets/bg_pic/bilibili.png')" >
                                    </q-img>

                                  

                                    <div class="q-py-sm q-px-md">
                                        <q-chip color="pink-3" text-color="grey-3" icon="bookmark" square>
                                            Up
                                        </q-chip>
                                        <q-chip color="teal" text-color="grey-3" icon="bookmark" square>
                                            咕咕咕
                                        </q-chip>
                                        <q-chip color="green-4" text-color="grey-3" icon="bookmark" square>
                                            Arrangement
                                        </q-chip>
                                        <q-chip color="green-4" text-color="grey-3" icon="bookmark" square>
                                            Remix
                                        </q-chip>
                                        <q-chip color="teal" text-color="grey-3" icon="bookmark" square>
                                            Music video
                                        </q-chip>
                                    </div>
                                    <q-separator color="red" inset />
                                    <div class="q-py-sm q-px-md">
                                        
                                        <q-chip clickable @click="go_site('https://space.bilibili.com/390346133')" glossy color="orange-9" text-color="white" icon="fas fa-hand-point-right" class="glossy shadow-10">
                                        Click to my home-page
                                        </q-chip>   
                                    </div>
                                </q-card>
                            
                                <q-card dark bordered class=" my-card bg-green-1 shadow-4">                           
                                    <iframe 
                                    src="//player.bilibili.com/player.html?aid=39467060&cid=69329163" 
                                    scrolling="no" border="0" frameborder="no" framespacing="0"
                                    width=390 height=220 
                                    allowfullscreen="true">
                                    </iframe>
                                    

                                    <div class="q-py-sm q-px-md">
                                        
                                        <q-chip color="green-4" text-color="grey-3" icon="bookmark" square>
                                            Arrangement
                                        </q-chip>
                                        <q-chip color="teal" text-color="grey-3" icon="bookmark" square>
                                            Music video
                                        </q-chip>
                                    </div>
                                    <q-separator color="orange" inset />
                                    <div class="q-py-sm q-px-md">
                                        
                                        <q-chip clickable @click="go_site('https://www.bilibili.com/video/av39467060')" glossy color="orange-9" text-color="white" icon="fas fa-hand-point-right" class="glossy shadow-10">
                                        watch this video on bilibili
                                        </q-chip>   
                                    </div>
                                </q-card>

                                <q-card dark bordered class=" my-card bg-green-1 shadow-4">                           
                                    <iframe src="//player.bilibili.com/player.html?aid=18484622&cid=30162276&page=2" 
                                    scrolling="no" border="0" frameborder="no" framespacing="0" 
                                    width=390 height=220
                                    allowfullscreen="true">
                                     </iframe>


                                    <div class="q-py-sm q-px-md">
                                        
                                        <q-chip color="teal" text-color="grey-3" icon="bookmark" square>
                                            loopdrop
                                        </q-chip>
                                        <q-chip color="green-4" text-color="grey-3" icon="bookmark" square>
                                            Reproduced
                                        </q-chip>
                                    </div>
                                    <q-separator color="orange" inset />
                                    <div class="q-py-sm q-px-md">
                                        
                                        <q-chip clickable @click="go_site('https://www.bilibili.com/video/av18484622/?p=2')" glossy color="orange-9" text-color="white" icon="fas fa-hand-point-right" class="glossy shadow-10">
                                        watch this video on bilibili
                                        </q-chip>   
                                    </div>
                                </q-card>


                            <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
                                <q-btn fab icon="keyboard_arrow_up" color="accent" />
                            </q-page-scroller>


                            </div>

                        </div>
                        
                    </div>

                            
                            <!-- <div class="text-h6">Our Changing Planet</div>
                            <div class="text-subtitle2">by John Doe</div> -->
                            <!-- <q-separator dark inset /> -->

                            <!-- <q-card-section>
                                
                            </q-card-section> -->
                       
                    

                    
                        <!-- <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=300 height=640 src="//music.163.com/outchain/player?type=0&id=2601053966&auto=0&height=430"></iframe>    -->
                    

                    <!-- </q-parallax> -->
            
            

            </div>   

           
        </q-page>
    </q-page-container>
</template>

<script>
export default {
    methods: {
        go_site(url) {
            window.open(url)
        },
        ifsuperscreen() {
            if(window.matchMedia("(max-width: 1900px)").matches)
                return 1
            else
                return 0
        } ,
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
      max-width 390px
    .my-card-height
      height 100%
      max-height 350px
    .album-pic
        height 100%
        // max-height 250px
    .div-yellow-class
        height 100%
        max-height 900px
    .div-blue-class
        height 100%
        max-height 600px
    .div-orange-class
        height 100%
        max-height 1000px
</style> 