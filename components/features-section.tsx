"use client";

import { motion } from 'framer-motion'
import { Code, Zap, Palette, Layout, Users, ChevronRight, RocketIcon, Gauge, Box, Shuffle, CloudLightning, ScanSearch } from 'lucide-react'
import React from 'react'

function FeaturesSection() {
  return (
    <section className="py-5 lg:py-20 pb-20 backdrop-blur-sm">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
      Everything you need, we build it.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <Box className="h-8 w-8 text-sky-500" />,
            title: "Product Development",
            description:
              "We build powerful, scalable, and customized digital solutions tailored to your business needs.",
          },
          {
            icon: <Gauge className="h-8 w-8 text-sky-500" />,
            title: "Lightning fast MVP ",
            description:
              " we rapidly build and validate MVPs using Agile methodologies, helping startups and businesses launch fast.",
          },
          
          
          {
            icon: <RocketIcon className="h-8 w-8 text-sky-500" />,
            title: "Strategic Marketing & Growth",
            description:
              "We develop targeted strategies to maximize your reach and engage the right audience.",
          },
          {
            icon: <ScanSearch className="h-8 w-8 text-sky-500" />,
            title: "SEO & Digital Marketing",
            description:
              "Boost your online presence with our expert SEO and marketing strategies that drive real results.",
          },
          {
            icon: <Shuffle className="h-8 w-8 text-sky-500" />,
            title: "Brand Revamp",
            description:
              "From logo redesign to full brand identity, we help you refresh your brand’s image for maximum impact.",
          },
          {
            icon: <CloudLightning className="h-8 w-8 text-sky-500" />,
            title: "Transition & Migrations",
            description:
              "Seamlessly move to modern platforms with zero downtime and 100% efficiency",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 rounded-lg shadow-lg p-6 hover:bg-slate-700 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-slate-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default FeaturesSection