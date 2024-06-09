import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'
import axios from 'axios'
const Users = () => {
  const [employees, setEmployees] = useState([]);
  const [modalId,setModalId]=useState("")
  const [modalOpen,setModalOpen]=useState(false);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/admin/user/");
      console.log(res);
      if (res.status === 200) {
        setEmployees(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserById = async (id) => {
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
          const res = await axios.delete(
            "http://localhost:3000/admin/user/" + id
          );
          console.log(res);
          if (res.status === 200) {
            setEmployees(employees.filter((emp) => emp.id !== id));
            toast.success("Successfully deleted the User");
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  // const checkUser=()=>{
  //       try {
  //         const userString=localStorage.getItem("user");
  //         console.log(userString)
  //         if(userString && userString.length>0){
  //           const userObject=JSON.parse(userString);
  //           setUser(userObject);
  //           window.location.href="/home"

  //         }else{
  //           window.location.href="/login"
            
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }

  //     useEffect(()=>{
  //       checkUser();
  //     },[])
  return (
    <div class="w-full">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
           
            <th scope="col" class="px-6 py-3">
               Id
            </th>
            <th scope="col" class="px-6 py-3">
               Name
            </th>
           
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Phone
            </th>
           
            <th scope="col" class="px-6 py-3">
              Role
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
                  <td class="px-6 py-4">{emp.name}</td>
                  <td class="px-6 py-4">{emp.email}</td>
                  <td class="px-6 py-4">{emp?.phone}</td>
                  <td class="px-3 py-4">{emp?.role}</td>
         
                 {/* <td class="px-6 py-4 text-center">
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
                        deleteUserById(emp?.id);
                      }}
                    >
                      Delete
                    </a>
                  </td> */}
                </tr>
              );
            })}
        </tbody>
      </table>
  
    </div>
  );
};

export default Users;
