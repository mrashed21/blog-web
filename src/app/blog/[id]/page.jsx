import Link from "next/link";

const BlogDetails = async ({ params }) => {
  const id = (await params).id;

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error));
  return (
    <div className="container mx-auto">
      <div className="card bg-base-100 shadow max-w-4xl mx-auto border-2 border-base-200">
        <div className="card-body">
            <h1 className="card-title text-2xl">Blog Details Of ID: {data?.id}</h1>
          <h2 className="card-title">Title: {data?.title}</h2>
          <p className=""><span className="font-semibold">Description: </span>{data?.body}</p>
          <Link href={'/'} className="btn">Go Back </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
