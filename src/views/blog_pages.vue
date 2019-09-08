<template>
    <q-page-container>
        <q-page padding>
            <div class="row ">
                <blogpagebar>
                </blogpagebar>
            </div>


            <div class="row justify-center">
                <div class="col-sm-8 ">
                <!--面包屑 导航栏-->
                    <div class="q-pa-md q-gutter-sm">
                        <q-breadcrumbs>
                            <template v-slot:separator>
                                <q-icon
                                size="1.2em"
                                name="arrow_forward"
                                color="purple"
                                />
                            </template>
                        <q-breadcrumbs-el icon="home"  />
                        <q-breadcrumbs-el label="Blog" icon="widgets" to="/blog" />
                        <!-- <q-breadcrumbs-el label="Breadcrumbs"  to="/start/pick-quasar-flavour" /> -->
                        </q-breadcrumbs>
                    </div >

                    <!--正文-->
                    


                </div>
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
    
}
</script>