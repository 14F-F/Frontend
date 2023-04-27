import { defineStore } from "pinia";

export const testStore = defineStore({
    id: 'testStore',
    state: ()=>({ 
        actTest: {
            id : 0,
            name : "",
            solvingCode:"",
            categoryId : "",
            neededRole : 0,
            creatorId : 0,
            createdDate : new Date()
        },
        actQuestion: {
            id: 0,
            

        },
        actAnswer: {
            id: 0,
            text:"",
            correct: new Boolean()
        }
     }),
    getters:{
        getTest(state){
            return state.actTest;
        },
        getQuestion(state){
            return state.actQuestion;
        },
        getAnswer(state){
            return state.actAnswer;
        }
    },
    actions:{
        testSelecting(selectedTest){
            this.actTest = selectedTest
        },
        questionSelecting(selectedQuestion){
            this.actQuestion = selectedQuestion
        },
        answerSelecting(selectedAnswer){
            this.actAnswer = selectedAnswer
        }
    }
});