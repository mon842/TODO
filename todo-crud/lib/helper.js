import axios from 'axios';
const BaseUrl = 'http://localhost:3000';


export const getTasks = async () => {
    try {
        return await axios.get(`http://localhost:3000/api/tasks`);
    } catch (error) {
        console.log("Error while calling getuser api ",error);
    }
    
}

export const addTask = async (task) => {
    return await axios.post(`http://localhost:3000/api/tasks`, task);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${BaseUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${BaseUrl}/${id}`, user)
}