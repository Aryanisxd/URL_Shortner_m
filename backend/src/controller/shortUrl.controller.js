import { createShortUrlservicewithUser } from "../services/shortUrl.service.js";
import { createShortUrlservicewithoutUser } from "../services/shortUrl.service.js";
 
export const createShortUrl = async (req, res) => {
    const {url} = req.body;
    const shortUrl = await createShortUrlservicewithoutUser(url);
    res.send(process.env.APP_URL + shortUrl);
}
