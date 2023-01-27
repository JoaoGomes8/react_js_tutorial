import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <>
            <nav>
                navegação
            </nav>
            <Outlet />
        </>
    )
}