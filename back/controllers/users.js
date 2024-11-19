const {response : res, request : req} = require('express');
const connection = require('../database');

const getUsuarios = (req,res) => {
    let query = "SELECT * FROM users";
    connection.query(query, (error, results) => {
        if(error){
            return res.status(500).json({
                error,
                message: 'hubo un error al obtener los usuarios'
            })
        }else{
            return res.status(200).json({
                results,
                res: results.length,
                message: 'usuarios obtenidos correctamente'
            })
        }
    })  
}

const postUsers = (req,res) => {
    const {nombre, apellido, email, password} = req.body;
    let query = `INSERT INTO users (nombre, apellido, email, password) VALUES (?,?,?,?)`;
    connection.query(query, [nombre, apellido, email,password], (error, results) => {
        if(error){
            return res.status(500).json({
                error,
                message: 'hubo un error al crear el usuario'
            })
        }else{
            return res.status(200).json({
               id: results.insertId,
                message: 'usuario creado correctamente'
            })
        }
    })
    
}

module.exports = {
    getUsuarios,
    postUsers
}