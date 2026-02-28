import React from 'react';
import EmployeesHeader from './other/employeesHeader';
import EmployeesCard from './other/EmployeesCard';
import TaskCard from './other/TaskCard';

const EmpolyeesDashboard = ({data}) => {
  return (
    <>
      <div className='bg-gray-700 '>
        <EmployeesHeader data={data}/>
        <TaskCard data={data}/>
        <EmployeesCard data={data.tasks}/>
      </div>
    </>
  );
}

export default EmpolyeesDashboard;
