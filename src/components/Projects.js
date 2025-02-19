import React from "react";
import ProjectCard from "./ProjectCard";
import GlowingButton from "./GlowingButton";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Projects = () => {
  const projects = [
    {
      title: "AttireAlley",
      baseImage: `${process.env.PUBLIC_URL}/attirealleyimage.png`,
      baseDescription:
        "AttireAlley is an e-commerce platform for fashion enthusiasts. It offers a wide range of clothing and accessories, providing a seamless shopping experience for users.",
      tools: ["Next.js", "Tailwind CSS", "MongoDB", "Firebase", "And more"],
      dialectDescription: (
        <>
          <p className="text-gray-800 mb-4">
            AttireAlley is a comprehensive e-commerce platform with distinct
            views for admins and customers. Admins have full control over
            product management, including adding, removing, updating, and
            deleting products. Customers can browse, search, and purchase
            products through a user-friendly interface.
          </p>

          <p className="text-gray-800 font-semibold mb-2">Key Features:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800 ">
            <li>User authentication and authorization</li>
            <li>Product browsing and searching</li>
            <li>Shopping cart functionality</li>
            <li>Secure payment processing</li>
            <li>User profile management</li>
            <li>Responsive design for mobile and desktop</li>
            <li>Multiple delivery address options</li>
            <li>Discount management through admin panel</li>
            <li>Image storage using Firebase</li>
            <li>Encrypted user authentication data in MongoDB</li>
          </ul>
        </>
      ),
      allTools: [
        "Next.js",
        "Tailwind CSS",
        "daisyUI",
        "gsap",
        "MongoDB",
        "mongoose",
        "Firebase",
        "bcryptjs",
        "passport",
        "js-cookie",
        "jsonwebtoken",
        "joi",
        "font-awesome",
        "Stripe API",
      ],
      dialectImages: [
        `${process.env.PUBLIC_URL}/aapageshow.gif`,
        `${process.env.PUBLIC_URL}/aalogin.gif`,
        `${process.env.PUBLIC_URL}/aacheckout.gif`,
      ],
      githubLink: "https://github.com/MahirAbrar/AttireAlley",
      liveLink: "https://attirealley.vercel.app/",
      moreInformation: (
        <>
          <p className="text-gray-800">
            AttireAlley leverages a robust tech stack to deliver a seamless
            e-commerce experience:
          </p>

          <ul className="list-disc pl-5 space-y-1 ">
            <li className="text-gray-800">
              Next.js provides server-side rendering for improved SEO and faster
              initial page loads.
            </li>
            <li className="text-gray-800">
              Tailwind CSS and daisyUI create a responsive and visually
              appealing design.
            </li>
            <li className="text-gray-800">
              MongoDB stores user data and product information, with Mongoose as
              the ODM.
            </li>
            <li className="text-gray-800">
              Firebase handles image storage for efficient media management.
            </li>
            <li className="text-gray-800">
              User authentication is secured using bcryptjs for password
              encryption.
            </li>
            <li className="text-gray-800">
              Joi is utilized for data validation, ensuring data integrity and
              acting as a runtime type checker.
            </li>
            <li className="text-gray-800">
              GSAP (GreenSock Animation Platform) adds smooth animations to
              enhance user experience.
            </li>
            <li className="text-gray-800">
              Stripe API integration enables secure and reliable payment
              processing.
            </li>
          </ul>

          <p className="mt-4 text-gray-800">
            The application's architecture supports scalability and performance,
            with features like lazy loading for optimized resource usage. The
            admin panel provides powerful tools for inventory and discount
            management, while customers enjoy a fluid shopping experience with
            multi-address delivery options and an intuitive cart system.
          </p>
        </>
      ),
    },
    // 2nd project
    {
      title: "PriceWise M5",
      baseImage: `${process.env.PUBLIC_URL}/priceopt.png`,
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
      // liveLink: "https://priceopt.com",
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
    // 3rd project
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
    // 4th project
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
        <GlowingButton
          onClick={isShowingAll ? showLessProjects : showMoreProjects}
        >
          {isShowingAll ? "Show Less" : "See More Projects"}
        </GlowingButton>
      )}
    </div>
  );
};

export default Projects;
