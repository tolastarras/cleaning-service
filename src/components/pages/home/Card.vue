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
  border: 14px solid white;
  z-index: 1;
}
.card__media {
  height: 230px !important;
}
.card__text {
  margin-top: 1.2em;

  padding: 0 .4em;
  /* height: 16em !important;
  overflow-y: auto; */
}
.card__text h2 {
  margin-bottom: .5em;
}
.media-content {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
