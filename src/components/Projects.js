import React from "react";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

const Projects = () => {
  const projects = [
    {
      title: "Retentive",
      baseImage: `${process.env.PUBLIC_URL}/retentive/retentive-image.png`,
      baseDescription:
        "Retentive is a commercial desktop SaaS application for spaced repetition learning, featuring a 14-day free trial and subscription plans. Uses science-backed algorithms to boost memory retention by 200%, with AI-powered smart scheduling, focus timer with adherence tracking, and four learning modes.",
      tools: ["Electron", "React", "SQLite", "Supabase", "TypeScript"],
      dialectDescription: (
        <>
          <p className="text-gray-800 mb-4">
            Retentive is a fully commercial desktop application that transforms
            how you learn. Built as a SaaS product with Stripe payment
            integration, it offers a 14-day free trial followed by flexible
            subscription plans ($5/month, $12/quarter, or $15/semi-annual). The
            app leverages cognitive science research and spaced repetition
            algorithms to determine the optimal time to review each item based
            on your performance.
          </p>

          <p className="text-gray-800 font-semibold mb-2">Key Features:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            <li>AI-powered smart scheduling for optimal review timing</li>
            <li>Four learning modes: Ultra-Cram, Cram, Steady, and Extended</li>
            <li>Built-in focus timer with real-time adherence tracking</li>
            <li>Gamified learning with streaks and achievements</li>
            <li>Progress tracking with beautiful visualizations</li>
            <li>Organize knowledge into topics and subtopics</li>
            <li>Offline mode with cloud sync via Supabase</li>
            <li>Export your data anytime</li>
          </ul>
        </>
      ),
      allTools: [
        "Electron",
        "React 18",
        "TypeScript",
        "SQLite (better-sqlite3)",
        "Supabase",
        "React Router",
        "Recharts",
        "Lucide React",
        "Node Schedule",
        "Vite",
        "Electron Builder",
      ],
      dialectImages: [
        // `${process.env.PUBLIC_URL}/retentive/demo.gif`,
      ],
      // githubLink: "https://github.com/MahirAbrar/retentive",
      liveLink: "https://retentive-learning-app.vercel.app/",
      moreInformation: (
        <>
          <p className="text-gray-800 font-semibold mb-2">Learning Modes:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li className="text-gray-800">
              Ultra-Cram (30s → 2h → 1d → 3d): Night before exams, urgent
              deadlines
            </li>
            <li className="text-gray-800">
              Cram (2h → 1d → 3d → 7d): Presentations, job interviews
            </li>
            <li className="text-gray-800">
              Steady (1d → 3d → 7d → 14d): Regular coursework, professional
              development
            </li>
            <li className="text-gray-800">
              Extended (3d → 7d → 14d → 30d): Background knowledge, general
              interest
            </li>
          </ul>

          <p className="text-gray-800 font-semibold mb-2">
            Focus Timer Features:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li className="text-gray-800">
              Set custom session goals and durations
            </li>
            <li className="text-gray-800">
              Real-time adherence monitoring with distraction tracking
            </li>
            <li className="text-gray-800">
              Track work/break ratio and focus patterns
            </li>
            <li className="text-gray-800">
              Build better study habits with adherence insights
            </li>
          </ul>

          <p className="text-gray-800 font-semibold mb-2">Business Model:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li className="text-gray-800">
              14-day free trial with full access, no credit card required
            </li>
            <li className="text-gray-800">Monthly: $5/month</li>
            <li className="text-gray-800">
              Quarterly: $12/3 months (20% off - $4/month)
            </li>
            <li className="text-gray-800">
              Semi-Annual: $15/6 months (50% off - $2.50/month)
            </li>
          </ul>

          <p className="text-gray-800 font-semibold mb-2">
            Technical Implementation:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-800">
              Cross-platform desktop app with Electron
            </li>
            <li className="text-gray-800">
              Local-first architecture with SQLite for offline support
            </li>
            <li className="text-gray-800">
              Cloud sync and authentication via Supabase
            </li>
            <li className="text-gray-800">
              Stripe integration for subscription payments
            </li>
            <li className="text-gray-800">
              Scheduled notifications using node-schedule
            </li>
            <li className="text-gray-800">
              Interactive charts and statistics with Recharts
            </li>
            <li className="text-gray-800">Apple Silicon optimized for macOS</li>
          </ul>
        </>
      ),
    },
    {
      title: "AttireAlley",
      baseImage: `${process.env.PUBLIC_URL}/attirealley/aalanding.png`,
      baseDescription:
        "AttireAlley is a production-ready e-commerce platform featuring role-based access (admin/customer), AI-powered outfit suggestions, real-time order tracking, and comprehensive product management. Built with Next.js and MongoDB, it includes Stripe payment integration, JWT authentication, and responsive design.",
      tools: [
        "Next.js 14",
        "MongoDB Atlas",
        "Stripe",
        "JWT Auth",
        "AI Integration",
      ],
      dialectDescription: (
        <>
          <p className="text-gray-800 mb-4">
            AttireAlley is a fully-featured e-commerce platform with modern
            architecture, secure payment processing, and excellent user
            experience for both customers and administrators.
          </p>

          <p className="text-gray-800 font-semibold mb-2">Customer Features:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800 mb-4">
            <li>
              Secure JWT authentication with httpOnly cookies & auto-refresh
            </li>
            <li>Browse products by category (Men, Women, Kids, Everyone)</li>
            <li>
              Product galleries with size selection (XS-XXL) & sale indicators
            </li>
            <li>Persistent shopping cart with real-time updates</li>
            <li>Secure Stripe checkout with multiple addresses</li>
            <li>Order tracking with status timeline (pending → delivered)</li>
            <li>
              AI-powered outfit suggestions & color palette recommendations
            </li>
            <li>Dark mode toggle & responsive design</li>
          </ul>

          <p className="text-gray-800 font-semibold mb-2">Admin Features:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            <li>
              Dashboard with statistics (products, orders, users, revenue)
            </li>
            <li>Product management with live preview & bulk image upload</li>
            <li>Order management with advanced filtering & search</li>
            <li>Update order status with tracking numbers & notes</li>
            <li>Price drop/sale management & inventory by sizes</li>
            <li>User management interface (ready for backend integration)</li>
          </ul>
        </>
      ),
      allTools: [
        "Next.js 14.2.2",
        "React 18",
        "Tailwind CSS",
        "DaisyUI",
        "GSAP & ScrollTrigger",
        "Framer Motion",
        "MongoDB Atlas",
        "Mongoose",
        "JWT (jsonwebtoken)",
        "bcryptjs",
        "Stripe API",
        "Firebase Storage",
        "OpenAI API",
        "react-toastify",
        "js-cookie",
        "Next.js API Routes",
      ],
      dialectImages: [
        `${process.env.PUBLIC_URL}/attirealley/aapageshow.gif`,
        `${process.env.PUBLIC_URL}/attirealley/aalogin.gif`,
        `${process.env.PUBLIC_URL}/attirealley/aacheckout.gif`,
        `${process.env.PUBLIC_URL}/attirealley/aaai.gif`,
      ],
      githubLink: "https://github.com/MahirAbrar/AttireAlley",
      liveLink: "https://attirealley.vercel.app/",
      moreInformation: (
        <>
          <p className="text-gray-800 font-semibold mb-2">Security Features:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li className="text-gray-800">
              JWT authentication with secure httpOnly cookies
            </li>
            <li className="text-gray-800">Password hashing with bcrypt</li>
            <li className="text-gray-800">
              API route protection with auth middleware
            </li>
            <li className="text-gray-800">
              Rate limiting on sensitive endpoints
            </li>
            <li className="text-gray-800">
              CORS configuration & environment variable validation
            </li>
            <li className="text-gray-800">
              Secure payment processing with Stripe webhooks
            </li>
          </ul>

          <p className="text-gray-800 font-semibold mb-2">
            Technical Features:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li className="text-gray-800">SEO optimization with Next.js</li>
            <li className="text-gray-800">
              Image optimization with Next/Image
            </li>
            <li className="text-gray-800">Code splitting & lazy loading</li>
            <li className="text-gray-800">
              API route caching & optimized bundle size
            </li>
            <li className="text-gray-800">
              Real-time cart updates & order status tracking
            </li>
            <li className="text-gray-800">Live product preview for admins</li>
            <li className="text-gray-800">
              Dark mode support with smooth transitions
            </li>
            <li className="text-gray-800">
              Toast notifications & confirmation modals
            </li>
            <li className="text-gray-800">Empty states & loading skeletons</li>
            <li className="text-gray-800">
              Breadcrumb navigation & accessibility features
            </li>
          </ul>

          <p className="text-gray-800 font-semibold mb-2">Business Logic:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-800">
              Role-based access control (Admin vs Customer)
            </li>
            <li className="text-gray-800">
              Automatic cart clearing after purchase
            </li>
            <li className="text-gray-800">Order status progression workflow</li>
            <li className="text-gray-800">
              Price calculations with sales/discounts
            </li>
            <li className="text-gray-800">Inventory management by size</li>
            <li className="text-gray-800">Multi-step checkout process</li>
            <li className="text-gray-800">
              Order confirmation emails (planned)
            </li>
            <li className="text-gray-800">Production-ready error handling</li>
            <li className="text-gray-800">Optimized for Vercel deployment</li>
          </ul>
        </>
      ),
    },
    {
      title: "Leetcode AI Assistant Extension",
      baseImage: `${process.env.PUBLIC_URL}/leetcodeai.jpeg`,
      baseDescription:
        "A Chrome extension that provides AI-powered assistance for Leetcode problem-solving without giving direct answers. It helps users improve their problem-solving skills through guided hints and explanations using Groq's high-speed inference models.",
      tools: ["HTML", "CSS", "JavaScript", "Chrome Extension API", "Groq API"],
      dialectDescription: (
        <>
          <p className="text-gray-800 mb-4">
            The Leetcode AI Assistant Extension is a comprehensive tool designed
            to enhance the learning experience on Leetcode. It provides
            intelligent, context-aware assistance through multiple AI models,
            helping users develop better algorithmic thinking skills while
            maintaining control over their learning process.
          </p>

          <p className="text-gray-800 font-semibold mb-2">Key Features:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            <li>
              Multiple AI Models Support (Llama 4, Llama 3.3 70B, Qwen QwQ,
              DeepSeek R1)
            </li>
            <li>
              Three Assistance Modes:
              <ul className="list-disc pl-5 mt-1">
                <li>Hints Mode: Subtle guidance without solutions</li>
                <li>
                  Critical Thinking Mode: Analysis of problem-solving approach
                </li>
                <li>Problem Solving Mode: Step-by-step guidance</li>
              </ul>
            </li>
            <li>Real-time coding assistance</li>
            <li>Customizable assistance levels</li>
            <li>Time and space complexity analysis</li>
            <li>Alternative approach suggestions</li>
            <li>Code optimization tips</li>
            <li>Edge case identification</li>
          </ul>
        </>
      ),
      allTools: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Chrome Extension API",
        "Groq API",
        "Manifest V3",
        "Chrome Storage API",
        "Llama 4",
        "Llama 3.3 70B",
        "Qwen QwQ",
        "DeepSeek R1",
      ],
      dialectImages: [
        `${process.env.PUBLIC_URL}/leetcode/lcgif.gif`,
        `${process.env.PUBLIC_URL}/leetcode/lcfullsettings.png`,
        `${process.env.PUBLIC_URL}/leetcode/lcmetaphor.png`,
        `${process.env.PUBLIC_URL}/leetcode/lcpopup.png`,
      ],
      githubLink: "https://github.com/MahirAbrar/leetcode-ai-assistant",
      moreInformation: (
        <>
          <p className="text-gray-800">
            The Leetcode AI Assistant Extension leverages Groq's high-speed
            inference models to provide intelligent assistance while solving
            coding problems. The extension integrates seamlessly with Leetcode's
            interface, offering context-aware help that adapts to the user's
            current problem and progress.
          </p>

          <p className="text-gray-800">Technical Implementation:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-800">
              Chrome Extension architecture using Manifest V3
            </li>
            <li className="text-gray-800">
              Content scripts for LeetCode website integration
            </li>
            <li className="text-gray-800">
              Background service worker for API communication
            </li>
            <li className="text-gray-800">
              Groq API integration with 30 free requests per hour
            </li>
            <li className="text-gray-800">
              Chrome Storage API for secure settings persistence
            </li>
            <li className="text-gray-800">
              Minimal permissions (storage and activeTab)
            </li>
            <li className="text-gray-800">
              Domain-specific activation (LeetCode.com)
            </li>
          </ul>

          <p className="mt-4 text-gray-800">User Configuration and Security:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-800">Secure API key management</li>
            <li className="text-gray-800">Model selection and customization</li>
            <li className="text-gray-800">Assistance mode preferences</li>
            <li className="text-gray-800">
              Settings persistence across sessions
            </li>
          </ul>

          <p className="mt-4 text-gray-800">
            The extension is designed to promote learning and understanding
            rather than just providing solutions. It helps users:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-800">
              Develop independent problem-solving skills
            </li>
            <li className="text-gray-800">
              Understand algorithmic concepts and patterns
            </li>
            <li className="text-gray-800">Learn optimization strategies</li>
            <li className="text-gray-800">
              Identify and handle edge cases effectively
            </li>
            <li className="text-gray-800">
              Improve coding efficiency and best practices
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Max Momentum - AI Calendar & To do list",
      baseImage: `${process.env.PUBLIC_URL}/maxmomentum/maxmomentum.png`,
      baseDescription:
        "Max Momentum is a comprehensive productivity platform that combines AI-powered task management with an interactive calendar system. Built as a SaaS application, it offers intelligent scheduling, daily planning, and productivity insights through advanced AI capabilities. Coming soon in Mid 2025.",
      tools: [
        "Next.js",
        "Supabase",
        "OpenAI API",
        "TypeScript",
        "Tailwind CSS",
      ],
      dialectDescription: (
        <>
          <p className="text-gray-800 mb-4">
            Max Momentum is a modern productivity tool that leverages AI to
            enhance task management and scheduling. The platform offers a
            freemium model with AI interaction limits, providing users with
            intelligent assistance in organizing their daily activities and
            optimizing their productivity.
          </p>

          <p className="text-gray-800 font-semibold mb-2">Key Features:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            <li>Secure user authentication and profile management</li>
            <li>Advanced task management with CRUD operations</li>
            <li>Interactive calendar with day/week views</li>
            <li>AI-powered task scheduling and daily planning</li>
            <li>Intelligent task reordering for missed tasks</li>
            <li>Productivity score calculation and analytics</li>
            <li>Relaxation feedback generation</li>
            <li>Free trial with 20 AI interactions</li>
            <li>Subscription-based premium features</li>
            <li>Customizable notification system</li>
          </ul>
        </>
      ),
      allTools: [
        "Next.js",
        "Supabase",
        "OpenAI API",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Cookies-next",
        "ESLint",
        "PostCSS",
        "React 19",
      ],
      dialectImages: [
        // `${process.env.PUBLIC_URL}/image1.gif`,
        // `${process.env.PUBLIC_URL}/image2.gif`,
      ],
      // githubLink: "https://github.com/MahirAbrar/workerback",
      // githubLink2: "Frontend is being built",
      liveLink: "https://maxmomentum.vercel.app/",
      moreInformation: (
        <>
          {/* <p className="text-gray-800">
            Additional detailed information about the project, including
            technical details, challenges overcome, and implementation
            specifics.
          </p>

          <p className="text-gray-800">Technical Architecture:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-800">Architecture component 1</li>
            <li className="text-gray-800">Architecture component 2</li>
            <li className="text-gray-800">Architecture component 3</li>
          </ul>

          <p className="mt-4 text-gray-800">
            Future improvements and potential enhancements:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-800">Potential improvement 1</li>
            <li className="text-gray-800">Potential improvement 2</li>
            <li className="text-gray-800">Potential improvement 3</li>
          </ul> */}
        </>
      ),
    },
    {
      title: "FitSync",
      baseImage: `${process.env.PUBLIC_URL}/fitsync.png`,
      baseDescription:
        "FitSync is a workout tracking app designed for fitness enthusiasts. Currently under development, it will offer customizable exercise templates, progress tracking, and support for various training styles including weights, bodyweight, cardio and yoga workouts.",
      tools: ["Django", "PostgreSQL", "React", "TypeScript"],
      dialectDescription: (
        <>
          <p className="text-gray-800 mb-4">
            FitSync is currently in active development. The backend
            infrastructure has been largely completed using Django and
            PostgreSQL, providing a robust foundation for the application. The
            frontend development in React and TypeScript will commence shortly,
            focusing on creating an intuitive and responsive user interface.
          </p>

          <p className="text-gray-800 font-semibold mb-2">Planned Features:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            <li>Customizable workout templates and exercise logging</li>
            <li>Progress tracking with visual analytics</li>
            <li>Personal record management and milestone tracking</li>
            <li>Support for multiple exercise types and training styles</li>
            <li>Rest timer and workout scheduling</li>
            <li>AI Agent to help with workout</li>
          </ul>
        </>
      ),
      allTools: ["Django", "PostgreSQL", "React", "TypeScript"],
      dialectImages: [
        // `${process.env.PUBLIC_URL}/image1.gif`,
        // `${process.env.PUBLIC_URL}/image2.gif`,
      ],
      githubLink: "https://github.com/MahirAbrar/workerback",
      // githubLink2: "Frontend is being built",
      // liveLink: "https://project-demo.com",
      moreInformation: (
        <>
          {/* <p className="text-gray-800">
            Additional detailed information about the project, including
            technical details, challenges overcome, and implementation
            specifics.
          </p>

          <p className="text-gray-800">Technical Architecture:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-800">Architecture component 1</li>
            <li className="text-gray-800">Architecture component 2</li>
            <li className="text-gray-800">Architecture component 3</li>
          </ul>

          <p className="mt-4 text-gray-800">
            Future improvements and potential enhancements:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-800">Potential improvement 1</li>
            <li className="text-gray-800">Potential improvement 2</li>
            <li className="text-gray-800">Potential improvement 3</li>
          </ul> */}
        </>
      ),
    },
    {
      title: "PriceWise M5",
      baseImage: `${process.env.PUBLIC_URL}/pricewise/pricewise.png`,
      baseDescription:
        "PriceWise M5 is an advanced pricing optimization tool for retail businesses. It integrates price elasticity modeling and predictive analysis through a web application, analyzing historical data from the M5 competition to estimate product demand at different price points.",
      tools: [
        "React",
        "Tailwind CSS",
        "Python (Flask)",
        "Scikit-learn",
        "AWS S3",
        "and more",
      ],
      dialectDescription: (
        <>
          <p className="text-gray-800">
            PriceWise M5 is a comprehensive pricing optimization tool that
            leverages advanced data analysis techniques to provide actionable
            insights for retail businesses. It combines price elasticity
            modeling with predictive analysis to help businesses make informed
            pricing decisions.
          </p>

          <p className="text-gray-800">Key Features:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-800">
              Price elasticity modeling using polynomial regression
            </li>
            <li className="text-gray-800">
              Predictive analysis incorporating SNAP and special events
            </li>
            <li className="text-gray-800">
              User-friendly web interface for easy data input and visualization
            </li>
            <li className="text-gray-800">
              Interactive graphs for price elasticity models and optimization
              results
            </li>
            <li className="text-gray-800">
              Calculation of optimal price points for maximum revenue and
              profitability
            </li>
            <li className="text-gray-800">
              Flexible inputs for SNAP values, event counts, and discounts
            </li>
            <li className="text-gray-800">
              Store and product selection functionality
            </li>
            <li className="text-gray-800">
              Year-based prediction capabilities
            </li>
          </ul>
        </>
      ),
      dialectImages: [`${process.env.PUBLIC_URL}/pricewise.gif`],
      allTools: [
        "React",
        "Tailwind CSS",
        "DaisyUI",
        "Chart.js",
        "Python",
        "Flask",
        "Scikit-learn",
        "AWS S3",
        "AWS Secret Manager",
        "AWS DynamoDB",
        "Pandas",
        "NumPy",
        "Git",
        "GitHub",
      ],
      githubLink: "https://github.com/MahirAbrar/FIT3164-Backend",
      githubLink2: "https://github.com/MahirAbrar/PriceWise.M5",
      moreInformation: (
        <>
          <p className="text-gray-800">
            PriceWise M5 was developed as a final year data science project at
            Monash University by a team of four students. It uses the M5
            competition dataset, a 1.2 million row dataset. The team combined
            multiple datasets and filtered by year to improve model predictions.
            Caching was introduced to reduce prediction time from over 15
            seconds to less than 200 ms. This tool provides robust analysis and
            predictions for retail pricing strategies.
          </p>

          <p className="text-gray-800">The project's architecture includes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-800">
              A React frontend with Tailwind CSS and DaisyUI for a responsive
              and intuitive user interface
            </li>
            <li className="text-gray-800">
              A Python backend using Flask and Scikit-learn for data processing
              and model creation
            </li>
            <li className="text-gray-800">
              AWS S3 for secure and scalable data storage
            </li>
            <li className="text-gray-800">
              AWS DynamoDB for caching predicted data
            </li>
            <li className="text-gray-800">
              Chart.js for interactive data visualizations
            </li>
          </ul>

          <p className="mt-4 text-gray-800">
            While the current implementation provides valuable insights, there
            are opportunities for future improvements, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-800">
              Enhancing model accuracy to address current RMSE limitations
            </li>
            <li className="text-gray-800">
              Incorporating seasonal analysis for more precise predictions
            </li>
            <li className="text-gray-800">
              Improving the speed at which the predictions are made
            </li>
            <li className="text-gray-800">
              Enhancing data management and security features
            </li>
            <li className="text-gray-800">
              Predict price demand if price is increased
            </li>
            <li className="text-gray-800">Improve UI for a modern aesthetic</li>
            <li className="text-gray-800">
              Create an About page explaining how the model functions for
              transparency
            </li>
          </ul>

          <div className="mt-6  rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Project Team
            </h3>
            <p className="mb-4 text-gray-800">
              The collaborative effort of the following team members has
              resulted in this powerful tool that can significantly impact
              retail pricing strategies:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {[
                {
                  name: "Hamid Abrar Mahir",
                  linkedin: "https://www.linkedin.com/in/hamid-abrar-mahir/",
                },
                {
                  name: "Setyawan Prayogo",
                  linkedin:
                    "https://www.linkedin.com/in/setyawan-prayogo-645981191/",
                },
                {
                  name: "Yuan She (Grant)",
                  linkedin: "https://www.linkedin.com/in/grant-she/",
                },
                {
                  name: "Regina Lim",
                  linkedin: "https://www.linkedin.com/in/reginalim27/",
                },
              ].map((member, index) => (
                <li
                  key={index}
                  className=" rounded p-3 shadow flex items-center justify-between text-gray-800"
                >
                  <span>{member.name}</span>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Project Links
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/MahirAbrar/PriceWise.M5"
                className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
                Frontend Repository
              </a>
              <a
                href="https://github.com/MahirAbrar/FIT3164-Backend"
                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
                Backend Repository
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Traffic Collision Problem at New York",
      baseImage: `${process.env.PUBLIC_URL}/trafficimage.png`,
      baseDescription:
        "This visualization project analyzes traffic collision data in New York City to provide actionable insights for city policymakers, traffic planners, and the general public. It aims to enhance understanding of collision causes and patterns to reduce risks and improve public safety.",
      tools: [
        "R",
        "Tableau",
        "Spatial Data Analysis",
        "Data Visualization",
        "Statistical Analysis",
      ],
      dialectDescription: (
        <>
          <p className="text-gray-800">
            The Traffic Collision Problem at New York project utilizes
            comprehensive data analysis and visualization techniques to uncover
            patterns and insights in traffic collision data across New York
            City. This project aims to inform decision-making processes for
            improving road safety and urban planning.
          </p>

          <p className="text-gray-800">Key Features:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-800">
              Interactive heatmap of collision hotspots across NYC boroughs
            </li>
            <li className="text-gray-800">
              Bubble chart highlighting vehicle types most involved in
              collisions
            </li>
            <li className="text-gray-800">
              Time-series analysis of injury and fatality trends
            </li>
            <li className="text-gray-800">
              Visualization of safest travel times
            </li>
            <li className="text-gray-800">
              Detailed analysis of collision causes and contributing factors
            </li>
            <li className="text-gray-800">
              Color-blind accessible visualizations for improved accessibility
            </li>
            <li className="text-gray-800">
              Storytelling elements to guide users through the data narrative
            </li>
          </ul>
        </>
      ),
      dialectImages: [`${process.env.PUBLIC_URL}/trafficprob.gif`],
      allTools: [
        "R (for data preprocessing)",
        "Tableau (for data visualization)",
        "NYC Open Data (Motor Vehicle Collisions - Crashes)",
        "Kaggle (New York Motor Vehicle Collisions 2014 - 2023)",
        "NYC Open Data (Borough Boundaries for spatial data)",
      ],
      githubLink: "",
      liveLink:
        "https://public.tableau.com/app/profile/hamid.abrar.mahir/viz/Book1_16931793449790/Dashboard1?publish=yes",
      moreInformation: (
        <>
          <p className="text-gray-800">
            This project analyzes traffic collision data in New York City from
            2018 to 2022, utilizing a rich dataset of over 2.1 million
            police-reported motor collisions. The data was preprocessed using R
            to handle inconsistencies, typos, and missing values, and to format
            time data for visualization purposes.
          </p>

          <p className="text-gray-800">
            The visualization dashboard includes several key components:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-800">
              A heatmap showcasing collision counts by area and year
            </li>
            <li className="text-gray-800">
              A bubble chart emphasizing vehicle types most involved in
              collisions
            </li>
            <li className="text-gray-800">
              Line graphs presenting trends in injuries and fatalities
            </li>
            <li className="text-gray-800">
              An area chart displaying the safest times to travel
            </li>
          </ul>

          <p className="mt-4 text-gray-800">
            Special attention was given to the design aspects:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-800">
              Color-blind accessible color schemes for clarity
            </li>
            <li className="text-gray-800">
              Strategic use of red to symbolize danger or caution
            </li>
            <li className="text-gray-800">
              Clear typography using Open Sans font for readability
            </li>
            <li className="text-gray-800">
              Storytelling elements through annotations and contextual
              information
            </li>
          </ul>

          <p className="mt-4 text-gray-800">
            This project demonstrates the power of data visualization in
            understanding complex urban issues. By presenting traffic collision
            data in an accessible and engaging format, it aims to support
            evidence-based decision-making for improving road safety in New York
            City.
          </p>
        </>
      ),
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(2);
  const [animateIndex, setAnimateIndex] = useState(2);

  const showMoreProjects = () => {
    setAnimateIndex(visibleProjects);
    setVisibleProjects((prev) => Math.min(prev + 2, projects.length));
  };

  const showLessProjects = () => {
    setVisibleProjects(2);
    setAnimateIndex(2);
  };

  const isShowingAll = visibleProjects === projects.length;

  return (
    <div className="flex flex-col items-center gap-y-8 w-full px-4">
      {projects.slice(0, visibleProjects).map((project, index) => (
        <AnimatePresence key={index}>
          {index < animateIndex ? (
            <ProjectCard {...project} isFirst={index === 0} />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <ProjectCard {...project} isFirst={index === 0} />
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      {projects.length > 2 && (
        <AnimatedButton
          text={isShowingAll ? "Show Less" : "More Projects"}
          onClick={isShowingAll ? showLessProjects : showMoreProjects}
          className="font-semibold"
        />
      )}
    </div>
  );
};

export default Projects;
