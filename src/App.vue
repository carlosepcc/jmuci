<template lang="pug">
v-app#inspire
  //- v-app-bar.elevation-5
  //-   <v-app-bar-nav-icon @click='drawer = !drawer'/>
  //-     v-toolbar-title App Name
  //- v-navigation-drawer(v-model='drawer' expand-on-hover='' rail='')
  //-   v-list
  //-     v-list-item(prepend-avatar='https://randomuser.me/api/portraits/women/85.jpg' title='Sandra Adams' subtitle='sandra_a88@gmailcom')
  //-   v-divider
  //-   v-list(density='compact' nav='')
  //-     v-list-item(prepend-icon='mdi-folder' title='My Files' value='myfiles')
  //-     v-list-item(prepend-icon='mdi-account-multiple' title='Shared with me' value='shared')
  //-     v-list-item(prepend-icon='mdi-star' title='Starred' value='starred')
  v-main.pa-16
    hello-world
  //- v-bottom-navigation
  //-   v-btn(icon="mdi-bone")
  //-     v-icon mdi-bone
  //-     span Tareas
  //-   v-btn(icon="mdi-dog")
  //-     v-icon mdi-dog
  //-     span Dog
  //-   v-btn(icon="mdi-cat")
  //-   v-btn(icon="mdi-home")
  //-   v-btn(icon="mdi-paw")
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './pages/HelloWorld.vue';
const drawer = ref(false)
</script>
