import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageCrop } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import { FaCommentDots, FaEye } from "react-icons/fa";

async function getData() {
  const fetchData = await client.fetch(`*[_type == 'blog']`);
  return fetchData;
}

export default async function BlogCard() {
  interface Blog {
    _id: string; // Use `_id` from Sanity for routing
    Image: SanityImageCrop;
    title: string;
    publishedAt: string;
    author: string;
    views: number;
    comments: number;
  }

  const data = await getData();

  return (
    <div className="flex flex-wrap justify-around lg:m-20 md:m-10 sm:m-2">
      {data.map((val: Blog, i: number) => {
        const imageUrl = urlFor(val.Image).width(200).height(200).url();

        return (
          <div key={i} className="flex flex-col w-full max-w-xs mx-auto my-6">
            <Link href={`/blogs/${val._id}`}> {/* Use `_id` for dynamic routing */}
              <div className="shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
                <div className="relative">
                  <Image
                    src={imageUrl}
                    alt={val.title}
                    width={400}
                    height={250}
                    className="rounded-t-lg w-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4 bg-white rounded-b-lg">
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Published On:</span> {val.publishedAt}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Author:</span> {val.author}
                  </p>
                  <div className="flex justify-center mt-6">
                    <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                      Read Full Blog
                    </button>
                  </div>
                  <div className="flex space-x-4 mt-4 justify-between">
                    <div className="flex items-center text-gray-500">
                      <FaEye className="mr-1" />
                      <span>{val.views} 1.9K</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <FaCommentDots className="mr-1" />
                      <span><Link href={"/comment"}>{val.comments}</Link> 1K</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
