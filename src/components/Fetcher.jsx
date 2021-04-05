import axios from 'axios'

export default async () => {
    const API_URL = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';

    let data = await axios
    .get(API_URL)
    .then((response) => {
        response = res.data;
        return response;
      });
    return data;
}