import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from './auth.model';
import { IUser } from './auth.interface';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

export const registerUserService = async (data: IUser) => {
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) throw new Error('Email already exists');

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await User.create({ ...data, password: hashedPassword });
  return user;
};

export const loginUserService = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error('Invalid credentials');

  const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
  return { token, user };
};
