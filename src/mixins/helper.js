export default {
  // data () {
  //   return {
  //     get medium () {
  //       return 900
  //     }
  //   }
  // },
  methods: {
    formatTitle: str => {
      let index = str.indexOf(' ')
      let str1 = str.substring(0, index)
      let str2 = str.substring(index + 1)

      return `<div class="card-title">${str1} <span>${str2}</span></div>`
    },
    getImage: (name, width) => {
      let size = '320x480'
      if (width >= 1280) {
        size = '1280x960'
      } else if (width >= 800) {
        size = '800x600'
      }

      return require(`@/assets/header/${name}_${size}.jpg`)
    },
    getPage: path => {
      // remove double forward slashes from path and split url into array of words > 0
      let values = path
        // .replace(/\/\//g, '/')
        .split('/')
        .filter(param => param.length > 0)

      // return the last value (the page)
      return values[values.length - 1]
    }
  }
  // computed: {
  //   mediumSize () {
  //     return 900
  //   }
  // }
}
