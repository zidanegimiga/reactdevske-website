import Head from "next/head";
import Image from "next/image";
import Hero from "../components/home/Hero";
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
        <div>
          <Hero />
        </div>
      </main>
    </div>
  );
}
