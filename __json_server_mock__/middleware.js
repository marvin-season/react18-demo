module.exports = (req, res, next) => {
  if (req.method == "POST" && req.path == "/login") {
    if (req.body.username == "aaa") {
      return res.status(200).json({
        user: {
          token: "Bodsa dbusice==",
        },
      });
    } else {
      return res.status(400).json();
    }
  }
};
