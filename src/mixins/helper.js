export default {
  methods: {
    formatTitle: str => {
      let index = str.indexOf(' ')
      let str1 = str.substring(0, index)
      let str2 = str.substring(index + 1)

      return `
      <div class="card-title text-uppercase font-weight-bold">
        ${str1} <span>${str2}</span>
      </div>`
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
}
