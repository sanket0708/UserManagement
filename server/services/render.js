const axios = require('axios');

exports.homeRoutes = (req, res) => {
    //Make a get req to the api users
    axios.get('http://localhost:8000/api/users')
        .then(function (response) {
          
            res.render('index', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })

}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    res.render('update_user');
}