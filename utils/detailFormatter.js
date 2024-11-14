const formatDetailsData = (item, description) => {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: Math.floor(item.price),
      decimals: (item.price % 1).toFixed(2) * 100,
    },
    picture: item.pictures[0]?.url,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.initial_quantity,
    description: description.plain_text,
  };
};

module.exports = { formatDetailsData };
