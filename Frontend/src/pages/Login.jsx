import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
            <div className="w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2">
                {/* Left: Login Form */}
                <div className="p-8 flex flex-col justify-center">
                    <CardHeader>
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-2">
                            Welcome back 👋
                        </h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Please enter your credentials to sign in.
                        </p>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div className="flex justify-between items-center text-sm">
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                >
                                    Forgot password?
                                </a>
                                <a
                                    href="#"
                                    className="text-zinc-500 hover:underline"
                                >
                                    New here? Sign up
                                </a>
                            </div>

                            <Button type="submit" className="w-full mt-2">
                                Sign In
                            </Button>
                        </form>
                    </CardContent>
                </div>

                {/* Right: Abstract Image */}
                <div
                    className="hidden md:block bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://source.unsplash.com/featured/?abstract,technology')`,
                    }}
                />
            </div>
        </div>
    );
}
