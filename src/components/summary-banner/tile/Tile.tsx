import {
  PaddedFlexContainer,
  leftAlignedTextStyle,
  RightAlignedTextStyle,
} from "./styles";

interface TileProps {
  label: string;
  statistic?: string | number;
}

export const Tile = ({ label, statistic }: TileProps) => (
  <PaddedFlexContainer>
    <div className={leftAlignedTextStyle}>{label}</div>
    <div className={RightAlignedTextStyle}>{statistic ?? "N/A"}</div>
  </PaddedFlexContainer>
);
