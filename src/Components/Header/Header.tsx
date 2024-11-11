import styles from './header.module.css'; 

export const Header = ({title}:{title:string}) => {
  return (
    <h1 className={styles.title}>{title}</h1>
  )
}