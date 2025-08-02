import {useQuery} from "@tanstack/react-query";
import type {BulkSummaryStatisticsResponse} from "./bulk-summary-statistics.types.ts";

const URL = "http://localhost:5214/api/albums/bulk-statistics";

export const useBulkSummaryStatistics = () =>
    useQuery({
        queryKey: ["bulkSummaryStatistics"],
        queryFn: getBulkSummaryStatistics,
    });

const getBulkSummaryStatistics = async (): Promise<BulkSummaryStatisticsResponse> => {
    const res = await fetch(URL);

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
};