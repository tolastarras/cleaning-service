<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs-12>
        <v-card flat :class="marginRight">
          <v-card-media :src="card.src">
            <v-layout class="media-content"></v-layout>
          </v-card-media>
          <v-card-text>
            <h2 class="text-xs-center text-md-left" v-html="title"></h2>
            {{ card.content }}
          </v-card-text>
          <v-card-actions>
            <v-btn dark outline color="blue" @click="readMore">Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['card', 'index', 'total'],
  computed: {
    marginRight () {
      return this.index + 1 < this.total ? 'mr-2' : ''
    },
    title () {
      return this.formatTitle(this.card.title)
    }
  },
  methods: {
    readMore () {
      this.$router.push('/about/')
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
  /* overflow-y: auto; */
}
.card__text h2 {
  margin-bottom: .5em;
}
.media-content {
  background-color: rgba(0, 0, 0, 0.1);
}
.btn {
  margin: 1.2em auto;
}
/* .btn {
  position: absolute;
  bottom: 2em;
  margin: 0 auto !important;
} */
</style>
