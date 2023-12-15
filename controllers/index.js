const axios = require("axios");
require("dotenv").config();

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${process.env.BASE_URL}/${id}`);
    const data = await response.data;
    return res.send(data);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  getUser
};
