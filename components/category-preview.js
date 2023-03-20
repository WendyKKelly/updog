import styles from "@/styles/Category.module.css";
import Link from 'next/link'

export default function CategoryPreview({

  topic,

  slug,
}) {
  return (
    <div>
      <h3 className={styles.title}>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className={styles.description}>{topic}</a>
        </Link>
      </h3>
    </div>
  )
}
