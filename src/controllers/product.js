let products = [
  {
    id: 1,
    tittle: "Mouse",
    Price: 9000,
  },
  {
    id: 2,
    tittle: "CardReader",
    Price: 5000,
  },
  {
    id: 3,
    tittle: "MousePad",
    Price: 7000,
  },
];

exports.getProducts = async (req, res) => {
  try {
    res.send({
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};
