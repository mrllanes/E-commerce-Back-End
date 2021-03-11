const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection"); //My line

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// Line 16 is mine -- Keeps tables once they are created (so if modify models, change this to true, then back to false after)
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log(`App listening on port ${PORT}!`);
	});
});
