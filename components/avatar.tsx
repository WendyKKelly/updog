import styles from "@/styles/Avatar.module.css";

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className={styles.container}>
      <img src={picture} className={styles.image} alt={name} />
      <div className={styles.description}>{name}</div>
    </div>
  )
}

export default Avatar
