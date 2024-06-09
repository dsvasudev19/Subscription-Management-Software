import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  dob: Yup.string().required("Date of birth is required"),
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  father_name: Yup.string().required("Father name is required"),

  phone: Yup.string().required("Phone is required"),
})

const EditEmployee = () => {
    const {id}=useParams();
  const [initialValues, setInitialValues] = useState({
    email: "",
    dob: "",
    first_name: "",
    last_name: "",
    father_name: "",
    phone: "",
  });

  const handleAddEmployee = async (values, { resetForm }) => {
    try {
      const addingToast = toast.loading("Updating employee details");
      const response = await axios.put(
        "http://localhost:3000/employee/"+id,
        values
      );
      console.log(response);
      if (response.status == 200) {
        toast.success("Successfully Updated employee details", {
          id: addingToast,
        });
        setTimeout(() => {
          window.location.href = "/home";
        }, 1000);
        resetForm();
      }
    } catch (error) {
      console.error("Error adding employee:", error);
      toast.error("Error while updating employee");
    }
  };

  const getEmployeeById=async()=>{
    try {
        const res=await axios.get("http://localhost:3000/employee/"+id);
        console.log(res)
        if(res.status===200){
            setInitialValues({...initialValues,...res.data.data});
        }
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    getEmployeeById();
  },[])
  return (
    <div>
      <div className="w-full mt-24">
        <h1 className="p-10">Edit Employee</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={handleAddEmployee}
        >
          {() => (
            <Form className="w-[95%] mx-auto">
              <div className="flex justify-around gap-6">
                <div className="mb-5 w-[90%]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    First Name
                  </label>
                  <Field
                    name="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your First Name"
                  />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-5 w-[90%]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Last Name
                  </label>
                  <Field
                    name="last_name"
                    placeholder="Enter Your last name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="flex justify-around gap-6">
                <div className="mb-5 w-[90%]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Father Name
                  </label>
                  <Field
                    name="father_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your Father Name"
                  />
                  <ErrorMessage
                    name="father_name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-5 w-[90%]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Date of Birth
                  </label>
                  <Field
                    type="date"
                    name="dob"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  <ErrorMessage
                    name="dob"
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

export default EditEmployee;
