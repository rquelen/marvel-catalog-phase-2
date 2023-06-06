"use client";

import React, { FunctionComponent } from "react";
import LoaderIcon from "./loader.svg";

export const Loader: FunctionComponent<{}> = () => (
  <div className={"flex items-center justify-center h-screen"}>
    <LoaderIcon className="animate-spin w-40 h-40" />
  </div>
);
