//CREATE A NEW EXPRESS ROUTE
const router = require("express").Router()

const { Router } = require("express");
//IMPORT OUR MODEL
const Place = require("../models/place")

///GET///     // (The try block catches errors)
router.get("/", async (req, res) => {
    try {
        const places = await Place.find({})
        res.json(places)
    } catch (error) {
        res.status(400).json(error)
    }
})

///CREATE///
router.post("/", async (req, res) => {
    try {
        const newPlace = await Place.create(req.body)
        res.json(newPlace)
    } catch (error) {
        res.status(400).json(error)
    }
})

///UPDATE///
router.put("/:id", async (req, res) => {
    try {
        const updatedPlace = await Place.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(updatedPlace)
    } catch (error) {
        res.status(400).json(error)
    }
})

///DELETE///
router.delete("/:id", async (req, res) => {
    try {
      // delete existing place in the database
      const deletedPlace = await Place.findByIdAndRemove(req.params.id);
      // send delete place back as JSON
      res.json(deletedPlace);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });


module.exports = router;