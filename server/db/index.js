const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://amanrgupta456:DChTJngCco2QDxbL@iliyas.erdr6ow.mongodb.net/"
  )
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
