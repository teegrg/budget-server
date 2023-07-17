const express = require("express");
const transaction = express.Router();
const transactionArray = require("../models/transaction.js");


// INDEX
transaction.get("/", (req,res) => {
    res.json(transactionArray);
    //console.log(req.params.id);
})

// //show
// transaction.get("/:id", (req, res) => {
//     const { id } = req.params;
//     console.log(id);
//     // Find the transaction with the provided ID
//     const transactions = transaction.find((trans) => trans.id === id);
  
//     if (!transactions) {
//       return res.status(404).json({ error: "Transaction not found" });
//     } else {
//         res.json(transactions);
//     }
// });

//SHOW
transaction.get("/:arrayIndex", (req,res) => {
    //console.log(req.params.id);
   if (transactionArray[req.params.arrayIndex]){
       res.json(transactionArray[req.params.arrayIndex]) 
   }else {
       res.status(404).json({error: "ID NOT FOUND" })
   }
});

//CREATE
transaction.post("/", (req,res) => {
    transactionArray.push(req.body);
    res.json(transactionArray.length -1)
});
// router.post("/", (req, res) => {
//     const newTransaction = {
//       id: uuidv4(),
//       ...req.body,
//     };
//     transactionArray.push(newTransaction);
//     res.json(transactionArray.length -1 );
//   });

//DELETE
transaction.delete("/:arrayIndex", (req,res) => {
    if (transactionArray[req.params.arrayIndex]) {
        const deleteTransaction = transactionArray.splice(req.params.arrayIndex, 1)
        res.status(200).json(deleteTransaction);
    }else {
        res.status(404).json({error: "ID NOT FOUND"});
    }
});

//UPDATE/EDIT
transaction.put("/:arrayIndex", (req,res) => {
    if (transactionArray[req.params.arrayIndex]) {
        transactionArray[req.params.arrayIndex] = req.body
        res.status(200).json(transactionArray[req.params.arrayIndex])
    }else {
        res.status(404).json({error: "ID NOT FOUND"})
    }
})

module.exports = transaction