import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  DiscIcon,
} from "lucide-react";

export default function Contact() {
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
      <button
        className="hover:scale-105 transition-all duration-300"
        onClick={() =>
          window.open(
            "https://discord.com/users/againstallthemadness",
            "_blank"
          )
        }
      >
        <div className="flex flex-col p-4 justify-center items-center gap-2 bg-dark-charcoal rounded-full">
          <DiscIcon className="w-10 h-10" />
        </div>
      </button>
    </div>
  );
}
