<template>
  <v-timeline>
    <v-timeline-item>Last commit</v-timeline-item>
    <v-timeline-item class="text-right">
      Main branch
    </v-timeline-item>
    <v-timeline-item>  <template v-slot:icon>
        <v-avatar>
          <img src="https://i.pravatar.cc/64">
        </v-avatar>
      </template>commit</v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
  //
</script>
