<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs-12>
        <v-card flat>
          <v-img :src="require(`@/assets/card/${card.image}`)">
            <v-layout class="media-content"></v-layout>
          </v-img>
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
export default {
  props: ['card', 'index', 'total'],
  computed: {
    title () {
      return this.$root.formatTitle(this.card.title)
    }
  },
  methods: {
    readMore () {
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/components/_card.scss';
</style>
