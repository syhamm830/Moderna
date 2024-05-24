const router = require("express").Router()
const {getAllproducts, getproductById, createproduct, updateproductById, deleteproductById} = require("../controllers/products")

router.get("/products",getAllproducts)
router.get("/:id",getproductById)
router.post("/",createproduct)
router.put("/:id",updateproductById)
router.delete("/:id",deleteproductById)

module.exports = router