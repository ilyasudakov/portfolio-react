import { BlockTitle, TextBlock } from './Layout/Text';

import { skillsList } from '../data/landing';

const SkillSet: React.FC = () => {
  return (
    <TextBlock>
      <BlockTitle>Навыки</BlockTitle>
      <ul className="flex flex-col gap-1 sm:gap-4">
        {skillsList.map((skillSetItem) => (
          <SkillListItem
            skillSetItem={skillSetItem}
            key={skillSetItem.setName}
          />
        ))}
      </ul>
    </TextBlock>
  );
};

const SkillItem: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <div
      className="cursor-pointer rounded border border-stone-400 px-4 py-1 text-sm 
      transition hover:bg-stone-100 dark:hover:bg-stone-700"
    >
      {skill}
    </div>
  );
};

const SkillListItem: React.FC<{
  skillSetItem: { setName: string; skills: string[] };
}> = ({ skillSetItem }) => {
  const { setName, skills } = skillSetItem;
  return (
    <li>
      <div className="flex flex-col sm:flex-row">
        <div className="mb-1 w-full text-left font-bold dark:text-stone-100 sm:mb-0 sm:max-w-[20ch]">
          {setName}
        </div>
        <div className="flex flex-wrap gap-2 text-left">
          {skills.map((skill) => (
            <SkillItem key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </li>
  );
};

export default SkillSet;
