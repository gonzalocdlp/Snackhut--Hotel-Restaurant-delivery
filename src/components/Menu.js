
import styles from '../styles/Menu.module.css'

function Menu() {
  return (
    <div>
    
    <div className={styles.menu}>
        <div className={styles.menuItem}>
                <div className={styles.menuLeft}>
                    
                        <div className={styles.menuName}>
                            <h3>Ceviche</h3>
                        
                
                    </div>
                    <div className={styles.description}>
                        <p>raw fish cured in fresh lime citrus juices. Spiced with ají, chili peppers</p>
                    </div>
                     <div className={styles.menuPrice}>
                        <p className={styles.price}>$9.99</p>
                   </div>
                </div>
                <div className={styles.menuRight}>
                
                                <img className={styles.menuImage} src="https://z.cdrst.com/foto/hotel-sf/a3922/granderesp/foto-hotel-d6a3427.jpg" alt="food" />
                </div>
        </div>
        </div>

    </div>
  )
}

export default Menu
