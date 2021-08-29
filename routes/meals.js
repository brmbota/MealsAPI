const express = require("express");

const router= express.Router();

//GET ROUTE /meals
router.get("/",(req,res,next)=>{
    const recipes = {
        name:req.body.name,
        price:req.body.price
    }
    res.status(200).json({
        message:"Gives array of every meal",
        CreatedProperty:recipes
    });
});
//POST ROUTE /meals
router.post("/",(req,res,next)=>{
    res.status(200).json({
        message:"Radi i post metoda"
    });
});
//GET ROUTE /meals/random
router.get("/random",(req,res,next)=>{
    res.status(200).json({
        message:"It works! here is random recipe"
    });
});
//GET ROUTE /meals/breakfast
router.get("/breakfast",(req,res,next)=>{
    res.status(200).json({
        message:"It works! Breakfast"
    });
});
//GET ROUTE /meals/breakfast/:id
router.get("/breakfast/:id",(req,res,next)=>{
    res.status(200).json({
        id:req.params.id,
        message:"It works! Breakfast"
    });
});
//GET ROUTE /meals/breakfast/random
router.get("/breakfast/random",(req,res,next)=>{
    res.status(200).json({
        message:"It works! Breakfast random"
    });
});
//GET ROUTE /meals/lunch
router.get("/lunch",(req,res,next)=>{
    res.status(200).json({
        message:"It works! Lunch"
    });
});
//GET ROUTE /meals/lunch/random
router.get("/lunch/random",(req,res,next)=>{
    res.status(200).json({
        message:"It works! Lunch random"
    });
});
//GET ROUTE /meals/dinner
router.get("/dinner",(req,res,next)=>{
    res.status(200).json({
        message:"It works! Dinner"
    });
});
//GET ROUTE /meals/dinner/random
router.get("/dinner/random",(req,res,next)=>{
    res.status(200).json({
        message:"It works! Dinner random!"
    });
});
module.exports = router;