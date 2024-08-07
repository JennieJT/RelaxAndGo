import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';
import Watch from '../watch';

interface AppbarProps {
  darkMode: boolean;
  handleToggleTheme: () => void;
}

const Appbar: React.FC<AppbarProps> = ({ darkMode, handleToggleTheme }) => {
  return (
    <div className="bg-green-200 py-3 row-span-1 col-span-full flex flex-row justify-between items-center px-2">
      <div className="flex flex-row gap-2">
        <Link to = "/">
        <div className="tracking-widest uppercase">Relax & Go 😉</div>
        </Link>
      </div>
      <div className="flex flex-row gap-2">
        <Watch />
        <div
          className="rounded-lg hover:cursor-pointer hover:bg-slate-200"
          onClick={handleToggleTheme}
        >
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
