import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageCrop } from "@sanity/image-url/lib/types/types";
import { notFound } from "next/navigation";
import { FaCommentDots, FaEye } from "react-icons/fa";
import Link from "next/link";

interface Blog {
  _id: string;
  Image: SanityImageCrop;
  title: string;
  blog: string;
  publishedAt: string;
  author: string;
}

async function getData(id: string): Promise<Blog | null> {
  const fetchData = await client.fetch(`*[_type == 'blog' && _id == $id][0]`, { id });
  return fetchData || null;
}

export default async function BlogContent({ params }: { params: { id: string } }) {
  const blog = await getData(params.id);

  if (!blog) {
    notFound();
  }

  const { title, blog: content, publishedAt, author, Image } = blog;
  const imageUrl = urlFor(Image).width(600).height(400).url();

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={imageUrl}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        {title}
          </h1>
          <p className="mb-8 leading-relaxed">
           {content}
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            
            <span className="">Published On : </span> {publishedAt}
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            
            <span className="text-gray-600">Author : </span> {author}
            </button>
         
          </div>
        
      <div className="flex space-x-4 mt-4 justify-between">
                    <div className="flex items-center text-gray-500">
                      <FaEye className="mr-1 text-4xl text-black" />
                      <span className="font-bold text-lg"> 1.9K</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                    <Link href={"/comment"}> <FaCommentDots className="mr-1 text-4xl text-black" /></Link>
                      <span className="font-bold text-lg"> 1K</span>
                    </div>
                  </div></div>
      </div>
                
    </section>
  );
}