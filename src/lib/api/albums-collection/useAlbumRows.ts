import { useQuery } from "@tanstack/react-query";
import type { AlbumRow } from "./album-row.types.ts";

const URL = "http://localhost:5214/api/albums";

export const useAlbumRows = () =>
  useQuery({
    queryKey: ["get-album-rows"],
    queryFn: getAlbumRows,
  });

const getAlbumRows = async (): Promise<AlbumRow[]> => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return await res.json();
};
