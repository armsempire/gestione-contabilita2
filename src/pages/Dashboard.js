import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </main>
    </div>
  );
}