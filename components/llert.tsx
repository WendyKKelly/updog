import Lontainer from './lontainer'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import styles from "@/styles/Alert.module.css";

export default function Llert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Lontainer>
        <div className={styles.description}>
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className={styles.description}
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
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
          )}
        </div>
      </Lontainer>
    </div>
  )
}