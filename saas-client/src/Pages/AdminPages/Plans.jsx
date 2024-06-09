import React, { useEffect, useState } from "react";
import axios from 'axios'

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const getPlans = async () => {
    try {
      const res = await axios.get("http://localhost:3000/admin/plan/");
      console.log(res);
      if(res.status===200){
        setPlans(res.data)
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPlans();
  }, []);

  return (
    <>
      <div class="w-full">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Id
              </th>
              <th scope="col" class="px-6 py-3">
                Plan Name
              </th>

              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>

              <th scope="col" class="px-6 py-3">
                Duration
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {plans &&
              plans.map((emp) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {emp.id}
                    </th>
                    <td class="px-6 py-4">{emp.name}</td>
                    <td class="px-6 py-4">{emp.price}</td>
                    <td class="px-6 py-4">{emp?.description}</td>
                    <td class="px-3 py-4">{emp?.duration}</td>
                    <td class="px-6 py-4 text-center">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline deco"
                        onClick={() => {
                          setModalId(emp.id);
                          window.location.href = `/edit-employee/${emp?.id}`;
                        }}
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-2"
                        onClick={() => {
                          deleteEmployeeById(emp?.id);
                        }}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Plans;
