import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";

const router = Router();
const categoryController = new CategoryController();

router.get("/", (req, res) => categoryController.getAllCategories(req, res));
router.post("/", (req, res) => categoryController.createCategory(req, res));
router.delete("/:categoryId", (req, res) => categoryController.deleteCategory(req, res));
router.put("/:categoryId", (req, res) => categoryController.updateCategory(req, res));

export default router;
 