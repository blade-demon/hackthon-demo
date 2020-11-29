module.exports = app => {
  app.get('/hackthon', (req, res) => {
    res.send("hackthon");
  });
};
