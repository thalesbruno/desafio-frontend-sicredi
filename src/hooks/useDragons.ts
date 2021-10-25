import axios from "axios";
import { Dragon } from "../model/Dragon";

const httpClient = axios.create({
  baseURL: "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon",
});

export default function useDragons() {
  const getAllDragons = async () => await httpClient.get<Array<Dragon>>("/");

  const deleteDragon = async (id: string) => await httpClient.delete(`/${id}`);

  const getDragonById = async (id: string) =>
    await httpClient.get<Dragon>(`/${id}`);

  const createDragon = async (dragon: { name: string; type: string }) =>
    await httpClient.post<Dragon>("/", dragon);

  const updateDragon = async (
    id: string,
    dragon: { name: string; type: string }
  ) => await httpClient.put<Dragon>(`/${id}`, dragon);

  return {
    getAllDragons,
    getDragonById,
    createDragon,
    updateDragon,
    deleteDragon,
  };
}
