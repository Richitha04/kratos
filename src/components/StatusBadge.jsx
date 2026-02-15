export default function StatusBadge({ status }) {
  const value = String(status || '').toLowerCase();
  const styles = {
    active: 'bg-emerald-100 text-emerald-700',
    online: 'bg-emerald-100 text-emerald-700',
    inactive: 'bg-slate-100 text-slate-600',
    offline: 'bg-slate-100 text-slate-600',
    warning: 'bg-amber-100 text-amber-700',
    fault: 'bg-rose-100 text-rose-700'
  };

  return <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles[value] || styles.inactive}`}>{status}</span>;
}
