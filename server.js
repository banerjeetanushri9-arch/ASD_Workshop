// const express = require('express');
// const fs = require("fs/promises");
// const path = require("path");

// const app = express()
// const port = 3002

// const filePath = path.join(__dirname , "db.json")



// const cache = {};

// async function readFile(){
//     try{
//         let data = await fs.readFile(filePath , "utf8");
//         return JSON.parse(data)
//     } catch(err){
//         console.log(err)
//     }

// }


// async function readfiledelay(){
//     try{
//     await new Promise ((res,rej) =>{
//         setTimeout(res,1500)
//     });

//     let data =  readFile();
//     return (data)
//     }catch(err){
//         console.log(err);
//     }
// }

// app.get('/product', async(req, res) => {
//     try{
//         let key = req.url;
//         let value = cache[key];
//         if(value){
//             res.set("X-Cache","HIT")
//             return res.json(value)
//         }
//         let products = await readfiledelay();
//         cache[key]=products;
//         return res.json(products);
//     }catch(err){
//         res.status(500).send("Server Error")
//     }
// })

// app.get('/product/:id', async(req, res) => {
//     try{
//         // console.log(req.params)
//         let {id} = req.params;
//         id = Number(id)
//         let products = await readfiledelay();
//         let product = products.find((item)=>{
//             return item.id === id; 
//         });
//         res.json(product);
        
//     }catch(err){
//         res.status(500).send("Server Error")
//     }
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



const express = require("express");

const productRoutes = require("./routes/productRoutes");

const app = express();

const port = 3002;

app.use(express.json());

app.use(productRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});