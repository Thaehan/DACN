import axios from 'axios';

import { apiUrl } from '../Config/Urlconfig';
import { ITutorial } from '../Types/ITutorial';

const route = `${apiUrl}/tutorials`

const getAllAsync = async () => {
  const res = await axios.get(route, {
    params: {
      
    }
  })
  return res.data;
}

const createAsync = async (body: ITutorial) => {
  const res = await axios.post(route, body)
  return res.data
}

export {
  getAllAsync,
  createAsync
}