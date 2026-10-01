ASD Workshop – Express.js Caching

A Node.js and Express.js workshop project demonstrating a modular backend architecture with routes, controllers, services, database, middleware, and API response caching.

Features

- Express.js REST API
- Modular project structure
- CRUD operations for products
- JSON file-based database
- GET request caching
- `X-Cache: HIT/MISS` response headers
- 1-minute cache TTL
- Automatic cache invalidation after data modification
- Supports GET, POST, PUT, PATCH, and DELETE

Project Structure

```text
ASD_Workshop/
├── server.js
├── db.json
├── package.json
├── routes/
│   └── productRoutes.js
├── controllers/
│   └── productController.js
├── services/
│   └── productService.js
├── database/
│   └── productDatabase.js
└── middleware/
    └── cacheMiddleware.js
