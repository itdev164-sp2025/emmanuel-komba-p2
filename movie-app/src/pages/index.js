import React, { useState, useEffect } from 'react'
import { Box, Heading, Flex } from 'theme-ui'
import Layout from '../components/Layout'
import MovieCard from '../components/movies/MovieCard'
import { fetchPopularMovies, fetchTopRatedMovies } from '../utils/tmdb'

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMovies = async () => {
      const popular = await fetchPopularMovies()
      const topRated = await fetchTopRatedMovies()
      setPopularMovies(popular)
      setTopRatedMovies(topRated)
      setLoading(false)
    }
    loadMovies()
  }, [])

  if (loading) return <Layout>Loading...</Layout>

  return (
    <Layout>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 3 }}>
        <Heading as="h2" sx={{ fontSize: [3, 4], mb: 4, color: 'primary' }}>
          Popular Movies
        </Heading>
        <Flex sx={{ flexWrap: 'wrap', gap: '20px' }}>
          {popularMovies.map(movie => (
            <Box key={movie.id} sx={{ width: ['100%', '48%', '23%'] }}>
              <MovieCard movie={movie} />
            </Box>
          ))}
        </Flex>

        <Heading as="h2" sx={{ fontSize: [3, 4], mt: 5, mb: 4, color: 'primary' }}>
          Top Rated Movies
        </Heading>
        <Flex sx={{ flexWrap: 'wrap', gap: '20px' }}>
          {topRatedMovies.map(movie => (
            <Box key={movie.id} sx={{ width: ['100%', '48%', '23%'] }}>
              <MovieCard movie={movie} />
            </Box>
          ))}
        </Flex>
      </Box>
    </Layout>
  )
}

export default HomePage