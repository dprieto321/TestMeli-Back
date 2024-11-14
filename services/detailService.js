const axios = require('axios');

const getItemDetail = async (id) => {
  try {
    const [itemResponse, descriptionResponse] = await Promise.all([
      axios.get(`https://api.mercadolibre.com/items/${id}`),
      axios.get(`https://api.mercadolibre.com/items/${id}/description`),
    ]);

    return { item: itemResponse.data, description: descriptionResponse.data };
  } catch (error) {
    throw new Error("Error al obtener el detalle del producto.");
  }
};

module.exports = { getItemDetail };
