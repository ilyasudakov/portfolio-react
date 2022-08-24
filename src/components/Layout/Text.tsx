import AnimationWrapper from './AnimationWrapper';

export const BlockTitle: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return (
    <AnimationWrapper>
      <div
        className="mb-2 w-fit border-b-4 border-stone-400 
        text-xl font-bold text-stone-700 dark:border-stone-500 dark:text-stone-50"
      >
        {children}
      </div>
    </AnimationWrapper>
  );
};

export const TextBlock: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return (
    <div className="mb-14 flex flex-col text-stone-800 dark:text-stone-300">
      {children}
    </div>
  );
};
