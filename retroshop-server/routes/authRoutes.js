const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
//const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const router  = express.Router();
const UserModel = require('../models/userModel');

const multer  = require('multer');
const upload = multer({ dest: './public/uploads/images' });

router.post('/signup', upload.single('picture'), (req, res, next) => {
    const { username, password, fullname, location } = req.body;

    if (!username || !password) {
       return res.status(400).json({ message: 'Provide username and password' });
    }

    UserModel.findOne({ username }, '_id', (err, user) => {
        if (user) {
           return res.status(400).json({ message: 'The username already exists' });
        }

        const salt     = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

        const newUser = new UserModel({
            username: username,
            password: hashPass
            // fullname: fullname,
            // picture: `/uploads/images/${ req.file.filename }`,
            // pictureName: `${ req.file.originalname }`,
            // location: location
        });

        newUser.save((err) => {
            if (err) {
                return res.status(400).json({ message: 'Something went wrong' });
            }

            req.login(newUser, (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Something went wrong' });
                }

                res.status(200).json(req.user);
            });
        });
    });
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, failure) => {
        if (err) {
            return res.status(500).json({ message: 'Something went wrong' });
        }

        if (!user) {
            return res.status(401).json(failure);
        }

        req.login(user, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Something went wrong' });
            }

            // We are now logged in (notice req.user)
            res.status(200).json(req.user);
        });
    })(req, res, next);
});

router.post('/logout', (req, res, next) => {
    req.logout();
    res.status(200).json({ message: 'Success' });
});

router.get('/loggedin', (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.status(200).json(req.user);
    }

    res.status(403).json({ message: 'Unauthorized' });
});

router.get('/private', (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.json({ message: 'This is a private message' });
    }

    res.status(403).json({ message: 'Unauthorized' });
});

module.exports = router;
