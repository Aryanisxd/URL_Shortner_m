import ShortUrl from "../models/shorturl.model.js";

export const saveShortUrl = async (url, shortUrl, userId) => {
    const newUrl = new ShortUrl({
        fullUrl: url,
        shortUrl: shortUrl
    });
    if (userId) {
        newUrl.user = userId;
    }
    await newUrl.save();
    return newUrl;
}