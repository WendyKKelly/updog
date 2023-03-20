import Avatar from './avatar'
import styles from "@/styles/Alert.module.css";
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className={styles.description}>
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className={styles.description}>
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className={styles.description}>
        <div className={styles.description}>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className={styles.description}>
         
        </div>
      </div>
    </>
  )
}

export default PostHeader