import Sidebar from "./components/SideBar";
import Dashboard from "./Pages/Dashboard";
import useTheme from "./hooks/useTheme";
import MobileNav from "./components/MobileNav";

function App() {
  const { theme, setTheme, toggleTheme } = useTheme();
  return (
    <div className={`app-layout ${theme}`}>
      <MobileNav />
      <Sidebar />

      <Dashboard theme={theme} toggleTheme={toggleTheme} setTheme={setTheme} />
    </div>
  );
}

export default App;
