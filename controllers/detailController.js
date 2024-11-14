const { getItemDetail } = require('../services/detailService');
const { formatDetailsData } = require('../utils/detailFormatter');

const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const { item, description } = await getItemDetail(id);

    const formattedItem = formatDetailsData(item, description);

    res.json({
      author: { name: "Duvan", lastname: "Prieto" },
      item: formattedItem,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los detalles del item" });
  }
};

module.exports = { getItemById };
