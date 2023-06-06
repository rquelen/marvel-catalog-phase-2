import { HeroCard } from "@/app/components/HeroCard/HeroCard";
import { ClientHeroes } from "@/types/clientResponses";
import { Pagination } from "@/app/components/Pagination/Pagination";
import { get } from "@/app/helpers/http";

const fetchHeroes = async (page: string): Promise<ClientHeroes> => {
  return await get<ClientHeroes>(
    `http://localhost:3001/superheroes/dc?page=${page}`
  );
};

export const metadata = {
  title: "dc catalog",
  description: "this is a catalog of dc superheroes",
};

export default async function Page({ params }: { params: { page: string } }) {
  const heroesPage = await fetchHeroes(params.page);
  const universe = "dc";

  return (
    <div className="max-w-[1000px] text-center mx-auto my-0">
      <h1 className="text-2xl text-center">
        {universe.toUpperCase()} Super Heroes
      </h1>
      <Pagination universe={universe} pagination={heroesPage.pagination} />
      <div className="flex flex-wrap justify-center">
        {heroesPage.heroes.map((hero) => (
          <HeroCard key={hero.name} hero={hero} />
        ))}
      </div>
      <Pagination universe={universe} pagination={heroesPage.pagination} />
    </div>
  );
}
