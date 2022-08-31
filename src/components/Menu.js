
import styles from '../styles/Menu.module.css'
import Link from "next/link";
const Menu = ({ food }) => {
  return (
    <div>
    
    <div className={styles.menu}>
    <Link href={`/product/${food._id}`} passHref>
        <div className={styles.menuItem}>
                <div className={styles.menuLeft}>
                    
                        <div className={styles.menuName}>
                            <h3 className={styles.title}>{food.title}</h3>
                        
                
                    </div>
                    <div className={styles.description}>
                        <p className={styles.text}>{food.description}</p>
                    </div>
                     <div className={styles.menuPrice}>
                        <p className={styles.price}>{food.price}</p>
                   </div>
                </div>
                <div className={styles.menuRight}>
                
                                <img className={styles.menuImage} src="https://z.cdrst.com/foto/hotel-sf/a3922/granderesp/foto-hotel-d6a3427.jpg" alt="food" />
                </div>
        </div>
        </Link>
        </div>

    </div>
  );
};

export default Menu
