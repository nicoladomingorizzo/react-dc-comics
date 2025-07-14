
// Descrizione: Create un nuovo progetto React e definite i componenti necessari per strutturare il layout come da screenshot allegato.
// Per oggi diamo priorità alla struttura: quando è tutto bello solido, passiamo al CSS!
// Note: - Il font utilizzato è Open Sans
// Bonus: - Creare un componente aggiuntivo per gestire la fascia azzurra con le icone.

import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </>
  );
};

export default App
