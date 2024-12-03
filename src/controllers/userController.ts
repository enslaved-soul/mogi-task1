import {Request, Response} from 'express';

//PlaceHolder Array For testing
const users=[
    {id: 1, name: 'Jane doe', email: 'janedoe@gmail.com'},
    {id: 2, name: 'John doe', email: 'johndoe@gmail.com'},
];

//Create A new User
export const createUser=(req: Request , res: Response)=>{
    const {name, email}= req.body;
    const id= users.length +1;
    const newUser= {id, name, email};
    users.push(newUser);
    res.status(201).json(newUser);
};

//Get a specific user by ID
export const getUserById= (req: Request, res: Response)=>{
    const {id}= req.params;
    const user= users.find((u)=>u.id === parseInt(id));
    if(!user){
        res.status(404).json({message : 'No user with such Id'});
    };
    res.status(201).json(user); 
};

//Get all users
export const getAllUsers=(req: Request, res: Response)=>{
    if(users.length==0){
        res.status(201).json({message : 'No users in array'});
    }
    res.status(201).json(users);
};

//Update an existing user
export const updateUser=(req: Request, res: Response)=>{
    const {id}= req.params;
    const {name, email}= req.body;
    const userIndex= users.findIndex((u)=>u.id === parseInt(id));
    if(userIndex === -1){
        res.status(404).json({message : 'No such user exist'});
    }
    users[userIndex]= {id: parseInt(id), name, email};
    res.status(201).json(users[userIndex]);
};

//Delete an existing user
export const deleteUser=(req: Request, res: Response)=>{
    const {id}= req.params;
    const userIndex= users.findIndex((u)=>u.id === parseInt(id));
    if(userIndex === -1){
        res.status(404).json({message : 'No such user exist'});
    }
    const deletedUser= users.splice(userIndex,1);
    res.status(201).json(users);
};
