const cache = {};

function cacheMiddleware(req, res, next) {
    const key = req.originalUrl;

    if (cache[key]) {
        return res.json(cache[key]);
    }

    next();
}

function setCache(key, data) {
    cache[key] = data;
}

module.exports = {
    cacheMiddleware,
    setCache
};