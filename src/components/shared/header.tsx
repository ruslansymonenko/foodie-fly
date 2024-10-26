import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/shared/container';
import Image from 'next/image';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

interface IProps {
  className?: string;
}

export const Header: FC<IProps> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src={'/logo.png'} alt={'logo'} width={35} height={35}></Image>
          <div>
            <h1 className="text-2xl uppercase font-black">FoodieFly</h1>
            <p className="text-sm text-gray-400 leading-3">Best food delivery</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="items-center gap-3 flex">
            <User />
            <span>Enter</span>
          </Button>
          <div>
            <Button className="group relative">
              <b>120 UAH</b>
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart />
                <b>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
