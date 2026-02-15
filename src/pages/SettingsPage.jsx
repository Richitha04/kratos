import { useState } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';

export default function SettingsPage() {
  const [checks, setChecks] = useState({ email: true, alerts: true, updates: false });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-5xl font-bold">System Settings</h1>
        <p className="mt-1 text-3xl text-slate-600">Configure system preferences and options</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card-surface p-6">
          <h3 className="text-4xl font-semibold">General Settings</h3>
          <label className="mt-4 block text-2xl text-slate-600">System Name</label>
          <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-2xl" defaultValue="KRATOS Energy System" />
          <label className="mt-4 block text-2xl text-slate-600">Time Zone</label>
          <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-2xl"><option>UTC+00:00</option><option>UTC+07:00</option></select>
        </div>

        <div className="card-surface p-6">
          <h3 className="text-4xl font-semibold">Notifications</h3>
          {[
            ['Email Notifications', 'email'],
            ['Alert Notifications', 'alerts'],
            ['System Updates', 'updates']
          ].map(([label, key]) => (
            <div key={key} className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
              <span className="text-3xl">{label}</span>
              <ToggleSwitch checked={checks[key]} onChange={(value) => setChecks((prev) => ({ ...prev, [key]: value }))} />
            </div>
          ))}
        </div>

        <div className="card-surface p-6">
          <h3 className="text-4xl font-semibold">Security</h3>
          {['Change Password', 'Two-Factor Authentication', 'Session Management'].map((x) => (
            <div key={x} className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-3xl text-slate-700">{x}</div>
          ))}
        </div>

        <div className="card-surface p-6">
          <h3 className="text-4xl font-semibold">Network Settings</h3>
          <label className="mt-4 block text-2xl text-slate-600">API Endpoint</label>
          <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-2xl" defaultValue="https://api.kratos.local" />
          <label className="mt-4 block text-2xl text-slate-600">Update Interval (seconds)</label>
          <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-2xl" defaultValue="5" />
        </div>
      </div>

      <div className="flex justify-end">
        <button className="rounded-2xl bg-blue-600 px-6 py-3 text-2xl text-white">Save Changes</button>
      </div>
    </div>
  );
}
