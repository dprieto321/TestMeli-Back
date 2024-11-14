const formatListData = (data) => {
    const items = data.results.slice(0, 4).map((item) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.floor(item.price),
        decimals: (item.price % 1).toFixed(2) * 100,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    }));
  
    const categories = data.filters
      .find((f) => f.id === "category")
      ?.values[0].path_from_root.map((cat) => cat.name) || [];
  
    return { items, categories };
  };

  module.exports = { formatListData };