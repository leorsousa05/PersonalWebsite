"use client";

import React, { useState, useRef } from "react";
import { motion, MotionConfig } from "framer-motion";
import PageButton from "./page-button";
import Subtitle from "./subtitle";
import AboutSubpage from "./about-subpage";
import EducationSubpage from "./education-subpage";
import ExperienceSubpage from "./experiences-subpage";
import { aboutSubpages } from "@/app/components/constants";

function About() {
    const [page, setPage] = useState(0);

    const rootVariant = {
        enter: {
            opacity: 0,
        },
        center: {
            opacity: 1,
            transition: {
                delayChildren: 0.7,
                staggerChildren: 0.3,
            },
        },
    };

    const pageButtonDivVariant = {
        enter: {
            opacity: 0,
            scale: 0,
        },
        center: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                staggerChildren: 0.3,
            },
        },
    };

    return (
        <motion.div
            className="w-full"
            initial="enter"
            whileInView="center"
            viewport={{ once: true }}
            variants={rootVariant}
        >
            <div
                id="about"
                className="md:-translate-y-20 lg:translate-y-12 h-10 w-10"
            ></div>
            <motion.div
                className={
                    "w-full h-fit flex flex-col justify-center " +
                    "items-center py-10 lg:py-28"
                }
            >
                <Subtitle />

                <motion.div
                    className={"m-6 flex flex-row bg-slate-200 rounded-lg px-1"}
                    variants={pageButtonDivVariant}
                >
                    {aboutSubpages.map((e, i) => (
                        <PageButton
                            key={e}
                            label={e}
                            setActivePage={setPage}
                            activePage={page}
                            pageNum={i}
                        />
                    ))}
                </motion.div>

                <motion.div
                    className={
                        "w-full bg-slate-100 h-fit flex justify-center py-12"
                    }
                >
                    <MotionConfig
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.5 },
                        }}
                    >
                        {page == 0 ? <AboutSubpage /> : null}
                        {page == 1 ? <EducationSubpage /> : null}
                        {page == 2 ? <ExperienceSubpage /> : null}
                    </MotionConfig>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default About;
