"use client";
import Image from "next/image";
import { Input } from "../ui/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";

const formSchema = z.object({
  email: z.string().email("Wprowadź poprawny adres e-mail"),
  password: z.string().min(6, "Hasło musi mieć conajmniej 6 znaków"),
});

export const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-100 bg-slate-900/50 border border-slate-800 p-10 rounded-3xl shadow-2xl backdrop-blur-sm">
      <div className="flex flex-col gap-2 text-center">
        <Image
          src="/img/logo1.png"
          alt="logo"
          width={120}
          height={120}
          className="m-auto mb-2"
        />
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Welcome Back
        </h1>
        <p className="text-slate-400 text-sm">
          Don t have an account yet?{" "}
          <Link
            href="/register"
            className="text-blue-500 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 text-left"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="name@company.com"
                    {...field}
                    className="bg-slate-950 border-slate-800 text-white focus:ring-blue-500 h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="text-slate-300">Password</FormLabel>
                  <Link
                    href="#"
                    className="text-xs text-blue-500 hover:underline"
                  >
                    Forgot?
                  </Link>
                </div>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    {...field}
                    className="bg-slate-950 border-slate-800 text-white focus:ring-blue-500 h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 transition-all rounded-xl"
          >
            Log In
          </Button>
        </form>
      </Form>
    </div>
  );
};
