<<<<<<< HEAD:pages/_app.jsx
import Navbar from "../components/home/Navbar.jsx";
=======
import Navbar from "../components/Navbar";
>>>>>>> develop:src/pages/_app.page.jsx
import "../styles/globals.css";
import Banner from "../components/Banner";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Banner />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
