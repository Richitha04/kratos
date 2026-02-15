import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { sixMonthTrend, topConsumers, peakHours, weeklyEnergyCost } from '../data/mockData';
import { Download } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-5xl font-bold">Analytics & Reports</h1>
          <p className="mt-1 text-3xl text-slate-600">Analyze energy patterns and generate reports</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-2xl text-white">
          <Download size={22} /> Export Report
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Weekly Average', '91 kWh', 'bg-blue-100'],
          ['Monthly Total', '2.8k kWh', 'bg-emerald-100'],
          ['Estimated Cost', '$840', 'bg-amber-100']
        ].map(([title, val, tone]) => (
          <div key={title} className="card-surface p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl text-slate-600">{title}</p>
                <p className="text-6xl font-bold">{val}</p>
              </div>
              <div className={`h-20 w-20 rounded-2xl ${tone}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="card-surface p-6">
        <h3 className="mb-4 text-4xl font-semibold">Weekly Energy & Cost Analysis</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyEnergyCost}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cost" fill="#10B981" radius={[8, 8, 0, 0]} name="Cost ($)" />
              <Bar dataKey="energy" fill="#3B82F6" radius={[8, 8, 0, 0]} name="Energy (kWh)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card-surface p-6">
        <h3 className="mb-4 text-4xl font-semibold">6-Month Consumption Trend</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sixMonthTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="consumption" stroke="#8B5CF6" strokeWidth={3} name="Consumption (kWh)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card-surface p-6">
          <h3 className="mb-4 text-4xl font-semibold">Top Energy Consumers</h3>
          <div className="space-y-3">
            {topConsumers.map((x) => (
              <div key={x.area}>
                <div className="mb-1 flex items-center justify-between text-2xl"><span>{x.area}</span><span>{x.value} kWh</span></div>
                <div className="h-3 rounded-full bg-slate-200"><div className="h-3 rounded-full bg-blue-600" style={{ width: `${(x.value / 42) * 100}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-surface p-6">
          <h3 className="mb-4 text-4xl font-semibold">Peak Usage Hours</h3>
          <div className="space-y-3">
            {peakHours.map((x) => (
              <div key={x.range}>
                <div className="mb-1 flex items-center justify-between text-2xl"><span>{x.range}</span><span>{x.kw} kW</span></div>
                <div className="h-3 rounded-full bg-slate-200"><div className="h-3 rounded-full bg-emerald-600" style={{ width: `${(x.kw / 18) * 100}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
