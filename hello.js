function HelloRoutes(app) {
  const hello = (req, res) => {
    res.send("Life is awesome!");
  };
  app.get("/hello", hello);
}

export default HelloRoutes;
