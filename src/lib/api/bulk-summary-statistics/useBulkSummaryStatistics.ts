import { useQuery } from "@tanstack/react-query";
import type { BulkSummaryStatisticsResponse } from "./bulk-summary-statistics.types.ts";
import { Owners } from "../../owner-context";

export const useBulkSummaryStatistics = (ownerParam: Owners) =>
  useQuery({
    queryKey: ["bulkSummaryStatistics", ownerParam],
    queryFn: () => getBulkSummaryStatistics(ownerParam),
  });

const getBulkSummaryStatistics = async (
  ownerParam: Owners,
): Promise<BulkSummaryStatisticsResponse> => {
  const res = await fetch(
    `http://localhost:5214/api/albums/bulk-statistics/${ownerParam}`,
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return await res.json();
};
