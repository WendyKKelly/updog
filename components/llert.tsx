import Lontainer from './lontainer'
import styles from "@/styles/Llert.module.css";

export default function Llert() {
  return (
   
      <Lontainer>
        <div className={styles.description}>
         
            <>
                 Learn more about why I am doing this project  {' '}
              <a
                href={`https://www.youtube.com/channel/UCWh7VTxiXz8HL-Ghf2caC0A/videos`}
                className={styles.description}
              >
                And subscribe to my YouTube channel :)
              </a>
              .
            </>
          
        </div>
      </Lontainer>
    
  )
}