<template>
  <h1 class="text-center" style="color: #fffa">Juegos Mella XIX</h1>
  <p class="text-center" style="color: #fff8">
    Culminado el 5 de abril de 2023
  </p>
  <div
    class="competitor-wrapper"
    v-for="(competitor, index) in competitors"
    v-bind:key="competitor.name"
  >
    <v-container v-if="competitor.score" class="my-5">
      <v-row justify="space-around">
        <v-card
          :style="`background-color:${
            index == 0
              ? 'gold'
              : index == 1
              ? 'lightgrey'
              : index == 2
              ? 'orange'
              : 'white'
          }`"
          width="400"
        >
          <div
            :class="`bg-${
              competitor.color ?? 'blue'
            } pa-4 px-5 darken-4 container
            competitor-card-title d-flex justify-space-between text-h4 font-weight-black`"
          >
            <span class="logo-container">
              <img
                v-if="competitor.logo"
                :alt="competitor.emoji"
                height="40"
                :src="competitor.logo"
              />
              <span v-else class="text-h4 mr-4">{{
                competitor.emoji ?? ""
              }}</span>
            </span>
            <span
              class="competitor-name"
              :style="`color: ${competitor.textColor ?? '#fffa'}`"
              :title="competitor.fullName ?? competitor.name"
              >{{ competitor.name }}</span
            >
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
              >
            </div>

            <v-timeline truncate-line="start" align-top dense side="end">
              <v-timeline-item
                v-if="competitor.score"
                :dot-color="competitor.color"
                :icon="index == 0 ? 'mdi-crown' : 'mdi-star'"
                size="small"
              >
                <template v-slot:opposite>
                  <span class="text-subtitle-1">
                    {{ index + 1 }}
                    <small class="text-overline font-weight-thin"
                      >Lugar</small
                    ></span
                  >
                </template>
                <div>
                  <span class="font-weight-bold text-h3 mr-3">{{
                    competitor.score ??
                    calculateScore(
                      competitor.gold,
                      competitor.silver,
                      competitor.bronze
                    )
                  }}</span>

                  <small>Puntos</small>
                </div>
              </v-timeline-item>
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
                    >Medalla{{ competitor.gold > 1 ? "s" : "" }} de oro</small
                  >
                </div>
              </v-timeline-item>
              <v-timeline-item
                v-if="competitor.silver"
                dot-color="grey-darken-1"
                icon="mdi-seal-variant"
              >
                <div>
                  <span class="font-weight-bold text-h5 mr-3">{{
                    competitor.silver
                  }}</span>

                  <small>
                    Medalla{{ competitor.silver > 1 ? "s" : "" }} de
                    plata</small
                  >
                </div>
              </v-timeline-item>
              <v-timeline-item
                v-if="competitor.bronze"
                dot-color="amber-darken-4"
                icon="mdi-seal-variant"
              >
                <div>
                  <span class="font-weight-bold text-h5 mr-3">{{
                    competitor.bronze
                  }}</span>

                  <small>
                    Medalla{{ competitor.bronze > 1 ? "s" : "" }} de
                    bronce</small
                  >
                </div>
              </v-timeline-item>
            </v-timeline>
            <template v-if="competitor.description">
              <v-divider></v-divider><br />
              <div class="card-bottom">
                <details>
                  <summary>Historias</summary>
                  <div class="overflow-auto">
                    <v-card-text v-html="competitor.description"></v-card-text>
                  </div>
                </details>
              </div>
            </template>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
  <footer class="text-center mt-12">
    <a class="d-block" href="https://infouci.t.me">infouci.t.me</a>
    <a class="d-block" href="https://jdeportivos.uci.cu">jdeportivos.uci.cu</a>
  </footer>
</template>

<script setup lang="ts">
import competitors, { calculateScore } from "../stores/competitors-store";
</script>
<style>
.v-card {
  background-color: rgb(209, 218, 228);
}
.v-card {
  color: #000c !important;
}
.v-card,
.competitor-card-title {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='540' height='450' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E");
}
footer a {
  color: #fffa;
  text-decoration: none;
}
footer a:hover {
  text-decoration: underline;
}
.competitor-wrapper:nth-child(3) .v-card {
  box-shadow: 0 0 8px 0 rgba(255, 217, 0, 0.5);
  margin-bottom: 40px;
  margin-top: 30px;
}
.competitor-wrapper:nth-child(3) .card-bottom:has(details[open]) {
  background: url(https://jdeportivos.uci.cu/wp-content/uploads/2022/05/IMG_7088.jpg);
  background-size: cover;
  background-clip: border-box;
  color: white;
  border-radius: 8px;
}
details {
  border-radius: 8px;
  background: #0001;
  backdrop-filter: blur(8px);
  max-height: 300px;
}
summary {
  border-radius: 8px;
  color: #000a;
  padding: 4px 12px;
  cursor: pointer;
}
.logo-container span {
  color: #fffa;
  filter: grayscale(95%) brightness(170%);
}
.competitor-name {
  font-variant: small-caps;
  font-weight: 400;
  font-family: Impact, sans-serif;
  letter-spacing: 3px;
}
details[open] > summary {
  color: white;
}
details[open] {
  box-shadow: 0 0 6px 0 #000 inset, 0 1px 4px 0 #fff;
}
details a {
  color: #fff8;
  text-decoration: none;
}
details a:hover {
  text-decoration: underline;
}

h1 + p {
  background: #0002;
  border-radius: 8px;
  width: fit-content;
  height: fit-content;
  padding: 8px 46px;
  margin: auto;
  margin-block: 12px;
  backdrop-filter: blur(8px);
}
.competitor-wrapper:nth-child(4) .v-card {
  box-shadow: 0 0 10px 0 rgba(192, 192, 192, 0.5);
  margin-bottom: 30px;
}
.competitor-wrapper:nth-child(5) .v-card {
  box-shadow: 0 0 12px 0 rgba(124, 53, 9, 0.5);
  margin-bottom: 20px;
}
</style>
