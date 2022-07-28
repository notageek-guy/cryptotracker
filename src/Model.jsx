import React from 'react'
import { Suspense } from 'react'
import { Container,Box } from '@mui/system';
const Spline = React.lazy(()=> import ( '@splinetool/react-spline'));

export default function Model() {
  return (
    <>
    
    <Container maxWidth='xl'>
    <Box sx={{marginBottom:"30px"}}>
    <Suspense fallback={<div>Loading...</div>}>
    <Spline scene="https://prod.spline.design/l5fJBNx-UFGCX32J/scene.splinecode" />
      </Suspense>

    </Box>
    </Container>
    
    </>
  )
}
