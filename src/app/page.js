import BlogCard from "@/components/BlogCard";

const data = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
.then((response) => response.json())
.catch((error) => console.error("Error:", error));
export default async function Home() {

  return (
    <>
      <div className="container mx-auto px-3 sm:px-8">
        {data?.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         { data?.map(card => <BlogCard key={card?.id} card={card} />)}
        </div> : <>No Blog Found </>}
      </div>
    </>
  );
}
