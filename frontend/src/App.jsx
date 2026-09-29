import Sidebar from "./components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, setTheme, toggleTheme } = useTheme();
  return (
    <div className={`app-layout ${theme}`}>
      <Sidebar />

      <Dashboard theme={theme} toggleTheme={toggleTheme} setTheme={setTheme} />
    </div>
  );
}

export default App;
