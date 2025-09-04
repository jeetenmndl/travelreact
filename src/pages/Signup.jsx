import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { registerUser } from "@/api/auth"
import useAuth from "@/hooks/useAuth"
import { useNavigate } from "react-router-dom"

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().min(5, { message: "Email must be at least 5 characters." }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function Signup() {

    const {login} = useAuth();
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    const {token} = useAuth();

    if(token){
        navigate("/dashboard");
    }


    async function onSubmit(data) {
        const { name, email, password } = data;
        try{

        const response = await registerUser({ name, email, password });

        if(response.token){
            login({ name, email }, response.token);
            navigate("/dashboard");
        }
        else{
            alert(response.message || "Signup failed");
        }
        
        }catch (error) {
            console.error(error);
            alert("Signup failed");
        }

    }

  return (
    <section className="flex justify-center items-center h-screen">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-96 border-1 p-6 rounded-md">
        <div className="mb-6 flex justify-between items-center">
            <div>
            <h1 className="text-2xl font-bold">Register</h1>
            <p className="text-xs text-gray-400">Fill details to create a new account  </p>
            </div>
            <img src="/logo.png" alt="wander wise" className="w-10 h-10" />
        </div>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="John@gmail.com" {...field} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormDescription>
                Must be at least 8 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Submit</Button>

        <p className="text-sm text-center text-gray-500 mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-primary hover:underline">
                Login
            </a>
        </p>
      </form>
    </Form>
    </section>
  )
}