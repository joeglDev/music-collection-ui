import { useAlbumRows} from "../../api";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import {tableContainerStyle} from "./styles";
import {getColumnDefinitions} from "./get-column-definitions.ts";

export const AlbumsTable = () => {
    // Register all Community features
    ModuleRegistry.registerModules([AllCommunityModule]);

    const {data} = useAlbumRows();

    return (
        <div className={tableContainerStyle}>
            <AgGridReact
                rowData={data}
                columnDefs={getColumnDefinitions()}
            />
        </div>

    )
}