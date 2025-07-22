'use client'
interface LabelTagProps {
  title?: string;
  desktopText?: string;
  className?: string;
}

export default function LabelTag({ title, className = "" }: LabelTagProps) {
  return (
    <div className={`inline-flex items-center mb-5 ${className}`}>
      <span className="bg-gray bg-opacity-10 px-5 py-2 rounded-tl-xl rounded-tr-sm font-bold rounded-bl-sm rounded-br-xl text-base">
        {title && <span className="block md:hidden">{title}</span>}
        {title && (
          <span className={`hidden md:block ${className}`}>{title}</span>
        )}
      </span>
    </div>
  );
}
