<template>

  <q-layout view="lHh Lpr lFf">
    <HeadBar />

    <router-view />
  
    <br>
    <br>
    
    <FootBar />

  </q-layout>
</template>

<script>
import HeadBar from '@/components/HeadBar.vue'
import FootBar from '@/components/FootBar.vue'

export default {
  name: 'Mainpage',
  components:{
    HeadBar,
    FootBar,
  },
  
}
</script>