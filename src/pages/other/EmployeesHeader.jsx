import React from 'react';

const EmployeesHeader = ({ data }) => {

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-center px-6 py-4">

      <h1 className="font-bold text-white text-lg">
        Hello <br />
        <span className="text-2xl">
          {data?.name || "User"} 👋
        </span>
      </h1>

      <button
        onClick={handleLogout}
        className="py-2 px-5 rounded-lg bg-red-600 hover:bg-red-700 
                   text-sm text-white cursor-pointer active:scale-95 
                   font-semibold transition-all duration-200"
      >
        Logout
      </button>

    </div>
  );
};

export default EmployeesHeader;
