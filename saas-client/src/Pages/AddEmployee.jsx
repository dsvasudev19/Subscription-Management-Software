import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Header from "../components/Header";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  name: Yup.string().required(" name is required"),
  phone: Yup.string().required("Phone is required"),
  password:Yup.string().required("Password is required")
});

const AddEmployee = () => {

  const [user,setUser]=useState()

  const checkUser=()=>{
    try {
      const userString=localStorage.getItem("user");
      console.log(userString)
      if(userString && userString.length>0){
        const userObject=JSON.parse(userString);
        setUser(userObject);
        // window.location.href="/admin-home"
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



  const [initialValues, setInitialValues] = useState({
    email: "",
    name: "",
    phone: "",
    password:"",
  });

  const handleAddEmployee = async (values, { resetForm }) => {
    try {
     
      const response = await axios.post(
        "http://localhost:3000/api/user/",
        {...values,adminId:user?.id}
      );
      console.log(response);
      if (response.status == 201) {
        toast.success("Successfully Saved user details");
        setTimeout(() => {
          window.location.href = "/admin-home";
        }, 1000);
        resetForm();
      }
    } catch (error) {
      if(error.response.status===400){
        toast.error("Your Subscription limit has completed. You can't add users anymore")
      }
      console.error("Error adding employee:", error.response.status);
      
    }
  };

  return (
    <div>
    <Header />
      <div className="w-full mt-24">
        <h1 className="p-10">Add User</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleAddEmployee}
        >
          {() => (
            <Form className="w-[95%] mx-auto">
              <div className="flex justify-around gap-6">
                <div className="mb-5 w-[90%]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <Field
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your First Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-5 w-[90%]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <Field
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your First Name"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                
              </div>
             
              
              <div className="flex justify-around gap-6">
                <div className="mb-5 w-[90%]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <Field
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-5 w-[90%]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Phone
                  </label>
                  <Field
                    placeholder="Your mobile number"
                    name="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
             
             
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddEmployee;
