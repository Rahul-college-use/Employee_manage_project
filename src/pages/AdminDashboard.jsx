import React, { useEffect, useState } from 'react';
import { getLocalStorage } from '../util/Localstorage';

const AdminDashboard = ({ employeeEmail }) => {

  const [title, setTitle] = useState(''); // title 
  const [description, setDescription] = useState(''); // description
  const [priority, setPriority] = useState('Medium'); // default priority
  const [email, setEmail] = useState('rahul@gmail.com'); //default email
  const [loading, setLoading] = useState(false); // loading animation 
  const [userdata, setUserdata] = useState(null) //total array of employees and admin from locationStoage.jsx 
  const [employees,setEmployees] =useState(null)

  useEffect(() => {
    const { Employees, Admin } = getLocalStorage();
    setUserdata({ Employees, Admin });
  }, []) // tatal array of emp and admin


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {

      // console.log({ title, description, priority, email });
      // console.log(userdata.Employees)
      addTaskToEmployee(email, description, title, priority)
      setTitle('');
      setDescription('');
      setEmail('');
      setPriority('Medium');
      setLoading(false);
    }, 1500);
  };
  const handleLogout = () => {
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }
 const addTaskToEmployee = (email, newtaskTitle, des, priority) => {

  const updatedEmployees = userdata.Employees.map(emp => {

    if (emp.email === email) {

      const newTask = {
        taskId: emp.tasks.length + 1,
        title: newtaskTitle,
        description: des,
        priority: priority,
        status: "pending",
        date: Date.now(),
        isNew: true
      };

      return {
        ...emp,
        totalTasks: emp.totalTasks + 1,
        pendingTasks: emp.pendingTasks + 1,
        tasks: [...emp.tasks, newTask]
      };
    }

    
    return emp;
  });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

  
};

return (
  <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">

    <div className="
        w-full 
        max-w-3xl 
        backdrop-blur-xl 
        bg-white/10 
        border border-white/20 
        rounded-3xl 
        p-6 md:p-10 
        shadow-2xl 
        text-white
      ">

      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Admin Panel
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">

        {/* Task Title */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 md:items-center">
          <label className="md:w-40 text-gray-300">Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="
                flex-1 
                p-3 
                rounded-lg 
                bg-white/20 
                border border-white/30 
                outline-none 
                focus:ring-2 
                focus:ring-blue-400 
                transition
              "
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 md:items-start">
          <label className="md:w-40 text-gray-300">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            className="
                flex-1 
                p-3 
                rounded-lg 
                bg-white/20 
                border border-white/30 
                outline-none 
                h-28 
                resize-none 
                focus:ring-2 
                focus:ring-blue-400 
                transition
              "
            required
          ></textarea>
        </div>

        {/* Priority */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 md:items-center">
          <label className="md:w-40 text-gray-300">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="
                flex-1 
                p-3 
                rounded-lg 
                bg-white/20 
                border border-white/30 
                outline-none 
                focus:ring-2 
                focus:ring-blue-400 
                transition
                text-white
              "
          >
            <option className="text-black">High</option>
            <option className="text-black">Medium</option>
            <option className="text-black">Low</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-6 md:items-center" >
          <label className="md:w-40 text-gray-300">Select Employees Email</label>
          <select
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
                flex-1 
                p-3 
                rounded-lg 
                bg-white/20 
                border border-white/30 
                outline-none 
                focus:ring-2 
                focus:ring-blue-400 
                transition
                text-white
              "
          >
            {employeeEmail.map((e, idx) => {
              // console.log(e.email);
              return (
                <option key={idx} className="text-black">
                  {e.email}
                </option>
              );
            })}

            {/* {console.log(useremail)} */}

          </select>

        </div>
        {/* Button */}
        <div className="md:pl-40">
          <button
            type="submit"
            disabled={loading}
            className="
                w-full md:w-auto 
                px-8 py-3 
                rounded-lg 
                font-semibold 
                bg-blue-600 
                hover:bg-blue-700 
                active:scale-95 
                transition 
                flex items-center justify-center gap-2
                disabled:opacity-70
                disabled:cursor-not-allowed
                cursor-pointer
              "
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Creating...
              </>
            ) : (
              "Create Task"
            )}
          </button>
        </div>

        {/* Button */}


      </form>
      <div className="absolute top-6 right-6">
        <button
          type="button"
          onClick={handleLogout}
          className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700"
        >
          Logout
        </button>
      </div>

    </div>
  </div>
);
};

export default AdminDashboard;