"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Logo from "@/assets/logo.png";
import { usePlan } from "@/context/PlanContext";

const Navbar = () => {
    const { plan, saved } = usePlan();

    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-white/15 bg-[#000000] text-white">
            <div className="container mx-auto flex items-center justify-between p-4">

                                                                                                         {/* Logo */}


                                                                                                         
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src={Logo}
                        alt="FitLog Logo"
                        width={35}
                        height={35}
                    />

                    <p className="font-bold">
                        FITLOG
                    </p>
                </Link>

                                                                                           {/* Desktop Navigation only desktop*/}  



                <div className="hidden gap-6 md:flex">
                    <Link
                        href="/"
                        className={
                            pathname === "/"
                                ? "font-semibold text-[#ccff00]"
                                : "hover:text-[#ccff00]"
                        }
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className={
                            pathname === "/my-plan"
                                ? "font-semibold text-[#ccff00]"
                                : "hover:text-[#ccff00]"
                        }
                    >
                        My Plan
                    </Link>
                </div>

                                                                                                          {/* Plan & Saved */}



                <div className="hidden gap-3 sm:flex">

                    <Link
                        href="/my-plan"
                        className="rounded-full bg-[#ccff00] px-4 py-1 font-semibold text-black"
                    >
                        Plan {plan.length}
                    </Link>

                    <Link
                        href="/my-plan"
                        className="rounded-full border border-[#ccff00] px-4 py-1 font-semibold text-white"
                    >
                        Saved {saved.length}
                    </Link>

                </div>

                                                                                               {/* Mobile Menu Button eta mobiler jonno optional */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="btn btn-ghost md:hidden"
                >
                    ☰
                </button>

            </div>

                                                                                                   {/* Mobile Menu */}
            {menuOpen && (
                <div className="border-t border-white/15 px-4 py-4 md:hidden">

                    <div className="flex flex-col gap-4">

                        <Link
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className={
                                pathname === "/"
                                    ? "font-semibold text-[#ccff00]"
                                    : "hover:text-[#ccff00]"
                            }
                        >
                            Workouts
                        </Link>

                        <Link
                            href="/my-plan"
                            onClick={() => setMenuOpen(false)}
                            className={
                                pathname === "/my-plan"
                                    ? "font-semibold text-[#ccff00]"
                                    : "hover:text-[#ccff00]"
                            }
                        >
                            My Plan
                        </Link>

                        <div className="flex gap-3">

                            <Link
                                href="/my-plan"
                                onClick={() => setMenuOpen(false)}
                                className="rounded-full bg-[#ccff00] px-4 py-1 font-semibold text-black"
                            >
                                Plan {plan.length}
                            </Link>

                            <Link
                                href="/my-plan"
                                onClick={() => setMenuOpen(false)}
                                className="rounded-full border border-[#ccff00] px-4 py-1 font-semibold text-white"
                            >
                                Saved {saved.length}
                            </Link>

                        </div>

                    </div>

                </div>
            )}

        </nav>
    );
};

export default Navbar;