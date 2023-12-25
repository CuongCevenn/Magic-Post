const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test/all", controller.allAccess);

    app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

    app.get(
        "/api/test/mod",
        [authJwt.verifyToken, authJwt.isRegionManager],
        controller.moderatorBoard
    );

    app.get(
        "/api/test/admin",
        [authJwt.verifyToken, authJwt.isCompanyManager],
        controller.adminBoard
    );

    app.get(
        "/api/test/pointstaff",
        [authJwt.verifyToken, authJwt.isPointStaff],
        controller.pointStaffBoard
    );

    app.get(
        "/api/test/regionstaff",
        [authJwt.verifyToken, authJwt.isRegionStaff],
        controller.regionStaffBoard
    );

    app.get(
        "/api/test/regionmanager",
        [authJwt.verifyToken, authJwt.isRegionManager],
        controller.regionManagerBoard
    );

    app.get(
        "/api/test/pointmanager",
        [authJwt.verifyToken, authJwt.isPointManager],
        controller.pointManagerBoard
    );

    app.get(
        "/api/test/signout",
        [authJwt.verifyToken],
        authController.signout
    );
};