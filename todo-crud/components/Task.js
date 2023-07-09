import React from 'react'

const Tasks = (props) => {
  // console.log(props.theme ,"from task");

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
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 
              </th>

              <td className="px-6 py-4 h-20">
              The Git Rebase Handbook - A Definitive Guide to Rebasing One of the most powerful tools a developer can have in their toolbox is. In thi


              </td>

              <td className="px-6 py-4">
                <a href="#" className="mx-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                <a href="#" className="mx-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">doing</a>
              </td>

            </tr>


          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Tasks