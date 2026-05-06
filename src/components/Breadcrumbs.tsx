import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => (
  <nav aria-label="Breadcrumb" className="mb-8">
    <ol className="flex items-center gap-1 text-sm text-slate-400 flex-wrap">
      <li className="flex items-center gap-1">
        <Link to="/" className="hover:text-luminary-accent transition-colors">
          <Home className="w-3.5 h-3.5" />
        </Link>
      </li>
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-1">
          <ChevronRight className="w-3 h-3" />
          {item.to ? (
            <Link to={item.to} className="hover:text-luminary-accent transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-luminary-dark font-medium">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;