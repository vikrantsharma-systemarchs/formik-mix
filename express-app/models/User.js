const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

let userSchema = new Schema({
        firstname: {
            type: String,
            required: true
        },

        lastname: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        password1: {
            type: String,
            required: true
        },

        password2: {
            type: String,
            required: true
        }
    },
    {
        collection: 'users'
    }
);



userSchema.pre('save', async function(next){
    console.log('Saving user schema');
    if(this.isModified('password1')) {
        this.password1 = await bcrypt.hash(this.password1, saltRounds);
        this.password2 = await bcrypt.hash(this.password2, saltRounds);
    }
    next();
});


module.exports = mongoose.model('User', userSchema);