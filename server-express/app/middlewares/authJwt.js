const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
const db = require('../models');
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
    let token = req.session.token;

    if (!token) {
        return res.status(403).send({ message: "No token provided!" })
    }

    jwt.verify(
        token,
        config.secret,
        (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized!",
                });
            }

            req.userId = decoded.id;
            next();
        }
    );
}

isCompanyManager = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        Role.find(
            {
                _id: { $in: user.roles },
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === "company_manager") {
                        next();
                        return;
                    }
                }

                res.status(403).send({ message: "Require Company Manager Role!" });
                return;
            }
        );
    });
};

isRegionManager = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        Role.find(
            {
                _id: { $in: user.roles },
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === "region_manager") {
                        next();
                        return;
                    }
                }

                res.status(403).send({ message: "Require Region Manager Role!" });
                return;
            }
        );
    });
};

isPointManager = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        Role.find(
            {
                _id: { $in: user.roles },
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === "point_manager") {
                        next();
                        return;
                    }
                }

                res.status(403).send({ message: "Require Point Manager Role!" });
                return;
            }
        );
    });
};

isPointStaff = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        Role.find(
            {
                _id: { $in: user.roles },
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === "point_staff") {
                        next();
                        return;
                    }
                }

                res.status(403).send({ message: "Require Point Staff Role!" });
                return;
            }
        );
    });
};

isRegionStaff = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        Role.find(
            {
                _id: { $in: user.roles },
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === "region_staff") {
                        next();
                        return;
                    }
                }

                res.status(403).send({ message: "Require Region Staff Role!" });
                return;
            }
        );
    });
};

const authJwt = {
    verifyToken,
    isCompanyManager,
    isPointManager,
    isRegionManager,
    isPointStaff,
    isRegionStaff
};
module.exports = authJwt;