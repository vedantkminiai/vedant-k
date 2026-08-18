import { Braces } from 'lucide-react';
import useGlidingCarousel from '../hooks/useGlidingCarousel';

const technologyIconSlugs: Record<string, string> = {
  'Apache Airflow': 'apacheairflow',
  'AWS ECS': 'amazonecs',
  'Azure Data Lake': 'microsoftazure',
  'Azure SQL': 'microsoftazure',
  Arduino: 'arduino',
  BeautifulSoup: 'python',
  'C++': 'cplusplus',
  CSS3: 'css3',
  Dash: 'plotly',
  Databricks: 'databricks',
  Docker: 'docker',
  Excel: 'microsoftexcel',
  'Gemini AI': 'googlegemini',
  'Gemini API': 'googlegemini',
  Git: 'git',
  'GitHub Actions': 'githubactions',
  GraphQL: 'graphql',
  'GPT-4o': 'openai',
  HTML5: 'html5',
  Java: 'openjdk',
  JavaScript: 'javascript',
  LangChain: 'langchain',
  'Monaco Editor': 'visualstudiocode',
  MySQL: 'mysql',
  'NBA API': 'nba',
  Netlify: 'netlify',
  NetworkX: 'python',
  'Next.js': 'nextdotjs',
  'Node.js': 'nodedotjs',
  'OpenAI API': 'openai',
  pandas: 'pandas',
  Plotly: 'plotly',
  PostgreSQL: 'postgresql',
  PowerBI: 'powerbi',
  Python: 'python',
  React: 'react',
  'React Router': 'reactrouter',
  'REST APIs': 'fastapi',
  Redis: 'redis',
  Selenium: 'selenium',
  Spring: 'spring',
  'Spring Boot': 'springboot',
  Supabase: 'supabase',
  'Supabase Edge Functions': 'supabase',
  'Tailwind CSS': 'tailwindcss',
  TensorFlow: 'tensorflow',
  'TensorFlow.js': 'tensorflow',
  TypeScript: 'typescript',
  Vercel: 'vercel',
  Vite: 'vite',
  'Azure DevOps': 'azuredevops',
};

const technologyCustomIcons: Record<string, string> = {
  AWS: '/aws-dark-technology.png',
  'AWS ECS': '/aws-dark-technology.png',
  Azure: '/azure-dark-technology.png',
  'Azure Data Lake': '/azure-dark-technology.png',
  'Azure SQL': '/azure-dark-technology.png',
  CSS3: '/css3-dark-technology.png',
  'OpenAI API': '/openai-dark-technology.png',
  PowerBI: '/powerbi-dark-technology.png',
};

type TechnologyRailProps = {
  technologies: string[];
  label?: string;
};

const TechnologyRail = ({
  technologies,
  label = 'Technology stack',
}: TechnologyRailProps) => {
  const shouldLoop = technologies.length > 4;
  const scrollerRef = useGlidingCarousel(18, shouldLoop);
  const displayedTechnologies = shouldLoop
    ? [...technologies, ...technologies]
    : technologies;
  const compactWidth = technologies.length * 148 + Math.max(technologies.length - 1, 0) * 12;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
          {label}
        </p>
        {shouldLoop && (
          <span className="hidden text-[10px] uppercase tracking-[0.16em] text-neutral-600 sm:block">
            Auto scrolling · drag to explore
          </span>
        )}
      </div>

      <div
        ref={scrollerRef}
        className="experience-scroll technology-scroll flex gap-3 overflow-x-auto pb-4"
        style={{
          width: shouldLoop ? '100%' : `min(100%, ${compactWidth}px)`,
          maxWidth: shouldLoop ? '720px' : undefined,
        }}
        aria-label={label}
        data-cursor-interactive
        tabIndex={0}
      >
        {displayedTechnologies.map((technology, displayIndex) => {
          const index = displayIndex % technologies.length;
          const isDuplicate = displayIndex >= technologies.length;
          const iconSlug = technologyIconSlugs[technology];
          const customIcon = technologyCustomIcons[technology];

          return (
            <div
              key={`${technology}-${isDuplicate ? 'duplicate' : 'original'}`}
              className="group min-w-[148px] rounded-2xl border border-neutral-700 bg-neutral-950/75 p-4 transition hover:border-neutral-400 hover:bg-neutral-800"
              aria-hidden={isDuplicate || undefined}
            >
              <div className="mb-7 flex items-center justify-between">
                <Braces className="h-4 w-4 text-neutral-500 transition group-hover:text-white" />
                <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900 shadow-lg shadow-black/20">
                  {customIcon ? (
                    <img
                      src={customIcon}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : iconSlug ? (
                    <img
                      src={`https://cdn.simpleicons.org/${iconSlug}/d4d4d4`}
                      alt=""
                      className="h-5 w-5 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="font-mono text-[10px] font-bold text-neutral-400">
                      {technology
                        .split(/\s+/)
                        .map((word) => word[0])
                        .join('')
                        .slice(0, 3)
                        .toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-end justify-between gap-3">
                <p className="text-sm font-semibold text-neutral-200">{technology}</p>
                <span className="font-mono text-[9px] text-neutral-700">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnologyRail;
