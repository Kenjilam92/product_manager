const ProductCtrl = require ("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products", ProductCtrl.showAll);
    app.get("/api/products/:id",ProductCtrl.showOne);
    app.post("/api/products/new", ProductCtrl.create);
    app.put("/api/products/edit/:id", ProductCtrl.updateOne);
    app.delete("/api/products/detele/:id",ProductCtrl.deleteOne);
}