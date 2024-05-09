export interface Order {
  items: Record<string, number>;
  total: number;
  paymentType: string;
  comment?: string;
  date: Date;
}
