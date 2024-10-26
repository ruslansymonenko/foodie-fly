import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Container, Categories, SortPopup } from '@/components/shared';

interface IProps {
  className?: string;
}

export const TopBar: FC<IProps> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white py-4 shadow-lg shadow-black/5 z-10', className)}>
      <Container>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
