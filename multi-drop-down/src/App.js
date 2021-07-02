  
import Multipleselect from "./components/MultipleSelect";
import { QueryClientProvider, QueryClient } from 'react-query';


 
    

 function App() {

    const queryClient = new QueryClient()

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <div>
                    <Multipleselect />
                </div>
            </QueryClientProvider>
        </>
    )
}
 

export default App;