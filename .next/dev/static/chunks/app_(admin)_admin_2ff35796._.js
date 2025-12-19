(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/(admin)/admin/components/dashboardlayout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DashboardLayout(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "2a7f8cfd5ba322b65a1508fba06e074a65b781fdc27353fb3407e1d6310f1c44") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2a7f8cfd5ba322b65a1508fba06e074a65b781fdc27353fb3407e1d6310f1c44";
    }
    const { children } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[1] !== router) {
        t1 = ({
            "DashboardLayout[handleSignOut]": ()=>{
                if (confirm("Are you sure you want to sign out?")) {
                    localStorage.removeItem("adminToken");
                    setTimeout({
                        "DashboardLayout[handleSignOut > setTimeout()]": ()=>router.replace("/admin")
                    }["DashboardLayout[handleSignOut > setTimeout()]"], 50);
                }
            }
        })["DashboardLayout[handleSignOut]"];
        $[1] = router;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleSignOut = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            {
                label: "Dashboard",
                href: "/admin/home"
            },
            {
                label: "Donations",
                href: "/admin/donations"
            },
            {
                label: "Programs",
                href: "/admin/programs"
            },
            {
                label: "Volunteers",
                href: "/admin/volunteers"
            },
            {
                label: "Users",
                href: "/admin/users"
            },
            {
                label: "Newsletters",
                href: "/admin/newsletters"
            },
            {
                label: "Settings",
                href: "/admin/settings"
            }
        ];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const navItems = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-xl font-bold text-[#A7CE44]",
            children: "Admin Panel"
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/components/dashboardlayout.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/components/dashboardlayout.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== handleSignOut) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "sticky top-0 z-50 shadow-md bg-white px-6 py-4 flex justify-between items-center",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleSignOut,
                    className: "flex bg-red-700 p-2 text-white items-center gap-2 rounded-lg hover:bg-[#9bcc20] transition",
                    children: [
                        t4,
                        " Sign Out"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(admin)/admin/components/dashboardlayout.jsx",
                    lineNumber: 83,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/admin/components/dashboardlayout.jsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[6] = handleSignOut;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "hidden lg:flex flex-col w-64 bg-green-100 border-r border-gray-200 p-4 justify-between",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "space-y-2",
                children: navItems.map(_DashboardLayoutNavItemsMap)
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/components/dashboardlayout.jsx",
                lineNumber: 91,
                columnNumber: 116
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/components/dashboardlayout.jsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== children) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-1",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 p-6 lg:p-8",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/components/dashboardlayout.jsx",
                    lineNumber: 98,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/admin/components/dashboardlayout.jsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-white shadow-inner mt-auto text-center py-3 text-sm text-gray-500",
            children: [
                "© ",
                new Date().getFullYear(),
                " Hiraya Manawari Foundation"
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/admin/components/dashboardlayout.jsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t5 || $[13] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col min-h-screen bg-gray-50 text-gray-900 ",
            children: [
                t5,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/admin/components/dashboardlayout.jsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t7;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    return t9;
}
_s(DashboardLayout, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardLayout;
function _DashboardLayoutNavItemsMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: item.href,
        className: "block px-4 py-2 rounded-lg hover:bg-lime-200 transition font-medium text-[#A7CE44]",
        children: item.label
    }, item.label, false, {
        fileName: "[project]/app/(admin)/admin/components/dashboardlayout.jsx",
        lineNumber: 123,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(admin)/admin/home/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$components$2f$dashboardlayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(admin)/admin/components/dashboardlayout.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DashboardHome() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "0384862ac0c3469e437dfec2f0adda24cad45d2bb17c95bfcd6046bcc2d07f77") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0384862ac0c3469e437dfec2f0adda24cad45d2bb17c95bfcd6046bcc2d07f77";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            id: 1,
            label: "Total Donations",
            value: 0,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiGift"], {
                className: "text-[#A7CE44]-600"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/home/page.jsx",
                lineNumber: 22,
                columnNumber: 13
            }, this)
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            id: 2,
            label: "Items Donated",
            value: 0,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiActivity"], {
                className: "text-[#A7CE44]-600"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/home/page.jsx",
                lineNumber: 34,
                columnNumber: 13
            }, this)
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            id: 3,
            label: "Active Programs",
            value: 0,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheckCircle"], {
                className: "text-[#A7CE44]-600"
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/home/page.jsx",
                lineNumber: 46,
                columnNumber: 13
            }, this)
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            t0,
            t1,
            t2,
            {
                id: 4,
                label: "Beneficiaries",
                value: 0,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {
                    className: "text-[#A7CE44]-600"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/home/page.jsx",
                    lineNumber: 58,
                    columnNumber: 13
                }, this)
            }
        ];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const [recentDonations, setRecentDonations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "DashboardHome[useEffect()]": ()=>{
                const fetchStats = {
                    "DashboardHome[useEffect() > fetchStats]": async ()=>{
                        ;
                        try {
                            const resPrograms = await fetch("/api/admin/programs");
                            const programs = await resPrograms.json();
                            const activePrograms = programs.filter(_DashboardHomeUseEffectFetchStatsProgramsFilter).length;
                            const resDonations = await fetch("/api/donations");
                            const donations = await resDonations.json();
                            const totalDonations = donations.filter(_DashboardHomeUseEffectFetchStatsDonationsFilter).reduce(_DashboardHomeUseEffectFetchStatsAnonymous, 0);
                            const itemsDonated = donations.filter(_DashboardHomeUseEffectFetchStatsDonationsFilter2).reduce(_DashboardHomeUseEffectFetchStatsAnonymous2, 0);
                            const beneficiaries = programs.reduce(_DashboardHomeUseEffectFetchStatsProgramsReduce, 0);
                            setStats([
                                {
                                    id: 1,
                                    label: "Total Donations",
                                    value: `$${totalDonations}`,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiGift"], {
                                        className: "text-[#A7CE44]-600"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/home/page.jsx",
                                        lineNumber: 94,
                                        columnNumber: 23
                                    }, this)
                                },
                                {
                                    id: 2,
                                    label: "Items Donated",
                                    value: itemsDonated,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiActivity"], {
                                        className: "text-[#A7CE44]-600"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/home/page.jsx",
                                        lineNumber: 99,
                                        columnNumber: 23
                                    }, this)
                                },
                                {
                                    id: 3,
                                    label: "Active Programs",
                                    value: activePrograms,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheckCircle"], {
                                        className: "text-[#A7CE44]-600"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/home/page.jsx",
                                        lineNumber: 104,
                                        columnNumber: 23
                                    }, this)
                                },
                                {
                                    id: 4,
                                    label: "Beneficiaries",
                                    value: beneficiaries,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {
                                        className: "text-[#A7CE44]-600"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(admin)/admin/home/page.jsx",
                                        lineNumber: 109,
                                        columnNumber: 23
                                    }, this)
                                }
                            ]);
                            const sortedDonations = donations.sort(_DashboardHomeUseEffectFetchStatsDonationsSort);
                            setRecentDonations(sortedDonations.slice(0, 5));
                        } catch (t7) {
                            const err = t7;
                            console.error("Error fetching dashboard data:", err);
                        }
                    }
                }["DashboardHome[useEffect() > fetchStats]"];
                fetchStats();
            }
        })["DashboardHome[useEffect()]"];
        t6 = [];
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold mb-6 text-gray-900",
            children: "Dashboard"
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/home/page.jsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== stats) {
        t8 = stats.map(_DashboardHomeStatsMap);
        $[9] = stats;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
            children: t8
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/home/page.jsx",
            lineNumber: 147,
            columnNumber: 10
        }, this);
        $[11] = t8;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold text-gray-900 mb-4",
            children: "Recent Donations"
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/home/page.jsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: "border-b border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-2",
                        children: "Donor"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/home/page.jsx",
                        lineNumber: 162,
                        columnNumber: 59
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-2",
                        children: "Type"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/home/page.jsx",
                        lineNumber: 162,
                        columnNumber: 90
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-2",
                        children: "Amount / Items"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/home/page.jsx",
                        lineNumber: 162,
                        columnNumber: 120
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "py-2",
                        children: "Date"
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/home/page.jsx",
                        lineNumber: 162,
                        columnNumber: 160
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/home/page.jsx",
                lineNumber: 162,
                columnNumber: 18
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(admin)/admin/home/page.jsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== recentDonations) {
        t12 = recentDonations.map(_DashboardHomeRecentDonationsMap);
        $[15] = recentDonations;
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow p-6 mb-8",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-left",
                        children: [
                            t11,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: t12
                            }, void 0, false, {
                                fileName: "[project]/app/(admin)/admin/home/page.jsx",
                                lineNumber: 177,
                                columnNumber: 144
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(admin)/admin/home/page.jsx",
                        lineNumber: 177,
                        columnNumber: 103
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/home/page.jsx",
                    lineNumber: 177,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/admin/home/page.jsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[17] = t12;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#A7CE44] text-white p-6 rounded-2xl cursor-pointer hover:bg-[#A7CE44] transition",
                    children: "Add Donation"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/home/page.jsx",
                    lineNumber: 185,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#A7CE44] text-white p-6 rounded-2xl cursor-pointer hover:bg-[#A7CE44] transition",
                    children: "Add Program"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/home/page.jsx",
                    lineNumber: 185,
                    columnNumber: 186
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#A7CE44] text-white p-6 rounded-2xl cursor-pointer hover:bg-[#A7CE44] transition",
                    children: "Export Data"
                }, void 0, false, {
                    fileName: "[project]/app/(admin)/admin/home/page.jsx",
                    lineNumber: 185,
                    columnNumber: 305
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/admin/home/page.jsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    let t15;
    if ($[20] !== t13 || $[21] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$admin$292f$admin$2f$components$2f$dashboardlayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                t7,
                t9,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/app/(admin)/admin/home/page.jsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[20] = t13;
        $[21] = t9;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    return t15;
}
_s(DashboardHome, "yQKVxG8z5X8c9JR5Nia1RHdhlpE=");
_c = DashboardHome;
function _DashboardHomeRecentDonationsMap(d_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "border-b border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-2",
                children: d_1.name
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/home/page.jsx",
                lineNumber: 202,
                columnNumber: 65
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-2",
                children: d_1.type
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/home/page.jsx",
                lineNumber: 202,
                columnNumber: 101
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-2",
                children: d_1.type === "cash" ? `$${Number(d_1.amount || 0).toLocaleString()}` : d_1.items
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/home/page.jsx",
                lineNumber: 202,
                columnNumber: 137
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-2",
                children: new Date(d_1.createdAt).toLocaleDateString()
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/home/page.jsx",
                lineNumber: 202,
                columnNumber: 245
            }, this)
        ]
    }, d_1._id, true, {
        fileName: "[project]/app/(admin)/admin/home/page.jsx",
        lineNumber: 202,
        columnNumber: 10
    }, this);
}
function _DashboardHomeStatsMap(stat) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "bg-white p-6 rounded-2xl shadow hover:shadow-lg transition",
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-[#A7CE44]-100 rounded-full",
                        children: stat.icon
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/home/page.jsx",
                        lineNumber: 211,
                        columnNumber: 52
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-700 font-medium",
                        children: stat.label
                    }, void 0, false, {
                        fileName: "[project]/app/(admin)/admin/home/page.jsx",
                        lineNumber: 211,
                        columnNumber: 120
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(admin)/admin/home/page.jsx",
                lineNumber: 211,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-2xl font-bold text-gray-900",
                children: stat.value
            }, void 0, false, {
                fileName: "[project]/app/(admin)/admin/home/page.jsx",
                lineNumber: 211,
                columnNumber: 189
            }, this)
        ]
    }, stat.id, true, {
        fileName: "[project]/app/(admin)/admin/home/page.jsx",
        lineNumber: 205,
        columnNumber: 10
    }, this);
}
function _DashboardHomeUseEffectFetchStatsDonationsSort(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}
function _DashboardHomeUseEffectFetchStatsProgramsReduce(acc_1, curr_1) {
    return acc_1 + (curr_1.beneficiaries || 0);
}
function _DashboardHomeUseEffectFetchStatsAnonymous2(acc_0, curr_0) {
    return acc_0 + (curr_0.items?.split(",").length || 0);
}
function _DashboardHomeUseEffectFetchStatsDonationsFilter2(d_0) {
    return d_0.type.toLowerCase() === "items";
}
function _DashboardHomeUseEffectFetchStatsAnonymous(acc, curr) {
    return acc + (curr.amount || 0);
}
function _DashboardHomeUseEffectFetchStatsDonationsFilter(d) {
    return d.type.toLowerCase() === "cash";
}
function _DashboardHomeUseEffectFetchStatsProgramsFilter(p) {
    return p.status === "Active";
}
var _c;
__turbopack_context__.k.register(_c, "DashboardHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_%28admin%29_admin_2ff35796._.js.map