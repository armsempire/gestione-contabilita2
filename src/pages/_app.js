// src/pages/_app.js
import '../styles/globals.css'; // Assicurati che il percorso sia corretto
import 'tailwindcss/tailwind.css'; // Se stai usando TailwindCSS

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
