const axios = require('axios');
const http = require('http');
const baseUrl = `${process.env.DATASOURCE}/api/todos`;

exports.getTodos = () => axios.get(`${baseUrl}`);

exports.deleteTodo = id => axios.delete(`${baseUrl}/${id}`);

exports.createTodo = todo => axios.post(`${baseUrl}`, todo);

exports.updateTodo = (id, todo) => axios.put(`${baseUrl}/${id}`, todo);

// exports.getTodos = done => {
//     http.get(`${baseUrl}`, (resp) => {
//         let data = '';

//         // A chunk of data has been received.
//         resp.on('data', (chunk) => {
//             data += chunk;
//         });

//         // The whole response has been received. Print out the result.
//         resp.on('end', () => {
//             done(data);
//         });

//     }).on("error", (err) => {
//         console.log("Error: " + err.message);
//     });
// };