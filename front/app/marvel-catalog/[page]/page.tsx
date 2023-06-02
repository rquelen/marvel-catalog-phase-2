import { HeroCard } from "@/components/HeroCard/HeroCard";
import { ClientHeroes } from "@/types/clientResponses";
import { Pagination } from "@/components/Pagination/Pagination";

const fetchHeroes = async (page: string): Promise<ClientHeroes> => {
  const responsePromise = await fetch(
    `http://localhost:3001/superheroes?page=${page}`,
    { cache: "force-cache" }
  );
  return responsePromise.json();
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
