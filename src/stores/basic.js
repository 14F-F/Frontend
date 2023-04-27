import { defineStore } from "pinia";

export const basicDataStore = defineStore({
    id: 'basicStore',
    state: ()=>({ 
        selectedCategory: {
            id : "",
            name : ""
        },
        selectedTest: {
            id : 0,
            name : "",
            solvingCode:"",
            categoryId : "",
            neededRole : 0,
            creatorId : 0,
            createdDate : new Date()
        }
     }),
    getters:{
        getCategory(state){
            
            return state.selectedCategory;
        },
        getCategory(state){
            
            return state.selectedTest;
        },
    },
    actions:{
        categorySelecting(selectedCategory){
            this.selCategory = selectedCategory
        },
        testSelecting(selectedTest){
            this.selCategory = selectedCategory
        }
    }
});