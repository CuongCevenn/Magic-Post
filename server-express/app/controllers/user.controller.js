exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};

exports.regionManagerBoard = (req, res) => {
    res.status(200).send("Region manager Content.");
};

exports.pointManagerBoard = (req, res) => {
    res.status(200).send("Point manager Content.");
};

exports.pointStaffBoard = (req, res) => {
    res.status(200).send("Point staff Content.");
};

exports.regionStaffBoard = (req, res) => {
    res.status(200).send("Region staff Content.");
};