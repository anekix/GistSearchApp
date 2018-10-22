import axios from 'axios';
/**
 * Takes a username & returns a promise for gists belonging to the user 
 * @param  {String} username to fetch gists
 * @return {Promise} a Promise object whhich later evaluates to gist Data 
 *
 */
export function getUserGists(username){
    return axios.get('https://api.github.com/users/'+username+'/gists')
}
