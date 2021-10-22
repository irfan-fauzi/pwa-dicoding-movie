/* eslint-disable linebreak-style */
import TheMovieDbSource from '../../data/themoviedb-source'
import { createMovieItemTemplate } from '../templates/template-creator'

const Upcoming = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Upcoming in Cinema</h2>
      <div class="movies" id="movies">
      
      </div>
    </div>
    `
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const movies = await TheMovieDbSource.upcomingMovies()
    const moviesContainer = document.querySelector('#movies')
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie)
    })
  },
}

export default Upcoming
