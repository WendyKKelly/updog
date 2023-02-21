import { getSortedPostsData } from '../lib/posts';

type Props = {
  allPostData: string
}
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }

  export default function Blog ({ allPostsData }) { 
    
    return (
        
      <>
          {/* Add this <section> tag below the existing <section> tag */}
          <section>
            <h2 >Blog</h2>
            <ul >
              {allPostsData.map(({ id, date, title }) => (
                <li  key={id}>
                  {title}
                  <br />
                  {id}
                  <br />
                  {date}
                </li>
              ))}
            </ul>
          </section>
          </>
      );
    }
    
    
    
     
