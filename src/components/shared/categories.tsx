import { FC } from 'react';
import { cn } from '@/lib/utils';

interface IProps {
  className?: string;
}

const categories = ['Breakfasts', 'Salads', 'Soups', 'Main dishes', 'Deserts', 'Drinks'];
const activeIndex = 0;

export const Categories: FC<IProps> = ({ className }) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map((item, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href=""
          key={index}
        >
          <button>{item}</button>
        </a>
      ))}
    </div>
  );
};
