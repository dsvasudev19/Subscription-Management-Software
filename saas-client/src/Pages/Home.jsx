import React from "react";
import Header from "./../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div>
          <h1 className="mt-12">Welcome to Tensor Go Subscription Management System</h1>
          <div className="block md:flex justify-center gap-6 mt-10">
            
            <div id="content" className="w-full p-6 bg-gray-100">
              <p className="text-lg text-gray-800 mb-4">
                As part of Tensor Go Assignment I have created this Full Stack
                Application
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  Technologies Used to Build the Project:
                </h3>
                <div className="mb-4">
                  <strong className="block text-lg text-gray-700">
                    Front End :
                  </strong>
                  <ul className="list-disc list-inside pl-4">
                    <li className="text-gray-600">React</li>
                    <li className="text-gray-600">Tailwind</li>
                    <li className="text-gray-600">
                      Material Tailwind Framework
                    </li>
                  </ul>
                </div>
                <div>
                  <strong className="block text-lg text-gray-700">
                    Backend:
                  </strong>
                  <ul className="list-disc list-inside pl-4">
                    <li className="text-gray-600">Node.js</li>
                    <li className="text-gray-600">Express.js</li>
                    <li className="text-gray-600">
                      MySQL Database, Can develop the same in MongoDB
                    </li>
                    <li className="text-gray-600">Sequelize(ORM)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="image" className="w-full">
              <img src="/sub-man.jpg" alt="logo" className="w-96 h-96" />
            </div>
          </div>
          <div className="flex justify-center">
          <div className="items-center text-center">
          <h2 className="mt-12 text-3xl">To View Pricing, Please Click the Button below</h2>
          <h1 className="mt-3">👇</h1>
          <a href="/pricing"><button className="bg-cyan-700 mt-6">View Pricing</button></a>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
