"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon, ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner"; // Changed from useToast hook

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  category: z.string().min(1, "Please select a category"),
  date: z.date().refine((date) => date >= new Date(new Date().setHours(0, 0, 0, 0)), "Date cannot be in the past"),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, "Invalid price format (e.g., 10.99)"),
});

export function CreateEventDialog() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      price: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    // Simulate API call
    console.log("Submitting event:", values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setOpen(false);
    
    // Trigger toast
    toast.success("Event Created", {
        description: `Your event "${values.name}" has been successfully scheduled.`,
        duration: 5000,
    });
    
    form.reset();
    setStep(1);
  };

  const nextStep = async () => {
    const valid = await form.trigger(["name", "category"]);
    if (valid) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  return (
    <Dialog open={open} onOpenChange={(val) => {
        setOpen(val);
        if(!val) {
            setTimeout(() => setStep(1), 300); // Reset step after closing animation
        }
    }}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">
          Create New Event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-slate-900 border-slate-800 text-slate-100">
        <DialogHeader>
          <DialogTitle className="text-xl text-slate-100">
            {step === 1 ? "Event Details" : "Date & Pricing"}
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            {step === 1
              ? "Enter the basic information about your event."
              : "Set the schedule and pricing for tickets."}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            {step === 1 && (
              <div className="space-y-4 animate-in slide-in-from-left fade-in duration-300">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Event Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. React Global Summit"
                          {...field}
                          className="bg-slate-950 border-slate-800 text-slate-100 focus-visible:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-slate-950 border-slate-800 text-slate-100 focus:ring-blue-500">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-slate-900 border-slate-800 text-slate-100">
                          <SelectItem value="conference" className="focus:bg-slate-800 focus:text-slate-100">Conference</SelectItem>
                          <SelectItem value="workshop" className="focus:bg-slate-800 focus:text-slate-100">Workshop</SelectItem>
                          <SelectItem value="webinar" className="focus:bg-slate-800 focus:text-slate-100">Webinar</SelectItem>
                          <SelectItem value="meetup" className="focus:bg-slate-800 focus:text-slate-100">Meetup</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in slide-in-from-right fade-in duration-300">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-slate-300">Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal bg-slate-950 border-slate-800 text-slate-100 hover:bg-slate-900 hover:text-slate-100 active:scale-100 focus-visible:ring-blue-500",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-slate-900 border-slate-800" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date(new Date().setHours(0, 0, 0, 0))
                            }
                            initialFocus
                            className="bg-slate-900 text-slate-100"
                            classNames={{
                                day_selected: "bg-blue-600 text-slate-50 hover:bg-blue-600 hover:text-slate-50 focus:bg-blue-600 focus:text-slate-50",
                                day_today: "bg-slate-800 text-slate-50",
                                day_outside: "text-slate-500 opacity-50",
                                day_disabled: "text-slate-500 opacity-30",
                                day_hidden: "invisible",
                                head_cell: "text-slate-400 rounded-md w-9 font-normal text-[0.8rem]",
                                cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-slate-800 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Price ($)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="0.00"
                          {...field}
                          className="bg-slate-950 border-slate-800 text-slate-100 focus-visible:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>
            )}

            <DialogFooter className="flex justify-between sm:justify-between pt-4">
              {step === 2 ? (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={prevStep}
                  className="text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
              ) : (
                <div /> /* Spacer */
              )}

              {step === 1 ? (
                <Button type="button" onClick={nextStep} className="bg-blue-600 hover:bg-blue-500 text-white">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-500 text-white">
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Create Event
                </Button>
              )}
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
