interface TimelineProps {
    items: {
      title: string;
      subtitle: string;
      period: string;
      location?: string;
      descriptions: string[];
    }[];
  }
  
  export default function Timeline({ items }: TimelineProps) {
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
  }
  