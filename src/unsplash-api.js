import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';

const axiosParams = {
  client_id: 'AvCUdcDaOImCqbuR2V9b0rCVDoY324DigWNfZU7DhCY',
  orientation: 'landscape',
  per_page: 6,
};

export const fetchPictures = async (searchQuery, currentPage) => {
  axiosParams.query = searchQuery;
  axiosParams.page = currentPage;
  const response = await axios.get('', { params: axiosParams });
  return response.data.results;
};
