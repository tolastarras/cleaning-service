<template lang="html">
  <v-container>
    <h1 class="display-1">{{ title }}</h1>
    <v-layout row wrap>
      <v-flex xs12 class="testimonial" v-for="(testimonial, i) in testimonials" :key="i">
        <div class="testimonial-quote group" :class="lastChild(i)">
          <blockquote>
            <p>{{testimonial.quote}}</p>
          </blockquote>
          <cite>
            <span>{{testimonial.client.name}}</span>, {{testimonial.client.city}}
          </cite>
        </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    lastChild (i) {
      console.log('i: ' + this.testimonials.length)
      return (i + 1) === this.testimonials.length ? 'last' : ''
    }
  },
  data: () => ({
    testimonials: [
      {
        quote: 'Overall, fantastic! I\'d recommend them to anyone looking for a creative, thoughtful, and professional team.”',
        client: {
          name: 'Lisa',
          city: 'West Kendall'
        }
      },
      {
        quote: 'Overall, fantastic! I\'d recommend them to anyone looking for a creative, thoughtful, and professional team.”',
        client: {
          name: 'Jesenia Rivera',
          city: 'Miami'
        }
      },
      {
        quote: 'Overall, fantastic! I\'d recommend them to anyone looking for a creative, thoughtful, and professional team.”',
        client: {
          name: 'Anonymous',
          city: 'Kendale Lakes'
        }
      }
    ]
  })
}
</script>

<style scoped lang="css">
h1 {
  text-align: center;
  margin-bottom: .6em;
}
.testimonial-quote {
    font-size: 1em;
    position: relative;
}
.testimonial-quote.group {
  padding-left: 2em;
  padding-bottom: 3em;
}
.testimonial-quote.group.last {
  padding-bottom: 0;
}
.testimonial-quote blockquote {
    font-family: Georgia, serif;
    font-size: 1.5em;
    font-style: italic;
    line-height: 1.4 !important;
    margin: 0;
    position: relative;
    z-index: 1;
}
.testimonial-quote blockquote * {
    box-sizing: border-box;
}
.testimonial-quote blockquote p {
    color: #75808a;
    line-height: 1.4 !important;
}
.testimonial-quote blockquote p:first-child:before {
    content: '\201C';
    /* color: #81bedb; */
    color: #2196f3;
    font-size: 7.5em;
    font-weight: 700;
    opacity: .3;
    position: absolute;
    top: -.4em;
    left: -.2em;
    text-shadow: none;
    /* z-index: -1; */
}
.testimonial-quote cite {
    color: gray;
    display: block;
    font-size: 1em;
}
.testimonial-quote cite span {
    color: #5e5e5e;
    font-weight: 500;
    font-size: 1em;
    text-shadow: 0 1px white;
}
</style>
