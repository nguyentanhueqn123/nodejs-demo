import express from "express";
import pool from "../config/connectDB";

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users` ');

    return res.status(200).json({
        massage: 'ok',
        data: rows
    })

}

let createNewUser = async (req, res) =>{
    let {firstName, lastName, email, address} = req.body;
    if(!firstName || !lastName || !email || !address){
        return res.status(200).json({
            message: "mising required params"
        })
    
    }
    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)', 
    [firstName, lastName, email, address]);

    return res.status(200).json({
        massage: "okkk"
    })

}
let updateUser = async (req, res) =>{
    let {firstName, lastName, email, address, id} = req.body;// lay gia tri mois

    if(!firstName || !lastName || !email || !address || !id){
        return res.status(200).json({
            message: "mising required params"
        })
    
    }
    await pool.execute('update users set firstName= ?, lastName= ?, email= ?, address= ? where id= ?', 
    [firstName, lastName, email, address, id]);
    return res.status(200).json({
        massage: "okkk"
    })

}
let deleteUser = async (req, res) =>{
    let userId = req.params.id;
    if(!userId){
        return res.status(200).json({
            message: "mising required params"
        })
    
    }
    await pool.execute('delete from users where id = ?', [userId]);
    return res.status(200).json({
        massage: "okkk"
    })
    
}
module.exports = {
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}