import React from 'react'
import { useState,useEffect } from 'react';
import { getTasks,deleteTask } from '@/lib/helper';

const Tasks = (props) => {
  // console.log(props.theme ,"from task");
  const [tasks,setTasks] = useState([]);
    

    useEffect(()=>{
        getAllTasks();
    },[]);

    const getAllTasks= async ()=>{
        let response=await getTasks();
        setTasks(response.data);
    }
    const deleteTaskDetails= async (id)=>{
        await deleteTask(id);
        getAllTasks();
    }
    const editTaskDetails= async(id)=>{
        props.setId(id);
        props.setPage('edit');
    }


  return (
    <div className='dark:bg-black dark:text-white px-10'>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

              <th scope="col" className="px-6 py-3">
                Title
              </th>
              
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              
            
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            
            </tr>
          </thead>

          <tbody>
            { 
                tasks.map(task=>(
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={task._id}>
                  
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {task.title}
                  </th>

                  <td className="px-6 py-4 h-20">
                  {task.description}
                  </td>

                  <td className="px-6 py-4">
                    <a href={`#`} onClick={()=> editTaskDetails(task._id)} className="mx-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" onClick={()=> deleteTaskDetails(task._id)} className="mx-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">delete</a>
                  </td>

                </tr>
            ))
            }


          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Tasks