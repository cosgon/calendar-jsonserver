const server = require("json-server");
const app = server.create();
const router = server.router("db.json");
const middlewares = server.defaults();

app.use(router);
app.use(middlewares);

app.listen(3001, () => {
  console.log("Server is running");
});
