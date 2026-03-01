import React from 'react';
import EmployeesHeader from './other/EmployeesHeader';
import EmployeesCard from './other/EmployeesCard';
import TaskCard from './other/TaskCard';

const EmpolyeesDashboard = ({ data }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col 
                    bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
                    px-6 py-6 space-y-6">
        <EmployeesHeader data={data} />
        <TaskCard data={data} />
        <EmployeesCard data={data.tasks} />
      </div>
    </>
  );
}

export default EmpolyeesDashboard;
