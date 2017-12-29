<template lang="html">
  <v-container>
    <h1 class="display-2 bottom-line">Cleaning Services</h1>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="(card, i) in cards" :key="i">
        <v-card class="my-3" :style="marginRight(i)" hover @mouseover="toggle(card)" @mouseout="toggle(card)">
          <transition name="slide">
            <div>
              <v-card-media v-show="card.show" :src="card.src"></v-card-media>
              <v-card-title>
                <div class="card-content text-xs-left">
                  <div class="headline pt-4 text-xs-center">{{card.title}}</div>
                  <p class="pt-4 text-xs-center">{{ card.price }}</p>
                  <v-card-text v-show="!card.show" v-html="card.description"></v-card-text>
                </div>
              </v-card-title>
            </div>
          </transition>
          <v-card-actions>
            <v-btn dark outline color="blue" @click="bookNow">Book Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        id: 1,
        title: 'House Cleaning',
        src: require('@/assets/content/house-cleaning.jpg'),
        show: true,
        price: '1hr | $24.99',
        description: 'We have flexible appointment availability, and our team is available to talk with customers seven days a week. If you have recurring needs on a weekly or monthly basis, we will be happy to pitch in. Our crew is always punctual, and we have more than 10 years of experience. Clients concerned about costs are always glad to hear that we provide free estimates and all our equipment and supplies come at no additional charge. Place a call to our office today and tell us which areas you require assistance with.'
      },
      {
        id: 2,
        title: 'Carpet Care',
        src: require('@/assets/content/carpet-cleaning.jpg'),
        show: true,
        price: '1hr | $24.99',
        description: 'We specialize in the professional cleaning and restoration of a wide range of flooring materials. Our team believes you deserve the very best service, so we go out of our way to deliver exceptional results and a great customer experience. We want to do more than just clean your floors; we want to win your loyalty.'
      },
      {
        id: 3,
        title: 'After Party Cleaning',
        src: require('@/assets/content/after-party-cleaning.jpg'),
        show: true,
        price: '1hr | $24.99',
        description: 'Cleaning up after a big event can be a major undertaking, especially when there\'s food and drink involved. And depending on the extent of the clean-up, you may even have to rent the right equipment to get the job done. Instead of struggling to restore your space to order, consider a better option: our event cleaning services.'
      },
      {
        id: 4,
        title: 'Office Space',
        src: require('@/assets/content/office_lg.jpg'),
        show: true,
        price: 'Contact Us',
        description: 'A clean, well-kept office helps employees stay motivated and content. Treat your employees and your business to a spotless interior with comprehensive office cleaning services from us. No matter the size or layout of your company, we can get your office looking its best without disrupting your schedule.'
      },
      {
        id: 5,
        title: 'Move In/Out',
        src: require('@/assets/content/move-in-move-out-cleaning.jpg'),
        show: true,
        price: 'As low as $140',
        description: 'Now that the rooms are empty – or nearly empty – it’s time to get your home or apartment looking even better. Many house or apartment contracts require a "broom-clean." Others require a thorough checklist that covers everything from baseboards to the microwave oven.'
      },
      {
        id: 6,
        title: 'Upholstery Cleaning',
        src: require('@/assets/content/upholstery-cleaning.jpg'),
        show: true,
        price: '1 piece | $29.99',
        description: 'Upholstery can be made from many different fibers or combinations of fibers, and each one may need to be cleaned in a specific way. We will identify your upholstery fabric and select from a variety of cleaning methods to treat your upholstery safely and effectively.'
      }
    ]
  }),
  methods: {
    bookNow () {
      // find out which button was clicked to prefill the message area with text
      this.$router.push('/contact/')
    },
    toggle (card) {
      card.show = !card.show
    },
    marginRight (index) {
      return (index + 1) % 3 === 0 ? 'margin-right: 0' : 'margin-right: 2em'
    }
  }
}
</script>

<style scoped lang="css">
.card {
  /* margin-right: 2em; */
}
.card__media, .card__text {
  height: 200px !important;
}
.card-content {
  width: 100%;
}
.btn {
  margin: 0 auto !important;
  margin-bottom: 2em !important;
}
</style>
