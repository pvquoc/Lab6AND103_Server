const mongoose = require('mongoose');

const local = 'mongodb+srv://admin:eom1Idf6xwsECvpb@cluster0.0e5wumm.mongodb.net/md18306';

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
