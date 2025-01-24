"use client"
import Link from "next/link";

const BlogCard = ({ card = {} }) => {
  console.log("BlogCard");
  console.log(card);
  return (
    <div className="card bg-base-100 rounded-md border  flex-grow">
      <div className="card-body p-4">
        <h2 className="card-title flex-grow">
          {card?.title.substring(0, 20)}...
        </h2>
        <div className="card-actions justify-end ">
          <Link href={`/blog/${card?.id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
