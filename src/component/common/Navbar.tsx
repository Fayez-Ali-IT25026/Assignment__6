"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.png";
import { usePlan } from "@/context/PlanContext";

const Navbar = () => {
    const { plan, saved } = usePlan();

    return (
        <nav className="sticky top-0 z-50  border-b border-white/15 bg-[#000000] text-white">
            <div className="container mx-auto flex items-center justify-between p-4">

                
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

                
                <div className="flex gap-6">
                    <Link
                        href="/"
                        className="hover:text-[#ccff00]"
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className="hover:text-[#ccff00]"
                    >
                        My Plan
                    </Link>
                </div>

                
                <div className="flex gap-3">

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

            </div>
        </nav>
    );
};

export default Navbar;