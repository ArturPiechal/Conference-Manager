import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Event } from "@/types";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

// Intersection and Union types
type DashboardEvent = Pick<Event, "id" | "title" | "status" | "date" | "price">;
type EventStatus = Event["status"]; // Union type from Event interface

const events: DashboardEvent[] = [
  {
    id: "INV001",
    title: "Tech Conference 2024",
    status: "success",
    price: 250.00,
    date: "2024-01-15",
  },
  {
    id: "INV002",
    title: "Design Workshop",
    status: "pending",
    price: 150.00,
    date: "2024-02-10",
  },
  {
    id: "INV003",
    title: "AI Summit",
    status: "processing",
    price: 350.00,
    date: "2024-03-05",
  },
  {
    id: "INV004",
    title: "Web Dev Bootcamp",
    status: "failed",
    price: 450.00,
    date: "2024-04-20",
  },
  {
    id: "INV005",
    title: "Mobile App Launch",
    status: "success",
    price: 550.00,
    date: "2024-05-12",
  },
];

// Type Predicate
function isPremiumEvent(event: DashboardEvent): event is DashboardEvent & { status: "success" } {
  return event.price > 500 && event.status === "success";
}

// Function Overloading
function formatEventData(price: number): string;
function formatEventData(date: string): string;
function formatEventData(value: number | string): string {
  if (typeof value === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const getStatusColor = (status: EventStatus) => {
  switch (status) {
    case "success":
      return "text-green-500 bg-green-500/10 border-green-500/20";
    case "pending":
      return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
    case "processing":
      return "text-blue-500 bg-blue-500/10 border-blue-500/20";
    case "failed":
      return "text-red-500 bg-red-500/10 border-red-500/20";
    default:
      return "text-slate-500 bg-slate-500/10";
  }
};

export function LastEventsTable() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden">
      <div className="p-4 border-b border-slate-800">
        <h3 className="text-lg font-medium text-slate-200">Last Events</h3>
      </div>
      <Table>
        <TableHeader className="bg-slate-900/50">
          <TableRow className="border-slate-800 hover:bg-slate-900/50">
            <TableHead className="w-[100px] text-slate-400">ID</TableHead>
            <TableHead className="text-slate-400">Title</TableHead>
            <TableHead className="text-slate-400">Status</TableHead>
            <TableHead className="text-slate-400">Date</TableHead>
            <TableHead className="text-right text-slate-400">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow 
              key={event.id} 
              className={cn(
                "border-slate-800 hover:bg-slate-800/50 transition-colors",
                isPremiumEvent(event) && "bg-blue-900/10 hover:bg-blue-900/20"
              )}
            >
              <TableCell className="font-medium text-slate-300">
                <div className="flex items-center gap-2">
                  {event.id}
                  {isPremiumEvent(event) && (
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 animate-pulse" />
                  )}
                </div>
              </TableCell>
              <TableCell className="text-slate-300">{event.title}</TableCell>
              <TableCell>
                <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium border", getStatusColor(event.status))}>
                  {event.status}
                </span>
              </TableCell>
              <TableCell className="text-slate-400">{formatEventData(event.date)}</TableCell>
              <TableCell className="text-right text-slate-300 font-mono">
                {formatEventData(event.price)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
