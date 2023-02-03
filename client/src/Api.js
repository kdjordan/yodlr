import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export async function getUsers() {
	const res = await axios.get(`${BASE_URL}/users`);
	return res;
}

export async function addUser(data) {
	const res = await axios.post(`${BASE_URL}/users`, data);
	return res;
}

export async function getUser(id) {
	const res = await axios.get(`${BASE_URL}/users/${id}`);
	return res;
}

export async function updateUser(data, id) {
	const res = await axios.put(`${BASE_URL}/users/${id}`, data);
	return res;
}
export async function deleteUser(data, id) {
	const res = await axios.delete(`${BASE_URL}/users/${id}`, data);
	return res;
}
