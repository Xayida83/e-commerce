import styles from './Bird.module.css'


export const Bird = () => {
  return (
  <div className={styles.container}>
    <div className={styles.body}></div>
    <div className={styles.mouth}></div>
    <div className={styles.beak}></div>
    <div className={styles.feather}></div>
    <div className={styles.tail}></div>
    <div className={styles.leg}></div>
  </div>     
  )
}