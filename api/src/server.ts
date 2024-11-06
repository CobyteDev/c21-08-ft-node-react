const cors = require("cors");
import express from "express";
import app from "./app";
import { AppDataSource } from "./data-source";
import { CategoryException } from "./exceptions/CategoryException";
import { ClientOrderException } from "./exceptions/ClientOrderException";
import { PreferenceException } from "./exceptions/PreferenceException";
import { ProductException } from "./exceptions/ProductException";
import { PromotionException } from "./exceptions/PromotionException";
import { UserException } from "./exceptions/UserException";
import { WebHookException } from "./exceptions/webHooksException";
import userAuth from "./routes/auth.route";
import categoryRoutes from "./routes/category.route";
import orderRoutes from "./routes/clientOrder.route";
import OrderProductRoutes from "./routes/orderProduct.route";
import PaymentsRoutes from "./routes/preference.route";
import productRoutes from "./routes/product.route";
import promotionRoutes from "./routes/promotion.route";
import userRoutes from "./routes/user.route";
import iaRoutes from "./routes/ia.route";
import WebHooksRoutes from "./routes/webhooks.route";
import { OrderProductException } from "./exceptions/OrderProductException";

const PORT = process.env.PORT || 3170;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");

    app.use(express.json());
    app.use(cors());
    app.use("/user", userRoutes);
    app.use("/auth", userAuth);
    app.use("/product", productRoutes);
    app.use("/category", categoryRoutes);
    app.use("/promotion", promotionRoutes);
    app.use("/order", orderRoutes);
    app.use("/cart", OrderProductRoutes);
    app.use("/", iaRoutes);
    app.use("/payments", PaymentsRoutes);
    app.use("/webhook", WebHooksRoutes);
    app.use("/", iaRoutes);

    //Middleware de manejo de errores.
    app.use(
      (
        err: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ): any => {
        if (
          err instanceof UserException ||
          err instanceof ClientOrderException ||
          err instanceof ProductException ||
          err instanceof CategoryException ||
          err instanceof PromotionException ||
          err instanceof PreferenceException ||
          err instanceof WebHookException ||
          err instanceof OrderProductException
        ) {
          return res
            .status(err.statusCode)
            .json({ message: err.message, statusCode: err.statusCode });
        }

        return res.status(500).json({
          message: "Server error",
          error: err.message,
        });
      }
    );

    app.listen(PORT, () => {
      console.log(`Port running in port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });
