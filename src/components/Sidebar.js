export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold">Menù</h2>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/gestione-transazioni">Transazioni</a></li>
        <li><a href="/gestione-utenti">Utenti</a></li>
      </ul>
    </div>
  );
}