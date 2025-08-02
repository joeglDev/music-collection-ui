import {FlexContainer} from "../index.ts";
import {Tile} from './tile';
import {useBulkSummaryStatistics} from "../../api";
import {useOwnerContext} from "../../../owner-context";

export const SummaryBanner = () => {
    const {owner} = useOwnerContext();
    const {data} = useBulkSummaryStatistics(owner);

    return (
            <FlexContainer>
                <Tile label="Number of artists:" statistic={data?.numberOfArtists}/>
                <Tile label="Number of albums:" statistic={data?.numberOfAlbums}/>
                <Tile label="Number of genres:" statistic={data?.numberOfGenres}/>
                <Tile label="Most frequent artist:" statistic={data?.modalArtist}/>
                <Tile label="Most frequent genre:" statistic={data?.modalGenre}/>
            </FlexContainer>
    )
};