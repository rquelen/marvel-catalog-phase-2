import React, { FunctionComponent } from "react";
import { ClientHero } from "@/types/heroes";

interface PropTypes {
  hero: ClientHero;
}

export const HeroCard: FunctionComponent<PropTypes> = ({ hero }) => (
  <div
    data-testid="card"
    className="w-[200px] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] m-2.5 border-[solid] border-[#e8e8e8] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)]"
  >
    <img
      className="w-[200px] h-[200px] object-scale-down bg-gray-800"
      src={hero.image}
    />
    <p className="text-center">{hero.name}</p>
  </div>
);
