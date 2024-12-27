import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageCrop } from "@sanity/image-url/lib/types/types";
import Image from "next/image";

async function getData() {
  const fetchData = await client.fetch(`*[_type == 'blog']`);
  return fetchData;
}
export default async function BlogCard() {
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
      <div className="flex flex-wrap justify-around lg:m-20 md:m-10 sm:m2">
        {data.map((val: Blog, i: number) => {
          const imageUrl = urlFor(val.Image).width(200).height(200).url(); // Sanity image URL with width and height

          return (
            <div key={i} className="flex">
              <Card>
                <CardHeader>
                <Image
  src={imageUrl}
  alt={val.title}
  width={200} // Specify width
  height={100} // Specify height
  className="rounded-lg" // Optional styling
  style={{ objectFit: "cover" }} // Ensures the image covers the container
/>

                </CardHeader>

                <CardContent>
                  <p>
                    <span className="text-gray-600">Title: </span>
                    {val.title}
                  </p>
                  <p>
                    <span className="text-gray-600">Published At: </span>{" "}
                    {val.publishedAt}
                  </p>
                  <p>
                    <span className="text-gray-600">Author: </span>
                    {val.author}
                  </p>
                  <div className="flex justify-center items-start mt-6">
                    <Button>
                      <a href="/blogContent">Read Blog</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-10 mb-12">
        <button className="border w-40 border-x-gray-500 p-2 rounded-sm hover:bg-gray-400 lg:mb-20">
          <a href="/blogContent">Read All Blogs</a>
        </button>
      </div>
    </>
  );
}
