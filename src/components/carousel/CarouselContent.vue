<template lang="html">
  <v-layout
    class="carousel-content"
    justify-center
    align-center
    column
  >
    <h1 class="title white--text text-xs-center font-weight-bold mb-0 pb-0">
      {{item.title}}
    </h1>
    <h2 class="subtitle text-xs-center font-weight-medium hidden-sm-and-down amber--text text--accent-2">
      {{item.subtitle}}
    </h2>
  </v-layout>
</template>

<script>
export default {
  name: 'CarouselContent',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-content {
  background-color: $parallax-filter;
  padding: 2em;
  height: 100%;

  h1, h2 {
    max-width: 900px;
  }

  .title {
    font-size: $font-48 !important;
    margin-bottom: .3em !important;
  }

  .subtitle {
    font-size: $font-36;
    line-height: 110%;
  }
}

/* media queries */
@media (max-width: 1024px) {
  .carousel-content {
    margin-top: -2.8em;

    h1.title, h2 {
      max-width: 600px;
      line-height: 100%;
    }

    h1.title {
      font-size: 3.5rem !important;
    }
  }
}

@media (max-width: 425px) {
  .carousel-content {
    margin-top: -10rem;

    h1.title {
      max-width: 200px;
      font-size: $font-28 !important;
      line-height: 2.2rem;
    }

    h2 {
      display: none;
    }
  }
}
</style>
