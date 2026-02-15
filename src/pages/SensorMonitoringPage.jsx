import { useState } from 'react';
import { sensorOverview } from '../data/mockData';
import ToggleSwitch from '../components/ToggleSwitch';
import StatusBadge from '../components/StatusBadge';

export default function SensorMonitoringPage() {
  const [automation, setAutomation] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-5xl font-bold">Sensor Monitoring</h1>
        <p className="mt-1 text-3xl text-slate-600">Monitor all connected sensors in real-time</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sensorOverview.map((sensor) => (
          <div key={sensor.name} className={`card-surface p-5 ${sensor.status === 'Warning' ? 'bg-amber-50' : 'bg-emerald-50'}`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-semibold text-slate-800">{sensor.name}</h3>
                <p className="text-2xl text-slate-500">{sensor.updated}</p>
              </div>
              <StatusBadge status={sensor.status} />
            </div>
          </div>
        ))}
      </div>

      <div className="card-surface p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-4xl font-semibold">Sensor Configuration</h3>
          <div className="flex items-center gap-3">
            <span className="text-2xl text-slate-600">Enable occupancy automation</span>
            <ToggleSwitch checked={automation} onChange={setAutomation} />
          </div>
        </div>
        <p className="mt-4 text-3xl text-slate-500">Configure sensor settings and thresholds here.</p>
      </div>
    </div>
  );
}
