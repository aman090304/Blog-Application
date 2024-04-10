const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    <YOUR CONNECTION STRING>
  )
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
