<template>
  <div v-for="(competitor, index) in competitors" v-bind:key="competitor.name">
    <v-container v-if="competitor.score" class="my-5">
      <v-row justify="space-around">
        <v-card class="rounded-lg" width="400">
          <div
            :class="`bg-${
              competitor.color ?? 'blue'
            } pa-4 px-5 darken-4 container text-h3 font-weight-black`"
            style="color: #fff9"
          >
            <span class="text-h3 mr-4">{{ index + 1 }}</span>
            <span :title="competitor.fullName ?? competitor.name">{{
              competitor.name
            }}</span>
          </div>

          <!-- <v-card-title class="white--text mt-8">
                  {{index+1}}
                  <v-avatar
                    v-if="competitor.avatar" size="56">
                    <img
                      alt="logo"
                      :src="competitor.avatar"
                    >
                  </v-avatar>
                  <p class="ml-3">
                    {{competitor.name}}
                  </p>
                </v-card-title> -->

          <v-card-text>
            <div class="ml-4 mb-2">
              <v-icon v-if="index == 0" class="mb-2 ml-3" large
                >mdi-crown-circle</v-icon
              ><br />
              <span class="font-weight-bold text-h4">{{
                score(competitor.gold, competitor.silver, competitor.bronze)
              }}</span>
              <small>pts</small>
            </div>

            <v-timeline align-top dense>
              <v-timeline-item
                v-if="competitor.gold"
                dot-color="amber"
                icon="mdi-seal"
              >
                <div>
                  <span class="font-weight-bold text-h5 mr-3">{{
                    competitor.gold
                  }}</span>

                  <small
                    >Premio{{ competitor.gold > 1 ? "s" : "" }} de oro</small
                  >
                </div>
              </v-timeline-item>
              <v-timeline-item
                v-if="competitor.silver"
                dot-color="grey"
                icon="mdi-seal-variant"
              >
                <div>
                  <span class="font-weight-bold text-h5 mr-3">{{
                    competitor.silver
                  }}</span>

                  <small>
                    Premio{{ competitor.silver > 1 ? "s" : "" }} de plata</small
                  >
                </div>
              </v-timeline-item>
              <v-timeline-item
                v-if="competitor.bronze"
                dot-color="amber darken-3"
                icon="mdi-seal-variant"
              >
                <div>
                  <span class="font-weight-bold text-h5 mr-3">{{
                    competitor.bronze
                  }}</span>

                  <small>
                    Premio{{ competitor.bronze > 1 ? "s" : "" }} de
                    bronce</small
                  >
                </div>
              </v-timeline-item>
            </v-timeline>
            <v-divider></v-divider><br />
            <details v-if="competitor.description">
              <summary>Detalles</summary>
              <div class="overflow-auto" style="height: 300px">
                <v-card-text v-html="competitor.description"></v-card-text>
              </div>
            </details>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

//
const scoreFactors = [31, 15, 7, 3];
function score(gold = 0, silver = 0, bronze = 0) {
  return 31 * gold + 15 * silver + 7 * bronze;
}
const competitors = ref([
  {
    name: "Facultad 4",
    color: "purple",
    emoji: "🐊",
    gold: 4,
    silver: 1,
    bronze: 2,
    score: false,
    description: ``,
  },
  {
    name: "Facultad 2",
    color: "black",
    emoji: "🦂",
    gold: 1,
    silver: 2,
    bronze: 3,
    score: false,
    description: ``,
  },
  {
    name: "FTE",
    color: "orange",
    emoji: "🐺",
    gold: 0,
    silver: 2,
    bronze: 3,
    fullName: "Facultad de Tecnologías Educativas",
    score: false,
    description: ``,
  },
  {
    name: "Facultad 1",
    color: "white",
    emoji: "🦊",
    gold: 2,
    silver: 2,
    bronze: 3,
    textColor: "#0009",
    score: false,
    description: ``,
  },
  {
    name: "CITEC",
    fullName: "Facultad de Ciencias y Tecnologías Computacionales",
    color: "red",
    emoji: "⚔",
    gold: 4,
    silver: 2,
    bronze: 1,
    score: false,
    description: ``,
  },
  {
    name: "Facultad 3",
    color: "indigo",
    emoji: "🐲",
    gold: 1,
    silver: 3,
    bronze: 0,
    score: false,
    description: ``,
  },
]);
</script>
