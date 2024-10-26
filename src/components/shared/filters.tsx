import { FC } from 'react';
import { FilterCheckbox, Title, CheckboxFiltersGroup } from '@/components/shared';
import { Input } from '@/components/ui';
import { RangeSlider } from '@/components/ui/range-slider';

interface IProps {
  className?: string;
}

export const Filters: FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text={'Filters'} size={'sm'} className={'mb-5 font-semibold'} />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text={'New dishes'} value={'1'} />
        <FilterCheckbox text={'Discount'} value={'2'} />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-semibold mb-3">Price:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={5000} defaultValue={0} />
          <Input type="number" placeholder="5000" min={100} max={5000} />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        title={'Ingredients'}
        items={[
          {
            text: 'Tomatoes',
            value: '1',
          },
          {
            text: 'Chicken',
            value: '2',
          },
          {
            text: 'Cheese',
            value: '3',
          },
          {
            text: 'Mushrooms',
            value: '4',
          },
          {
            text: 'Salami',
            value: '5',
          },
          {
            text: 'Beef',
            value: '6',
          },
        ]}
        defaultItems={[
          {
            text: 'Tomatoes',
            value: '1',
          },
          {
            text: 'Chicken',
            value: '2',
          },
          {
            text: 'Cheese',
            value: '3',
          },
          {
            text: 'Mushrooms',
            value: '4',
          },
          {
            text: 'Salami',
            value: '5',
          },
          {
            text: 'Beef',
            value: '6',
          },
        ]}
        limit={6}
        className="mt-5"
      />
    </div>
  );
};
