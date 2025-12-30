const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

//DB CONNECTION-------------------------------------------------------------------------
require("./db/connection")
//-------------------------------------------------------------------------

// Workout model-----------------------------------------------------------------------
const Workout = require("./models/workoutModel");
//-------------------------------------------------------------------------

//Require Rotes-----------------------------
const workutsRoutes = require("./routes/workoutRouter")
//Routes
app.use("/api/workouts",workutsRoutes)



//PORT RUN PROJECT---------------------------------------------------------------------------
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
console.log(`Server is running on ${PORT}`)
})