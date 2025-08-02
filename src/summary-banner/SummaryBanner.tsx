import {FlexContainer} from "../components";
import {useBulkSummaryStatistics} from "../api";

export const SummaryBanner = () => {
    const {data} = useBulkSummaryStatistics();

    return (
        <FlexContainer>
            <div>{data.numberOfArtists}</div>
            <div>{data.numberOfAlbums}</div>
            <div>{data.numberOfGenres}</div>
            <div>{data.modalGenre}</div>
            <div>{data.modalArtist}</div>
        </FlexContainer>
    )
};