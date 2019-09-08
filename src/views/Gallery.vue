<template>
    <q-page-container>
        <q-page>
            <div >
                <!--for big screen-->
                <q-carousel v-if="ifchangesize()"
                animated
                v-model="slide"
                navigation
                infinite
                autoplay
                swipeable
                transition-prev="slide-right"
                transition-next="slide-left"
                style="my-carousel"
                height="40rem"
                >
                <q-carousel-slide :name="1" :img-src="require('@/assets/gallery_pic/self/mid/1.jpg')" >
                </q-carousel-slide>
                <q-carousel-slide :name="2" :img-src="require('@/assets/gallery_pic/self/mid/2.jpg')" />
                <q-carousel-slide :name="3" :img-src="require('@/assets/gallery_pic/self/mid/3.jpg')" />
                <q-carousel-slide :name="4" :img-src="require('@/assets/gallery_pic/self/mid/4.jpg')" />
                </q-carousel>
                <!--for small screen-->
                <q-carousel v-else
                animated
                v-model="slide"
                navigation
                infinite
                autoplay
                swipeable
                transition-prev="slide-right"
                transition-next="slide-left"
                style="my-carousel"
                height="60rem"
                >
                <q-carousel-slide :name="1" :img-src="require('@/assets/gallery_pic/self/mid/1.jpg')" />
                <q-carousel-slide :name="2" :img-src="require('@/assets/gallery_pic/self/mid/2.jpg')" />
                <q-carousel-slide :name="3" :img-src="require('@/assets/gallery_pic/self/mid/3.jpg')" />
                <q-carousel-slide :name="4" :img-src="require('@/assets/gallery_pic/self/mid/4.jpg')" />
                </q-carousel>

            </div>

            <div class="row  justify-center bg-green-1 shadow-6">
                <div class="col-12 col-md-12 col-md-auto">

                    <!--street view-->
                    <div class="q-pa-none row items-start q-gutter-none justify-center" >
                        <!-- smartphone  low speed-->
                        <q-parallax v-if="ifsmartphone()" class="pic-bar shadow-10" :src="require('@/assets/bg_pic/color_dark.jpg')" :speed="0.5" >
                            <h2 class="text-green-1">Street View</h2>           
                        </q-parallax>
                        <!-- laptop  high speed-->
                        <q-parallax v-else class="pic-bar shadow-10" :src="require('@/assets/bg_pic/color_dark.jpg')" >
                            <h2 class="text-green-1">Street View</h2>           
                        </q-parallax>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/street7.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/street7')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/street6.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/street6')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>
                        
                        <q-img :src="require('@/assets/gallery_pic/self/self_small/street5.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/street5')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/street4.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/street4')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/street3.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/street3')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/street2.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/street2')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/street1.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/street1')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>    
                    </div>

                    <!--Portrait-->
                    <div class="q-pa-none row items-start q-gutter-none justify-center" >
                        <!-- smartphone  low speed-->
                        <q-parallax v-if="ifsmartphone()" class="pic-bar shadow-10" :src="require('@/assets/bg_pic/color_dark.jpg')" :speed="0.5" >
                            <h2 class="text-green-1">Portrait</h2>           
                        </q-parallax>
                        <!-- laptop  high speed-->
                        <q-parallax v-else class="pic-bar shadow-10" :src="require('@/assets/bg_pic/color_dark.jpg')" >
                            <h2 class="text-green-1">Portrait</h2>           
                        </q-parallax>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/portrait1.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/portrait1')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/portrait2.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/portrait2')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>
                        
                        <q-img :src="require('@/assets/gallery_pic/self/self_small/portrait3.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/portrait3')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/portrait4.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/portrait4')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/portrait5.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/portrait5')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>  

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/portrait6.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/portrait6')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img> 

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/portrait7.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/portrait7')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img> 

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/portrait8.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/portrait8')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img> 

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/portrait9.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/portrait9')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img> 

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/portrait10.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/portrait10')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img> 

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/portrait11.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/portrait11')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img> 

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/portrait12.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/portrait12')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img> 

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/portrait13.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/portrait13')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img> 

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/portrait14.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/portrait14')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img> 

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/portrait15.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/portrait15')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img> 
                    </div>

                    <!--cos-->
                    <div class="q-pa-none row items-start q-gutter-none justify-center" >
                        <!-- smartphone  low speed-->
                        <q-parallax v-if="ifsmartphone()" class="pic-bar shadow-10" :src="require('@/assets/bg_pic/color_dark.jpg')" :speed="0.5" >
                            <h2 class="text-green-1">Cosplay</h2>           
                        </q-parallax>
                        <!-- laptop  high speed-->
                        <q-parallax v-else class="pic-bar shadow-10" :src="require('@/assets/bg_pic/color_dark.jpg')" >
                            <h2 class="text-green-1">Cosplay</h2>           
                        </q-parallax>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/cos1.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/cos1')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/cos2.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/cos2')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/cos3.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/cos3')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/cos4.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/cos4')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>
                    </div>

                    <!--documentary -->
                    <div class="q-pa-none row items-start q-gutter-none justify-center" >
                        <!-- smartphone  low speed-->
                        <q-parallax v-if="ifsmartphone()" class="pic-bar shadow-10" :src="require('@/assets/bg_pic/color_dark.jpg')" :speed="0.5" >
                            <h2 class="text-green-1">Documentary</h2>           
                        </q-parallax>
                        <!-- laptop  high speed-->
                        <q-parallax v-else class="pic-bar shadow-10" :src="require('@/assets/bg_pic/color_dark.jpg')" >
                            <h2 class="text-green-1">Documentary</h2>           
                        </q-parallax>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/doc1.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/doc1')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/doc2.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/doc2')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/doc3.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/doc3')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/doc4.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/doc4')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/doc5.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/doc5')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/doc6.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/doc6')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/doc7.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/doc7')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>
                    </div>
                    
                    <!--building-->
                    <div class="q-pa-none row items-start q-gutter-none justify-center" >
                        <!-- smartphone  low speed-->
                        <q-parallax v-if="ifsmartphone()" class="pic-bar shadow-10" :src="require('@/assets/bg_pic/color_dark.jpg')" :speed="0.5" >
                            <h2 class="text-green-1">Building</h2>           
                        </q-parallax>
                        <!-- laptop  high speed-->
                        <q-parallax v-else class="pic-bar shadow-10" :src="require('@/assets/bg_pic/color_dark.jpg')" >
                            <h2 class="text-green-1">Building</h2>           
                        </q-parallax>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/building1.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/building1')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/building2.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/building2')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>
                    </div>


                    <!--cloud-->
                    <div class="q-pa-none row items-start q-gutter-none justify-center" >
                        <!-- smartphone  low speed-->
                        <q-parallax v-if="ifsmartphone()" class="pic-bar shadow-10" :src="require('@/assets/bg_pic/color_dark.jpg')" :speed="0.5" >
                            <h2 class="text-green-1">Cloud</h2>           
                        </q-parallax>
                        <!-- laptop  high speed-->
                        <q-parallax v-else class="pic-bar shadow-10" :src="require('@/assets/bg_pic/color_dark.jpg')" >
                            <h2 class="text-green-1">Cloud</h2>           
                        </q-parallax>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/cloud1.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/cloud1')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/cloud2.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/cloud2')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/cloud3.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/cloud3')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>

                        <q-img :src="require('@/assets/gallery_pic/self/self_small/cloud4.jpg')" class="pic"> 
                            <q-chip clickable @click="$router.push('/pic_pages/cloud4')">
                            <q-avatar rounded class="shadow-10 text-red bg-green-8 " size="24px" />
                            </q-chip>
                        </q-img>
                    </div>

                    <!-- <q-parallax :src="require('@/assets/gallery_pic/1.jpg')" :height="400">
                    </q-parallax>
                     documentary photography
                     Street View
                     Portrait 

                    -->
                    <!-- 
                        test c    
                        111111111
                        <h1 v-if="ifchangesize()" class="text-red">text</h1>
                        <h1 v-else class="text-blue">text</h1>  -->

                    <div class="row justify-center">
                    <q-chip class="bg-green text-white" justify-center>
                        <subtitle2>Copyright © seclee(derekliu). All rights reserved.</subtitle2>
                    </q-chip>
                    </div>

                    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
                        <q-btn fab icon="keyboard_arrow_up" color="accent" />
                    </q-page-scroller>

                </div>  
            </div>
            

        </q-page>
    </q-page-container>  
   
    
</template>


<script>
export default {
    data(){
        return {
            slide:2
        }
    },
    
    methods: {
       ifchangesize() {
            if(window.matchMedia("(max-width: 1500px)").matches)
                return 1
            else
                return 0
        } ,
        ifsmartphone() {
            if(window.matchMedia("(max-width: 767px)").matches)
                return 1
            else
                return 0
        } 

    },
    

    
}
</script>

<style lang="stylus" scoped>
    .my-carousel
      width 200%
      max-width 1000px
        
    .pic-bar
        width 100%
        max-width 1500px
        height 100%
        max-height 245px

    .pic
        height 100%
        max-height 245px
        width 100%
        max-width 500px
</style>
