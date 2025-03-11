"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Shield, Server, Database, Lock } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const features = [
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: "Data Protection",
    description: "Specialized in implementing robust data protection solutions to mitigate risks of data breaches and ensure compliance with regulatory standards."
  },
  {
    icon: <Server className="h-8 w-8 text-green-500" />,
    title: "Security Operations",
    description: "Strong background in managing day-to-day security operations, leading cross-functional teams, and ensuring operational stability."
  },
  {
    icon: <Database className="h-8 w-8 text-purple-500" />,
    title: "AI Security",
    description: "Expert in securing AI systems and infrastructure, protecting models against threats, and ensuring data privacy in AI workflows."
  },
  {
    icon: <Lock className="h-8 w-8 text-red-500" />,
    title: "Compliance",
    description: "Proven expertise in implementing and managing security frameworks aligned with NIST, PCI, HIPAA, and other industry standards."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-50"
          >
            About Me
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-neutral-600 dark:text-neutral-400"
          >
            With over nine years of experience in cybersecurity and information security management, 
            I specialize in architecting, deploying, and managing security strategies to safeguard 
            enterprise data and infrastructure. My expertise includes data protection, AI security, 
            and security operations, implementing frameworks aligned with industry standards. 
            I'm proficient in Python, KQL, and various operating environments, enabling me to enhance 
            security tools and streamline processes.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-medium mb-2 text-neutral-900 dark:text-neutral-50">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
