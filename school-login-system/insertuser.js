const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/schoolSystem');

async function createUser() {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const user = new User({
        username: 'admin',
        password: hashedPassword,
        userType: 'admin'
    });

    await user.save();
    console.log('✅ Test user created');
    mongoose.disconnect();
}

createUser();
