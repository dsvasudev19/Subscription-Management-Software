import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'
import { axiosInstance } from "../axiosInstance";
const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [modalId,setModalId]=useState("")
  const [modalOpen,setModalOpen]=useState(false);

  const getEmployees = async () => {
    try {
      const res = await axiosInstance.get("/employee/");
      console.log(res);
      if (res.status === 200) {
        setEmployees(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployeeById = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosInstance.delete(
            "/employee/" + id
          );
          console.log(res);
          if (res.status === 200) {
            setEmployees(employees.filter((emp) => emp.id !== id));
            toast.success("Successfully deleted the Employee");
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);
  const checkUser=()=>{
        try {
          const userString=localStorage.getItem("user");
          console.log(userString)
          if(userString && userString.length>0){
            const userObject=JSON.parse(userString);
            setUser(userObject);
            window.location.href="/home"

          }else{
            window.location.href="/login"
            
          }
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(()=>{
        checkUser();
      },[])
  return (
    <div class="w-full">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
           
            <th scope="col" class="px-6 py-3">
              First Name
            </th>
            <th scope="col" class="px-6 py-3">
              Last Name
            </th>
            <th scope="col" class="px-6 py-3">
              Father Name
            </th>
            
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Phone
            </th>
         
            <th scope="col" class="px-6 py-3">
              Date of Birth
            </th>
            <th scope="col" class="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees &&
            employees.map((emp) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {emp.id}
                  </th>
                  <td class="px-6 py-4">{emp.first_name}</td>
                  <td class="px-6 py-4">{emp.last_name}</td>
                  <td class="px-6 py-4">{emp?.father_name}</td>
                  <td class="px-3 py-4">{emp?.email}</td>
                  <td class="px-2 py-4">{emp?.phone}</td>
                  <td className="px-2 py-4">{emp.dob}</td>
                  <td class="px-6 py-4 text-center">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline deco"
                      onClick={()=>{
                        setModalId(emp.id);
                        window.location.href=`/edit-employee/${emp?.id}`
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
  );
};

export default Employees;
