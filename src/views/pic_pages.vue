<template>
    <q-page-container>
        <q-page>
         <!-- <div>User {{ $route.params.picname}}     {{ '@/assets/gallery_pic/self/self_big/'+$route.params.picname+'.jpg' }} </div>       -->
                <!-- <router-view></router-view> -->
        <div class="row  justify-center bg-green-1 shadow-6">
                <div class="col-12 col-md-12 col-md-auto">
                    <q-img :src="require('@/assets/gallery_pic/self/self_big/'+$route.params.picname+'.jpg')" >            
                    </q-img>
                </div>
                <div class="row justify-center">
                    <q-chip class="bg-green text-white" justify-center>
                        <subtitle2>Copyright © seclee(derekliu). All rights reserved.</subtitle2>
                    </q-chip>
                </div>
        </div>
        </q-page>
    </q-page-container>
</template>

<script>
export default {
    
}
</script>

