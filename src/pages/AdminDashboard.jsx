import React, { useState } from 'react';

const AdminDashboard = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log({ title, description, priority });
      setTitle('');
      setDescription('');
      setPriority('Medium');
      setLoading(false);
    }, 1500);
  };
  const handleLogout=()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }
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