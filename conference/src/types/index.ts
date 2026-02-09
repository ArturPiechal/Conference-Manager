export interface Event {
  id: string;
  title: string;
  status: "pending" | "success" | "failed" | "processing";
  price: number;
  date: string;
}
