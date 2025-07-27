import {useQuery} from "@tanstack/react-query";

const URL = "http://localhost:5214/api/albums/bulk-statistics";

export const useBulkSummaryStatistics = () => useQuery({
    queryKey: ["bulkSummaryStatistics"],
    queryFn: getBulkSummaryStatistics,
});

const getBulkSummaryStatistics = async () => {
    const res = await fetch(URL);
    return await res.json();
};