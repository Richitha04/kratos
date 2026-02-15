import { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { users } from '../data/mockData';
import StatusBadge from '../components/StatusBadge';

export default function UsersPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-5xl font-bold">Users</h1>
          <p className="mt-1 text-3xl text-slate-600">Manage system users and permissions</p>
        </div>
        <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-2xl text-white">
          <UserPlus size={20} /> Add User
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Total Users', '4', 'bg-blue-100'],
          ['Active Users', '3', 'bg-emerald-100'],
          ['Administrators', '1', 'bg-purple-100']
        ].map(([title, value, tone]) => (
          <div key={title} className="card-surface p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl text-slate-600">{title}</p>
                <p className="text-6xl font-bold">{value}</p>
              </div>
              <div className={`h-20 w-20 rounded-2xl ${tone}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="card-surface overflow-x-auto p-0">
        <table className="w-full text-left">
          <thead className="border-b border-slate-200 text-2xl text-slate-500">
            <tr>
              <th className="px-6 py-4">USER</th><th>ROLE</th><th>STATUS</th><th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-slate-100">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-blue-500 text-2xl text-white">{user.name[0]}</div>
                    <div>
                      <p className="text-3xl font-medium text-slate-800">{user.name}</p>
                      <p className="text-2xl text-slate-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="text-2xl text-slate-700">{user.role}</td>
                <td><StatusBadge status={user.status} /></td>
                <td className="text-2xl"><button className="text-blue-600">Edit</button> <button className="ml-3 text-rose-600">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 grid place-items-center bg-black/30 p-4">
          <div className="card-surface w-full max-w-lg p-6">
            <h3 className="text-3xl font-semibold">Add User</h3>
            <div className="mt-4 space-y-3">
              <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-2xl" placeholder="Name" />
              <input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-2xl" placeholder="Email" />
              <select className="w-full rounded-xl border border-slate-200 px-4 py-2 text-2xl"><option>Operator</option><option>Manager</option><option>Administrator</option></select>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setOpen(false)} className="rounded-xl border border-slate-200 px-4 py-2">Cancel</button>
              <button onClick={() => setOpen(false)} className="rounded-xl bg-blue-600 px-4 py-2 text-white">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
