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

const getByIdAsync = async () => {};

export default {
  getAllAsync,
  getByIdAsync,
};
