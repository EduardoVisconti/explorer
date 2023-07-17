require("express-async-errors");
require("dotenv/config");

const uploadConfig = require("./configs/upload");

const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");

const cors = require("cors");
const express = require("express");
const routes = require("./routes");

migrationsRun();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

/* error conditionals */
app.use(( error, request, response, next ) => {
    /* check if the error is from the client */
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error);

    /* checks if the error is on the internal side of the server */
    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server is running ${PORT}`));