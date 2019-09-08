<template>
  <q-layout view="lHh Lpr lFf">
      <q-container>
      <q-page padding>
      
        <adminheadbar />

        <router-view />

      </q-page>
      </q-container>
  </q-layout>
</template>


<script>

import adminheadbar from '@/components/admin_bar.vue'


export default {
    name : 'adminpage',
    components : {
       adminheadbar,
    } 
}   
</script>