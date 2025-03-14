import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

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
  {
    title: "Tanya Penghulu",
    type: "web",
    image: "tanya-penghulu.png",
    link: "https://tanya-penghulu.vercel.app/",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [portfolio, setPortfolio] = useState(portfolioItems);

  useEffect(() => {
    const filteredPortfolio = portfolioItems.filter((item) => {
      if (filter === "all") return true;
      return item.type === filter;
    });
    setPortfolio(filteredPortfolio);
  }, [filter]);

  const filteredPortfolio = portfolio.filter(
    (item) => filter === "all" || item.type === filter
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
}
