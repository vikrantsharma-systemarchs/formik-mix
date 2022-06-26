let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();
const bcrypt = require('bcrypt');
// User Model
let User = require("../../models/User");




router.post("/login", async (req, res, next) => {

    try {
        const {email, password} = req.body;
        console.log("this is a login route");
        console.log(email);
        console.log(password);
        const userLogin = await User.findOne(email);
        const isMatch = await bcrypt.compare(password, userLogin.password);
        if (!isMatch){

        }



    }
            catch (err) {}

});

// CREATE User
router.post("/", async (req, res, next) => {
   const  { firstname,lastname,email,password1,password2} = req.body;
   try {
        const userExists = await User.findOne({email: email});
        if (userExists) {
            return res.status(422).json({error: 'User already exists'})

        }
        const user=new User({firstname,lastname,email,password1,password2});
        await user.save();
        return res.status(201).json({message: 'User registered successfully'})
    } catch (err) {
        console.log(err);
    }
})


// READ user
router.get("/", (req, res) => {
    User.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});
// UPDATE user
router
    .route("/:id")
    // Get Single Student
    .get((req, res) => {
        userSchema.findById(
            req.params.id, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.json(data);
                }
            });
    })

    // Update User Data
    .put((req, res, next) => {
        userSchema.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            (error, data) => {
                if (error) {
                    return next(error);
                    console.log(error);
                } else {
                    res.json(data);
                    console.log("User updated successfully !");
                }
            }
        );
    });

// Delete Student
router.delete("/:id",
    (req, res, next) => {
        userSchema.findByIdAndRemove(
            req.params.id, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.status(200).json({
                        msg: data,
                    });
                }
            });
    });

module.exports = router;
