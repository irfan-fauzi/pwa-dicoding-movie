/* eslint-disable linebreak-style */
import TheMovieDbSource from '../../data/themoviedb-source'

const NowPlaying = {
  async render() {
    return `
    <h2>Now playing page</h2>
    `
  },

  async afterRender() {
    // eslint-disable-next-line no-unused-vars
    const movie = await TheMovieDbSource.nowPlayingMovie()
    // eslint-disable-next-line no-console
    console.log(movie)
  },
}

export default NowPlaying
