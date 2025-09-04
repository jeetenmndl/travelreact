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
import { loginUser } from "@/api/auth"
import useAuth from "@/hooks/useAuth"
import { useNavigate } from "react-router-dom"
import Loading from "@/components/shared/Loading"

const formSchema = z
  .object({
    email: z.string().min(5, { message: "Email must be at least 5 characters." }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });

export default function Login() {

    const {login} = useAuth();
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const {token} = useAuth();

    if(token){
        navigate("/dashboard");
    }

    async function onSubmit(data) {
        const { email, password } = data;
        try{

        const response = await loginUser({  email, password });

        // TODO: when user is logged in, return user data along with token from backend 
        if(response.token){
            login({ email }, response.token);
            navigate("/dashboard");
        }
        else{
            alert(response.message || "Login failed");
        }
        
        }catch (error) {
            console.error(error);
            alert("Login failed");
        }

    }
    
  return (
    <section className="flex justify-center items-center h-screen">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-96 border-1 p-6 rounded-md">
        <div className="mb-6 flex justify-between items-center">
            <div>
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-xs text-gray-400">Enter your credentials to log in.</p>
            </div>
            <img src="/logo.png" alt="wander wise" className="w-10 h-10" />
        </div>


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
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Submit</Button>

        <p className="text-sm text-center text-gray-500 mt-2">
            Create a new account?{" "}
            <a href="/signup" className="text-primary hover:underline">
                Register
            </a>
        </p>
      </form>
    </Form>
    </section>
  )
}
