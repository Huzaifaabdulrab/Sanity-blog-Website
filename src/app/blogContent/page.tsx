
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
async function getData() {
  const fetchData = await client.fetch(`*[_type == 'blog']`);
  return fetchData
}

export default async function BlogContent() {
const data = await getData();
console.log(data);
  return(
        <>
      {data.map((val : any , i : number)=>{
        return(
          
        <section className="text-gray-600 body-font" key={i}>
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
{val.title}
        <br className="hidden lg:inline-block" />
        {val.author}
      </h1>
      <p className="mb-8 leading-relaxed">
        {val.blog}
        </p>
        <p className="text-black"><span className="text-gray-600">PublishedAt : </span> {val.publishedAt}</p>
            <p className="text-black"><span className="text-gray-600">Author : </span>{val.author}</p>
         
        <div className="flex justify-center mt-10">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          <a href="/Home">Back</a>
        </button>
      </div>

    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      
    <img
              src={urlFor(val.Image).url() || '/placeholder.jpg'}
              alt={val.title}
              className="w-auto h-auto"
            />
    </div>
  </div>
</section>
        )
})}
</>
    )
}