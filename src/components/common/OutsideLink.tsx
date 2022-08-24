const OutsideLink: React.FC<{
  children: React.ReactNode;
  href: string;
  className?: string;
}> = ({ children, href, className = '' }) => {
  return (
    <a
      className={`inline w-fit border-b 
        border-fuchsia-600 text-fuchsia-600 dark:border-fuchsia-400 dark:text-fuchsia-400 ${className}`}
      target="_blank"
      rel="noreferrer noopener"
      href={href}
    >
      {children}
    </a>
  );
};

export default OutsideLink;
