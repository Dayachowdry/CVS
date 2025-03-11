"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
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

const slideIn = {
  hidden: (direction: "left" | "right") => ({
    x: direction === "left" ? -50 : 50,
    opacity: 0
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse" as const
  }
};

const experiences = [
  {
    company: "Freddie Mac",
    position: "Senior Security Specialist",
    period: "June 2024 - Present",
    highlights: [
      "Design and implement robust security capabilities to protect enterprise data landscape",
      "Develop comprehensive data security architecture adhering to industry standards",
      "Implement and manage advanced Data Loss Prevention (DLP) tools",
      "Collaborate with Security Operations team to investigate data breach incidents",
      "Provide expert recommendations on best practices in data protection and PKI",
      "Spearhead initiatives to ensure compliance with regulatory frameworks",
      "Maintain continuous security posture using Azure Monitor and Elasticsearch",
      "Engineer solutions to reinforce the integrity of AI models against security threats"
    ],
    technologies: "Splunk, Illumio, Zscaler, MS Sentinel, MS Defender, MS Purview, TLS, IDS, IPS, AWS KMS"
  },
  {
    company: "Vituity (AVPL)",
    position: "Senior IT Security Engineer",
    period: "Dec 2023 - June 2024",
    highlights: [
      "Optimized Microsoft Defender, reducing false positives by 60%",
      "Assisted in AI Security Strategy Development using Microsoft Defender and AWS Config",
      "Automated infrastructure management with Terraform for Azure",
      "Contributed to data protection initiatives using Azure Key Vault and DLP policies",
      "Supported AI model protection efforts using Scikit-learn and TensorFlow frameworks",
      "Designed and developed custom SIEM applications and extensions",
      "Implemented Microsoft Purview, reducing data loss incidents by 30%",
      "Enhanced password security, reducing password-related incidents by 50%"
    ],
    technologies: "Splunk, Illumio, Zscaler, MS Sentinel, MS Defender, MS Purview, MS Entra, MS Intune, Abnormal, Jira, ServiceNow, Sailpoint, SpyCloud, Bolster"
  },
  {
    company: "Applied Materials",
    position: "Information Security Lead",
    period: "Oct 2021 - Dec 2023",
    highlights: [
      "Led integration and management of Purview's DLP solutions to enhance corporate data security",
      "Delivered tailored DLP solutions meeting strict compliance requirements",
      "Utilized NIST framework for risk monitoring and reporting across organizations",
      "Created rules to protect PII and sensitive health data from unauthorized exposure",
      "Supported insider risk & data protection initiatives",
      "Participated in ISO 27001 audit",
      "Spearheaded deployment of advanced security features like EDM, IDM, and OCR",
      "Operationalized security tools from use case development to remediation process design"
    ],
    technologies: "Splunk, Zscaler, MS Sentinel, MS Defender, MS Purview, Proofpoint, Varonis, Abnormal"
  },
  {
    company: "Wipfli LLC",
    position: "IT Security Consultant",
    period: "October 2016 - 2021",
    highlights: [
      "Provided subject matter expertise in DLP, MSS, MDR, and SIEM",
      "Developed DLP use cases and correlation rules for Azure Cloud and onsite environments",
      "Managed incident response and SOC operations",
      "Integrated security technologies with SIEM including DLP, CASB, PAM, EDR, UEBA",
      "Utilized Python libraries for effective log analysis at big data level",
      "Assisted customers in optimizing SIEM system capabilities",
      "Developed and maintained Standard Operating Procedures for SOC functions",
      "Ensured compliance to SLA and process adherence"
    ],
    technologies: "SIEM, DLP, CASB, PAM, EDR, UEBA, Python, Azure Cloud"
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
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
            Professional Experience
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-neutral-600 dark:text-neutral-400"
          >
            My career journey in cybersecurity and information security management.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 w-0.5 bg-neutral-200 dark:bg-neutral-700"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className={`relative mb-12 md:mb-16 pl-16 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-auto md:mr-[50%]' : 'md:pl-12 md:mr-auto md:ml-[50%]'
              }`}
            >
              {/* Timeline dot */}
              <motion.div 
                className={`absolute top-6 left-0 md:left-auto ${
                  index % 2 === 0 ? 'md:-right-6' : 'md:-left-6'
                } w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center z-10`}
                animate={pulseAnimation}
              >
                <Briefcase className="text-white h-6 w-6" />
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                custom={index % 2 === 0 ? "left" : "right"}
                variants={slideIn}
              >
                <Card className="relative z-0 border border-transparent hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-neutral-500 dark:text-neutral-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="list-disc pl-5 mb-4 space-y-1 text-neutral-600 dark:text-neutral-400">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm">{highlight}</li>
                    ))}
                  </ul>

                  <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <strong>Environment:</strong> {exp.technologies}
                  </div>
                </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
