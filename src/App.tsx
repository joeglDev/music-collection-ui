import './App.css'
import {SummaryBanner} from "./summary-banner";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
    const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
<SummaryBanner/>
    </QueryClientProvider>
  )
}

export default App
