import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit Form
  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Student Added Successfully");

        setFormData({
          name: "",
          email: "",
          course: ""
        });
      } else {
        toast.error("Submission Failed");
      }

    } catch (error) {
      toast.error("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="p-10">

      <form onSubmit={submitForm} className="max-w-md mx-auto">

        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          className="border p-2 w-full mb-2"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          className="border p-2 w-full mb-2"
          onChange={handleChange}
        />

        <input
          name="course"
          placeholder="Course"
          value={formData.course}
          className="border p-2 w-full mb-2"
          onChange={handleChange}
        />

        <button className="bg-blue-500 text-white p-2 w-full">
          Submit
        </button>

        {loading && <p>Loading...</p>}

      </form>

      <ToastContainer />

    </div>
  );
}

export default App;
