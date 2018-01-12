<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs-12>
        <v-card flat>
          <v-card-media :src="card.src">
            <v-layout class="media-content"></v-layout>
          </v-card-media>
          <v-card-text>
            <h2 class="text-xs-center" v-html="title"></h2>
            <div class="card-content">
              {{ card.content }}
            </div>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn dark outline color="blue" @click="readMore">Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { PROJECT_PATH } from '@/config/'
export default {
  props: ['card', 'index', 'total'],
  computed: {
    title () {
      return this.formatTitle(this.card.title)
    }
  },
  methods: {
    readMore () {
      this.$router.push(`${PROJECT_PATH}/about/`)
    }
  }
}
</script>

<style scoped lang="css">
h2 {
  text-transform: uppercase;
  font-size: 2em;
  padding: .4em 0 0 0;
  margin: 0;
}
b {
  letter-spacing: -5px;
  color: red;
}
.card {
  border: 1em solid white;
  z-index: 1;
}
.card__media {
  height: 230px !important;
}
.card-content {
  margin: 1.2em 0;
  padding: 0 .4em;
  height: 5em !important;
  overflow: hidden;
  overflow-y: auto;
}
.card__text h2 {
  margin-bottom: .5em;
  width: 100% !important;
}
.media-content {
  background-color: rgba(0, 0, 0, 0.1);
}
.card__actions {
  padding: 0 0 1em 0 !important;
}
.btn {
  margin: 0 auto;
  width: 100%;
}
h2 {
  color: green;
}
h2 > span {
  color: red;
}
/* media queries */
@media (max-width: 399px) {
  .container {
    padding-bottom: 0 !important;
  }
  .card__actions {
    padding: 0 !important;
  }
  .card-content {
    height: 6em !important;
  }
}
@media only screen and (max-width: 599px) {
  .card__text {
    padding: 0 .4em !important;
  }
}
@media (min-width: 960px) and (max-width: 1020px) {
  .card__text > h2 {
    letter-spacing: 8px !important;
  }
}
@media (max-width: 1263px) {
  .card-content {
    height: 6em !important;
  }
}
</style>
