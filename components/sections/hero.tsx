"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import * as THREE from "three";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles - reduce count on mobile for better performance
    const particlesGeometry = new THREE.BufferGeometry();
    const isMobile = window.innerWidth < 768;
    const particlesCount = isMobile ? 500 : 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * (isMobile ? 4 : 5);
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.007 : 0.005,
      color: new THREE.Color(0x0077ff),
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.6, 0.05, -0.01, 0.9] 
            }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 text-neutral-900 dark:text-neutral-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2,
                ease: "easeOut" 
              }}
            >
              Dayananda Thaloori
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4,
                ease: "easeOut" 
              }}
            >
              Cybersecurity & Information Security Management Professional
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6,
                ease: "easeOut" 
              }}
            >
              Over nine years of extensive experience specializing in data protection, 
              AI security, and security operations. Proven ability to lead and support 
              data protection solutions to mitigate risks of data breaches.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.8,
                ease: "easeOut" 
              }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="relative overflow-hidden group">
                  <a href="#contact" className="relative z-10">
                    <span className="absolute inset-0 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    <span className="relative">Get in Touch</span>
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" asChild className="relative overflow-hidden group">
                  <a href="#experience" className="relative z-10">
                    <span className="absolute inset-0 w-0 bg-neutral-100 dark:bg-neutral-800 transition-all duration-300 group-hover:w-full"></span>
                    <span className="relative">View Experience</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.2, 
          duration: 0.5, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      >
        <Button variant="ghost" size="icon" asChild>
          <a href="#about">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
