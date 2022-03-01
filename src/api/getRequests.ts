import { Request } from "../components/types";

export default async function getRequests() : Promise<Request[]> {
  const response = await fetch("http://localhost:3000/requests");
  const data = await response.json();

  return data;
}
