"use client";

import React, { FunctionComponent } from "react";
import LoaderIcon from "./loader.svg";

export const Loader: FunctionComponent<{}> = () => (
  <LoaderIcon className="animate-spin" />
);
