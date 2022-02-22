import axios from 'axios';

export const uploadFile = data => {
  console.log('uploadFile: ', data);
  return axios.post('https://api.cloudinary.com/v1_1/dqi2lbaqn/upload', data, {
    headers: {
      'Accept': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};
