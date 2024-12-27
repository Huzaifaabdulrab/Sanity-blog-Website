export default function Navbar(){
    return(<header className="text-gray-600 body-font bg-gray-100">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Blogging</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900" href="/blogContent">About</a>
            <a className="mr-5 hover:text-gray-900">Blogs</a>
            <a className="mr-5 hover:text-gray-900">Sing Up</a>
            <a className="mr-5 hover:text-gray-900">Sing In</a>
          </nav>
          <button className="inline-flex text-white items-center text-2xl font-bold bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-full  mt-4 md:mt-0">
          H
                    </button>
        </div>
      </header>
      )
}