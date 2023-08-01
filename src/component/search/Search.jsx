import styles from "./Search.module.css"
const Search = ({ searchText, onChange, size="medium" }) => {
  // Added a story for this component
  return <input className={`${styles.search} ${styles[size]}`} type="text" value={searchText} onChange={onChange} />
}

export default Search
