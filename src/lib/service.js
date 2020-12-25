import axios from 'axios';

import axios from 'axios';

const ENDPOINT = 'https://jsonplaceholder.typicode.com';

const getData = async (userId) => {
  try {
    const { data: users } = await axios.get(`${ENDPOINT}/users/${userId}`);
    const { data: posts } = await axios.get(`${ENDPOINT}/posts/${userId}`);
    return { ...users, ...posts };
  } catch (e) {
    console.log(e);
  }
};

export default getData;
