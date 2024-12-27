import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

async function getData() {
  const fetchData = await client.fetch(`*[_type == 'blog']`);
  return fetchData;
}

export default async function BlogCard() {
  const data = await getData();
  console.log(data);

  return (
    <>
<div className="flex flex-wrap justify-around lg:m-20 md:m-10 sm:m2">
  {data.map((val: any, i: number) => {
        return (

<div key={i} className="flex ">
      <Card>
        
<CardHeader>
    <img
              src={urlFor(val.Image).url() || '/placeholder.jpg'}
              alt={val.title}
              className="w-[200p] h-[200px]"
            />
            </CardHeader>
            
<CardContent>
            <p><span className="text-gray-600">Tittle : </span>{val.title}</p>
            {/* <p>{val.blog}</p> */}  
             <p><span className="text-gray-600">PublishedAt : </span> {val.publishedAt}</p>
            <p><span className="text-gray-600">Author : </span>{val.author}</p>
         <div  className="flex justify-center items-start mt-6">
          <Button><a href="/blogContent">Read Blog</a></Button>
          </div>
          </CardContent>
          </Card>
          </div>
        
        );
      })}
      </div> 
      <div className="flex justify-center items-center mt-10 mb-12">
      <button className="border w-40 border-x-gray-500 p-2 rounded-sm hover:bg-gray-400 lg:mb-20"><a href="/blogContent">Read All Blogs</a></button>   </div>
      </>
  );
}
