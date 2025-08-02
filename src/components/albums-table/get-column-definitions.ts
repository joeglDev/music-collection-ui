import {  type ColDef} from 'ag-grid-community';

export const getColumnDefinitions: () => ColDef[] = () => (
    [
        {field: 'title', headerName: 'Album name', pinned: 'left', filter: 'agTextColumnFilter'},
        { field: "artist", headerName: 'Artist', filter: 'agTextColumnFilter'},
        {field: 'genre', headerName: 'Genre', filter: 'agTextColumnFilter'},
        {field: 'label', headerName: 'Record label', filter: 'agTextColumnFilter'},
        {field: 'format', headerName: 'Format'},
        {field: 'released', headerName: 'Release year'},
        {field: 'owner', headerName: 'Owner'},
        {field: 'catalog', headerName: 'Catalog Id',},
        {field: 'releaseId', headerName: 'ReleaseId'},
    ]
)