import {  type ColDef} from 'ag-grid-community';

export const getColumnDefinitions: () => ColDef[] = () => (
    [
        {field: 'catalog', headerName: 'Catalog Id'},
        {field: 'title', headerName: 'Album name'},
        { field: "artist", headerName: 'Artist'},
        {field: 'genre', headerName: 'Genre'},
        {field: 'label', headerName: 'Record label'},
        {field: 'format', headerName: 'Format'},
        {field: 'released', headerName: 'Release year'},
        {field: 'owner', headerName: 'Owner'},
        {field: 'releaseId', headerName: 'ReleaseId'},
    ]
)