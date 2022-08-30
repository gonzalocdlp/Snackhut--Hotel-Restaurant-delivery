import styles from "../styles/Cart.module.css";
import Link  from "next/link";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>

          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody>
          <tr className={styles.tr}>
            <td>
              <div >
                <img className={styles.imgContainer}
                  src="https://z.cdrst.com/foto/hotel-sf/a3922/granderesp/foto-hotel-d6a3427.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Ceviche</span>
            </td>
            <td>
              <span className={styles.extras}>
                no corn
              </span>
            </td>
            <td>
              <span className={styles.price}>$12.20</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$24.30</span>
            </td>
          </tr>
          
          <tr className={styles.tr}>
            <td>
              <div>
                <img className={styles.imgContainer}
                  src="https://z.cdrst.com/foto/hotel-sf/a3922/granderesp/foto-hotel-d6a3427.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
                </div> 
            </td>
            <td>
              <span className={styles.name}>Ceviche</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>$12.20</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$24.40</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$48.80
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$48.80
          </div>
          <button className={styles.button}>Order</button>
        </div>
      </div>
      <Link href="/">
            <button Link href={`/`} className={styles.button}>go back to menu</button>
            </Link>
    </div>
  );
};

export default Cart;