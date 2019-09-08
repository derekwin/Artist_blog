<template>
    <q-page-container>
        <q-page>
            <div class="row">
                <div class="q-pa-none col-12 col-md-8  " > 
                     <q-card class="q-pa-none  q-py-md  shadow-0 "  >
                        <div class="col-4 items-start q-gutter-none justify-center page_card_title" >
                            <q-input outlined  v-model="ph" 
                            class="bg-white"
                            placeholder="标题   (此处和正文需要单独填写)" hint="" :dense="dense" />
                        </div> 
                        <div class="col-4 items-start q-gutter-none justify-center page_card_subtitle" >
                            <q-input outlined v-model="ph" 
                            class="bg-white"
                            placeholder="简介" hint="(选择发布日期)" :dense="dense" />
                        </div>
                        <div> 

                            <q-input v-model="date" mask="date" :rules="['date']" class="q-px-sm page_card_date">
                            <template v-slot:append>
                                <q-btn icon="event" round class="shadow-0 cursor-pointer " left >
                                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                    <q-date  v-model="date" @input="() => $refs.qDateProxy.hide()" />
                                </q-popup-proxy>
                                </q-btn>
                            </template>
                            </q-input>
  
                        </div>
                        <div class="row">
                        <div class="q-px-md q-pt-none q-pb-md col-12 col-md-4">
                            <q-btn icon="fas fa-hand-point-right "  label="提交发布" class="shadow-4 bg-green-4 cursor-pointer glossy" />  
                        </div>
                        <div class="q-px-md q-pt-none q-pb-md col-12 col-md-5">   
                            <q-btn icon="fas fa-hand-point-right" label="保存到草稿箱" class=" shadow-4 bg-green-4 cursor-pointer glossy" />
                        </div>
                        <div class="q-px-md q-py-none col-12 col-md-3">   
                            <q-btn icon="fas fa-hand-point-right" label="删除" class=" shadow-4 bg-green-4 cursor-pointer glossy" />
                        </div>
                        </div>
                     </q-card>
                </div>

                <div class=" col-12 col-md-4 " > 
                     <q-card class="q-pt-none q-pb-md q-px-md  page_card shadow-0 "  >
                        <q-chip  color="green-1" text-color="grey-9" square>
                                                Click => 选择文章类别标签 :
                        </q-chip>
                        
                        <q-chip :selected.sync="desert.Linux_peration_and_maintenanc" icon="bookmark" color="grey-8" text-color="grey-3"   square>
                                                Linux operation and maintenanc
                        </q-chip>
                        <q-chip :selected.sync="desert.Python" icon="bookmark" color="blue-4" text-color="grey-3"   square>
                                                Python
                        </q-chip>
                        <q-chip :selected.sync="desert.Flask" icon="bookmark" color="pink-3" text-color="grey-3"   square>
                                                Flask
                        </q-chip>
                        <q-chip :selected.sync="desert.Vue" icon="bookmark" color="pink-3" text-color="grey-3"   square>
                                                Vue
                        </q-chip>
                        <q-chip :selected.sync="desert.Opencv" icon="bookmark" color="pink-3" text-color="grey-3"   square>
                                                Opencv
                        </q-chip>
                        <q-chip :selected.sync="desert.Quasar" icon="bookmark" color="pink-3" text-color="grey-3"   square>
                                                Quasar
                        </q-chip>
                        <q-chip :selected.sync="desert.C" icon="bookmark" color="blue-4" text-color="grey-3"   square>
                                                C
                        </q-chip>
                        <q-chip :selected.sync="desert.Data_structure" icon="bookmark" color="green-4" text-color="grey-3"   square>
                                                Data structure
                        </q-chip>
                        <q-chip :selected.sync="desert.Ableton_live" icon="bookmark" color="grey-8" text-color="grey-3"   square>
                                                Ableton live
                        </q-chip>
                        <q-chip :selected.sync="desert.Mixing" icon="bookmark" color="green-4" text-color="grey-3"   square>
                                                Mixing
                        </q-chip>
                        <q-chip :selected.sync="desert.Music_Style" icon="bookmark" color="green-4" text-color="grey-3"   square>
                                                Musical Style
                        </q-chip>
                        <q-chip :selected.sync="desert.Music_Production" icon="bookmark" color="green-4" text-color="grey-3"   square>
                                                Music Production
                        </q-chip>
                     </q-card>
                </div>
            </div>


            
            
            
            <!-- {{$route.params.pagename}}
            <br>
            {{$refs.md.d_render}}
            <br>
            {{$refs.md.d_value}} -->
            
            <mavon-editor v-model="content" 
            ref=md :codeStyle="code_style" @imgAdd="$imgAdd" @imgDel="$imgDel"/>
         
        </q-page>
    </q-page-container> 
</template>

<script>
import axios from 'axios'
    // Local Registration
    // import mavonEditor from 'mavon-editor'
    var mavonEditor = require('mavon-editor')
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: 'editor',
        components: {
            'mavon-editor': mavonEditor.mavonEditor
        },
        data () {
                return {
                date: '2019/02/01',
                desert: {
                        Linux_peration_and_maintenanc: false,
                        Python: false,
                        Flask: false,
                        Vue: false,
                        Opencv: false,
                        Quasar: false,
                        C: false,
                        Data_structure: false,
                        Ableton_live: false,
                        Mixing: false,
                        Music_Style: false,
                        Music_Production: false,
                    }
                }

            },

        methods: {
            //文章修改后的保存回调
            save () {
                this.content.content=this.$refs.md.d_render 
                this.content.textcontent=this.$refs.md.d_value
                
                this.$axios.post('/admin/change_artical/'+this.$route.params.pagename,this.content).then(res => {this.content.content=res.data.data.textcontent})
               
                //上传到已发布的数据库
            },
            delete () {
                //已经发布的数据库中 删除表
            },
            publish() {
                //触发保存机制，覆盖已发布的数据库数据 直接save
            },
            draft() {
                // 从已发布的表中删除数据 ，将现有的数据保存到草稿箱的表中
            },
            
            //创建生命周期函数   每隔30s  修改文章 自动保存覆盖上传

            //图片的上传回调
        },
    }
</script>


<style lang="stylus">
    .page_card_subtitle
        width 100%
        max-width 700px
    .page_card_title
        width 100%
        max-width 500px
    .page_card_date
        width 100%
        max-width 170px
    
</style>