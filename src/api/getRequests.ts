import Request from "../@types/request";

export default async function getRequests() : Promise<Request[]> {
  const response = await fetch("http://localhost:3000/requests");
  const data = await response.json();

  return data;
}
