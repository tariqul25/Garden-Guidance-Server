import { Gardener } from './gardeners.model';
import { IGardener } from './gardeners.interface';

export const getActiveGardenersService = async (): Promise<IGardener[]> => {
  return Gardener.find({ status: 'active' }).limit(7);
};

export const getAllActiveGardenersService = async (): Promise<IGardener[]> => {
  return Gardener.find({ status: 'active' });
};

export const getAllGardenersService = async (): Promise<IGardener[]> => {
  return Gardener.find();
};

export const getGardenerByIdService = async (id: string): Promise<IGardener | null> => {
  return Gardener.findById(id);
};

export const addGardenerService = async (gardenerData: IGardener): Promise<IGardener> => {
  return Gardener.create(gardenerData);
};

export const updateGardenerService = async (id: string, gardenerData: Partial<IGardener>): Promise<IGardener | null> => {
  return Gardener.findByIdAndUpdate(id, gardenerData, { new: true });
};

export const deleteGardenerService = async (id: string): Promise<IGardener | null> => {
  return Gardener.findByIdAndDelete(id);
};
