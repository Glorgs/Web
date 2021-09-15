import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'moment/locale/fr.js'
import 'moment/locale/en-ca.js'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
