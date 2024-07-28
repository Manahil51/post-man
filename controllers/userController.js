const getUsers = async(req,res)=> {
 const user = await UserActivation.find();
 res.send(users);
};
const createUser =  async  (req,res )=>{
    const user = new User({
        firstName: "First name 2",
        lastname: "last name 2",
        email: "email@gmail.com",
        lastname: "123456789",

    });
    const users = await User.create(users);
    res.send(users);
};
module.exports =(getUsers,createUser);