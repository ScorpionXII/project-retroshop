const LocalStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcrypt');
const UserModel     = require('../models/userModel');

module.exports = function (passport) {

    passport.use(new LocalStrategy((username, password, next) => {
        UserModel.findOne({ username },(err, foundUser) => {
            if (err) { return next(err); }

            if (!foundUser) {
                return next(null, false, { message: 'Incorrect username' });
            }

            if (!bcrypt.compareSync(password, foundUser.password)) {
                return next(null, false, { message: 'Incorrect password' });
            }

            next(null, foundUser);
        });
    }));

    passport.serializeUser((loggedInUser, cb) => {
        cb(null, loggedInUser._id);
    });

    passport.deserializeUser((userIdFromSession, cb) => {
        UserModel.findById(userIdFromSession, (err, userDocument) => {
            if (err) {
                cb(err);
                return;
            }

            cb(null, userDocument);
        });
    });

}
