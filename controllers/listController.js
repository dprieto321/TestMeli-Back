const { getListResult } = require("../services/listService");
const { formatListData } = require("../utils/listFormatter");

const getItems = async (req, res) => {
  const query = req.query.q;
  try {
    const data = await getListResult(query);

    const formattedItems = formatListData(data);

    res.json({
      author: { name: "Duvan", lastname: "Prieto" },
      categories: formattedItems.categories || [],
      items: formattedItems.items || [],
    });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los items" });
  }
};

module.exports = { getItems };
