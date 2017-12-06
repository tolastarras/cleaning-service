<template lang="html">
  <v-container pa-0>
    <v-layout row wrap>
      <v-flex xs-12>
        <h1 class="display-1 pt-4 pb-4 text-xs-center" v-html="title"></h1>
        <v-card flat :class="marginRight">
          <v-card-media :src="card.src" height="280"></v-card-media>
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
b {
  letter-spacing: -5px;
  color: red;
}
.test {
  color: blue;
}
.card {
  border: 5px solid lightgray;
}
</style>
