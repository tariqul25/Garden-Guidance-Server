import { Tip } from './tips.model';
import { ITip } from './tips.interface';


export const getAllTipsService = async () => {
  return Tip.find();
}

export const getTopTrendingTipsService = async () => {
  return Tip.find({ trending: 'top' });
}

export const getPublicTipsService = async () => {
  return Tip.find({ availability: 'Public' });
};

export const getTipByIdService = async (id: string) => {
  return Tip.findById(id);
};

export const getTipsByEmailService = async (email: string) => {
  return Tip.find({ userEmail: email });
};

export const addTipService = async (tipData: ITip): Promise<ITip> => {
  return Tip.create(tipData);
};

export const updateTipService = async (id: string, tipData: Partial<ITip>) => {
  return Tip.findByIdAndUpdate(id, tipData, { new: true });
};

export const deleteTipService = async (id: string) => {
  return Tip.findByIdAndDelete(id);
};
