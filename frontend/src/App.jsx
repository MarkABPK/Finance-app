import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app-layout ${theme}`}>
      <Sidebar />

      <Dashboard theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
