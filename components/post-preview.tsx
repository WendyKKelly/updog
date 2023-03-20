
import Avatar from './avatar'
import styles from "@/styles/Alert.module.css";
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div className={styles.description}>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className={styles.description}>
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className={styles.description}>
       
      </div>
      <p className={styles.description}>{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

export default PostPreview