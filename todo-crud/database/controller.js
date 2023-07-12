
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
export async function getUser(req, res){
    try {
        const { userId } = req.query;

        if(userId){
            const user = await Users.findById(userId);
            res.status(200).json(user)
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
        // Tasks.create( formData, function(err, data){
        //     return res.status(200).json(data)
        // })
    } catch (error) {
        return res.status(404).json({ error })
    }
}

// put : http://localhost:3000/api/users/1
export async function putUser(req, res){
    try {
        const { userId } = req.query;
        const formData = req.body;

        if(userId && formData){
            const user = await Users.findByIdAndUpdate(userId, formData);
            res.status(200).json(user)
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