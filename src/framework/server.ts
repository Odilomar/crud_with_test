import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";

const PORT = process.env.PORT;

// createConnection().then(() => {
//   app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
// });

createConnection()
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });
