import Axios from 'axios';
Axios.defaults.baseURL = 'http://45.67.159.35:3000/api/edutron';

export default {
    getAll(tableName){
        return Axios.get(`/getAll/${tableName}`)
    },
    createTest(test){
        return Axios.post('/createTest',test)
    },
    createQuestion(question){
        return Axios.post(`/createQuestion`,question)
    },
    createAnswer(answer){
        return Axios.post('/createAnswer',answer);
    },
    addTQID(TQUID){
        return Axios.post('/addTQID', TQUID)
    },
    addQAID(QAID){
        return Axios.post('/addQAID', QAID)
    },
    updateTest(test,id){
        return Axios.put(`/updateTest/${id}`,test)
    },
    updateQuestion(question,id){
        return Axios.put(`/updateQuestion/${id}`,question);
    },
    updateAnswer(answer,id){
        return Axios.put(`/updateAnswer/${id}`,answer);
    },
    deleteTest(id){
        return Axios.delete(`/deleteTest/${id}`)
    },
    deleteQuestion(id){
        return Axios.delete(`/deleteQuestion/${id}`)
    },
    deleteAnswer(id){
        return Axios.delete(`/deleteAnswer/${id}`)
    },

    //User 

    register(user){
        return Axios.post(`/register`, user)
    },
    updateUser(user, id){
        return Axios.put(`/updateUser/${id}`, user)
    },
    deleteUser(id){
        return Axios.delete(`/deleteUser/${id}`)
    },
    loggedIn(user){
        return Axios.post(`/loggedIn`, user)
    }
}