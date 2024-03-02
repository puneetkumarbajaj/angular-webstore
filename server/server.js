const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));

require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post("/checkout", async (req, res, next) => {
    try{
        const session = await stripe.checkout.sessions.create({
            line_items: req.body.items.map((item) => ({
                price_data : {
                    currency : 'usd',
                    product_data : {
                        name : item.name,
                        images : [item.image],
                    },
                    unit_amount : item.price * 100,
                },
                quantity : item.quantity,     
            })),
            mode : 'payment',
            success_url : `http://localhost:4242/success.html`,
            cancel_url : `http://localhost:4242/cancel.html`,
        });
        res.status(200).json(session);
    } catch (error){
        next(error);
    }
});

app.listen(4242, () => console.log('Running on port 4242'));