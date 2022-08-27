import Image from 'next/image';

import AnimationWrapper from './Layout/AnimationWrapper';
import { BlockTitle, TextBlock } from './Layout/Text';

import { projectsList, projectType, projectsIds } from '../data/landing';
import useLang from '../hooks/useLang';
import { projectsType, PROJECTS_ID } from '../data/locales/types';

const Projects: React.FC = () => {
  const { t } = useLang(PROJECTS_ID);
  if (t.id !== PROJECTS_ID) return null;

  return (
    <TextBlock>
      <BlockTitle>{t.title}</BlockTitle>
      <ul className="grid w-full gap-6 sm:grid-cols-2">
        {projectsList
          .sort((a, b) => a.position - b.position)
          .map((project) => (
            <li key={project.id}>
              <AnimationWrapper>
                <ProjectItem project={project} t={t.list[project.id]} />
              </AnimationWrapper>
            </li>
          ))}
      </ul>
    </TextBlock>
  );
};

const ProjectItem = ({
  project,
  t
}: {
  project: projectType;
  t: projectsType['list'][typeof projectsIds[number]];
}) => {
  const { href, image, stack, id } = project;
  const { title, description } = t;

  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      <div className="relative mx-auto aspect-video max-w-[100%] [&_span]:rounded-lg">
        <Image
          layout="fill"
          src={image}
          className="transition duration-500 hover:scale-[1.05]"
          objectFit="cover"
          alt={`${title} image`}
        />
      </div>
      <div className="px-4 py-2">
        <div className="text-center text-lg dark:text-stone-100">{title}</div>
        <div className="text-sm">{description}</div>
        {stack ? (
          <div className="mx-auto flex w-fit flex-wrap items-center justify-center px-3 py-1 text-sm">
            {stack.map((tool) => (
              <div
                key={tool}
                className="px-1 text-stone-500 dark:text-stone-400"
              >
                {tool}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </a>
  );
};

export default Projects;
