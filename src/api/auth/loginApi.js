/*
    just for inspiration
*/

// import { authRequest } from './../Request.js';
// import { API_URL } from '../../config';

// export function login(username, password) {
//     return new Promise((resolve, reject) => {
//         const grant_type = 'password';

//         authRequest(true)
//             .post(API_URL + '/oauth/token')
//             .query({ username, password, grant_type })
//             .end((err, res) => err ? reject(err.response.body) : resolve(res.body));
//     });
// }
