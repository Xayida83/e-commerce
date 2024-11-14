
import { MainLayout } from "./Layouts/MainLayout";
import { HomePage } from "./Pages/HomePage/HomePage";


const App = () => {
  return (
    <MainLayout>      
      <HomePage />
    </MainLayout>
  )
}
export default App


// Den här filen är roten för din React-applikation och fungerar som "startkomponenten" där du samlar layout, routes, och alla barnkomponenter.
// Här importerar du React Router, Context Providers, och andra övergripande komponenter som ska omsluta hela frontend-applikationen.
// Typiskt innehåll: Appens layout, routing, eventuell kontext, och globala komponenter som Header, Footer, etc.