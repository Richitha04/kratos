import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useState } from 'react';
import { activityLog, dashboardStats, occupancyTrend, quickDevices, realtimeEnergy, sensorOverview } from '../data/mockData';
import ToggleSwitch from '../components/ToggleSwitch';

function ToneIcon({ tone }) {
  const map = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-emerald-100 text-emerald-600',
    purple: 'bg-purple-100 text-purple-600',
    mint: 'bg-emerald-100 text-emerald-600'
  };
  return <div className={`h-20 w-20 rounded-2xl ${map[tone] || map.blue}`} />;
}

export default function DashboardPage() {
  const [deviceState, setDeviceState] = useState(Object.fromEntries(quickDevices.map((d) => [d.id, d.active])));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-6xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-2 text-4xl text-slate-600">Welcome to KRATOS Energy Monitoring System</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-4">
        {dashboardStats.map((item) => (
          <div key={item.title} className="card-surface p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-3xl text-slate-600">{item.title}</p>
                <p className="mt-2 text-6xl font-bold text-slate-900">{item.value}</p>
                <p className="mt-2 text-3xl text-emerald-600">{item.note}</p>
              </div>
              <ToneIcon tone={item.tone} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card-surface p-6">
          <h3 className="mb-4 text-5xl font-semibold">Real-Time Energy Usage</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={realtimeEnergy}>
                <defs>
                  <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="energy" stroke="#3B82F6" fill="url(#energyGradient)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="card-surface p-6">
          <h3 className="mb-4 text-5xl font-semibold">Occupancy Trend</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={occupancyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="occupancy" stroke="#10B981" strokeWidth={4} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card-surface p-6">
          <h3 className="mb-4 text-5xl font-semibold">Quick Device Control</h3>
          <div className="space-y-3">
            {quickDevices.map((device) => {
              const on = deviceState[device.id];
              return (
                <div key={device.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-4xl font-medium text-slate-800">{device.name}</p>
                      <p className="text-3xl text-slate-500">{device.zone}</p>
                    </div>
                    <ToggleSwitch checked={on} onChange={(value) => setDeviceState((prev) => ({ ...prev, [device.id]: value }))} />
                  </div>
                  <p className={`mt-2 text-2xl ${on ? 'text-emerald-600' : 'text-slate-500'}`}>● {on ? 'Active' : 'Inactive'}</p>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => setDeviceState(Object.fromEntries(Object.keys(deviceState).map((id) => [id, false])))}
            className="mt-4 w-full rounded-2xl bg-rose-600 px-4 py-3 text-3xl font-semibold text-white"
          >
            Emergency Power OFF
          </button>
        </div>

        <div className="card-surface p-6">
          <h3 className="mb-4 text-5xl font-semibold">Activity Log</h3>
          <div className="space-y-3">
            {activityLog.map((log) => (
              <div key={log.id} className="rounded-2xl bg-slate-50 px-4 py-3">
                <p className="text-4xl font-medium text-slate-800">{log.title}</p>
                <p className="text-2xl text-slate-500">{log.location} · {log.ago}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {sensorOverview.slice(0, 3).map((sensor) => (
          <div key={sensor.name} className="card-surface bg-emerald-50 p-4">
            <p className="text-4xl font-medium text-slate-800">{sensor.name.replace(' - Room 1', '').replace(' - Room 2', '').replace(' - Hallway', '')}</p>
            <p className="text-2xl text-slate-500">{sensor.updated}</p>
            <p className="text-3xl text-emerald-600">● {sensor.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
