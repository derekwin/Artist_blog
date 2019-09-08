<template>
    <div>
        <!--
        
        -->
        <!-- <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
        > -->
        <!--
        This is Header<br>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <br>This is Header
        -->
        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <q-header reveal elevated>

        <q-toolbar 
        :class="ifchangecolor()? 'bg-grey-3 text-green-10':'bg-green-8 text-white shadow-2'"
        >
        <!--v-if  or  :class="ifchangecolor()? 'bg-grey-3 text-green-10':'bg-green-8 text-white shadow-2'"
        注意 " ："
        -->
        <!-- <q-toolbar class="bg-green text-white shadow-2"> -->
            <q-btn name="Home" flat label="Home" @click="$router.push('/')" />

            <q-tabs v-model="tab" shrink>
                <q-route-tab  name="Blog" to="/blog" exact ><b>Blog</b></q-route-tab>
                <q-route-tab name="Gallery" to="/gallery" exact ><b>Gallery</b></q-route-tab>
                <q-route-tab name="Music" to="/music" exact ><b>Music</b></q-route-tab>
                <q-route-tab name="Plugins" to="/plugins" exact ><b>Plugins</b></q-route-tab>
                <!--
                测试v-if值的获取情况 successed！
                 <span v-if="ifchangecolor()" class="text-red">text</span>
                <span v-else class="text-blue">text</span> -->
            </q-tabs>

            <q-space />
            <q-tabs v-model="tab" >
                <q-route-tab v-if="$q.screen.gt.sm" name="search" icon="search" to="/search" />
                <q-tab v-if="$q.screen.gt.sm" name="github" icon="fab fa-github" @click="go_site('https://github.com/derekwin/Artist_blog')"  />
                <!-- 标注跳转方法
                内部@click="$router.push('/search')" 
                跳转外部时候  写一个方法go_site(url)   url要加http：//  or  https：//
                -->

                <q-btn-dropdown v-if="$q.screen.lt.md" auto-close stretch flat>
                    <q-list link>
                        <q-item clickable @click="tab = 'search'">
                            <q-item-section icon="search" @click="$router.push('/search')">search</q-item-section>
                        </q-item>
                    </q-list>
                    <q-list link>
                        <q-item clickable @click="tab='github'">
                            <q-item-section icon="fab fa-github" @click="go_site('https://github.com/derekwin/Artist')">github</q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>


            </q-tabs>
        </q-toolbar>
        </q-header>
        

        <!-- <q-tab-panels v-model="tab" animated> -->
    </div>
</template>

<script>
export default {
    name:'Headbar',
    data() {
        return {
            tab:''
        }
    },

    methods: {
        go_site(url) {
            window.open(url)
        },
        ifchangecolor() {
            if(this.$route.path=='/')
                return 1
            else
                return 0
        }

    },
}    
</script>


<style scoped> 


</style>
