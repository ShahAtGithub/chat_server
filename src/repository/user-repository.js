const { PrismaClient }=require("@prisma/client");

const prisma = new PrismaClient();

class UserRepository {
  async createUser(obj) {
    try {
      const user = await prisma.user.create({
        data: obj,
      });
      return user;
    } catch (error) {
      console.log("something went wrong in User Repo ");
      throw { error };
    }
  }
  async deleteUser(userId) {
    try {
      await prisma.user.delete({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in User Repo ");
      throw { error };
    }
  }
  async updateUser(userId, data) {
    try {
      const user = await prisma.user.update({
        where:{
            id:userId,
            
        },
        data:data
      })
      return user;
    } catch (error) {

      console.log("something went wrong in User Repo ",error,userId,data);
      throw { error };
    }
  }
  async getUser(userId) {
    try {
      const user = await prisma.user.findFirstOrThrow({
        where: {
          id: userId,
        },
      });

      return user;
    } catch (error) {
      console.log("something went wrong in User Repo ");
      throw { error };
    }
  }
  async  getAllUser() {
    try {
      const user = await prisma.user.findMany();

      return user;
    } catch (error) {
      console.log("something went wrong in User Repo ");
      throw { error };
    }
  }
}

module.exports = UserRepository;
