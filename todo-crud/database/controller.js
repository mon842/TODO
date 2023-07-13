
/** Controller */
import Tasks from '../model/task'

// get : http://localhost:3000/api/users
export async function getTasks(req, res){
    try {
        const tasks = await Tasks.find({})
        res.status(200).json(tasks)
        if(!tasks) return res.status(404).json( { error: "Data not Found"})
        
    } catch (error) {
        res.status(404).json( { error : "Error While Fetching Data"})
    }
}

// get : http://localhost:3000/api/users/1
export async function getTask(req, res){
    try {
        const { taskId } = req.query;

        if(taskId){
            const task = await Tasks.findById(taskId);
            res.status(200).json(task)
        }
        res.status(404).json({ error : "User not Selected...!"});
    } catch (error) {
        res.status(404).json({ error: "Cannot get the User...!"})
    }
}

// post : http://localhost:3000/api/users
export async function postTask(req, res){
    try {
        const formData = req.body;

        if(!formData) 
            return res.status(404).json( { error: "Form Data Not Provided...!"});
        const newTask= Tasks(formData);   
        await newTask.save();
        response.status(201).json(newTask); 
    } catch (error) {
        return res.status(404).json({ error })
    }
}

// put : http://localhost:3000/api/users/1
export async function putTask(req, res){
    try {
        const { taskId } = req.query;
        const formData = req.body;

        if(taskId && formData){
            const task = await Tasks.findByIdAndUpdate(taskId, formData);
            res.status(200).json(task);
        }
        res.status(404).json( { error: "User Not Selected...!"})
    } catch (error) {
        res.status(404).json({ error: "Error While Updating the Data...!"})
    }
}

// delete : http://localhost:3000/api/users/1
export async function deleteTask(req, res){
    try {
        const { taskId } = req.query;

        if(taskId){
            const task = await Tasks.findByIdAndDelete(taskId)
            return res.status(200).json(task)
        }

        res.status(404).json({ error: "User Not Selected...!"})

    } catch (error) {
        res.status(404).json({ error: "Error While Deleting the User...!"})
    }
}