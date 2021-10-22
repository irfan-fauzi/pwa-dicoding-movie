/* eslint-disable linebreak-style */
import TheMovieDbSource from '../../data/themoviedb-source'
import UrlParser from '../../routes/url-parser'

const Detail = {
  async render() {
    return `
    <h2>Detail page</h2>
    `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const movie = await TheMovieDbSource.detailMovie(url.id)
    console.log(movie)
  },
}

export default Detail
