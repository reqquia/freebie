interface CardProps {
  title: string;
  title_color: string;
  subtitle: string;
  value: string;
  percentage: string;
  percentage_color: string;
  percentage_icon: React.ReactNode;
  percentage_text: string;
  icon: React.ReactNode;
}

function Card({
  title,
  title_color,
  subtitle,
  value,
  percentage,
  percentage_color,
  percentage_icon,
  icon,
  percentage_text,
}: CardProps) {
  return (
    <div className='p-4 bg-white rounded-lg shadow'>
      {title && (
        <h2
          className={`text-2xl font-bold flex items-center gap-3 ${title_color}`}
        >
          <span className='w-10 h-10 bg-purple-200 rounded-full flex justify-center items-center'>
            {icon}
          </span>
          {title}
        </h2>
      )}
      <div className='body py-3'>
        {subtitle && <p>{subtitle}</p>}
        {value && <h3 className='text-3xl font-bold'>{value}</h3>}
        {percentage && (
          <span
            className={`text-sm ${percentage_color} flex items-center gap-1`}
          >
            {percentage_icon}
            {percentage}{' '}
            <span className='text-zinc-500'>{percentage_text}</span>
          </span>
        )}
      </div>
    </div>
  );
}

export default Card;
