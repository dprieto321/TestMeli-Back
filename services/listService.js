const axios = require('axios');

const getListResult = async (query) => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener los datos.");
  }
};

module.exports = { getListResult };
