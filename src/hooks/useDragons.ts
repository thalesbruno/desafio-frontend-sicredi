import axios from "axios";
import { Dragon } from "../model/Dragon";

const api = axios.create({
  baseURL: "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon",
});

export default function useDragons() {
  const getAllDragons = async () => await api.get<Array<Dragon>>("/");

  return {
    getAllDragons,
    // getDragonById,
    // createDragon,
    // updateDragon,
    // deleteDragon,
  };
}
