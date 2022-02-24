export const uploadImage = async file => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', 'g7wu4eq5');
  data.append('cloud_name', 'dqi2lbaqn');

  const response = await fetch(
    'https://api.cloudinary.com/v1_1/dqi2lbaqn/upload',
    {
      method: 'post',
      body: data,
    },
  );
  const image = await response.json();
  return image;
};
