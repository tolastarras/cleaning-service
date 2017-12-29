<template lang="html">
  <div class="">
    <app-alert v-if="alert.show" :alert="alert"></app-alert>
    <v-container pa-0 ma-0>
      <h1 class="display-1 header">{{title}}</h1>
      <v-form v-model="valid" ref="form">
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-text-field class="pr-4"
              label="First Name"
              v-model="firstName"
              :rules="nameRules"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              label="Last Name"
              v-model="lastName"
              :rules="nameRules"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field class="pr-4"
              label="E-mail"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              label="Phone"
              v-model="phone"
              hint="For example, 3055551212"
              :rules="phoneRules"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
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
  </div>
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
    firstName: '',
    lastName: '',
    maxMessageChars: 300,
    nameRules: [
      v => !!v || 'Field is required',
      v => (v && v.length >= 3 && v.length <= 20) || 'Name must be between 3 and 20 characters in length'
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
    }
    // loader () {
    //   const l = this.loader
    //   this[l] = !this[l]
    //
    //   setTimeout(() => (this[l] = false), 3000)
    //
    //   this.loader = null
    // }
  },
  methods: {
    closeAlert () {
      setTimeout(() => (this.alert.show = false), 5000)
    },
    onSubmit () {
      this.loading = true
      // axios.post('/api/message/', {
      axios.post('http://nuriki.com/api/message/', {
      // axios.post('http://localhost:3000/api/message/', {
        name: `${this.firstName} ${this.lastName}`,
        email: this.email,
        phone: this.phone,
        message: this.message
      })
      .then(response => {
        this.alert = {
          show: true,
          type: 'success',
          text: response.data
        }
        this.$refs.form.reset()
        this.loading = false
        this.closeAlert()
      })
      .catch(error => {
        console.log('ERROR', error)
        this.loading = false
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
form {
  padding: 2em;
}
.header {
  background: #444;
  padding: .5em 0 !important;
  color: white;
  padding: 0;
  margin: 0;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
.container {
  /* padding: 2em !important; */
  border: 12px solid #444;
  border-radius: 4px;
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
@media (max-width: 600px) {
  .input-group {
    padding-right: 0 !important;
  }
}
</style>
