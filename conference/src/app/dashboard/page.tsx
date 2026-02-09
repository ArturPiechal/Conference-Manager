
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { SellingChart } from "@/components/dashboard/SellingChart";
import { LastEventsTable } from "@/components/dashboard/LastEventsTable";
import { CreateEventDialog } from "@/components/dashboard/CreateEventDialog";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]" />
        </div>

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        <div className="flex items-center justify-between animate-in slide-in-from-top fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Dashboard</h1>
                <p className="text-slate-400 mt-1">Overview of your events and sales performance.</p>
            </div>
            <CreateEventDialog />
        </div>
        
        <div className="animate-in slide-in-from-bottom fade-in duration-500 delay-150 fill-mode-backwards">
            <DashboardStats />
        </div>

        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 animate-in slide-in-from-bottom fade-in duration-700 delay-300 fill-mode-backwards">
          <SellingChart />
          <LastEventsTable />
        </div>
      </div>
    </div>
  );
}
