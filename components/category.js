import CategoryPreview from '../components/category-preview'
import styles from "@/styles/Alert.module.css";

export default function Category({ posts }) {
    return (
    <section>
     
      <div className={styles.container}>
        {posts.map((post) => (
          <CategoryPreview
            key={post.slug}
            
            topic={post.topic}
           
            slug={post.slug}
           
          />
        ))}
      </div>
    </section>
  )
}
//
