import { useEffect, useState } from "react";

const Header = () => {
   const [user,setUser]=useState();
   const checkUser=()=>{
    try {
      const userString=localStorage.getItem("user");
      if(userString.length>0){
        const userObject=JSON.parse(userString);
        setUser(userObject);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    checkUser();
  },[])
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo.png" alt="logo" className="w-12 j-12" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Emp
          </span> */}
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3">
          <button
          disabled={user}
            onClick={()=>{
                window.location.href="/login"
            }}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {user?user.first_name:"Admin Dashboard"}
          </button>
          {
            user && <button
            onClick={()=>{
              localStorage.removeItem("user");
              window.location.href="/login"
            }}
          type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Logout
          </button>
          }
        </div>
        <div
          className="items-center justify-between hidden w-full sm:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                // aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/pricing  "
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};



export default Header;