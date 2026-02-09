import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, Ticket, Calendar } from "lucide-react";

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-200">
            Upcoming Events
          </CardTitle>
          <Calendar className="h-4 w-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-50">12</div>
          <p className="text-xs text-slate-400">
            +2 from last month
          </p>
        </CardContent>
      </Card>
      <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-200">
            Sold Tickets
          </CardTitle>
          <Ticket className="h-4 w-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-50">+2350</div>
          <p className="text-xs text-slate-400">
            +180.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-200">Total Income</CardTitle>
          <DollarSign className="h-4 w-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-50">$45,231.89</div>
          <p className="text-xs text-slate-400">
            +19% from last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
