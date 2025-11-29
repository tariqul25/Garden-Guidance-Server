export interface ITip {
  _id?: string;
  title: string;
  content: string;
  userEmail: string;
  availability: 'Public' | 'Private';
  trending?: 'top';
  createdAt?: Date;
  updatedAt?: Date;
}
