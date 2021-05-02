export default {
  methods: {
    formatTitle: str => {
      const [ left, right ] = str.split(' ')

      return `
      <div class="card-title text-uppercase font-weight-bold">
        ${left} <span>${right}</span>
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
