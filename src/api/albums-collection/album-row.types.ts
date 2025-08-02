export interface AlbumRow {
    CatalogId: string;
    ArtistId: string;
    Title: string;
    Label: string;
    Format: string;
    Rating: string;
    Released: number | null;
    ReleaseId: string;
    CollectionFolder: string;
    DateAdded: Date | null;
    MediaCondition: string;
    SleeveCondition: string;
    Owner: string;
    Genre: string;
}