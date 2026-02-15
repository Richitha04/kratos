import { energyCards } from '../data/mockData';
import { Zap, TrendingUp, Clock3 } from 'lucide-react';

const icons = [Zap, TrendingUp, Clock3];

export default function EnergyMonitoringPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-5xl font-bold text-slate-900">Energy Monitoring</h1>
        <p className="mt-1 text-3xl text-slate-600">Track and analyze energy consumption</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {energyCards.map((card, idx) => {
          const Icon = icons[idx];
          return (
            <div key={card.title} className="card-surface p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl text-slate-600">{card.title}</p>
                  <p className="text-6xl font-bold text-slate-900">{card.value}</p>
                  <p className={`text-3xl ${idx === 2 ? 'text-rose-500' : 'text-emerald-600'}`}>{card.note}</p>
                </div>
                <div className={`grid h-20 w-20 place-items-center rounded-2xl ${idx === 0 ? 'bg-blue-100 text-blue-600' : idx === 1 ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>
                  <Icon size={38} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card-surface p-6">
        <h3 className="text-4xl font-semibold">Energy Details</h3>
        <p className="mt-2 text-3xl text-slate-500">Detailed energy monitoring charts and analytics will be displayed here.</p>
      </div>
    </div>
  );
}
