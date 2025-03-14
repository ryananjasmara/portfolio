import { AppWindow, Rocket, Smartphone, Sparkles } from "lucide-react";
import Image from "next/image";

export default function About() {
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
          <h2 className={`text-xl font-semibold`}>My Expertise</h2>
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
          <Image
            src={"/svgs/tech-stacks/typescript.svg"}
            alt="TypeScript"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/javascript.svg"}
            alt="JavaScript"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/php.svg"}
            alt="PHP"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/python.svg"}
            alt="Python"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/go.svg"}
            alt="Golang"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Image
            src={"/svgs/tech-stacks/react.svg"}
            alt="React"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/nextjs.svg"}
            alt="Next.js"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/vuejs.svg"}
            alt="Vue.js"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/refinejs.svg"}
            alt="Refine.js"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/codeigniter.svg"}
            alt="CodeIgniter"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/laravel.svg"}
            alt="Laravel"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/redux.svg"}
            alt="Redux"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/reactquery.svg"}
            alt="React Query"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/tailwindcss.svg"}
            alt="Tailwind CSS"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/jest.svg"}
            alt="Jest"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Image
            src={"/svgs/tech-stacks/nestjs.svg"}
            alt="Nest.js"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/kafka.svg"}
            alt="Kafka"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/rabbitmq.svg"}
            alt="RabbitMQ"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Image
            src={"/svgs/tech-stacks/postgresql.svg"}
            alt="PostgreSQL"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/mongodb.svg"}
            alt="MongoDB"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Image
            src={"/svgs/tech-stacks/sentry.svg"}
            alt="Sentry"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/moengage.svg"}
            alt="MoEngage"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/firebase.svg"}
            alt="Firebase"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Image
            src={"/svgs/tech-stacks/git.svg"}
            alt="Git"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/docker.svg"}
            alt="Docker"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/aws.svg"}
            alt="AWS"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
          <Image
            src={"/svgs/tech-stacks/gcp.svg"}
            alt="Google Cloud Platform"
            width={100}
            height={30}
            className="h-5 w-auto object-contain"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {renderSummary()}
      {renderExpertise()}
      {renderTechStack()}
    </div>
  );
}
