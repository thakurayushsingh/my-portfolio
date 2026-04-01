import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  date: string;
  image: string;
  bullets: string[];
  tech: string;
  link: string;
};

export const ProjectCard = ({
  title,
  date,
  image,
  bullets,
  tech,
  link,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col rounded-2xl border border-[#7042f88b] bg-[#0d0d1a]/70 backdrop-blur-sm overflow-hidden hover:border-purple-500 transition-colors duration-300">
      {/* Banner Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d0d1a]" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 md:p-8">
        {/* Title + Date */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="text-xl font-bold text-white leading-snug">{title}</h3>
          <span className="text-xs font-mono text-cyan-400 whitespace-nowrap">{date}</span>
        </div>

        {/* Bullet points */}
        <ul className="flex flex-col gap-2 pl-1">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-gray-300 text-sm leading-relaxed">
              <span className="text-purple-400 mt-1 shrink-0">▹</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-1">
          {tech.split(",").map((t) => (
            <span
              key={t}
              className="text-xs font-mono bg-[#7042f820] text-purple-300 border border-[#7042f855] px-2 py-0.5 rounded-full"
            >
              {t.trim()}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-auto inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition font-mono"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          View on GitHub
        </Link>
      </div>
    </div>
  );
};
