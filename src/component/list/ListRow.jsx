import styles from "./ListRow.module.css";

const ListCell = ({ children, selItem, id}) => {
  return <tr className={styles.cell} onClick={() => selItem(id)}>{children}</tr>;
};

export default ListCell;
