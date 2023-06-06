import { ClientHeroes } from "@/types/clientResponses";
import { get } from "@/app/helpers/http";
import React from "react";
import { Pagination } from "@/app/components/Pagination/Pagination";
import { HeroCard } from "@/app/components/HeroCard/HeroCard";

const fetchHeroes = async (page: string): Promise<ClientHeroes> => {
  return await get<ClientHeroes>(
    `http://localhost:3001/superheroes/marvel?page=${page}`
  );
};

export const metadata = {
  title: "marvel catalog",
  description: "this is a catalog of marvel superheroes",
};

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
export default async function Page({ params }: { params: { page: string } }) {
  const heroesPage = await fetchHeroes(params.page);
  const universe = "marvel";

  return (
    <div className="max-w-[1000px] text-center mx-auto my-0">
      <h1 className="text-center">
        {capitalizeFirstLetter(universe)} Super Heroes
      </h1>
      <Pagination universe={universe} pagination={heroesPage.pagination} />
      <div className="flex flex-wrap justify-center">
        {heroesPage.heroes.map((hero) => (
          <HeroCard key={hero.name} hero={hero} />
        ))}
      </div>
      <Pagination universe={"marvel"} pagination={heroesPage.pagination} />
    </div>
  );
}
