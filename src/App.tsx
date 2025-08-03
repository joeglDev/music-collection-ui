import "./App.css";
import { SummaryBanner } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AlbumsTable } from "./components/albums-table";
import { OwnerContextProvider } from "../owner-context";
import { OwnerDropDown } from "./components/owner-dropdown";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <OwnerContextProvider>
        <OwnerDropDown />
        <SummaryBanner />
        <AlbumsTable />
      </OwnerContextProvider>
    </QueryClientProvider>
  );
}

export default App;
