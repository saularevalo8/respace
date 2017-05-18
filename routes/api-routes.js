

var db = require("../models");


module.exports = function(app) {

  // // GET route for getting all of the posts
  // app.get("/api/posts/", function(req, res) {
  //   db.Post.findAll({})
  //   .then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // // Get route for returning posts of a specific category
  // app.get("/api/posts/category/:category", function(req, res) {
  //   db.Post.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   })
  //   .then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // // Get rotue for retrieving a single post
  // app.get("/api/posts/:id", function(req, res) {
  //   db.Post.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // POST route for saving a new post
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

 app.post("/api/location", function(req, res) {
    console.log(req.body);
    db.location.create({
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });



//   // DELETE route for deleting posts
//   app.delete("/api/posts/:id", function(req, res) {
//     db.Post.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//     .then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

//   // PUT route for updating posts
//   app.put("/api/posts", function(req, res) {
//     db.Post.update(req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       })
//     .then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });
};



