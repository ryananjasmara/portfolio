import { Mail, User, File, Briefcase, Book, Menu } from "lucide-react";

interface TabProps {
  isMobile: boolean;
  isMenuOpen: boolean;
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Tab({
  isMobile,
  isMenuOpen,
  currentTab,
  setCurrentTab,
  setIsMenuOpen,
}: TabProps) {
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
}
