module.exports = {
    images: {
        domains: [
            "cdn.dribbble.com",
            "links.papareact.com",
            "fakestoreapi.com",
            "m.media-amazon.com",
            "lh3.googleusercontent.com",
            "images-eu.ssl-images-amazon.com",
            "cdn3.iconfinder.com",
        ],
    },
    env: {
        stripe_public_key: `${process.env.STRIPE_PUBLIC_KEY}`,
        STRIPE_SECRET_KEY: `${process.env.STRIPE_SECRET_KEY}`,
        HOST: `${process.env.HOST}`,
        STRIPE_SIGNING_SECRET: `${process.env.STRIPE_SIGNING_SECRET}`,
        GOOGLE_SECRET:`${process.env.GOOGLE_SECRET}`,
        GOOGLE_ID:`${process.env.GOOGLE_ID}`,
        NEXTAUTH_URL:`${process.env.NEXTAUTH_URL}`,
        
    },
};
