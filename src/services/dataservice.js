import Axios from 'axios';
Axios.defaults.baseURL = 'http://45.67.159.35:3000/api/edutron';

export default {
    getGyartok(tableName){
        return Axios.get(`/getAll/${tableName}`)
    },
    getAutok(){
        return Axios.get('/api/cars')
    },
    getGyartoAutoi(manufacturerid){
        return Axios.get(`/api/cars/${manufacturerid}`)
    },
    postVote(vote){
        console.log(vote);
        return Axios.post('/api/vote',vote);
    },
    getUserById(id){
        return Axios.get(`/users/${id}`)
    },
    saveUser(user){
        return Axios.post('/users',user);
    },
    updateUser(user,id){
        return Axios.put(`/users/${id}`,user);
    }
}