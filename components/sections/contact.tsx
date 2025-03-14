"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

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

const cardHoverEffect = {
  scale: 1.03,
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  transition: { duration: 0.3, ease: "easeOut" }
};

const formItemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5,
      delay: 0.1 * custom,
      ease: "easeOut"
    }
  })
};

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
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
            Get In Touch
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-neutral-600 dark:text-neutral-400"
          >
            Feel free to reach out for collaborations or just a friendly chat.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-50">
                Contact Information
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                I'm currently available for new opportunities. Let's connect and discuss how I can contribute to your organization's security posture.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-4">
              <motion.div variants={fadeIn}>
                <motion.div whileHover={cardHoverEffect}>
                  <Card className="border border-transparent hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                  <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
                    <Mail className="h-5 w-5 text-blue-500 mr-4" />
                    <div className="mt-1 sm:mt-0">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Email</p>
                      <a 
                        href="mailto:dayanandathaloori@gmail.com" 
                        className="text-neutral-900 dark:text-neutral-50 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      >
                        dayanandathaloori@gmail.com
                      </a>
                    </div>
                  </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <motion.div whileHover={cardHoverEffect}>
                  <Card className="border border-transparent hover:border-green-300 dark:hover:border-green-700 transition-all duration-300">
                  <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
                    <Phone className="h-5 w-5 text-green-500 mr-4 mb-1 sm:mb-0" />
                    <div className="mt-1 sm:mt-0">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Phone</p>
                      <a 
                        href="tel:+12532007252" 
                        className="text-neutral-900 dark:text-neutral-50 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                      >
                        +1 253 200 7252
                      </a>
                    </div>
                  </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <motion.div whileHover={cardHoverEffect}>
                  <Card className="border border-transparent hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                  <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
                    <Linkedin className="h-5 w-5 text-blue-600 mr-4 mb-1 sm:mb-0" />
                    <div className="mt-1 sm:mt-0">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/thalooridayananda/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral-900 dark:text-neutral-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                      >
                        linkedin.com/in/thalooridayananda
                      </a>
                    </div>
                  </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border border-transparent hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-50">
                      Message Sent!
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <Button 
                      className="mt-6" 
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-50">
                      Send a Message
                    </h3>
                    <div className="space-y-4">
                      <motion.div custom={1} variants={formItemAnimation}>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-100"
                        />
                      </motion.div>
                      <motion.div custom={2} variants={formItemAnimation}>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-100"
                        />
                      </motion.div>
                      <motion.div custom={3} variants={formItemAnimation}>
                        <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-100"
                        />
                      </motion.div>
                      <motion.div custom={4} variants={formItemAnimation}>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formState.message}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-100"
                        />
                      </motion.div>
                      <motion.div custom={5} variants={formItemAnimation}>
                        <Button 
                          type="submit" 
                          className="w-full relative overflow-hidden group" 
                          disabled={isSubmitting}
                        >
                          <span className="absolute inset-0 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                          <span className="relative">
                        {isSubmitting ? "Sending..." : "Send Message"}
                          </span>
                        </Button>
                      </motion.div>
                    </div>
                  </form>
                )}
              </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
