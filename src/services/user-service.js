const {UserRepository} =require("../repository/index")

class UserService{
    constructor (){
        this.UserRepository=new UserRepository()
    }

    async createUser(data){
        try {
            console.log(data)
            const User=await this.UserRepository.createUser(data)
            return User;
            
        } catch (error) {
            console.log("something went wrong in User service layer ")
            throw {error}
            
        }

    }
    async deleteUser(UserId){
        try {
            
            return await this.UserRepository.deleteUser(UserId);

            
        } catch (error) {
            console.log("something went wrong in User service layer ")
            throw {error}
            
        }

    }
    async updateUser(UserId,data){
        try {
            const User=await this.UserRepository.updateUser(UserId,data)

            return User;

            
        } catch (error) {
            console.log("something went wrong in User service layer ")
            throw {error}            
        }
    }
    async getUser(UserId){
        try {
            const User=await this.UserRepository.getUser(UserId)
            return User 
            
        } catch (error) {
            console.log("something went wrong in User service layer ")
            throw {error}
            
        }
    }
    async getAllUser(){
        try {
            const User=await this.UserRepository.getAllUser()
            return User 
            
        } catch (error) {
            console.log("something went wrong in User service layer ")
            throw {error}
            
        }
    }
}

module.exports=UserService