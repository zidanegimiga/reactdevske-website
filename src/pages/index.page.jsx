import Head from "next/head";
import Banner from "../components/Banner";
import Image from "next/image";
<<<<<<< HEAD:pages/index.jsx
import About from "../components/home/About";
import Events from "../components/home/Events/Events";
import Forum from "../components/home/Forum";
import Founders from "../components/home/Founders/Founders";
import Hero from "../components/home/Hero/Hero";
import Members from "../components/home/Members";
import Mission from "../components/home/Mission";
// import styles from '../styles/Home.module.css'
import logo from "../public/reactdevske.svg";
=======
import logo from "../../public/reactdevske.svg";
>>>>>>> develop:src/pages/index.page.jsx

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Reactjs Developer Community in Kenya</title>
        <meta
          name="description"
          content="React js Developer Community Kenya is a community of react js developers using react related technologies in the Kenyan software development eco system."
          key="desc"
        />
        <meta
          name="title"
          content="Reactjs Developer Community in Kenya"
          key="title"
        />
      </Head>

      <main className="">
<<<<<<< HEAD:pages/index.jsx
        <Hero />       
        <About />
        <Mission />
        <Founders /> 
        <Members />
        <Events />
        <Forum />      
=======
        <h1 className="text-center pt-6 text-3xl text-white font-bold font-montserrat">
          React Developer Community Kenya
        </h1>
        <p className="text-center text-xl text-white font-montserrat">
          A Community of Reactjs developers in Kenya 
        </p>
        <div className="flex flex-col justify-center content-center">
          <Image
            src={logo}
            className="App-logo"
            alt="logo"
            width={400}
            height={400}
          />
          <p className="flex justify-center text-white pt-10">
            🚧Under construction...
          </p>
        </div>
>>>>>>> develop:src/pages/index.page.jsx
      </main>
    </div>
  );
}
