import axios from 'axios';

import {baseUrl} from '@Configs/configs';

const accountUrl = `${baseUrl}/accounts/`;

const getAllAsync = async () => {
  try {
    const res = await axios.get(accountUrl);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getByIdAsync = async (id: string) => {
  try {
    const res = await axios.get(accountUrl, {
      params: {
        id,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const createAsync = async (
  username: string,
  password: string,
  role: 'admin' | 'teacher' | 'student',
) => {
  try {
    const res = await axios.post(accountUrl, {
      username,
      password,
      role,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const validateAccount = async (username: string, password: string) => {
  try {
    const res = await axios.get(`${accountUrl}/validate`, {
      params: {
        username,
        password,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  createAsync,
  getAllAsync,
  getByIdAsync,
  validateAccount,
};
