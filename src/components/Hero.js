import styles from '../styles/Hero.module.css'
function Hero() {
  return (
        <div className={styles.hero}>
            <div className={styles.heroText}>
                <h1>Snack Hut</h1>
                <p>Hotel/restaurant Food delivery</p>
                </div>
            <div className={styles.heroImage}>
                <img src="https://images.trvl-media.com/hotels/13000000/12970000/12963500/12963477/54949aa5.jpg?impolicy=resizecrop&rw=670&ra=fit" alt="hotel" />
                </div>  

    </div>
  )
}

export default Hero
