// src/pages/about.js
import React from 'react'
import { Box, Heading, Text, Flex, Link } from 'theme-ui'
import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout>
    <Box sx={{
      maxWidth: '800px',
      mx: 'auto',
      p: 4,
      color: 'text',
      bg: 'background',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <Heading 
        as="h1" 
        sx={{
          fontSize: [4, 5],
          mb: 4,
          color: 'primary',
          borderBottom: '2px solid',
          borderColor: 'primary',
          pb: 2
        }}
      >
        About MovieFlix
      </Heading>

      <Box mb={4}>
        <Heading as="h2" sx={{ fontSize: [3, 4], mb: 3, color: 'primary' }}>
          Our Purpose
        </Heading>
        <Text sx={{ mb: 3, lineHeight: '1.6' }}>
          MovieFlix is your ultimate destination for discovering and exploring the world of cinema. 
          We provide comprehensive information about the latest movies, top-rated films, and upcoming releases.
        </Text>
        <Text sx={{ lineHeight: '1.6' }}>
          Our mission is to help movie enthusiasts find their next favorite film with detailed information,
          ratings, and recommendations.
        </Text>
      </Box>

      <Box mb={4}>
        <Heading as="h2" sx={{ fontSize: [3, 4], mb: 3, color: 'primary' }}>
          Features
        </Heading>
        <Flex sx={{ flexDirection: 'column', gap: 3 }}>
          <Box sx={{ bg: 'cardBg', p: 3, borderRadius: '8px', boxShadow: 'card' }}>
            <Heading as="h3" sx={{ fontSize: 2, mb: 2, color: 'primary' }}>
              Popular Movies
            </Heading>
            <Text>
              Discover trending films loved by audiences worldwide.
            </Text>
          </Box>
          <Box sx={{ bg: 'cardBg', p: 3, borderRadius: '8px', boxShadow: 'card' }}>
            <Heading as="h3" sx={{ fontSize: 2, mb: 2, color: 'primary' }}>
              Top Rated
            </Heading>
            <Text>
              Explore critically acclaimed masterpieces.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Heading as="h2" sx={{ fontSize: [3, 4], mb: 3, color: 'primary' }}>
          Contact
        </Heading>
        <Text sx={{ lineHeight: '1.6' }}>
          Have questions or suggestions? Reach out to us at {' '}
          <Link href="mailto:contact@movieflix.com" sx={{ color: 'primary' }}>
            contact@movieflix.com
          </Link>
        </Text>
      </Box>
    </Box>
  </Layout>
)

export default AboutPage