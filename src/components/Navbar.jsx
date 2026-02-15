import { Bell, ChevronDown, Menu } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function Navbar({ onToggleSidebar }) {
  const [open, setOpen] = useState(false);

  const time = useMemo(
    () =>
      new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
    []
  );

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex items-center gap-3 px-5 py-4 lg:px-8">
        <button onClick={onToggleSidebar} className="rounded-xl border border-slate-200 p-3 text-slate-600">
          <Menu size={20} />
        </button>

        <div className="rounded-xl bg-emerald-50 px-5 py-2 text-xl font-medium text-emerald-700">● System Online</div>

        <div className="ml-auto flex items-center gap-6">
          <p className="text-3xl text-slate-600">{time}</p>
          <button className="relative text-slate-600">
            <Bell size={24} />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-rose-500" />
          </button>

          <div className="relative">
            <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-3 rounded-xl px-2 py-1 hover:bg-slate-50">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-blue-500 text-white">A</div>
              <div className="hidden text-left md:block">
                <p className="text-2xl font-semibold leading-none text-slate-700">Admin User</p>
                <p className="text-sm text-slate-500">System Admin</p>
              </div>
              <ChevronDown size={18} className="text-slate-500" />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                <button className="w-full rounded-lg px-3 py-2 text-left text-slate-600 hover:bg-slate-50">Profile</button>
                <button className="w-full rounded-lg px-3 py-2 text-left text-slate-600 hover:bg-slate-50">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
