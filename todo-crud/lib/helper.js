import axios from 'axios';
const BaseUrl = 'http://localhost:3000';


export const getTasks = async (id) => {
    id=id || '';
    try {
        return await axios.get(`http://localhost:3000/api/tasks/${id}`);
    } catch (error) {
        console.log("Error while calling getuser api ",error);
    }
    
}

export const addTask = async (task) => {
    return await axios.post(`http://localhost:3000/api/tasks`, task);
}

export const deleteTask = async (id) => {
    try {
        return await axios.delete(`${BaseUrl}/api/tasks/${id}`);
    } catch (error) {
        console.log("Error while calling getuser api ",error);
    }
    

}

export const editTask = async (id, task) => {
    try {
        
        return await axios.put(`${BaseUrl}/api/tasks/${id}`, task)
    } catch (error) {
        console.log("Error while calling getuser api ",error);
    }
}