// HTML Routes
// =============================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
    console.log(__dirname);
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
    console.log(__dirname);
  });