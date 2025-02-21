// pages/_app.js
import '../styles/globals.css' // Importa gli stili globali

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
