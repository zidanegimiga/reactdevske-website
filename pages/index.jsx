import Head from "next/head";
import Image from "next/image";
import About from "../components/home/About";
import Events from "../components/home/Events/Events";
import Founders from "../components/home/Founders/Founders";
import Hero from "../components/home/Hero/Hero";
import Members from "../components/home/Members";
import Mission from "../components/home/Mission";
// import styles from '../styles/Home.module.css'
import logo from "../public/reactdevske.svg";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>React Devs Kenya</title>
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
        <Hero />       
        <About />
        <Mission />
        <Founders /> 
        <Members />
        <Events />      
      </main>
    </div>
  );
}
