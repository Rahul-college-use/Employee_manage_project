import React from 'react';

const EmployeesCard = ({ data }) => {
    // console.log(data)
    const array = data;
    // console.log(array)
    const colors = ["bg-amber-300", "bg-lime-300", "bg-cyan-300", "bg-pink-300", "bg-green-300", "bg-blue-300"]
    return (
        <div
            id='card'
            className='
                flex 
                gap-4 sm:gap-6 lg:gap-8 
                p-4 sm:p-6 
                overflow-x-auto 
                overflow-y-hidden 
                scroll-smooth
            '
        >
            {array.map((e, idx) => {
                // console.log(e)
                return (

                    <div key={idx} className={`
                min-h-[260px] 
                ${colors[idx % colors.length]} 
                ` + `
                w-[85%] 
                sm:w-[300px]>
                w-[85%] 
                sm:w-[300px] 
                lg:w-[320px] 
                flex-shrink-0 
                bg-amber-300 
                p-4 sm:p-5 
                rounded-2xl
            `}>

                        <div className='flex justify-between items-center'>
                            <h4 className='bg-red-600 px-2 py-1 rounded text-xs sm:text-sm'>
                                {e.priority}
                            </h4>
                            <h4 className='text-xs sm:text-sm'>{e.date}</h4>
                        </div>

                        <h1 className='font-semibold mt-4 text-base sm:text-lg'>
                            <span className='mr-2'>{e.taskId}</span>
                            Title <span>{e.title}</span>
                        </h1>

                        <p className='mt-4 text-sm sm:text-base'>
                            {e.description}
                        </p>



                    </div>



                )
            })}




        </div>
    );
}

export default EmployeesCard;

