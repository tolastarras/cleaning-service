<template lang="html">
  <v-container pa-0 pt-4>
    <v-layout row wrap>
      <v-flex v-for="(icon, i) in icons" :key="i">
        <a :href="icon.link">
          <i :class="className(icon.name)" aria-hidden="true"></i>
        </a>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        { name: 'twitter', link: '#tw' },
        { name: 'facebook', link: '#fb' },
        { name: 'instagram', link: '#ig' }
      ]
    }
  },
  methods: {
    className (icon) {
      return 'fa fa-' + icon + ' fa-lg'
    }
  }
}
</script>

<style scoped lang="css">
.icon {
  border: 1px solid red;
}
</style>
