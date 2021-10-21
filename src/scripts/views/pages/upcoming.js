/* eslint-disable linebreak-style */
import TheMovieDbSource from '../../data/themoviedb-source'

const Upcoming = {
  async render() {
    return `
    <h2>upcoming page</h2>
    `
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const movies = await TheMovieDbSource.upcomingMovies()
    console.log(movies)
  },
}

export default Upcoming
