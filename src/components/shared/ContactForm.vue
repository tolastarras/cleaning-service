<template lang="html">
  <div class="">
    <alert-message v-show="alert.show" :alert="alert"></alert-message>
    <v-container pa-0 ma-0>
      <h1 class="display-1 header" v-text="title"></h1>
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
          <v-flex xs12 sm6 v-if="quote || this.$route.params.quote">
            <v-select class="pr-4"
              label="Service"
              v-model="service"
              :items="services"
              :rules="serviceRules"
              required
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 v-if="quote || this.$route.params.quote">
            <v-select
              label="Frequency"
              v-model="frequency"
              :items="frequencies"
              :rules="frequencyRules"
              required
            ></v-select>
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
import AlertMessage from './Alert'

export default {
  props: ['quote'],
  components: {
    AlertMessage
  },
  data: () => ({
    title: '',
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
    service: '',
    services: [],
    serviceRules: [v => !!v || 'Service is required'],
    frequency: '',
    frequencies: [
      'Daily',
      'Weekly',
      'Bi Monthly',
      'Monthly',
      'One Time Event'
    ],
    frequencyRules: [v => !!v || 'Frequency is required'],
    message: '',
    messageRules: [
      v => !!v || 'Message is required',
      v => (v && v.length <= 300) || 'Message must be less than 300 characters'
    ]
  }),
  created () {
    this.onLoad()
  },
  watch: {
    valid () {
      return this.$refs.form.validate()
    }
  },
  methods: {
    // fetchData () {
    //   this.error = this.post = null
    //   this.loading = true
    //   // replace `getPost` with your data fetching util / API wrapper
    //   getPost(this.$route.params.id, (err, post) => {
    //     this.loading = false
    //     if (err) {
    //       this.error = err.toString()
    //     } else {
    //       this.post = post
    //     }
    //   })
    // },
    closeAlert () {
      setTimeout(() => (this.alert.show = false), 5000)
    },
    onLoad () {
      // params from services page to auto-fill free quote form
      let params = this.$route.params
      // load services from json data
      let services = this.$store.getters.services.map(element => {
        return element.title
      })
      this.services = services
      this.service = params.service
      this.message = params.message
      this.title = this.quote || params.quote ? 'Get a Free Quote' : 'Send us a Message'
    },
    onSubmit () {
      console.log('here...')
      this.loading = true
      axios.post('/api/message/', {
        name: `${this.firstName} ${this.lastName}`,
        email: this.email,
        phone: this.phone,
        message: this.message,
        service: this.service,
        frequency: this.frequency,
        type: this.quote ? 'Free Quote' : 'Comment'
      })
      .then(response => {
        console.log('data:', response.data)
        this.alert = {
          show: true,
          type: 'success',
          text: response.data.status
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
          text: 'Unable to Send Message'
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
h1 {
  margin: 0;
  width: 100% !important;
}
.header {
  background: #444;
  padding: .3em 0 .5em 0 !important;
  color: white;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
.container {
  padding: 0 !important;
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
@media (max-width: 599px) {
  .header {
    padding: .2em !important;
  }
  .input-group {
    padding-right: 0 !important;
  }
}
@media (max-width: 415px) {
  form {
    padding: 2em 0 0;
  }
  .container {
    border: 0;
    border-radius: 0;
  }
}
</style>
