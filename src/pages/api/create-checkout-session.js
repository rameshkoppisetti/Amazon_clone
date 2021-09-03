const stripe = require("stripe")("sk_test_51JIq3XSBSwM9xOe7MX9Px9PTQgHu7EXFIhy4VJ8D9dZdq0ASNBAMtfAROQn0z48YBt8b4WJKcHJdWtVPMyNZz45a00d2Q2esfG");

export default async (req, res) => {
  const { items, email } = req.body;
  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "inr",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1JV91DSBSwM9xOe7K0C6Nbqk"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA", "IN"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email: email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  console.log("session created", session.id);
  res.status(200).json({ id: session.id });
};
