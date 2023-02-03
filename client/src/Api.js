import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

/**
 * fn for getting all users
 * @param => none
 * @returns => array of user objects
 */
export async function getUsers() {
	const res = await axios.get(`${BASE_URL}/users`);
	return res;
}

/**
 * fn for addding a users
 * @param => user data object
 * @returns => user object that was added 
 */
export async function addUser(data) {
	const res = await axios.post(`${BASE_URL}/users`, data);
	return res;
}

/**
 * fn for getting a user by userId
 * @param => userId
 * @returns => user object associated with the id
 */
export async function getUser(id) {
	const res = await axios.get(`${BASE_URL}/users/${id}`);
	return res;
}

/**
 * fn for updating a user's info
 * @param => user data object with updated user data, userId
 * @returns => updated user object associated with the id
 */
export async function updateUser(data, id) {
	const res = await axios.put(`${BASE_URL}/users/${id}`, data);
	return res;
}

/**
 * fn for deleting a user
 * @param => user data object, userId
 * @returns => nothing is successfull
 */
export async function deleteUser(data, id) {
	const res = await axios.delete(`${BASE_URL}/users/${id}`, data);
	return res;
}
