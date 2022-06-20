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

}

//Update a new identified user by user id

exports.update = (req, res) => {

}

//delete a user with specified user id

exports.delete = (req, res) => {

}