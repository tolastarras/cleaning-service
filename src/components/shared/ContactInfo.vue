<template lang="html">
  <v-container class="container">
    <v-layout>
      <v-flex xs-12>
        <h1 class="display-1 blue--text mb-4">{{title}}</h1>
        <p v-html="contact.address"></p>
        <span>Email: {{contact.email}}</span>
        <p>Phone: {{contact.phone}}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['contact', 'title']
}
</script>

<style lang="css">
</style>
