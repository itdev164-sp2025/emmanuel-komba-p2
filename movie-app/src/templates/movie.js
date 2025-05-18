import React from 'react'
import { Box, Heading, Text, Flex, Image, Button } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const MovieTemplate = ({ pageContext: { movie } }) => {
  return (
    <Layout>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 4 }}>
        <Button 
          as={Link}
          to="/"
          sx={{ 
            mb: 4,
            bg: 'primary',
            color: 'white',
            ':hover': {
              bg: 'secondary'
            }
          }}
        >
          ← Back to Movies
        </Button>

        <Flex sx={{ flexDirection: ['column', 'row'], gap: 4, mb: 5 }}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            sx={{
              width: ['100%', '300px'],
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}
          />
          
          <Box>
            <Heading as="h1" sx={{ fontSize: [4, 5], mb: 2, color: 'primary' }}>
              {movie.title}
            </Heading>
            
            <Flex sx={{ alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
              <Text sx={{ 
                bg: 'primary', 
                color: 'white', 
                px: 2, 
                py: 1, 
                borderRadius: '4px',
                mr: 2
              }}>
                ★ {movie.vote_average.toFixed(1)}
              </Text>
              <Text>{movie.runtime} minutes</Text>
              <Text>|</Text>
              <Text>{new Date(movie.release_date).toLocaleDateString()}</Text>
            </Flex>
            
            <Text sx={{ fontSize: 2, lineHeight: '1.6', mb: 4 }}>
              {movie.overview || "No synopsis available."}
            </Text>
            
            {movie.genres && (
              <Flex sx={{ flexWrap: 'wrap', gap: 2, mb: 4 }}>
                {movie.genres.map(genre => (
                  <Text key={genre.id} sx={{
                    bg: 'muted',
                    px: 3,
                    py: 1,
                    borderRadius: '20px',
                    fontSize: 1
                  }}>
                    {genre.name}
                  </Text>
                ))}
              </Flex>
            )}
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export default MovieTemplate