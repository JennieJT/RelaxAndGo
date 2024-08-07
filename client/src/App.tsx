import { useState } from "react";
import Appbar from "./components/appbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { ThemeProvider } from "@emotion/react";
import globalTheme from "./theme/theme";
import Stopwatch from "./components/watch/Stopwatch";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={globalTheme}>
      <div className="grid h-screen grid-rows-[auto,1fr,auto] grid-cols-12">
        <Appbar darkMode={darkMode} handleToggleTheme={handleToggleTheme} />
        <div className="row-start-2 row-span-1 col-span-2 border-r-2">
          <Sidebar />
        </div>
        <div className="bg-white col-span-10 row-start-2 row-span-1 p-2 overflow-auto">
          <Stopwatch scene = "total"/>
          <Outlet />
        </div>
        <div className="bg-white col-span-full row-start-3 border-t-2">
          footer
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
