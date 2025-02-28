"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";
import { Gauge, Zap } from "lucide-react";
import LightningAnimation from "./ani";

function ExampleSection() {
  return (
    <section className="py-10 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-12 items-center">
          <motion.div
            className="bg-slate-800 p-6 md:p-6 shadow-4xl backdrop-blur bg-transparent bg-slate-200 mt-8 md:mt-0 hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
  <span className="inline-flex">
    <LightningAnimation />
  </span>
          </motion.div>

          {/* Text Content Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center justify-center md:justify-start gap-2">
              Showcasing Our Work in Action
              <span className="inline-flex">
                <Zap className="h-8 w-8 text-sky-500" />
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4 md:mt-6 leading-relaxed">
              We craft Cutting-edge digital experiences. Ideas into real-world solutions.
              From sleek MVPs to full-fledged applications, our work speaks for itself.
            </p>
            <p className="text-base sm:text-lg text-slate-300 mt-4 md:mt-6 leading-relaxed"> 🚀 Fast. Scalable. Impactful.</p>
            <div className="mt-6 md:mt-8">
              <Button className="bg-sky-500 hover:bg-sky-400 text-white font-semibold h-10 md:h-12 px-6 md:px-8 rounded-lg transition-colors">
                Browse Demos
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ExampleSection;
