
// import { BiBrush } from 'react-icons/bi'

import { useQuery, useMutation, useQueryClient } from "react-query"
import { getTask, getTasks, updateTask } from "../lib/helper"

export default function UpdateTaskForm({ formId, formData, setFormData,theme }){

    const queryClient = useQueryClient()
   const {isLoading, isError, data, error} = useQuery(['tasks', formId], () => getUser(formId))
    const UpdateMutation = useMutation((newData) => updateTask(formId, newData), {
        onSuccess : async (data) => {
            queryClient.prefetchQuery('tasks', getTasks)
        }
    })

   if(isLoading) return <div>Loading...!</div>
   if(isError) return <div>Error</div>

   const { title,description  } = data;
  //  const [firstname, lastname] = name ? name.split(' ') : formData

    const handleSubmit = async (e) => {
        e.preventDefault();
        // let userName = `${formData.firstname ?? firstname} ${formData.lastname ?? lastname}`;
        let updated = Object.assign({}, data, { title: title})
        await UpdateMutation.mutate(updated)
    }

    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={title} name="decription" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="title" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={description} name="decription" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="decription" />
            </div>

            <button className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
             Update <span className="px-1"></span>
            </button>

        </form>
    )
}