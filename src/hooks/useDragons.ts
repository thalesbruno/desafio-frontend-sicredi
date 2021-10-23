import axios from "axios";
import { useState } from "react";
import { Dragon } from "../model/Dragon";

const httpClient = axios.create({
  baseURL: "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon",
});

export default function useDragons() {
  const getAllDragons = async () => await httpClient.get<Array<Dragon>>("/");
  const deleteDragon = async (id: string) => await httpClient.delete(`/${id}`);

  return {
    getAllDragons,
    // getDragonById,
    // createDragon,
    // updateDragon,
    deleteDragon,
  };
}
