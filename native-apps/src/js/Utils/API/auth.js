import axios from 'axios';
import {serverURL} from '../../Constants/server';

export const loginRequest = data => {
	console.log(data);
	return axios.post(`${serverURL}/login`, data)
};