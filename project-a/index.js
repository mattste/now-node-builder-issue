const { hello } = require("@my-app/project-b");

module.exports = async (req, res) => {
  const message = hello();

  res.status(200).send(message);
};
