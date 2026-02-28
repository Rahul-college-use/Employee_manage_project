import React from 'react';

const TaskCard = ({data}) => {
    return (
        <div>
            <div id='card' className="flex p-5 justify-start items-center overflow-auto gap-10">
                {/* card */}
                <div className="
                 min-h-[160px]  
                 w-[50%]
                sm:w-[200px] 
                lg:w-[220px] 
                flex-shrink-0 
                bg-blue-400 
                p-4 sm:p-5 
                rounded-2xl
                flex flex-col gap-2
                 justify-center
                 items-center"
                >
                    <h1 className='text-2xl text-center text-white font-bold'>{data.newTasks}</h1>
                    <h2 className='text-2xl text-center text-white font-semibold'>New Task</h2>

                </div>
                <div className="
                 min-h-[160px]  
                 w-[50%]
                sm:w-[200px] 
                lg:w-[220px] 
                flex-shrink-0 
                bg-green-400 
                p-4 sm:p-5 
                rounded-2xl
                flex flex-col gap-2
                 justify-center
                 items-center"
                >
                    <h1 className='text-2xl text-center text-white font-bold'>{data.completedTasks}</h1>
                    <h2 className='text-2xl text-center text-white font-semibold'>Complete Task</h2>

                </div>
                <div className="
                 min-h-[160px]  
                 w-[50%]
                sm:w-[200px] 
                lg:w-[220px] 
                flex-shrink-0 
                bg-purple-400 
                p-4 sm:p-5 
                rounded-2xl
                flex flex-col gap-2
                 justify-center
                 items-center"
                >
                    <h1 className='text-2xl text-center text-white font-bold'>{data.pendingTasks}</h1>
                    <h2 className='text-2xl text-center text-white font-semibold'>Panding Task</h2>

                </div>
                <div className="
                 min-h-[160px]  
                 w-[50%]
                sm:w-[200px] 
                lg:w-[220px] 
                flex-shrink-0 
                bg-pink-400 
                p-4 sm:p-5 
                rounded-2xl
                flex flex-col gap-2
                 justify-center
                 items-center"
                >
                    <h1 className='text-2xl text-center text-white font-bold'>{data.inProgressTasks}</h1>
                    <h2 className='text-2xl text-center text-white font-semibold'>Failed Task</h2>

                </div>
            </div>
        </div>
    );
}

export default TaskCard;
