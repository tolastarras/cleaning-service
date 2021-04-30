<template lang="html">
  <v-card class="my-3" hover>
    <v-img :src="image" />
    <v-card-title>
      <div class="card-content text-xs-left">
        <div class="text-xs-center" v-html="title" />
        <p class="py-3 text-xs-center text-uppercase">
          {{ service.price }}
        </p>
        <v-card-text v-html="service.description" />
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn
        dark
        outline
        color="blue"
        @click="bookNow"
      >
        Book Now
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ClientService',
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  methods: {
    bookNow () {
      // find out which button was clicked to prefill the message area with text
      this.$router.push({
        name: 'contact',
        params: {
          service: this.service.title,
          quote: true
        }
      })
    }
  },
  computed: {
    title () {
      return this.$root.formatTitle(this.service.title)
    },
    image () {
      return require(`@/assets/content/${this.service.src}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  width: 100%;
  height: 30em !important;
  margin-top: 0 !important;
  position: relative;
  overflow: hidden;
}

.v-card:hover .v-card__title {
  top: 0;
  transition: top 1s;
  background: $color-02;
}

.v-card__title {
  top: 15rem;
  position: absolute;
  width: 100%;
  transition: top 1s;
  background: $color-02;
}

.card__media {
  height: 200px !important;
}

.v-card__actions {
  background: $color-02;
  position: absolute;
  width: 100%;
  bottom: 0;
}

.card-content {
  height: 22rem;

  > p {
    color: $color-07;
    font-size: $font-18;
  }
}

.v-btn {
  margin: 0 auto;
  margin-bottom: 1.8em;
  margin-top: 1em;
}
</style>
