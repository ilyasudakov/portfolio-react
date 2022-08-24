import Image, { StaticImageData } from 'next/image';

import AnimationWrapper from './Layout/AnimationWrapper';
import { BlockTitle, TextBlock } from './Layout/Text';

import { projectsList } from '../data/landing';

const Projects: React.FC = () => {
  return (
    <TextBlock>
      <BlockTitle>Проекты</BlockTitle>
      <ul className="grid w-full gap-6 sm:grid-cols-2">
        {projectsList
          .sort((a, b) => a.position - b.position)
          .map((project) => (
            <li key={project.projectName}>
              <AnimationWrapper>
                <ProjectItem project={project} />
              </AnimationWrapper>
            </li>
          ))}
      </ul>
    </TextBlock>
  );
};

const ProjectItem: React.FC<{
  project: {
    projectName: string;
    href: string;
    description: string;
    image: StaticImageData;
    stack?: string[];
  };
}> = ({ project }) => {
  const { projectName, href, description, image, stack } = project;
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      <div className="relative mx-auto aspect-video max-w-[100%] [&_span]:rounded-lg">
        <Image
          layout="fill"
          src={image}
          className="transition duration-500 hover:scale-[1.05]"
          objectFit="cover"
          alt={`${projectName} image`}
        />
      </div>
      <div className="px-4 py-2">
        <div className="text-center text-lg dark:text-stone-100">
          {projectName}
        </div>
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
