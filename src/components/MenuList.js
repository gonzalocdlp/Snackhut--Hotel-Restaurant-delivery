import styles from "../styles/MenuList.module.css";
import Menu from "../components/Menu";

const MenuList = ({menuList}) => {
  return (
    <div className={styles.menu}>
      {menuList.map((food) => (
        <Menu key={food._id} food={food} />
      ))}
          
      </div>
    
  );
};

export default MenuList;