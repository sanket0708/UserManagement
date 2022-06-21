var Userdb = require('../model/model');

//creating and saving new user

exports.create = (req, res) => {

    //validate the req
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty!" });
        return;
    }

    //new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //saving user in db
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                messgae: err.message || "Some error occur while creating a create operation"
            });
        });


}

//retrieve and return all users / retrieve and return single user

exports.find = (req, res) => {

    Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ messgae: err.message || "Error occur while retrieving user information" })
        })


}

//Update a new identified user by user id

exports.update = (req, res) => {

    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update cannot be empty" })

    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot update user with ${id}.Maybe user not found` })
            }
            else {
                res.send(data)
            }
        })

        .catch(err => {
            res.status(500).send({ message: "Error update user information" })
        })


}

//delete a user with specified user id

exports.delete = (req, res) => {

    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot delete with id ${id}.Maybe id is wrong` })
            } else {
                res.send({
                    message: "User was deleted successfully"
                })
            }
        })

        .catch(err => {
            res.status(500).send({
                message: "Could not delete user with id =" + id
            });
        });


}