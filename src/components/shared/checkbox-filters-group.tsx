'use client';

import { FC } from 'react';
import { FilterCheckbox, IFilterCheckboxProps } from '@/components/shared/filter-checkbox';
import { Input } from '@/components/ui';

type Item = IFilterCheckboxProps;

interface IProps {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: FC<IProps> = ({
  className,
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Search...',
  onChange,
  defaultValue,
}) => {
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      <div className="mb-5">
        <Input placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" />
      </div>

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {items.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>
    </div>
  );
};
