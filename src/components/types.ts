export interface Request {
  id: number,
  title: string,
  client: string,
  due: string,
  count: number,
  amount: number,
  method: string[],
  material: string[],
  status: "대기중" | "상담중",
}
