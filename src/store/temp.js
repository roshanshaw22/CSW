import { defineStore } from "pinia";
import UserTypeService from "../service/UserTypeService";

export const useUserTypesData = defineStore("userTypesData", {
    state: () => ({
        userTypes: []
    }),

    getters: {
        getUserTypes: (state) => state.userTypes
    },

    actions: {
        async viewUserTypes(limit, offset, search) {
            const userTypeService = new UserTypeService();
            this.userTypes = [];
            
            let res = await userTypeService.viewUserTypes(limit, offset, search);
            let allData = res.userTypes.map(obj => obj);
            for (let i = 0; i < offset; i++) {
                this.userTypes.push({});
            }
            for (let obj of allData) {
                this.userTypes.push({ ...obj });
            }
            if (res.count == 0) {
                this.userTypes = [];
            }
            else if (this.userTypes.length > res.count) {
                this.userTypes.splice(res.count, this.userTypes.length - 1);
            }
            else {
                let count = res.count - this.userTypes.length;
                for (let i = 0; i < count; i++) {
                    this.userTypes.push({});
                }
            }
            return res;
        },

        deleteSingleUserTypes(id) {
            const userTypeService = new UserTypeService();
            let response = userTypeService.deleteUserTypes(id);
            return response;
        },

        async updateTypes(data) {
            const userTypeService = new UserTypeService();
            let response = userTypeService.updateUserTypes({...data});
            if(response[3] === 200){
                this.userTypes = this.userTypes.map(user => {
                  if(user.id === data.id) return data;
                  return user;
                });
              }
            return response;
        },

        async addUserType(userType, code) {
            const userTypeService = new UserTypeService();
            let response = userTypeService.addUserTypes(userType, code);
            return response;
        },

        deleteMultipleUserTypes(id) {
            const userTypeService = new UserTypeService();
            let response = userTypeService.deleteUserTypes(id);
            return response;
        },
    },
});
