export const ChevronRight = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} lucide lucide-chevron-right-icon lucide-chevron-right`}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
};

export const ChevronLeft = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} lucide lucide-chevron-left-icon lucide-chevron-left`}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
};
