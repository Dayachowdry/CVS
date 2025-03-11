"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

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
      staggerChildren: 0.1
    }
  }
};

const tabHoverEffect = {
  scale: 1.05,
  backgroundColor: "rgba(59, 130, 246, 0.1)",
  transition: { duration: 0.2 }
};

const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.5
    }
  }
};

const skillBarAnimation = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: { 
      duration: 1.2,
      ease: "easeOut",
      delay: 0.2
    }
  })
};

const skillCategories = [
  {
    id: "cybersecurity",
    name: "Cybersecurity Management",
    skills: [
      { name: "Identity and Access Management", level: 95 },
      { name: "Compliance", level: 90 },
      { name: "AI Security", level: 85 },
      { name: "Security Operations", level: 95 },
      { name: "Auditing", level: 90 },
      { name: "Data Loss Prevention", level: 95 },
      { name: "Access and Governance", level: 90 },
      { name: "Zero Trust Concepts", level: 85 },
      { name: "Insider Risk", level: 90 },
      { name: "Agile Methodology", level: 80 },
      { name: "Privileged Account Management", level: 85 }
    ]
  },
  {
    id: "security",
    name: "Security Skills",
    skills: [
      { name: "Cloud Security", level: 90 },
      { name: "Endpoint Security", level: 95 },
      { name: "Usecase development", level: 90 },
      { name: "Identity management", level: 85 },
      { name: "Threat hunting", level: 90 },
      { name: "Network security", level: 85 },
      { name: "Access reviews", level: 90 },
      { name: "Compliance auditing", level: 85 },
      { name: "Security awareness training", level: 80 }
    ]
  },
  {
    id: "compliance",
    name: "Compliance and Framework",
    skills: [
      { name: "NIST", level: 95 },
      { name: "Mitre Att&CK", level: 90 },
      { name: "ISO 27001", level: 85 },
      { name: "PCI DSS", level: 90 },
      { name: "OWASP", level: 85 },
      { name: "HIPAA and HITRUST", level: 90 },
      { name: "SOX", level: 85 }
    ]
  },
  {
    id: "technologies",
    name: "Technologies",
    skills: [
      { name: "EDR", level: 95 },
      { name: "SIEM", level: 90 },
      { name: "DLP", level: 95 },
      { name: "CASB", level: 90 },
      { name: "IDPS", level: 85 },
      { name: "Firewalls", level: 90 },
      { name: "Generative AI Security", level: 85 },
      { name: "Container Security", level: 80 },
      { name: "TLS", level: 90 },
      { name: "IPS", level: 85 },
      { name: "IDS", level: 85 }
    ]
  },
  {
    id: "tools",
    name: "Tools",
    skills: [
      { name: "MS Purview", level: 95 },
      { name: "Microsoft Sentinel", level: 90 },
      { name: "Symantec", level: 85 },
      { name: "CheckPoint", level: 80 },
      { name: "Terraform", level: 75 },
      { name: "Qualys", level: 85 },
      { name: "Microsoft Defender", level: 95 },
      { name: "Azure logic apps", level: 80 },
      { name: "Entra", level: 85 },
      { name: "AWS Certificate Manager", level: 75 },
      { name: "Splunk", level: 90 },
      { name: "ArcSight", level: 85 },
      { name: "Exabeam", level: 80 },
      { name: "SailPoint", level: 85 },
      { name: "Nessus Tenable", level: 90 },
      { name: "Netskope", level: 85 },
      { name: "CyberArk", level: 90 },
      { name: "Datalake", level: 85 },
      { name: "Illumio", level: 80 },
      { name: "Varonis", level: 85 },
      { name: "Kali Linux", level: 80 },
      { name: "Active Directory", level: 90 },
      { name: "Jira", level: 85 },
      { name: "Okta", level: 90 },
      { name: "Office", level: 85 },
      { name: "Virtualization", level: 80 },
      { name: "CrowdStrike", level: 90 },
      { name: "McAfee", level: 85 },
      { name: "Proofpoint", level: 90 },
      { name: "Imperva", level: 85 },
      { name: "Knowbe4", level: 80 },
      { name: "AWS KMS", level: 85 }
    ]
  },
  {
    id: "other",
    name: "Other Skills",
    skills: [
      { name: "Cloud (Azure, AWS)", level: 90 },
      { name: "Scripting (Python and KQL)", level: 85 },
      { name: "Emotional Intelligence", level: 90 },
      { name: "Proactive", level: 95 },
      { name: "Logical Reasoning", level: 90 },
      { name: "Innovative", level: 85 },
      { name: "Collaborative", level: 90 },
      { name: "Active Listening", level: 85 }
    ]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-neutral-50 dark:bg-neutral-900">
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
            Skills & Expertise
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-neutral-600 dark:text-neutral-400"
          >
            My technical proficiency across a wide range of security technologies and platforms.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Tabs defaultValue="cybersecurity" className="w-full">
            <div className="overflow-x-auto pb-2 -mx-4 px-4">
              <TabsList className="w-max flex mb-8 mx-auto">
                {skillCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    whileHover={tabHoverEffect}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TabsTrigger value={category.id} className="px-4 py-2 whitespace-nowrap">
                      {category.name}
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </div>
            
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div
                  variants={cardAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  <Card className="overflow-hidden border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
                    <CardContent className="p-6">
                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div 
                            key={index} 
                            variants={fadeIn}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="mb-2 flex justify-between">
                              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                                {skill.name}
                              </span>
                              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-blue-500 rounded-full"
                                custom={skill.level}
                                variants={skillBarAnimation}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <motion.h3 
            variants={fadeIn}
            className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-50"
          >
            Certifications
          </motion.h3>
          <motion.div 
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4"
          >
            {["MCSE", "CompTIA Security +", "CISM"].map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgba(59, 130, 246, 0.1)" 
                }}
                className="bg-white dark:bg-neutral-800 px-6 py-3 rounded-full shadow-sm border border-neutral-200 dark:border-neutral-700"
              >
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  {cert}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
