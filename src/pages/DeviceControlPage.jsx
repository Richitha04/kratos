import { Coffee, Fan, Lightbulb, Tv } from 'lucide-react';
import { useMemo, useState } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';
import { deviceGroups } from '../data/mockData';

const iconMap = { Lightbulb, Fan, Tv, Coffee };

function GroupSection({ title, devices, state, setState }) {
  return (
    <div className="card-surface p-6">
      <h3 className="mb-4 text-4xl font-semibold">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {devices.map((device) => {
          const Icon = iconMap[device.icon] || Lightbulb;
          const on = state[device.id];
          return (
            <div key={device.id} className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-100 text-slate-600"><Icon size={22} /></div>
                  <p className="text-4xl font-medium">{device.name}</p>
                </div>
                <ToggleSwitch checked={on} onChange={(value) => setState((prev) => ({ ...prev, [device.id]: value }))} />
              </div>
              <p className={`mt-3 text-3xl ${on ? 'text-emerald-600' : 'text-slate-500'}`}>● {on ? 'Active' : 'Inactive'}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function DeviceControlPage() {
  const initial = useMemo(() => {
    const all = [...deviceGroups.lighting, ...deviceGroups.climate, ...deviceGroups.other];
    return Object.fromEntries(all.map((x) => [x.id, x.active]));
  }, []);
  const [state, setState] = useState(initial);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-5xl font-bold">Device Control</h1>
        <p className="mt-1 text-3xl text-slate-600">Control and manage all connected devices</p>
      </div>

      <GroupSection title="Lighting Controls" devices={deviceGroups.lighting} state={state} setState={setState} />
      <GroupSection title="Climate Controls" devices={deviceGroups.climate} state={state} setState={setState} />
      <GroupSection title="Other Devices" devices={deviceGroups.other} state={state} setState={setState} />
    </div>
  );
}
