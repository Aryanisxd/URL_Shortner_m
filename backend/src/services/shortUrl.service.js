import { saveShortUrl } from "../dao/shortUrl.js";
import { generateNanoid } from "../utils/helper.js";

export const createShortUrlservicewithoutUser = async (url ) => {
    const shortUrl = generateNanoid(7);
    const newUrl = await saveShortUrl(url, shortUrl);
    return shortUrl;
    }

    export const createShortUrlservicewithUser = async (url , userId) => {
        const shortUrl = generateNanoid(7);
        const newUrl = await saveShortUrl(url, shortUrl , userId);
        return shortUrl;
        }