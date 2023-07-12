import connectMongo from '../../../database/conn'
import { getTasks, postTask, putUser, deleteTask } from '../../../database/controller';

export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection"}))

    // type of request
    const { method } = req

    switch(method){
        case 'GET' :
            getTasks(req, res)
            break;
        case 'POST':
            postTask(req, res)
            break;
        case 'PUT':
            putUser(req, res)
            break;
        case 'DELETE':
            deleteTask(req, res)
            break;
        default : 
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
  }
  