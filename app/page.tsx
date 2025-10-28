// app/page.tsx
import Gallery from '../components/Gallery';
import Dashboard from '../components/Dashboard';

export default function HomePage() {
  return (
    <div className="app-wrap">
      <div style={{ width: '100%' }}>
        <Gallery />
      </div>

      <Dashboard />
    </div>
  );
}
