<template>
    <q-page-container>
        <q-page padding>
            
            <div class="row ">
                <blogpagebar>
                </blogpagebar>
            </div>
             
            <!--标题,标签-->
            <div class="col">
               
                <div><br></div>
                
                <div class="q-px-md q-py-none row items-start q-gutter-md justify-center" >
                    <h2>Seclee's blog : focus on CS-Tech &  Music-Tech</h2>
                </div>
                
                
                <br>
                <div class="q-px-md q-py-none row items-start q-gutter-md justify-center" >     
                    <h6>
                        <q-chip color="green-1" text-color="grey-9" square>
                                                Including but not limited to :
                        </q-chip>
                        
                        <q-chip color="grey-8" text-color="grey-3"   square>
                                                Linux operation and maintenanc
                        </q-chip>
                        <q-chip color="blue-4" text-color="grey-3"   square>
                                                Python
                        </q-chip>
                        <q-chip color="pink-3" text-color="grey-3"   square>
                                                Flask
                        </q-chip>
                        <q-chip color="pink-3" text-color="grey-3"   square>
                                                Vue
                        </q-chip>
                        <q-chip color="pink-3" text-color="grey-3"   square>
                                                Opencv
                        </q-chip>
                        <q-chip color="pink-3" text-color="grey-3"   square>
                                                Quasar
                        </q-chip>
                        <q-chip color="blue-4" text-color="grey-3"   square>
                                                C
                        </q-chip>
                        <q-chip color="green-4" text-color="grey-3"   square>
                                                Data structure
                        </q-chip>
                        <q-chip color="grey-8" text-color="grey-3"   square>
                                                Ableton live
                        </q-chip>
                        <q-chip color="green-4" text-color="grey-3"   square>
                                                Mixing
                        </q-chip>
                        <q-chip color="green-4" text-color="grey-3"   square>
                                                Musical Style
                        </q-chip>
                        <q-chip color="green-4" text-color="grey-3"   square>
                                                Music Production
                        </q-chip>
                    </h6>
                </div>
                <div>
                    <q-separator color="green" inset />
                </div>
            </div>
           <!--breadcrumbs-->
            <div class="q-pa-md q-gutter-sm">
                <q-breadcrumbs>
                    <template v-slot:separator>
                        <q-icon
                        size="1.2em"
                        name="arrow_forward"
                        color="green"
                        />
                    </template>
                <q-breadcrumbs-el icon="home" class="text-green-8" to="/blog"/>
                <q-breadcrumbs-el label="Blog" icon="widgets" to="/blog" />
                <!-- <q-breadcrumbs-el label="Breadcrumbs"  to="/start/pick-quasar-flavour" /> -->
                </q-breadcrumbs>
            </div >

        
         

            <!--带有大标题，小标题，时间，简述的qcard文章导引列表-->
            <div v-for="years in blog.years" class="q-pa-md row col-6 col-md-8 items-start q-gutter-md justify-center " > 
            
         
                <q-card v-for="value in years.artical" class="q-py-none q-px-md page_card">
                    <q-timeline color="secondary" class=" timeline_change">
                        <q-timeline-entry 
                        class="text-green-10 timeline_change " :subtitle="value.time" >
                        </q-timeline-entry>    
                    </q-timeline>
                    <div color="green-1" text-color="grey-9" class="text-h5" square>
                        {{value.title}}    
                    </div>
                    <div color="green-1" text-color="grey-9" class="q-px-none q-py-md" square>
                        {{value.subtitle}}
                    </div>
                    <div class="q-pa-none" >
                        <q-chip  v-for="tag_name in value.tag" color="green-3" text-color="grey-3" icon="bookmark" outline square>
                            {{tag_name}}
                        </q-chip>
                    </div> 
                    <div class="q-pt-sm q-pb-none">
                    <q-separator color="green-8"/>
                    </div>
                    <div class="q-pa-none q-pt-xs q-pb-sm row justify-center">
                        <q-btn icon="fas fa-hand-point-right" flat style="color: green" 
                        label=" Click to this articel" 
                        @click="$router.push('/blog/'+value.title)" />
                    </div>
                </q-card>               
            </div>

      

        </q-page>
    </q-page-container>
</template>

<script>

import blogpagebar from '@/components/blog_page_bar.vue'


export default {
    name : "blog_main_page",
    components : {
        blogpagebar,
    },

    data() {
        return {
            blog : {
                max_pages_num : 2,
                years :{
                    artical_2019 : {
                        year :2019,
                        artical :{
                            artical_1 :{
                            key: 1,
                            title: 'title 2009 1',
                            subtitle: 'subtitle1',
                            time: '01,XX,XX',
                            tag: ['vue','quasar'],
                            markdown :'内容',
                            html :'sds'
                            },
                        artical_2 :{
                            
                            key : 2,
                            title: 'title2',
                            subtitle: 'subtitle2',
                            time: '02,XX,XX',
                            tag: ['vue','quasar'],
                            markdown :'neirong',
                            html :'sds'
                            },
                        }
                        
                    },

                    artical_2018 : {
                        year:2018,
                        artical :{
                           artical_1 :{
                            key: 1,
                            title: 'title 2008 1',
                            subtitle: 'subtitle1',
                            time: '01,XX,XX',
                            tag: ['vue','quasar'],
                            markdown :'内容'
                            },
                        artical_2 :{
                            key : 2,
                            title: 'title2',
                            subtitle: 'subtitle2',
                            time: '02,XX,XX',
                            tag: ['vue','quasar'],
                            markdown :'neirong'
                            },
                        artical_3 :{
                            
                            key : 3,
                            title: 'title3',
                            subtitle: 'subtitle3',
                            time: '03,XX,XX',
                            tag: ['vue','quasar'],
                            markdown :'neirong'
                            },   
                        }          
                    },   

                    artical_2017 : {
                        year:2017,
                        artical:{

                        }
                    },


                }
            },
        }
    },  


    methods: {

        ifsuperscreen() {
            if(window.matchMedia("(max-width: 1900px)").matches)
                return 1
            else
                return 0
        } ,
        
    },


}
</script>


<style lang="stylus">
    .page_card
        width 100%
        max-width 400px
    .timeline_change
        height 100%
        max-height 25px 
    
</style>