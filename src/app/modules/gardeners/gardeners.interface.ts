export interface IGardener {
  _id?: string;
  name: string;
  email: string;
  contactNo: string;
  address: string;
  status: 'active' | 'inactive';
  createdAt?: Date;
  updatedAt?: Date;
}
