import { buffer } from "micro";
import * as admin from "firebase-admin";

//Secure a connection to firebase from the backend
const serviceAccount = require("../../../permission.json");

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

//Establishing  a connection  to stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
  console.log("Fulfilling order", session);

  const images = JSON.parse(session.metadata.images).map((image) =>
    JSON.stringify(image)
  );

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: images,
      //images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} has been added to firestore`);
    })
    .catch((err) => console.log("Error in insertion db !", err.message));
};

export default async (req, res) => {
  if (req.method === "POST") {
    //this buffer is to store certififcate that the webhook will emit
    //this cert tells us this is a verified stripe success event and not a fraud event
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];
    console.log("here it came");
    let event;

    //verify that the event came in from stripe and not from someplace else
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log("ERROR: ", err.message);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    //Handle the checkout.session.completed event i.e after success on stripe payment gateway
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      //Fulfill the order -> push the data into firestore and show in orders
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
