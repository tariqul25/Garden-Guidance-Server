import { Request, Response, NextFunction } from 'express';
import {
  getPublicTipsService,
  getTipByIdService,
  getTipsByEmailService,
  addTipService,
  updateTipService,
  deleteTipService,
  getAllTipsService,
  getTopTrendingTipsService,
} from './tips.service';

export const getAllTips = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const tips = await getAllTipsService();
    res.json({ success: true, data: tips });
  } catch (err) {
    next(err);
  }
};

export const getTopTrendingTips = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const tips = await getTopTrendingTipsService();
    res.json({ success: true, data: tips });
  } catch (err) {
    next(err);
  }
};

export const getPublicTips = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const tips = await getPublicTipsService();
    res.json({ success: true, data: tips });
  } catch (err) {
    next(err);
  }
};

export const getTipById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tip = await getTipByIdService(req.params.id);
    res.json({ success: true, data: tip });
  } catch (err) {
    next(err);
  }
};

export const getTipsByEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tips = await getTipsByEmailService(req.params.email);
    res.json({ success: true, data: tips });
  } catch (err) {
    next(err);
  }
};

export const addTip = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tip = await addTipService(req.body);
    res.status(201).json({ success: true, data: tip });
  } catch (err) {
    next(err);
  }
};

export const updateTip = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tip = await updateTipService(req.params.id, req.body);
    res.json({ success: true, data: tip });
  } catch (err) {
    next(err);
  }
};

export const deleteTip = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tip = await deleteTipService(req.params.id);
    res.json({ success: true, data: tip });
  } catch (err) {
    next(err);
  }
};
