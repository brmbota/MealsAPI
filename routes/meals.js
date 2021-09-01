const express = require("express");
const Meal = require("../models/meal");
const mongoose = require("mongoose");

const router = express.Router();

//GET ROUTE /meals
router.get("/", (req, res, next) => {       //daje sve recepte iz baze
    Meal.find()
        .select("-__v")
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                meals: docs.map(doc => {
                    return {
                        id: doc._id,
                        type: doc.type,
                        name: doc.name,
                        ingredients: doc.ingredients,
                        preparation: doc.preparation,
                        request: {
                            method: "GET",
                            url: `http://localhost:3000/meals/${doc._id}`,
                            desc: "direct request to this meal"
                        }
                    }
                })
            }
            console.log(response);
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});
//POST ROUTE /meals
router.post("/", (req, res, next) => {              //UBACIVANJE RECEPTA U BAZU
    const meal = new Meal({
        _id: new mongoose.Types.ObjectId(),
        type: req.body.type,
        name: req.body.name,
        ingredients: req.body.ingredients,
        preparation: req.body.preparation
    });
    if (meal.type == "breakfast" || meal.type == "lunch" || meal.type == "dinner") {
        meal
            .save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: "Successfully added new recipe",
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err });
            });

    } else {
        res.status(406).json({
            message: "Type mora biti breakfast/lunch/dinner",
        });
    }


});
//GET ROUTE /meals/:id                                  //BIRANJE RECEPTA PO id
router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    Meal.findById(id)
        .select("-__v")
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});
//GET ROUTE /meals/random
router.get("/random", (req, res, next) => {
    res.status(200).json({
        message: "It works! here is random recipe"
    });
});
//GET ROUTE /meals/breakfast
router.get("/breakfast", (req, res, next) => {
    res.status(200).json({
        message: "It works! Breakfast"
    });
});
//GET ROUTE /meals/breakfast/:id
router.get("/breakfast/:id", (req, res, next) => {
    res.status(200).json({
        id: req.params.id,
        message: "It works! Breakfast"
    });
});
//GET ROUTE /meals/breakfast/random
router.get("/breakfast/random", (req, res, next) => {
    res.status(200).json({
        message: "It works! Breakfast random"
    });
});
//GET ROUTE /meals/lunch
router.get("/lunch", (req, res, next) => {
    res.status(200).json({
        message: "It works! Lunch"
    });
});
//GET ROUTE /meals/lunch/random
router.get("/lunch/random", (req, res, next) => {
    res.status(200).json({
        message: "It works! Lunch random"
    });
});
//GET ROUTE /meals/dinner
router.get("/dinner", (req, res, next) => {
    res.status(200).json({
        message: "It works! Dinner"
    });
});
//GET ROUTE /meals/dinner/random
router.get("/dinner/random", (req, res, next) => {
    res.status(200).json({
        message: "It works! Dinner random!"
    });
});
module.exports = router;