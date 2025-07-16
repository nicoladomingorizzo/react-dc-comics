import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import AppFooter from "./components/AppFooter";
import comics from "./db/dcComics";
import dcComicsLinks from './db/dcComicsLinks';
import dcLinks from './db/dcLinks';
import links from './db/mainLinks';
import navElements from './db/navElements';
import shopLinks from './db/shopLinks';
import sitesLinks from './db/sitesLinks';


function App() {
  return (
    <>
      <AppHeader navElements={navElements} />
      <AppMain comics={comics} links={links} />
      <AppFooter dcComicsLinks={dcComicsLinks} shopLinks={shopLinks} dcLinks={dcLinks} sitesLinks={sitesLinks} />
    </>
  );
};

export default App
