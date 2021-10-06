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
                            url: `http://91.109.116.4:4007/meals/${doc._id}`,
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
//GET ROUTE /meals/breakfast
router.get("/breakfast", (req, res, next) => {
    Meal.find({"type":"breakfast"})
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
                        url: `http://91.109.116.4:4007/meals/${doc._id}`,
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
//GET ROUTE /meals/lunch
router.get("/lunch", (req, res, next) => {
    Meal.find({"type":"lunch"})
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
                        url: `http://91.109.116.4:4007/meals/${doc._id}`,
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
//GET ROUTE /meals/dinner
router.get("/dinner", (req, res, next) => {
    Meal.find({"type":"dinner"})
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
                        url: `http://91.109.116.4:4007/meals/${doc._id}`,
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
module.exports = router;