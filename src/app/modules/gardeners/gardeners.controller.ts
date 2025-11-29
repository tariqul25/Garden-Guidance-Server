import { Request, Response, NextFunction } from 'express';
import {
  getActiveGardenersService,
  getAllActiveGardenersService,
  getAllGardenersService,
  getGardenerByIdService,
  addGardenerService,
  updateGardenerService,
  deleteGardenerService,
} from './gardeners.service';

export const getActiveGardeners = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const gardeners = await getActiveGardenersService();
    res.json({ success: true, data: gardeners });
  } catch (err) {
    next(err);
  }
};

export const getAllActiveGardeners = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const gardeners = await getAllActiveGardenersService();
    res.json({ success: true, data: gardeners });
  } catch (err) {
    next(err);
  }
};

export const getAllGardeners = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const gardeners = await getAllGardenersService();
    res.json({ success: true, data: gardeners });
  } catch (err) {
    next(err);
  }
};

export const getGardenerById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const gardener = await getGardenerByIdService(req.params.id);
    res.json({ success: true, data: gardener });
  } catch (err) {
    next(err);
  }
};

export const addGardener = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const gardener = await addGardenerService(req.body);
    res.status(201).json({ success: true, data: gardener });
  } catch (err) {
    next(err);
  }
};

export const updateGardener = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const gardener = await updateGardenerService(req.params.id, req.body);
    res.json({ success: true, data: gardener });
  } catch (err) {
    next(err);
  }
};

export const deleteGardener = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const gardener = await deleteGardenerService(req.params.id);
    res.json({ success: true, data: gardener });
  } catch (err) {
    next(err);
  }
};
