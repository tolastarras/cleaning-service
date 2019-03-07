<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs-12>
        <v-card flat>
          <v-img :src="require(`@/assets/card/${card.image}`)">
            <v-layout class="media-content"></v-layout>
          </v-img>
          <v-card-text>
            <h2 class="text-xs-center title" v-html="title"></h2>
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
.v-card {
  border: 1em solid white;
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

// .media-content {
//   background-color: rgba(0, 0, 0, 0.1);
// }

.v-card__actions {
  padding: 0 0 1em 0 !important;
}

.v-btn {
  margin: 0 auto;
  width: 100%;
}

// /* media queries */
// @media (max-width: 399px) {
//   .container {
//     padding-bottom: 0 !important;
//   }

//   .card__actions {
//     padding: 0 !important;
//   }

//   .card-content {
//     height: 6em !important;
//   }
// }

// @media only screen and (max-width: 599px) {
//   .card__text {
//     padding: 0 .4em !important;
//   }
// }

// @media (min-width: 960px) and (max-width: 1020px) {
//   .card__text > h2 {
//     letter-spacing: 8px !important;
//   }
// }

// @media (max-width: 1263px) {
//   .card-content {
//     height: 6em !important;
//   }
// }
</style>
