const { response: res, request: req } = require('express');
const connection = require('../database');


const getProductos = (req, res) => {
    let query = "SELECT * FROM productos";
    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({
                error,
                message: 'hubo un error al obtener los productos'
            })
        } else {
            return res.status(200).json({
                results,
                message: 'productos obtenidos correctamente'
            })
        }
    })
}
 const postProductos = (req, res) => {
    const {nombre, precio,stock} = req.body;
    let query = `INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)`;

    connection.query(query, [nombre, precio, stock], (error, results) => {
        if(error){
            return res.status(500).json({
                error,
                message: 'hubo un error al crear el producto'
            })
        }else{
            return res.status(200).json({
               id: results.insertId,
                message: 'producto creado correctamente'
            })
        }

    })
 } 

 const putProductos = (req, res) => {
    const {id} = req.params;
    const {nombre, precio, stock} = req.body;
    let query = `UPDATE productos SET nombre = ?, precio = ?, stock = ? WHERE id_productos = ?`;
    connection.query(query, [nombre, precio, stock], (error, results) => {
        if(error){
            return res.status(500).json({
                error,
                message: 'hubo un error al actualizar el producto'
            })
        }else{
            return res.status(200).json({
                results,
                message: 'producto actualizado correctamente'
            })
        }
    })
 }




module.exports = {
    getProductos,
    postProductos,
    putProductos
};