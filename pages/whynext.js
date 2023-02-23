
import { getWhyNextReasons } from "@/lib/api";

export default function Why({ reasons }) {
  
  return (
    <>
    <div>
      
      <div className="container mx-auto py-20 px-8">
        <h1 className="text-5xl text-center text-accent-1 mb-16">
          Why Next.js?
        </h1>

       
        <div key={title} className="text-center mt-8">
          {reasons.slice(reasons.length - 1).map(({ title }) => (
            <div key={title} className="markdown inline-p">
              <strong>{title}</strong>{" "}
              
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
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