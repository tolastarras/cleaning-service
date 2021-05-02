<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs-12>
        <v-card flat>
          <v-img :src="srcImage">
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
  name: 'Card',
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
    srcImage () {
      return require(`@/assets/card/${this.card.name}.jpg`)
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
.v-card {
  border: 1em solid $color-02;
}

.v-image {
  height: 230px !important;
}

.card-content {
  margin: 1.2em 0;
  padding: 0 .4em;
  height: 5em !important;
  overflow: hidden;
  overflow-y: auto;
}

.v-card__text h2 {
  margin: .7em 0;
  width: 100% !important;
}

.v-card__actions {
  padding: 0 0 1em 0 !important;
}

.v-btn {
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 1024px) {
  .v-card {
    margin-bottom: 1.2rem;
    outline: 1px solid $color-08;

    .v-image {
      height: 25rem !important;
    }
  }
}

@media (max-width: 425px) {
  .v-card .v-image {
    height: 15rem !important;
  }
}
</style>
