import { HeroCard } from "@/app/marvel-catalog/[page]/components/HeroCard/HeroCard";
import { ClientHeroes } from "@/types/clientResponses";
import { Pagination } from "@/app/marvel-catalog/[page]/components/Pagination/Pagination";
import { get } from "@/app/helpers/http";

const fetchHeroes = async (page: string): Promise<ClientHeroes> => {
  return await get<ClientHeroes>(
    `http://localhost:3001/superheroes/marvel?page=${page}`
  );
};

export default async function Page({ params }: { params: { page: string } }) {
  const heroesPage = await fetchHeroes(params.page);

  return (
    <div className="max-w-[1000px] text-center mx-auto my-0">
      <h1 className="text-center">Marvel Super Heroes</h1>
      <Pagination pagination={heroesPage.pagination} />
      <div className="flex flex-wrap justify-center">
        {heroesPage.heroes.map((hero) => (
          <HeroCard key={hero.name} hero={hero} />
        ))}
      </div>
      <Pagination pagination={heroesPage.pagination} />
    </div>
  );
}
