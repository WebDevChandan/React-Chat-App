import { About, Certificate, Header, Portfolio, Provider, StyleSwitcher, Testimonial } from '@components'
import '@styles/global.scss'

export const metadata = {
  title: 'WebDevChandan Portfoio | Full Stack Developer',
  description: 'WebDevChandan Portfoio Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>

          <Header />
          {/* <StyleSwitcher /> */}
          <About />
          {/* {children} */}

        </Provider>
      </body>
    </html>
  )
}
