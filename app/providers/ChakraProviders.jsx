'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/theme'
import React from 'react'

export default function ChakraProviders({children}) {
  return (
    <CacheProvider>
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    </CacheProvider>
  )
}
