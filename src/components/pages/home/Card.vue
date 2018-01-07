<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs-12>
        <v-card flat>
          <v-card-media :src="card.src">
            <v-layout class="media-content"></v-layout>
          </v-card-media>
          <v-card-text>
            <h2 class="text-xs-center text-md-left" v-html="title"></h2>
            {{ card.content }}
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
  padding: 0;
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
.card__text {
  margin-top: 1.2em;
  padding: 0 .4em;
  height: 10em !important;
  overflow: hidden;
  overflow-y: auto;
}
.card__text h2 {
  margin-bottom: .5em;
}
.media-content {
  background-color: rgba(0, 0, 0, 0.1);
}
.card__actions {
  padding: 0 0 1em 0 !important;
}
.btn {
  margin: 0 auto;
}
/* media queries */
@media only screen and (max-width: 599px) {
  .container {
    /* padding: .8em .3em !important; */
  }
  .card {
    /* margin-top: -1em; */
  }
  .card__text {
    padding: 0 .4em !important;
  }
}
@media (max-width: 959px) {
  .card__media {
    /* height: 25em !important; */
  }
}
</style>
