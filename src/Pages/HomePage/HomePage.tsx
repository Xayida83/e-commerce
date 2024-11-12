import { Bird } from "../../Components/Bird/Bird";
import { Header } from "../../Components/Header/Header";
import styles from "./homePage.module.css";


export const HomePage = () => {
  return (
    <>
      <div className={styles.headerdiv}>
        <Bird />
        <Header title='Wintersheart Decor' />
      </div>
    </>
  )
}