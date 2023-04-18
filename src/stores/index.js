import { defineStore } from "pinia";

export const useCategoryStore = defineStore({
    id: 'categoryStore',
    state: ()=>({ 
        selCategory: -1
     }),
    getters:{
        getCategory(state){
            
            return state.selectedCategory;
        },
    },
    actions:{
        categorySelecting(selectedCategory){
            this.selCategory = selectedCategory
        }
    }
});