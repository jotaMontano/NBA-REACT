import axios from 'axios';
import { ENDPOINT } from '../../config';

export const getArticles = async (start,end) => {
    return await axios.get(`${ENDPOINT}/articles?_start=${start}&_end=${end}`).then(response => {
        return response.data;
    }).catch(err => {
        console.log(err);
    });;
}
