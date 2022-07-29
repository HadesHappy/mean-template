const router = require('express').Router();
const passport = require('passport');
var User = require('../models/user');

router.post('/register', function(req, resp, next){
    console.log('Register')
    addToDB(req, resp);
});

router.post('/login', function(req, resp, next){
    passport.authenticate('local', function(err, user, info) {
        if (err) { return res.status(501).json(err); }
        if (!user) { return resp.status(501).json(info); }
        req.logIn(user, function(err) {
          if (err) { resp.status(501).json(err); }
          return resp.status(200).json({message:'Login Success'});
        });
      })(req, resp, next);
});

router.get('/user', isValidUser, function(req, resp, next){
    return resp.status(200).json(req.user);
})

router.get('/logout', isValidUser, function(req, resp, next){
    req.logout();
    return resp.status(200).json({message:'Logout Success'});
})

function isValidUser(req,resp,next){
    if(req.isAuthenticated()) next(); //uses the Passport middlewear
    else return resp.status(401),json({message:'Invalid Request'});
}

async function addToDB(req, resp) {
    var user = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:User.hashPassword(req.body.password),
        confirmPassword:User.hashPassword(req.body.confirmPassword),
        creation_dt:Date.now()
    })

    try {
        doc = await user.save();
        return resp.status(201).json(doc);
    } catch (err) {
        return resp.status(501).json(err);
    }
}

module.exports = router;