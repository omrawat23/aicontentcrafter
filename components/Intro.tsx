"use client";

import { Icons } from "./Icons";
import { Badge } from "./ui/badge";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";


export function IntroFadeIn({ githubStars }: { githubStars: number | null }) {
    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };


    return (
        <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
        >
            <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="hidden sm:mb-8 sm:flex sm:justify-center "
            >
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-ring/10 hover:ring-ring/20">
                    Introducing CodeAssist. {" "}
                    <Link href="https://github.com/omrawat23/aicontentcrafter/blob/main/README.md" className="font-semibold text-primary">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </motion.div>

            <motion.h1
                className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-center"
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
             Master Coding with AI-Driven Insights
                <br />
                 and Assistance
            </motion.h1>
            <motion.p
                className="mt-8 text-lg leading-8 text-muted-foreground"
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                CodeAssist: Code Smarter with AI Assistance.
            </motion.p>
            <motion.div
                className="mt-4 flex items-center justify-center gap-x-6"
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
               
            </motion.div>
            <motion.div
                className="mt-6 flex items-center justify-center gap-x-6"
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                <Link href="/dashboard" passHref>
                    <Button>Get Started</Button>
                </Link>
                <Link href="https://github.com/omrawat23/aicontentcrafter/blob/main/README.md" passHref>
                    <Button variant="outline">
                        Learn more&nbsp;<span aria-hidden="true">→</span>
                    </Button>
                </Link>
            </motion.div>
        </motion.div>
    );
}