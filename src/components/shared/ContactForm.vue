<template lang="html">
  <v-container>
    <h1 class="display-1">{{title}}</h1>
    <v-card color="blue lighten-5" flat>
      <v-card-text>
        <v-container fluid>
          <v-layout row>
            <v-flex xs12>
              <v-text-field name="input-1-3" label="Name" single-line></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-text-field name="input-1-3" label="Email" single-line></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-text-field name="input-1-3" label="Phone" single-line></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-text-field name="input-1-3" label="Message" multi-line></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="css">
</style>
