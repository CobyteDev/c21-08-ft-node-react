import { NextFunction, Request, Response } from "express";
import { PreferenceService } from "../services/preference.service";

export class PreferenceController {
  private readonly preferenceService: PreferenceService;
  constructor() {
    this.preferenceService = new PreferenceService();
  }

  async createPreference(req: Request, res: Response, next: NextFunction) {
    const { clientOrderId } = req.body;
    try {
      const preference = await this.preferenceService.createPreference(
        clientOrderId
      );

      res.status(201).json(preference);
    } catch (error) {
      next(error);
    }
  }
}
