import { useGlobalContext } from "./Context/Context";
import { ToggleTheme, SearchForm, Gallery } from "./components";
function App() {
  const { isDarkMode } = useGlobalContext();
  return (
    <div style={{ backgroundColor: isDarkMode ? "black" : "white" }}>
      <ToggleTheme />
      <SearchForm />
      <Gallery />
    </div>
  );
}

export default App;
