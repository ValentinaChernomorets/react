import http from 'node:http'
import {Product} from './model/Product.mjs'
import {Money} from './model/Money.mjs'

const products = [
    new Product (101, "Pizza", "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/d6c392a84e4f665424d710649452e7f9/Derivates/a6bdb196bee23faef1d8020319c7c64750ef7686.jpg",
        new Money(100, 'MDL')
    ),
    new Product (102, "Burger", "https://www.shutterstock.com/image-photo/hand-takes-sandwich-on-white-260nw-2419275997.jpg",
        new Money(56, 'MDL')
    ),
    new Product (103, "Salat", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaLoCTFTm9i5AYLnlApJxr6_ofPEkq04V0ddY3hfnulg&s",
        new Money(34, 'MDL')
    ),
];

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "application/json")
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    if (req.url.startsWith("/api/products")) {
        res.end(JSON.stringify(products))
    } else if (req.url.startsWith("/api/order/")) {
        // HW1: try to extract/capture the id value - using regex
        let match = req.url.match(/\/api\/order\/(\d+)/)
        let itemId = parseInt(match[1])
        // Version in class
        // let itemId = parseInt(req.url.replace('/api/order/', ''))
        res.end(JSON.stringify({
            message: "Order placed successufully!",
            itemId: itemId,
        }))
    } 
    else {
        res.statusCode = 404
        res.end(JSON.stringify({
            status: 404,
            message: "not found"
        }))
    }
})

server.listen("3001", "localhost")