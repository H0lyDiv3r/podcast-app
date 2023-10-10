import './globals.css'
import ChakraProviders from './providers/ChakraProviders'
import GlobalContextProvider from './providers/GlobalProvider'

export default function RootLayout({ children }) {
  console.log("this is the root layout")
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>
          <ChakraProviders>
              {children}
          </ChakraProviders>
        </GlobalContextProvider>

      </body>
    </html>
  )
}
