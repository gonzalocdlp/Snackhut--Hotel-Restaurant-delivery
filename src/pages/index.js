import Head from "next/head";
import Hero from '../components/Hero';
import styles from "../styles/Home.module.css";
import MenuList from '../components/MenuList';
export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Hotel/Restaurant Delivery</title>
      <meta name="description" content="Hotel and restaurant delivery application" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Hero/>
    
    <MenuList/>
    </div>
  
);
  }
