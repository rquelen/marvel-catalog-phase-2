import React, { FunctionComponent } from "react";
import { LinkButton } from "@/components/LinkButton/LinkButton";
import { ClientPagination } from "@/types/pagination";

interface PropTypes {
  pagination: ClientPagination;
}

export const Pagination: FunctionComponent<PropTypes> = ({ pagination }) => {
  const isFirstPage = pagination && pagination.currentPage === 1;
  const isLastPage =
    pagination && pagination.currentPage === pagination.lastPage;

  return (
    <div className="flex justify-center items-center mx-0 my-5">
      {!isFirstPage && (
        <>
          <LinkButton href={"/marvel-catalog/1"} id="first">
            ◂◂
          </LinkButton>
          <LinkButton
            href={`/marvel-catalog/${pagination.currentPage - 1}`}
            id="previous"
          >
            ◂
          </LinkButton>
        </>
      )}
      <div className="text-xl mx-5 my-0">
        Page {pagination && pagination.currentPage}
      </div>
      {!isLastPage && (
        <>
          <LinkButton
            href={`/marvel-catalog/${pagination.currentPage + 1}`}
            id="next"
          >
            ▸
          </LinkButton>

          <LinkButton href={`/marvel-catalog/${pagination.lastPage}`} id="last">
            ▸▸
          </LinkButton>
        </>
      )}
    </div>
  );
};
