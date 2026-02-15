import { CircleHelp, Mail, MessageCircle, NotebookText } from 'lucide-react';
import { faqs, helpCards } from '../data/mockData';

const icons = [NotebookText, MessageCircle, Mail, CircleHelp];

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-5xl font-bold">Help & Support</h1>
        <p className="mt-1 text-3xl text-slate-600">Get help with KRATOS Energy System</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {helpCards.map((card, idx) => {
          const Icon = icons[idx];
          return (
            <div key={card.title} className="card-surface p-6">
              <div className="grid h-16 w-16 place-items-center rounded-xl bg-slate-100 text-blue-600"><Icon size={30} /></div>
              <h3 className="mt-3 text-4xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-2xl text-slate-600">{card.description}</p>
            </div>
          );
        })}
      </div>

      <div className="card-surface p-6">
        <h3 className="mb-4 text-4xl font-semibold">Frequently Asked Questions</h3>
        {faqs.map((faq) => (
          <div key={faq.q} className="border-t border-slate-200 py-4 first:border-t-0">
            <p className="text-3xl font-medium">{faq.q}</p>
            <p className="mt-2 text-2xl text-slate-600">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="card-surface bg-slate-100 p-6">
        <h3 className="text-4xl font-semibold">Need More Help?</h3>
        <p className="mt-2 text-2xl text-slate-600">Contact our support team at support@kratos.com or call us at +1 (555) 123-4567</p>
        <button className="mt-4 rounded-xl bg-blue-600 px-5 py-3 text-2xl text-white">Contact Support</button>
      </div>
    </div>
  );
}
