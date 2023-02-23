
import { getWhyNextReasons } from "@/lib/api";

export default function Why(reasons) {
  
  return (
    
      <div>
     
        <h1 >
          Why Next.js?
        </h1>

       
        <div key={title} >{title}
        
              
            </div>
          
            </div>
    
  );
}

export async function getStaticProps(context) {
  const reasons = await getWhyNextReasons();

  return {
    props: {
      reasons,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };

}