import axios from "axios"
import cors from "cors"
import express from "express"
import api from "./router/api.js";
import rateLimit from "express-rate-limit";
const app = express()
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})
app.use(limiter);
app.use(cors())
app.use('/api', api);
app.listen('8000',function(){
    console.log('Hahha');
});