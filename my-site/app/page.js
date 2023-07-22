"use client";

import React from "react";
import { motion } from "framer-motion";
import About from "./sections/about/about";
import Home from "./sections/home/home";
import Navbar from "./sections/navbar/navbar";

export default function Page() {
    const isMobile = window.innerWidth < 768;

    const rootVariant = {
        enter: {
            opacity: 0,
            y: -50,
        },
        center: {
            opacity: 1,
            y: 0,
            transition: { duration: 2, type: "spring" },
        },
    };

    return (
        <motion.div
            className={
                "flex min-h-screen flex-col items-center " +
                "justify-between p-16 "
            }
            initial="enter"
            animate="center"
            variants={rootVariant}
        >
            <Navbar isMobile={isMobile} />

            <Home isMobile={isMobile} />

            <About isMobile={isMobile} />
        </motion.div>
    );
}
