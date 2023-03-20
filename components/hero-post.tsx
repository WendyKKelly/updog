import Avatar from './avatar'
import styles from "@/styles/Hero.module.css";
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
      <div className={styles.grid}>
        <div>
          <h3 className={styles.description}>
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className={styles.link}
            >
              {title}
            </Link>
          </h3>
          
        </div>
        <div>
          <p className={styles.excerpt}>{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  )
}

export default HeroPost