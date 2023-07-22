"use client";

import React from "react";
import Title from "./title";
import ProfilePicture from "./profile-picture";
import { motion } from "framer-motion";
import MainButton from "@/app/components/main-button";

function Home({ isMobile }) {
    return (
        <motion.div
            className={
                "w-screen h-screen flex flex-col justify-center items-center " +
                "pb-24 text-center bg-gradient-to-t from-red-400 to-amber-500 " + 
                "shadow-lg"
            }
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <ProfilePicture isMobile={isMobile} />
            <Title />
            <MainButton
                title="View My Resume"
                additionalStyles={
                    "m-10 md:px-10 bg-white text-slate-800 " +
                    "text-xl md:text-3xl"
                }
            />
        </motion.div>
    );
}

export default Home;
