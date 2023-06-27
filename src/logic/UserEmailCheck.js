import axios from 'axios';
import { baseUrl } from '../apiUtils/api';

export const handleEmailCheck = async (email) => {
  try {
    const url = `User/getUserEmail`;
    const response = await axios.get(`${baseUrl}/${url}`, {
      params: {
        UserEmail: email,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const userExists = response.data;
    return userExists;
  } catch (error) {
    return false;
  }
};
