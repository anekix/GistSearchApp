import axios from 'axios';
/**
 * Takes a gistId & returns a promise for data belonging to the gist 
 * @param  {String} gistId id of the gist to fetch 
 * @return {Promise} a Promise object whhich later evaluates to forks Data of gist 
 *
 */
export function getGistForks(gistId){
    return axios.get('https://api.github.com/gists/'+gistId+'/forks')
}
