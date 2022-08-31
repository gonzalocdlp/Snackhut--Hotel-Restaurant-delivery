import Head from "next/head";
import Hero from '../components/Hero';
import styles from "../styles/Home.module.css";
import MenuList from '../components/MenuList';
import axios from "axios";
export default function Home(menuList, admin) {
  
  return (
    <div className={styles.container}>
    <Head>
      <title>Hotel/Restaurant Delivery</title>
      <meta name="description" content="Hotel and restaurant delivery application" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Hero/>
    
    <MenuList menuList={menuList}/>
    </div>
  
);
  }
export const getServerSideProps = async () => {
  const res= await axios.get("http://localhost:3000/api/products");
  return{
    props: {
      menuList: res.data,
  },
};
};