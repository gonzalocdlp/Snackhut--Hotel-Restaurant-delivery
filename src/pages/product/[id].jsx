import styles from '../../styles/Product.module.css';
import Link from 'next/link';
let quantity=1;

const Product = () => {
      const food={
        id: 1,
        image: 'https://z.cdrst.com/foto/hotel-sf/a3922/granderesp/foto-hotel-d6a3427.jpg',
        name: 'Ceviche',
        price: '10.00',
        desc: 'Fish marinated with lime and aji',
        
        ingredients: 'Pizza',
        category: 'Pizza',
        

      };
  let price=food.price;
function addQuantity(x){
  var foodvalue=parseInt(food.price);
  var price=x*foodvalue;
  console.log (price);
  
}

      return  (
      <div className={styles.menuItem}>
              
                  
                      <div className={styles.menuName}>

                            <h3>{food.name}</h3>
                            
                        
                
                    </div>
                    <img className={styles.menuImage} src={food.image} alt="food" />
                    <div className={styles.description}>
                        <p>{food.desc}</p>
                    </div>
                    <div className={styles.menuPrice}>
                    <p className={styles.price}>{price}</p>
                   </div>
                
                
                
                
              
                <div className={styles.add}>
                {/* onClick={addQuantity(quantity.valueOf)} */}
            <input  type="number" defaultValue={1} className={styles.quantity}/>
            <p className={styles.price}>{price}</p>
            <Link href="/">
            <button Link href={`/`} className={styles.button}>go back to menu</button>
            </Link>
            <Link href="/cart">
            <button className={styles.button}>Add to Cart</button>
            </Link>
        </div>
        </div>
      );
   
  
};

export default Product

