import { Container, Filters, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container>
        <Title text={'All products'} size={'lg'} className={'font-extrabold mt-4'} />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex flex-col gap-16"></div>
        </div>
      </Container>
    </>
  );
}
