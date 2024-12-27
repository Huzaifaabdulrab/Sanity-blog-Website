import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageCrop } from "@sanity/image-url/lib/types/types";

async function getData() {
  const fetchData = await client.fetch(`*[_type == 'blog']`);
  return fetchData;
}

export default async function BlogContent() {
  interface Blog {
    Image: SanityImageCrop; // Sanity Image type
    title: string;
    blog: string;
    publishedAt: string;
    author: string;
  }

  const data = await getData();
  console.log(data);

  return (
    <>
      {data.map((val: Blog, i: number) => {
        const imageUrl = urlFor(val.Image).width(600).height(400).url(); // Sanity image URL with width and height
        return (
          <section className="text-gray-600 body-font" key={i}>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {val.title}
                  <br className="hidden lg:inline-block" />
                  {val.author}
                </h1>
                <p className="mb-8 leading-relaxed">{val.blog}</p>
                <p className="text-black">
                  <span className="text-gray-600">PublishedAt : </span>{" "}
                  {val.publishedAt}
                </p>
                <p className="text-black">
                  <span className="text-gray-600">Author : </span>
                  {val.author}
                </p>

                <div className="flex justify-center mt-10">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    <a href="/Home">Back</a>
                  </button>
                </div>
              </div>

              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                {/* Next.js Image Component with width and height */}
                <Image
                  src={imageUrl} // Correct imageUrl usage here
                  alt={val.title}
                  width={600}   // Width of the image
                  height={400}  // Height of the image
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
