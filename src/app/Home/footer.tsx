import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
export default  function Footer() {
    return(
        <>
        <footer className="text-gray-600 body-font bg-gray-100">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span className="ml-3 text-xl">Blogging</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">
     Create and read blogs </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Social
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">LinkedIn</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Instagram</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Twittwe</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Youtube</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Our Service
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Blogs</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Home</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Privacy</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Contacts</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            Info
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Formats</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">FAQ</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Status</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Policy</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Resources
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Api</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Accessibility</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Visibility</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Community</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        © 2020 Bloging —
        
      </p>
      <span className="gap-10 inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
           <SlSocialGoogle />
           <SlSocialInstagram/>
           <SlSocialLinkedin/>
           <SlSocialTwitter/>
             </span>
    </div>
  </div>
</footer>
</>
    )
}