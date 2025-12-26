const getHome = (req, res) => {
  res.json({
    message: "Welcome!",
    status: "success",
  });
};

const getAbout = (req, res) => {
  res.json({
    message: "About page",
    status: "success",
  });
};

const getContact = (req, res) => {
  res.json({
    message: "Contact page",
    status: "success",
  });
};

module.exports = {
  getHome,
  getAbout,
  getContact,
};
