const getTime = (req, res) => {
  const currentTime = new Date().toLocaleString();
  res.json({
    time: currentTime,
    message: "This is the current server time.",
    status: "success",
  });
};

const handleSubmit = (req, res) => {
  const receivedData = req.body;

  if (Object.keys(receivedData).length === 0) {
    return res.status(400).json({
      message: "No data received. Please send some JSON data.",
      status: "error",
    });
  }

  res.json({
    message: "Data received successfully!",
    data: receivedData,
    status: "success",
  });
};

module.exports = {
  getTime,
  handleSubmit,
};
