<template lang="html">
  <v-container>
    <h1 class="display-1">{{title}}</h1>
    <v-card flat>
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
          <v-btn color="info" :loading="loading" @click.native="loader = 'loading'" :disabled="loading">
            Submit
            <span slot="loader" class="custom-loader">
              <v-icon light>cached</v-icon>
            </span>
          </v-btn>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ['title'],
  data: () => ({
    loader: null,
    loading: false
  }),
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  }
}
</script>

<style scoped lang="css">
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
