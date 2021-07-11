const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretOrkey = process.env.secretOrKey;

// Load input validation
const { validateRegisterInput } = require("../../validation/register");
const { validateLoginInput } = require("../../validation/login");

// Load user model
const User = require("../../models/user");

/**
 * @route POST api/users/register
 * @description register user
 * @access public
 */
router.post("/register", (req, res) => {
    // form validation
    const { errors, isValid } = validateRegisterInput(req.body);

    // check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });

            // hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then((user) => res.json(user))
                        .catch((err) => console.log(err));
                });
            });
        }
    });
});

/**
 * @route POST api/users/login
 * @description login user and return JWT token
 * @access public
 */

router.post("/login", (req, res) => {
    // form validation

    const { errors, isValid } = validateLoginInput(req.body);

    // check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const { email, password } = req.body;

    // Find user by email
    User.findOne({ email }).then((user) => {
        // check if user exists
        if (!user) {
            return res.status(404).json({ message: "email not found" });
        }
        // check password
        bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                // user matched
                // create JWT payload

                const payload = {
                    id: user.id,
                    name: user.name,
                };

                // sign token
                jwt.sign(
                    payload,
                    secretOrkey,
                    {
                        expiresIn: 31556926,
                    },
                    (err, token) => {
                        res.json({ success: true, token: "Bearer " + token });
                    }
                );
            } else {
                return res.status(400).json({ message: "Incorrect password" });
            }
        });
    });
});

module.exports = router;
