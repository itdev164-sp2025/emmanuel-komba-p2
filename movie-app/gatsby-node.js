/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const { fetchPopularMovies } = require('./src/utils/tmdb');
const path = require('path');

exports.createPages = async ({ actions: { createPage } }) => {
  // 1. Fetch movies directly from TMDB API
  const movies = await fetchPopularMovies();

  if (!movies || movies.length === 0) {
    console.error('No movies fetched from API!');
    return;
  }

  movies.forEach((movie) => {
    createPage({
      path: `/movie/${movie.id}`, 
      component: path.resolve('./src/templates/movie.js'), 
      context: { movie }, 
    });
  });
};