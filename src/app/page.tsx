/* eslint-disable @next/next/no-img-element */
"use client";

// import useThemeToggle from "@/hooks/useThemeToggle";
import {
  Book,
  Briefcase,
  File,
  Mail,
  User,
  Smartphone,
  AppWindow,
  Menu,
  Rocket,
  Sparkles,
  Flower,
  Download,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  descriptions: string[];
};

const portfolioItems = [
  {
    title: "Sinbad",
    type: "mobile",
    image: "sinbad.png",
    link: "https://play.google.com/store/apps/details?id=sinbad.app",
  },
  {
    title: "Commuting ID",
    type: "web",
    image: "commuting-id.png",
    link: "https://vuecommutingid.netlify.app/",
  },
  {
    title: "Sinbad Agent",
    type: "mobile",
    image: "sinbad-agent.png",
    link: "https://play.google.com/store/apps/details?id=com.sinbad.agent",
  },
  {
    title: "Taxhour.id",
    type: "web",
    image: "taxhour-id.png",
    link: "https://taxhour.web.id/",
  },
  {
    title: "Sinbako",
    type: "mobile",
    image: "sinbako.png",
    link: "https://play.google.com/store/apps/details?id=sinbako.app",
  },
  {
    title: "Assurno Customer",
    type: "web",
    image: "assurno-customer.png",
    link: "/images/portfolio/assurno-customer.png",
  },
  {
    title: "Assurno Admin",
    type: "web",
    image: "assurno-admin.png",
    link: "/images/portfolio/assurno-admin.png",
  },
];

export default function Home() {
  // const { isDarkMode, setIsDarkMode } = useThemeToggle();
  const [currentTab, setCurrentTab] = useState("about");
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [portfolio, setPortfolio] = useState(portfolioItems);

  useEffect(() => {
    const filteredPortfolio = portfolioItems.filter((item) => {
      if (filter === "all") return true;
      return item.type === filter;
    });
    setPortfolio(filteredPortfolio);
  }, [filter]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // const renderThemeToggle = () => {
  //   return (
  //     <div className="fixed top-4 right-4">
  //       <button onClick={() => setIsDarkMode(!isDarkMode)}>
  //         {isDarkMode ? <Sun /> : <Moon />}
  //       </button>
  //     </div>
  //   );
  // };

  const renderTimelineSection = (items: TimelineItem[]) => {
    return (
      <div className="relative flex flex-col gap-8 pl-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative before:absolute before:left-[-24px] before:top-[9px] before:h-3 before:w-3 before:rounded-full before:border-2 before:border-gray-300 before:bg-white before:-translate-x-[0.5px] ${
              index !== items.length - 1
                ? "after:absolute after:left-[-22px] after:top-[20px] after:h-[calc(100%+20px)] after:w-[1px] after:bg-gray-300 after:-translate-x-[-3px]"
                : ""
            }`}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-base font-medium">{item.subtitle}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{item.period}</span>
              {item.location && (
                <>
                  <span>•</span>
                  <span>{item.location}</span>
                </>
              )}
            </div>
            <ul className="mt-2 list-disc pl-4 text-sm">
              {item.descriptions.map((desc, idx) => (
                <li key={idx} className="mt-1 text-gray-600">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderTabs = () => {
    const tabItems = [
      { id: "about", icon: <User />, label: "About" },
      { id: "resume", icon: <File />, label: "Resume" },
      { id: "portfolio", icon: <Briefcase />, label: "Portfolio" },
      { id: "blog", icon: <Book />, label: "Blog" },
      { id: "contact", icon: <Mail />, label: "Contact" },
    ];

    return (
      <div className="flex items-center justify-center w-full md:mt-12 mt-4 text-white">
        {isMobile ? (
          // Mobile Dropdown
          <div className="relative w-full px-4 py-2">
            <button
              className="flex items-center justify-between w-full px-4 py-2 bg-background rounded-lg text-white border border-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="flex items-center gap-2">
                {tabItems.find((item) => item.id === currentTab)?.icon}
                <span className="font-semibold">
                  {tabItems.find((item) => item.id === currentTab)?.label}
                </span>
              </div>
              <Menu
                className={`transform transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMenuOpen && (
              <div className="absolute left-4 right-4 mt-2 py-2 bg-background rounded-lg shadow-lg z-10">
                {tabItems.map((item) => (
                  <button
                    key={item.id}
                    className={`flex w-full px-4 py-2 items-center gap-2 ${
                      currentTab === item.id
                        ? "bg-dark-charcoal text-white"
                        : "text-white hover:bg-white hover:text-black"
                    }`}
                    onClick={() => {
                      setCurrentTab(item.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.icon}
                    <span className="font-semibold">{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          // Desktop Tabs
          <div className="w-1/2 grid grid-cols-5 p-1 gap-1 border border-white rounded-lg overflow-hidden">
            {tabItems.map((item) => (
              <button
                key={item.id}
                className={`flex justify-center items-center gap-2 py-1 transition-colors ${
                  currentTab === item.id
                    ? "bg-dark-charcoal text-white rounded-md"
                    : "text-white hover:text-white hover:bg-dark-charcoal hover:rounded-md"
                }`}
                onClick={() => setCurrentTab(item.id)}
              >
                {item.icon}
                <span className="text-sm font-semibold">{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderSummary = () => {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-justify">
          Hi, my name is Ryan Anjasmara. I&apos;m a passionate Software Engineer
          with a strong eagerness to learn and adapt. With expertise in
          front-end and mobile development, I specialize in React Native,
          ReactJS and Next.js. I have experience building scalable web and
          mobile applications, integrating APIs, and optimizing performance.
          Beyond coding, I enjoy exploring new technologies, mentoring, and
          continuously improving my skills.
        </p>

        <p className="text-justify">
          If you&apos;re interested in collaborating or have any questions, feel
          free to reach out. I&apos;m always open to new ideas and partnerships.
          Let&apos;s connect and create something great together!
        </p>
      </div>
    );
  };

  const renderExpertise = () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">My Expertise</h2>
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center w-full md:w-1/2 p-4 bg-dark-charcoal rounded-lg text-white">
            <div className="w-1/4 mr-4">
              <Smartphone className="w-10 h-10" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Mobile Application</h3>
              <p className="text-sm md:text-base">
                Designing, developing, and optimizing high-performance mobile
                applications for Android and iOS.
              </p>
            </div>
          </div>
          <div className="flex items-center w-full md:w-1/2 p-4 bg-dark-charcoal rounded-lg text-white">
            <div className="w-1/4 mr-4">
              <AppWindow className="w-10 h-10" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Web Development</h3>
              <p className="text-sm md:text-base">
                Designing, building, and maintaining responsive,
                high-performance websites and web applications using modern
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTechStack = () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Tech Stacks</h2>
          <Rocket className="w-6 h-6" />
        </div>
        <div className="flex flex-wrap gap-2">
          <img
            src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-rounded"
            alt="TypeScript"
          />
          <img
            src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-rounded"
            alt="JavaScript"
          />
          <img
            src="https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white&style=flat-rounded"
            alt="PHP"
          />
          <img
            src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=flat-rounded"
            alt="Python"
          />
          <img
            src="https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white&style=flat-rounded"
            alt="Golang"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <img
            src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat-rounded"
            alt="React"
          />
          <img
            src="https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white&style=flat-rounded"
            alt="Next.js"
          />
          <img
            src="https://img.shields.io/badge/Refine.js-0081FB?logo=refine&logoColor=white&style=flat-rounded"
            alt="Refine.js"
          />
          <img
            src="https://img.shields.io/badge/CodeIgniter-EF4223?logo=codeigniter&logoColor=white&style=flat-rounded"
            alt="CodeIgniter"
          />
          <img
            src="https://img.shields.io/badge/Laravel-FF2D20?logo=laravel&logoColor=white&style=flat-rounded"
            alt="Laravel"
          />
          <img
            src="https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=flat-rounded"
            alt="Redux"
          />
          <img
            src="https://img.shields.io/badge/React%20Query-FF4154?logo=react-query&logoColor=white&style=flat-rounded"
            alt="React Query"
          />
          <img
            src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat-rounded"
            alt="Tailwind CSS"
          />
          <img
            src="https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white&style=flat-rounded"
            alt="Jest"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <img
            src="https://img.shields.io/badge/Nest.js-E0234E?logo=nestjs&logoColor=white&style=flat-rounded"
            alt="Nest.js"
          />
          <img
            src="https://img.shields.io/badge/Apache%20Kafka-231F20?logo=apache-kafka&logoColor=white&style=flat-rounded"
            alt="Kafka"
          />
          <img
            src="https://img.shields.io/badge/RabbitMQ-FF6600?logo=rabbitmq&logoColor=white&style=flat-rounded"
            alt="RabbitMQ"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <img
            src="https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white&style=flat-rounded"
            alt="PostgreSQL"
          />
          <img
            src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=flat-rounded"
            alt="MongoDB"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <img
            src="https://img.shields.io/badge/Sentry-F94F4F?logo=sentry&logoColor=white&style=flat-rounded"
            alt="Sentry"
          />
          <img
            src="https://img.shields.io/badge/MoEngage-0078FF?logo=moengage&logoColor=white&style=flat-rounded"
            alt="MoEngage"
          />
          <img
            src="https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=flat-rounded"
            alt="Firebase"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <img
            src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=flat-rounded"
            alt="Git"
          />
          <img
            src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=flat-rounded"
            alt="Docker"
          />
          <img
            src="https://img.shields.io/badge/AWS-232F3E?logo=amazon-aws&logoColor=white&style=flat-rounded"
            alt="AWS"
          />
          <img
            src="https://img.shields.io/badge/GCP-4285F4?logo=google-cloud&logoColor=white&style=flat-rounded"
            alt="Google Cloud Platform"
          />
        </div>
      </div>
    );
  };

  const renderAbout = () => {
    return (
      <div className="flex flex-col gap-4">
        {renderSummary()}
        {renderExpertise()}
        {renderTechStack()}
      </div>
    );
  };

  const renderResume = () => {
    const educations = [
      {
        title: "Bachelor of Science in Computer Science",
        subtitle: "University of Politeknik Caltex",
        period: "2015 - 2019",
        descriptions: [
          "Wrote a thesis on the development of a mobile application for Japanese language learning using Android Studio.",
          "Served as a Technology Department staff member in a student organization.",
          "Competed in multiple programming and software development competitions, showcasing problem-solving and technical skills.",
          "Organized and contributed to technology events at the university, fostering innovation and collaboration among students.",
          "Graduated with a GPA of 3.72/4.00.",
        ],
      },
    ];

    const experiences = [
      {
        title: "Frontend Engineer",
        subtitle: "Forgerz",
        period: "Sep, 2024 - Jan, 2025",
        location: "French (Remote)",
        descriptions: [
          "Developed a customer-facing insurance web application using Next.js.",
          "Built an admin panel for managing the insurance application using Refine.js.",
          "Implemented state management using React Context API.",
          "Integrate useQuery from React Query to efficiently fetch data from the database.",
          "Manage data updates and mutations using useMutation from React Query.",
          "Create deep links to redirect users to prefilled forms for a seamless experience.",
        ],
      },
      {
        title: "Software Engineer",
        subtitle: "Sinbad",
        period: "Jun, 2020 - Sep, 2024",
        location: "Jakarta, Indonesia",
        descriptions: [
          "Developed a React Native B2B mobile app.",
          "Built a React.js web admin panel for managing the application.",
          "Developed a React.js web-based seller center for merchants.",
          "Designed and implemented a backend API with Nest.js and Golang.",
          "Collaborate with a team focusing on Shopping Cart, Checkout, Promo, and Voucher features.",
          "Integrated MoEngage to track mobile application usage, helping the marketing team increase user engagement.",
          "Integrated Sentry to monitor and analyze mobile application crashes, reducing crash occurrences by 50%.",
          "Developed an internal component library for the mobile application, accelerating development speed by 90%.",
          "Write comprehensive unit tests using Jest to ensure the reliability of the mobile application.",
          "Orchestrate and optimize API calls in the mobile application for efficient data handling and performance, reduce load time by 30%.",
          "Implement and manage state management using Redux for efficient data flow and application performance.",
          "Deploy the application to the Google Play Store.",
          "Migrated messaging system from Kafka to RabbitMQ for improved efficiency and reliability.",
        ],
      },
      {
        title: "React Native Developer",
        subtitle: "Ralali.com",
        period: "Nov, 2019 - Apr, 2020",
        location: "Jakarta, Indonesia",
        descriptions: [
          "Developed a React Native B2B mobile app.",
          "Implemented the promo payment feature, increasing the application's conversion rate by 10%.",
          "Write comprehensive unit tests using Jest to ensure the reliability of the mobile application.",
          "Monitored and analyzed application crashes using Crashlytics, reducing crash occurrences by 50%.",
          "Integrated Firebase Analytics to track application usage, helping the marketing team increase user engagement by 30%.",
          "Implement and manage state management using Redux for efficient data flow and application performance.",
          "Deploy the application to the Google Play Store.",
        ],
      },
      {
        title: "PHP Web Developer (Intern)",
        subtitle: "Telkomsel",
        period: "Mar, 2019 - Jun, 2019",
        location: "Pekanbaru, Indonesia",
        descriptions: [
          "Developed an internal server monitoring application using CodeIgniter to track server status and performance, reducing downtime.",
          "Developed an internal Kanban board application using CodeIgniter for task and job tracking, boosting team productivity.",
          "Develop both the frontend and backend components of the applications.",
          "Deploy the applications to the local server.",
        ],
      },
    ];

    return (
      <div className="flex flex-col p-4 gap-8">
        {/* Education Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Education</h2>
            <Flower className="w-6 h-6" />
          </div>
          {renderTimelineSection(educations)}
        </div>

        {/* Experience Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Experience</h2>
            <Briefcase className="w-6 h-6" />
          </div>
          {renderTimelineSection(experiences)}
        </div>

        {/* Button to download resume */}
        <div className="flex justify-end">
          <button
            className="bg-dark-charcoal text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-dark-charcoal/80 transition-colors"
            onClick={() =>
              window.open("/files/RyanAnjasmaraResume2025.pdf", "_blank")
            }
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </div>
      </div>
    );
  };

  const renderPortfolio = () => {
    const filteredPortfolio = portfolio.filter(
      item => filter === "all" || item.type === filter
    );

    return (
      <div className="flex flex-col gap-4">
        {/* Filter Section */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`text-sm text-white px-4 py-1 rounded-lg flex items-center gap-2 hover:bg-dark-charcoal/80 transition-colors ${
              filter === "all" ? "bg-dark-charcoal/60" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("mobile")}
            className={`text-sm text-white px-4 py-1 rounded-lg flex items-center gap-2 hover:bg-dark-charcoal/80 transition-colors ${
              filter === "mobile" ? "bg-dark-charcoal/60" : ""
            }`}
          >
            Mobile Application
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`text-sm text-white px-4 py-1 rounded-lg flex items-center gap-2 hover:bg-dark-charcoal/80 transition-colors ${
              filter === "web" ? "bg-dark-charcoal/60" : ""
            }`}
          >
            Web Development
          </button>
        </div>
        {/* Portfolio Section */}
        <div className="flex flex-col gap-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((item) => (
                <motion.div
                  layout
                  key={item.title}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="p-4 rounded-lg gap-4 flex flex-col"
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <Image
                    src={`/images/portfolio/${item.image}`}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-lg hover:scale-105 transition-all duration-500 cursor-pointer"
                    width={400}
                    height={160}
                    quality={100}
                  />
                  <div className="flex flex-col">
                    <h3 className="font-medium text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400 capitalize">
                      {item.type}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    );
  };

  const renderBlog = () => {
    return (
      <div className="flex flex-col p-4 justify-center items-center">
        <p>Currently, I don&apos;t have any blog posted. </p>
      </div>
    );
  };

  const renderContact = () => {
    return (
      <div className="flex p-4 gap-4 flex-wrap justify-center">
        <button
          className="hover:scale-105 transition-all duration-300"
          onClick={() =>
            window.open("https://github.com/ryananjasmara", "_blank")
          }
        >
          <div className="flex flex-col p-4 justify-center items-center gap-2 bg-dark-charcoal rounded-full">
            <GithubIcon className="w-10 h-10" />
          </div>
        </button>
        <button
          className="hover:scale-105 transition-all duration-300"
          onClick={() =>
            window.open("https://www.linkedin.com/in/ryananjasmara/", "_blank")
          }
        >
          <div className="flex flex-col p-4 justify-center items-center gap-2 bg-dark-charcoal rounded-full">
            <LinkedinIcon className="w-10 h-10" />
          </div>
        </button>
        <button
          className="hover:scale-105 transition-all duration-300"
          onClick={() =>
            window.open("mailto:ryananjasmara1997@gmail.com", "_blank")
          }
        >
          <div className="flex flex-col p-4 justify-center items-center gap-2 bg-dark-charcoal rounded-full">
            <MailIcon className="w-10 h-10" />
          </div>
        </button>
        <button
          className="hover:scale-105 transition-all duration-300"
          onClick={() => window.open("https://wa.me/6281275749094", "_blank")}
        >
          <div className="flex flex-col p-4 justify-center items-center gap-2 bg-dark-charcoal rounded-full">
            <PhoneIcon className="w-10 h-10" />
          </div>
        </button>
      </div>
    );
  };

  const renderMainContent = () => {
    const slideVariants = {
      enter: {
        x: 1000,
        opacity: 0,
      },
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
      },
      exit: {
        zIndex: 0,
        x: -1000,
        opacity: 0,
      },
    };

    return (
      <div className="flex flex-col w-full md:w-1/2 p-4 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentTab}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.3 },
              opacity: { duration: 0.2 }
            }}
          >
            {currentTab === "about" && renderAbout()}
            {currentTab === "resume" && renderResume()}
            {currentTab === "portfolio" && renderPortfolio()}
            {currentTab === "blog" && renderBlog()}
            {currentTab === "contact" && renderContact()}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* {renderThemeToggle()} */}
      {renderTabs()}
      {renderMainContent()}
    </div>
  );
}
