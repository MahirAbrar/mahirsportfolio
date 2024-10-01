import React from "react";
import ProjectCard from "./ProjectCard";
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
          <p>
            AttireAlley is a comprehensive e-commerce platform with distinct
            views for admins and customers. Admins have full control over
            product management, including adding, removing, updating, and
            deleting products. Customers can browse, search, and purchase
            products through a user-friendly interface.
          </p>

          <p>Key Features:</p>
          <ul className="list-disc pl-5 space-y-1">
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
        `${process.env.PUBLIC_URL}/attirealleyimage.png`,
        `${process.env.PUBLIC_URL}/attirealleyimage.png`,
      ],
      githubLink: "https://github.com/MahirAbrar/AttireAlley",
      liveLink: "https://attirealley.vercel.app/",
      moreInformation: (
        <>
          <p>
            AttireAlley leverages a robust tech stack to deliver a seamless
            e-commerce experience:
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>
              Next.js provides server-side rendering for improved SEO and faster
              initial page loads.
            </li>
            <li>
              Tailwind CSS and daisyUI create a responsive and visually
              appealing design.
            </li>
            <li>
              MongoDB stores user data and product information, with Mongoose as
              the ODM.
            </li>
            <li>
              Firebase handles image storage for efficient media management.
            </li>
            <li>
              User authentication is secured using bcryptjs for password
              encryption.
            </li>
            <li>
              Joi is utilized for data validation, ensuring data integrity and
              acting as a runtime type checker.
            </li>
            <li>
              GSAP (GreenSock Animation Platform) adds smooth animations to
              enhance user experience.
            </li>
            <li>
              Stripe API integration enables secure and reliable payment
              processing.
            </li>
          </ul>

          <p className="mt-4">
            The application's architecture supports scalability and performance,
            with features like lazy loading for optimized resource usage. The
            admin panel provides powerful tools for inventory and discount
            management, while customers enjoy a fluid shopping experience with
            multi-address delivery options and an intuitive cart system.
          </p>
        </>
      ),
    },
    {
      title: "Price Optimisation and Elasticity Model",
      baseImage: `${process.env.PUBLIC_URL}/priceopt.png`,
      baseDescription:
        "This is a pricing optimization tool for retail businesses. It integrates price elasticity modeling and predictive analysis through a web application, analyzing historical data to estimate product demand at different price points.",
      tools: [
        "React",
        "Tailwind CSS",
        "Scikit-learn",
        "Python (Flask)",
        "And more",
      ],
      dialectDescription:
        "The Price Optimisation tool leverages advanced machine learning algorithms to predict optimal pricing strategies. It analyzes historical sales data, market trends, and competitor pricing to provide actionable insights.",
      dialectImages: ["/api/placeholder/600/400"],
      allTools: ["Next.js", "Tailwind CSS", "MongoDB", "Firebase", "And more"],
      githubLink: "https://github.com/yourusername/price-optimisation",
      liveLink: "https://priceopt.com",
      moreInformation:
        "This project was developed in collaboration with retail industry experts. It includes features such as real-time demand forecasting, competitor price monitoring, and customizable optimization parameters.",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-y-8 mx-auto max-w-7xl px-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
