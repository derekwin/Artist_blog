<template>
    <div>
            <q-header>
                <q-toolbar class="bg-white">
                    <q-btn
                    flat
                    dense
                    round
                    @click="leftDrawerOpen = !leftDrawerOpen"
                    aria-label="Menu"
                    icon="menu"
                    class="text-black"
                    />

                    <q-toolbar-title class="text-green-8">
                    Artist blog 后台管理平台
                    </q-toolbar-title>
                </q-toolbar>
            </q-header>
            <q-footer class="bg-white " reveal >
                <q-btn
                    flat
                    dense
                    round
                    @click="leftDrawerOpen = !leftDrawerOpen"
                    aria-label="Menu"
                    icon="menu"
                     size="15px"
                    class="q-pl-xl text-black"
                    />
                
                <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[10, -32]" >
                        <q-btn   size="9px" color="green-1" class="shadow-0 text-green-7"> 
                            <q-icon name="keyboard_arrow_up" />
                        </q-btn>
                </q-page-scroller>
            </q-footer>
            

                <q-drawer
                v-model="leftDrawerOpen"
                bordered
                content-class="bg-grey-2"
                >
                <!--new-->
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
                    <q-item-label header class="text-green-8">——本站共有{{blog.max_pages_num}}篇文章——</q-item-label>
                    </q-item>
                </q-list>    
                <q-list class="bg-green-2"> 

                    <q-item class="justify-center">
                    <div class="q-pa-none  justify-center ">
                        <q-btn icon="fas fa-feather-alt" flat style="color: white"  class="bg-green"
                        label="新建一篇文章" 
                        @click="$router.push('/admin/new_artical')"/>
                    </div>
                    </q-item >
                </q-list>   

                <!--草稿箱-->
                <q-list class="bg-blue-2">    
                    <q-expansion-item 
                     class="q-pl-sm bg-green-1" label="草稿箱" icon="fas fa-folder-plus">
                    <q-item   clickable tag="a" target="_blank" rel="noopener" @click="$router.push('/admin/change_draft_artical/'+value.title)">
                        <q-item-section>
                            <q-item-label>- 测试 title</q-item-label>
                            <q-item-label caption>测试 时间</q-item-label>
                        </q-item-section>
                    </q-item>
                    
                    </q-expansion-item>
                   
                </q-list>


                <!--已发布-->
                <q-list class="bg-green-2">    
                    <q-item class="justify-center">
                    <div class="q-pa-none justify-center ">
                        <q-btn icon="fas fa-hand-point-down" flat style="color: white"  class="bg-green"
                        label="修改已发布文章" 
                    />
                    </div>
                    </q-item >

                    <q-expansion-item 
                     v-for="years in blog.years"
                     class="q-pl-sm bg-green-1" :label="years.year" icon="fas fa-list">
                    
                    <q-item v-for="value in years.artical" clickable tag="a" target="_blank" rel="noopener" @click="$router.push('/admin/change_published_artical/'+value.title)">
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



