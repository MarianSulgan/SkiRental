import Defaults from 'superagent-defaults';
// import { getToken } from '../utils/Token.js';

export function authRequest(auth) {
    // const token = getToken();

    const superagent = new Defaults();

    if (auth) {
        // superagent.set('Authorization', `Bearer ${token}`);
        superagent.set('Authorization', `Basic Z2FtZUNsaWVudDo=`);
    }

    return superagent;
}
