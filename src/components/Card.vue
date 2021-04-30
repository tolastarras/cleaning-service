<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs-12>
        <v-card flat>
          <v-img :lazy-src="image">
            <v-layout class="media-content" />
          </v-img>
          <v-card-text>
            <h2 class="text-xs-center" v-html="title" />
            <div class="card-content">
              {{ card.content }}
            </div>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn dark outline color="blue" @click="readMore">
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  computed: {
    title () {
      return this.$root.formatTitle(this.card.title)
    },
    image () {
      return require(`@/assets/card/${this.card.image}`)
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
