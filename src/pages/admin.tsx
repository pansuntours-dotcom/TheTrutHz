// src/pages/admin.tsx  (or src/app/admin/page.tsx)

import AdminLayout from "../components/AdminLayout";

export default function AdminPage() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-4">Welcome to The TrutHz Admin Panel</h1>
      <p className="mb-4">
        Here you can manage users, view analytics, and configure platform settings.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Analytics</h2>
        <div className="bg-gray-100 p-4 rounded shadow">
          <p>Charts and stats will go here.</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">User Management</h2>
        <div className="bg-gray-100 p-4 rounded shadow">
          <p>Manage users, roles, and permissions.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Settings</h2>
        <div className="bg-gray-100 p-4 rounded shadow">
          <p>Platform settings and configurations.</p>
        </div>
      </section>
    </AdminLayout>
  );
}
