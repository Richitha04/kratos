import { NavLink } from 'react-router-dom';
import {
  BarChart3,
  CircleHelp,
  LayoutDashboard,
  LogOut,
  Monitor,
  Radar,
  Settings,
  UsersRound,
  Zap,
  Bolt
} from 'lucide-react';
import { navItems } from '../data/mockData';

const icons = { LayoutDashboard, Zap, Radar, Monitor, BarChart3, UsersRound, Settings, CircleHelp };

export default function Sidebar({ collapsed }) {
  return (
    <aside className={`sticky top-0 h-screen border-r border-slate-800 bg-slate-950 text-slate-200 transition-all duration-300 ${collapsed ? 'w-24' : 'w-72'}`}>
      <div className="flex h-full flex-col">
        <div className="border-b border-slate-800 px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-white">
              <Bolt size={22} />
            </div>
            {!collapsed && (
              <div>
                <p className="text-3xl font-bold text-white">KRATOS</p>
                <p className="text-sm text-slate-400">Energy System</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 space-y-2 p-3">
          {navItems.map((item) => {
            const Icon = icons[item.icon];
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `flex items-center gap-3 rounded-xl px-4 py-3 transition ${isActive ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-900'}`}
              >
                <Icon size={20} />
                {!collapsed && <span className="text-xl font-medium">{item.name}</span>}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t border-slate-800 p-3">
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-slate-300 hover:bg-slate-900">
            <LogOut size={20} /> {!collapsed && <span className="text-xl">Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}
