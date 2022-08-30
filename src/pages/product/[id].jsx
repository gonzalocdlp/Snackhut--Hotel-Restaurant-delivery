import styles from '../../styles/Product.module.css';


const Product = () => {
      const food={
        id: 1,
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        name: 'Pizza',
        price: '$10.00',
        desc: 'Pizza',
        
        ingredients: 'Pizza',
        category: 'Pizza',
        

      };
      return  (
      <div className={styles.menuItem}>
              <div className={styles.menuLeft}>
                  
                      <div className={styles.menuName}>
                            <h3>{food.name}</h3>
                        
                
                    </div>
                    <div className={styles.description}>
                        <p>{food.desc}</p>
                    </div>
                    <div className={styles.menuPrice}>
                    <p className={styles.price}>{food.price}</p>
                   </div>
                </div>
                <div className={styles.menuRight}>
                
                <img className={styles.menuImage} src={food.name} alt="food" />
                </div>
                <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>Add to Cart</button>
        </div>
        </div>
      );
   
  
};

export default Product

