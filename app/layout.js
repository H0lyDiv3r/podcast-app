

import './globals.css'
import ChakraProviders from './providers/ChakraProviders'
import theme from './theme/theme'

export default function RootLayout({ children }) {
  console.log("this is the root layout")
  return (
    <html lang="en">
      <body>
        <ChakraProviders>
            {children}
        </ChakraProviders>

      </body>
    </html>
  )
}
