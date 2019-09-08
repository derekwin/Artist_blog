<template>
    
        <div>
                
                <q-toolbar>
                    <q-btn
                    flat
                    dense
                    round
                    @click="leftDrawerOpen = !leftDrawerOpen"
                    aria-label="Menu"
                    icon="menu"
                    />

                    <q-toolbar-title>
                    Contents 
                    </q-toolbar-title>
                </q-toolbar>

            <q-footer class="bg-green-8" reveal elevated>
                <q-btn
                    flat
                    dense
                    round
                    @click="leftDrawerOpen = !leftDrawerOpen"
                    aria-label="Menu"
                    icon="menu"
                     size="17px"
                    class="q-pl-xl"
                    />
                
                <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[10, -32]" >
                        <q-btn   size="9px" color="white" class="shadow-0 text-green-7"> 
                            <q-icon name="keyboard_arrow_up" />
                        </q-btn>
                </q-page-scroller>
            </q-footer>
            

                <q-drawer
                v-model="leftDrawerOpen"
                bordered
                content-class="bg-grey-2"
                >
                <q-list>
                    <q-item class="justify-center">
                    <q-input color="teal" outlined v-model="text" label="search" >
                        <template v-slot:append>
                        <q-btn clickable onclick="/test" class="shadow-0" round>
                           <q-icon name="search" />
                        </q-btn>
                        </template>
                    </q-input>
                    </q-item>
                    
                    <q-item class="justify-center">
                    <q-item-label header class="text-green-8 ">——本站共有{{blog.max_pages_num}}篇文章——</q-item-label>
                    </q-item>
                    <q-item class="justify-center">
                    <div class="q-pa-none  q-pb-lg row justify-center ">
                        <q-btn icon="far fa-heart" flat style="color: white"  class="bg-green"
                        label=" star this blog ？" 
                        @click="go_site('https://github.com/derekwin/Artist_blog')" />
                    </div>
                    </q-item >
                    <q-item class="justify-center q-pt-none q-pb-sm" >
                     <q-btn round @click="$router.push('/blog')" class="bg-green-4 glossy">
                        <q-avatar size="40px">
                        <q-icon name="home" class="text-white" />
                        </q-avatar>
                    </q-btn>
                    </q-item>
                </q-list>
                <q-list>
                    <div><br></div>
                    <q-item >
                    <q-item-label class="q-px-lg q-pb-sm"><b>/ 归档 /</b></q-item-label>
                    </q-item>

                    <q-expansion-item 
                     v-for="years in blog.years"
                     class="q-pl-sm" :label="years.year" icon="fas fa-list">
                    
                    <q-item v-for="value in years.artical" clickable tag="a" target="_blank" rel="noopener" @click="$router.push('/blog/'+value.title)">
                        <q-item-section>
                            <q-item-label>- {{value.title}}</q-item-label>
                            <q-item-label caption>{{value.time}}</q-item-label>
                        </q-item-section>
                    </q-item>
                    
                    </q-expansion-item>
                   
                </q-list>
                </q-drawer>
                
            </div>
    
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,



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
      
        go_site(url) {
            window.open(url)
        },
  },

}
</script>



