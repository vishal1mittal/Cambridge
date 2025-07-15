import { Menu, Moon, Sun, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // 👈 make sure this is imported

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-zinc-900 shadow-md">
            <div className="text-2xl font-bold text-blue-600 dark:text-white">
                🎓 Cambridge Computer Education
            </div>

            <div className="hidden md:flex gap-6 text-zinc-700 dark:text-zinc-300 font-medium">
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <div className="flex items-center gap-2">
                <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <User size={18} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                            <Link to="/login">Login</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => alert("Sign Up")}>
                            Sign Up
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button size="icon" className="md:hidden">
                    <Menu size={18} />
                </Button>
            </div>
        </nav>
    );
}
