<template lang="html">
  <v-container pa-0>
    <v-layout row wrap>
      <v-flex xs-12>
        <v-card flat :class="marginRight">
          <v-card-media :src="card.src">
            <v-layout class="media-content"></v-layout>
          </v-card-media>
          <v-card-text>
            <h2 class="text-xs-center text-md-left" v-html="title"></h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
      let [t1, t2] = this.card.title.split(/\s/)
      return '<b style="letter-spacing: -1px">' + t1 + '</b> ' + t2
    }
  }
}
</script>

<style scoped lang="css">
h2 {
  text-transform: uppercase;
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
.media-content {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
