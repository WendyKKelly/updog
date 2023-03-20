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

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section>
      <div className={styles.container}>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className={styles.container}>
        <div>
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
        </div>
        <div>
          <p className={styles.description}>{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  )
}

export default HeroPost