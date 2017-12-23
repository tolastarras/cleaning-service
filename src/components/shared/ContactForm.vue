<template lang="html">
  <v-container pa-0 ma-0>
    <h1 class="display-1">{{title}}</h1>
    <app-alert v-if="alert.show" :alert="alert"></app-alert>
    <v-form v-model="valid" ref="form">
      <v-text-field
        label="Name"
        v-model="name"
        :rules="nameRules"
        required
      ></v-text-field>
      <v-text-field
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
        label="Phone"
        v-model="phone"
        hint="For example, 3055551212"
        :rules="phoneRules"
        required
      ></v-text-field>
      <v-text-field
        label="Message" multi-line
        v-model="message"
        :rules="messageRules"
        :counter="maxMessageChars"
        required
      ></v-text-field>
      <v-btn color="info" :loading="loading" @click="onSubmit" :disabled="loading || !valid">Send
        <span slot="loader" class="custom-loader">
          <v-icon light>cached</v-icon>
        </span>
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  props: ['title'],
  data: () => ({
    loader: null,
    loading: false,
    valid: false,
    alert: {
      show: false,
      type: '',
      text: ''
    },
    name: '',
    maxMessageChars: 300,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length > 3) || 'Name must be more than 3 characters in length'
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
       // eslint-disable-next-line
      (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    phone: '',
    phoneRules: [
      v => !!v || 'Phone is required',
      v => /^\d{10}$/.test(v) || 'Phone must be 10 digits in length'
    ],
    message: '',
    messageRules: [
      v => !!v || 'Message is required',
      v => (v && v.length <= 300) || 'Message must be less than 300 characters'
    ]
  }),
  watch: {
    valid () {
      return this.$refs.form.validate()
    },
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  },
  methods: {
    onSubmit () {
      // axios.post('http://nuriki.com/api/message/', {
      axios.post('http://localhost:3000/api/message/', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      })
      .then(response => {
        console.log('response', response)
        this.alert = {
          show: true,
          type: 'success',
          text: response.data
        }
        this.$refs.form.reset()
      })
      .catch(error => {
        console.log('ERROR', error)
        this.alert = {
          show: true,
          type: 'error',
          text: 'Unable to Send Message: ' + error.message
        }
      })
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
