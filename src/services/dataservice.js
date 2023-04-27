import Axios from 'axios';
Axios.defaults.baseURL = 'http://45.67.159.35:3000/api/edutron';

export default {
// default get methods
    getAll(tableName){
        return Axios.get(`/getAll/${tableName}`)
    },
    testByUser(userId){
        return Axios.get(`/testByUser/${userId}`)
    },
    testByCategory(categoryId){
        return Axios.get(`/testByCategory/${categoryId}`)
    },
    allByCategory(id){
        return Axios.get(`/category/${id}`)
    },
    testById(id){
        return Axios.get(`/test/${id}`)
    },
    testdataById(id){
        return Axios.get(`/testdata/${id}`)
    },


    questionByTestId(testId){
        return Axios.get(`/question/${testId}`)
    },
    questionByTestId(questionId){
        return Axios.get(`/answer/${questionId}`)
    },
// posts
    createTest(test){
        return Axios.post('/createTest',test)
    },
    createQuestion(question){
        return Axios.post(`/createQuestion`,question)
    },
    createAnswer(answer){
        return Axios.post('/createAnswer',answer);
    },
// updates
    updateTest(test,id){
        return Axios.put(`/updateTest/${id}`,test)
    },
    updateQuestion(question,id){
        return Axios.put(`/updateQuestion/${id}`,question);
    },
    updateAnswer(answer,id){
        return Axios.put(`/updateAnswer/${id}`,answer);
    },
// deletes
    deleteTest(id){
        return Axios.delete(`/deleteTest/${id}`)
    },
    deleteQuestion(id){
        return Axios.delete(`/deleteQuestion/${id}`)
    },
    deleteAnswer(id){
        return Axios.delete(`/deleteAnswer/${id}`)
    },
// connection table routes
// test_question
    addTQID(TQ){
        return Axios.post('/addTQID', TQ)
    },
    updateTQID(TQ,testId,questionId){
        return Axios.put(`/updateTQID/${testId}/${questionId}`,TQ)
    },
    deleteTQID(testId,questionId){
        return Axios.delete(`/deleteTQID/${testId}/${questionId}`)
    },
// question_answer
    addQAID(QA){
        return Axios.post('/addQAID', QA)
    },
    updateQAID(QA,questionId,answerId){
        return Axios.put(`/updateQAID/${questionId}/${answerId}`,QA)
    },
    deleteQAID(questionId,answerId){
        return Axios.delete(`/deleteQAID/${questionId}/${answerId}`)
    },
// user_test
    addUTID(UT){
        return Axios.post('/addUTID', UT)
    },
    updateUTID(UT,userId,testId){
        return Axios.put(`/updateUTID/${userId}/${testId}`,UT)
    },
    deleteUTID(userId,testId){
        return Axios.delete(`/deleteUTID/${userId}/${testId}`)
    },
// user_question
    addUQID(UQ){
        return Axios.post('/addUQID', UQ)
    },
    updateUQID(UQ,userId,questionId){
        return Axios.put(`/updateUQID/${userId}/${questionId}`,UQ)
    },
    deleteUQID(userId,questionId){
        return Axios.delete(`/deleteUQID/${userId}/${questionId}`)
    },
// user_answer
    addUAID(UA){
        return Axios.post('/addUAID', UA)
    },
    updateUAID(UA,id){
        return Axios.put(`/updateUAID/${id}`,UA)
    },
    deleteUAID(id){
        return Axios.delete(`/deleteUAID/${id}`)
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