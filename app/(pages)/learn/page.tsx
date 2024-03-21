import React from 'react'
import Container from '@/components/Container'
import SlugPage from '../blog/[...page]'

const page = () => {
  return (
    <Container>
        <SlugPage />
    </Container>
  )
}

export default page