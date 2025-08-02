import './App.css'
import {SummaryBanner} from "./components";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {AlbumsTable} from "./components/albums-table";

function App() {
    const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
<SummaryBanner/>
        <AlbumsTable/>
    </QueryClientProvider>
  )
}

export default App
