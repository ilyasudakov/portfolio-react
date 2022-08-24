import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimationWrapper: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { ref, inView } = useInView();
  const [wasInView, setWasInView] = useState(false);

  useEffect(() => {
    if (wasInView) return;
    if (inView) setWasInView(true);
  }, [inView, wasInView]);

  return (
    <div
      ref={ref}
      className={`transition duration-1000 ${
        inView || wasInView
          ? 'translate-x-0 opacity-100'
          : 'translate-x-20 opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimationWrapper;
