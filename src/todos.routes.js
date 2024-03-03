const express = require('express');
const { PrismaClient } = require("@prisma/client");
const carRoutes = express.Router();

const prisma = new PrismaClient();
carRoutes.post("/cars", async (req, response) =>{
    const { dono, marca, modelo, ano, estado } = req.body;
    const cars = await prisma.cars.create({
        data: {
            dono, marca, modelo, ano, estado 
        }
    })
    return response.status(201).json(cars)
});
carRoutes.get('/cars', async (_req, res) => {
    const cars = await prisma.cars.findMany({})
    return res.status(201).json(cars)
})

carRoutes.put('/cars/:id', async (req, res) => {
    const { id, dono, marca, modelo, ano, estado } = req.body.carData;

    if(!id){
        return res.status(400).json('id é obrigatorio')
    }
    const idExist = await prisma.cars.findUnique({where: {id} })
    if(!idExist){
        return res.status(401).json("id nao existe!")
    }
    const cars = await prisma.cars.update({ where: {
        id
    }, data: {dono, marca, modelo, ano, estado}})
    return res.status(201).json(cars);
})
//D
carRoutes.delete("/cars/:id", async (req, res) => {
    const { id } = req.params;
    const intId = parseInt(id)
    if(!id){
        return res.status(401).json("id é obrigatorio")
    }
    const idExist = await prisma.cars.findUnique({ where: {id: intId}})
    if(!idExist){
        return res.status(401).json("id nao existe")
    }

    await prisma.cars.delete({ where: {id: intId}})
    return res.status(201).send("deletado");
})
module.exports = carRoutes;
