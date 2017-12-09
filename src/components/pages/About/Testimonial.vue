<template lang="html">
  <v-container pa-0 pl-3>
    <v-layout row wrap>
      <v-flex xs12 class="mb-5" v-for="(testimonial, i) in testimonials" :key="i">
        <div class="testimonial-quote group">
          <div class="quote-container">
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
  font-size: 16px;
  text-align: center;
  margin-bottom: 40px;
}
.testimonial-quote {
    font-size: 16px;
}
.testimonial-quote blockquote {
    border: 0;
    margin: 0;
    padding: 0;

    background: none;
    color: gray;
    font-family: Georgia, serif;
    font-size: 1.5em;
    font-style: italic;
    line-height: 1.4 !important;
    margin: 0;
    position: relative;
    text-shadow: 0 1px white;
    z-index: 600;
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
    color: #81bedb;
    font-size: 7.5em;
    font-weight: 700;
    opacity: .3;
    position: absolute;
    top: -.4em;
    left: -.2em;
    text-shadow: none;
    z-index: -300;
}
.testimonial-quote cite {
    color: gray;
    display: block;
    font-size: .8em;
}
.testimonial-quote cite span {
    color: #5e5e5e;
    font-size: 1em;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 1px;
    /*text-transform: uppercase;*/
    text-shadow: 0 1px white;
}
.testimonial-quote {
    position: relative;
}
</style>
