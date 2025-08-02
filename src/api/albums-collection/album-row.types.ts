export interface AlbumRow {
    catalog: string;
    artist: string;
    title: string;
    label: string;
    format: string;
    rating: string;
    released: number | null;
    releaseId: string;
    collectionFolder: string;
    dateAdded: Date;
    mediaCondition: string;
    sleeveCondition: string;
    owner: string;
    genre: string;
}