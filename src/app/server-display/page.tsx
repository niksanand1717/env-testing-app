// "use client"
import Link from "next/link";
import React from "react";

export default function DisplayBoxes() {

    const [runtime_env, server_env, client_env] = [process.env.RUNTIME_MIDDLEWARE_URL, process.env.MIDDLEWARE_URL, process.env.NEXT_PUBLIC_MIDDLEWARE_URL];


    console.log("Server-Page: ", {runtime_env, server_env, client_env});

    return (
        <div className="min-h-screen p-8 sm:p-20 flex flex-col items-center justify-center">
            <div className="fixed top-0 left-0 p-4 z-10">
                <Link href="/client-display" className="text-blue-500 hover:text-blue-700 underline">
                    Go To Client Side Rendered Display
                </Link>
            </div>
            <h1 className="text-2xl font-bold mb-8 text-center">Server Side Rendered Page Data Display</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 w-full max-w-7xl">
                {/* Box 1 */}
                <div className="bg-background dark:bg-[#222] rounded-xl shadow-md p-6 flex flex-col items-center justify-center min-h-[250px] h-full">
                    <h2 className="text-lg font-semibold mb-4">
                        Public ENV
                    </h2>
                    <div className="w-full bg-black/[.05] dark:bg-white/[.06] rounded-md p-3 overflow-x-auto">
                        <code className="font-mono font-semibold break-words whitespace-pre-wrap">
                            {process.env.NEXT_PUBLIC_MIDDLEWARE_URL ?? "Not Found"}
                        </code>
                    </div>
                </div>
                {/* Box 2 */}
                <div className="bg-background dark:bg-[#222] rounded-xl shadow-md p-6 flex flex-col items-center justify-center min-h-[250px] h-full">
                    <h2 className="text-lg font-semibold mb-4">
                        Server ENV
                    </h2>
                    <div className="w-full bg-black/[.05] dark:bg-white/[.06] rounded-md p-3 overflow-x-auto">
                        <code className="font-mono font-semibold break-words whitespace-pre-wrap">
                            {process.env.MIDDLEWARE_URL ?? "Not Found"}
                        </code>
                    </div>
                </div>
                {/* Box 3 */}
                <div className="bg-background dark:bg-[#222] rounded-xl shadow-md p-6 flex flex-col items-center justify-center min-h-[250px] h-full">
                    <h2 className="text-lg font-semibold mb-4">
                        Runtime ENV
                    </h2>
                    <div className="w-full bg-black/[.05] dark:bg-white/[.06] rounded-md p-3 overflow-x-auto">
                        <code className="font-mono font-semibold break-words whitespace-pre-wrap">
                            {process.env.RUNTIME_MIDDLEWARE_URL ?? "Not Found"}
                        </code>
                    </div>
                </div>
                {/* Box 4 */}
                <div className="bg-background dark:bg-[#222] rounded-xl shadow-md p-6 flex flex-col items-center justify-center min-h-[250px] h-full">
                    <h2 className="text-lg font-semibold mb-4">
                        Box 4
                    </h2>
                    <div className="w-full bg-black/[.05] dark:bg-white/[.06] rounded-md p-3 overflow-x-auto">
                        <code className="font-mono font-semibold break-words whitespace-pre-wrap">
                            Data placeholder
                        </code>
                    </div>
                </div>
                {/* Box 5 */}
                <div className="bg-background dark:bg-[#222] rounded-xl shadow-md p-6 flex flex-col items-center justify-center min-h-[250px] h-full">
                    <h2 className="text-lg font-semibold mb-4">
                        Box 5
                    </h2>
                    <div className="w-full bg-black/[.05] dark:bg-white/[.06] rounded-md p-3 overflow-x-auto">
                        <code className="font-mono font-semibold break-words whitespace-pre-wrap">
                            Data placeholder
                        </code>
                    </div>
                </div>
            </div>
        </div>
    );
}
