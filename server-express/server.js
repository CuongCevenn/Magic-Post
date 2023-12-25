const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');

const app = express();

// app.use(cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
    cookieSession({
        name: 'magic-session',
        keys: ['COOKIE_SECRET'],
        httpOnly: true
    })
);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to application.' })
})

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const db = require('./app/models');
const Role = db.role;

db.mongoose.connect('mongodb+srv://cuong1icloud:UMaQZnGTXW9I1a7F@cluster0.hkvk7zt.mongodb.net/?retryWrites=true&w=majority'
    // , {
    //     userNewUrlParser: true,
    //     userUnifiedTopology: true
    // }
).then(() => {
    console.log("Successfully connected to MongoDB");
    initial();
}).catch(err => {
    console.log("Connection error: ", err);
    process.exit();
});


function initial() {
    Role.estimatedDocumentCount((err, count) => {
        {
            if (!err && count === 0) {
                new Role({
                    name: "point_staff"
                }).save(err => {
                    if (err) {
                        console.log("Error: ", err);
                    }

                    console.log("Added 'point_staff' to roles collection.");
                });

                new Role({
                    name: "region_staff"
                }).save(err => {
                    if (err) {
                        console.log("Error: ", err);
                    }

                    console.log("Added 'region_staff' to roles collection.");
                });

                new Role({
                    name: "point_manager"
                }).save(err => {
                    if (err) {
                        console.log("Error: ", err);
                    }

                    console.log("Added 'point_manager' to roles collection.");
                });

                new Role({
                    name: "region_manager"
                }).save(err => {
                    if (err) {
                        console.log("Error: ", err);
                    }

                    console.log("Added 'region_manager' to roles collection.");
                });

                new Role({
                    name: "company_manager"
                }).save(err => {
                    if (err) {
                        console.log("Error: ", err);
                    }

                    console.log("Added 'company_manager' to roles collection.");
                });
            }
        }
    })
    // .catch(err => {
    //     console.log("Connection error: ", err);
    //     process.exit();
    // })
}