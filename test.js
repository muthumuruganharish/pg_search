const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://muthumuruganharish272003_db_user:hariram272003@ac-frj0pgc-shard-00-00.u6k5ym8.mongodb.net:27017,ac-frj0pgc-shard-00-01.u6k5ym8.mongodb.net:27017,ac-frj0pgc-shard-00-02.u6k5ym8.mongodb.net:27017/?ssl=true&replicaSet=atlas-wfx327-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("CONNECTED SUCCESSFULLY");
    process.exit(0);
  })
  .catch((err) => {
    console.log("ERROR:");
    console.log(err);
    process.exit(1);
  });