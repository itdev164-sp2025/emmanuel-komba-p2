import React from 'react'
import { Link } from 'gatsby'
import { Card, Heading, Text, Image, Flex, Box } from 'rebass'
import { Star } from '@styled-icons/material/Star'

const MovieCard = ({ movie }) => (
  <Card
    as={Link}
    to={`/movie/${movie.id}`}
    sx={{
      borderRadius: 4,
      boxShadow: '0 2px 16px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
      transition: 'transform 0.2s',
      textDecoration: 'none',
      color: 'text',
      ':hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 6px 12px rgba(0,0,0,0.3)'
      },
    }}
  >
    <Image
      src={movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Poster'}
      alt={movie.title}
      height={[400, 500]}
      sx={{ objectFit: 'cover' }}
    />
    <Box p={3}>
      <Heading fontSize={3} mb={2} color="text">
        {movie.title}
      </Heading>
      <Flex alignItems="center" mb={2}>
        <Star size="16" color="gold" />
        <Text ml={1} color="text">{movie.vote_average}/10</Text>
      </Flex>
      <Text fontSize={1} color="text">
        {new Date(movie.release_date).getFullYear()}
      </Text>
    </Box>
  </Card>
)

export default MovieCard