import { useAlbumRows } from "../../lib";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { tableContainerStyle } from "./styles";
import { getColumnDefinitions } from "./get-column-definitions.ts";
import { Owners, useOwnerContext } from "../../lib";
import { useMemo } from "react";

export const AlbumsTable = () => {
  // Register all Community features
  ModuleRegistry.registerModules([AllCommunityModule]);

  const { data } = useAlbumRows();
  const { owner } = useOwnerContext();

  const rowData = useMemo(
    () =>
      owner !== Owners.All
        ? (data?.filter((album) => album.owner === owner) ?? [])
        : (data ?? []),
    [data, owner],
  );

  return (
    <div className={tableContainerStyle}>
      <AgGridReact rowData={rowData} columnDefs={getColumnDefinitions()} />
    </div>
  );
};
