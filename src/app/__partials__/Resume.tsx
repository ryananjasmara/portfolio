import { Flower, Briefcase, Download } from "lucide-react";
import Timeline from "@/components/Timeline";

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
    subtitle: "Prudential Indonesia",
    period: "Apr, 2025 - Present",
    location: "Jakarta, Indonesia",
    descriptions: [
      "Developed a React Native Insurance Mobile Apps for the Agent (Sales).",
      "Developed a Angular Backoffice System.",
      "Write comprehensive unit tests using Jest to ensure the reliability of the mobile application.",
      "Implemented Agent Resignation and Termination feature.",
    ],
  },
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

export default function Resume() {
  return (
    <div className="flex flex-col p-4 gap-8">
      {/* Education Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Education</h2>
          <Flower className="w-6 h-6" />
        </div>
        <Timeline items={educations} />
      </div>

      {/* Experience Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Experience</h2>
          <Briefcase className="w-6 h-6" />
        </div>
        <Timeline items={experiences} />
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
}
