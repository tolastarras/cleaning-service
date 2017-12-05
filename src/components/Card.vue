<template lang="html">
  <v-card>
    <v-card-media :src="src" height="200px"></v-card-media>
    <v-card-actions class="white">
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>bookmark</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>share</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['src']
}
</script>

<style lang="css">
</style>
