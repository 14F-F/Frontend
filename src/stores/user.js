import { defineStore } from "pinia";
import dataservice from '../services/dataservice.js';

export const userDataStore = defineStore({
    id: 'userStore',
    state: ()=>({
        id: 0, 
        name: "",
        email: "",
        pwHash: "",
        token: ""
     }),
    getters:{
        getUsername(state){
            
            return state.name;
        },
        getPwHash(state){
            if(state.pwHash == "")
            {
                dataservice.loggedIn(state)
                .then((resp) => {
                    state.pwHash = resp.data.data.pwHash;
                    console.log(resp.data);
                })
                .catch((err) => {
                    console.log(err);
                });
            }
            return state.pwHash;
        },
        getEmail(state){
            return state.email;
        }
    },
    actions:{
        categorySelecting(selectedCategory){
            this.selCategory = selectedCategory
        }
    }
});