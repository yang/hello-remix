/** @format */

import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import {
  PlasmicRootProvider,
  PlasmicComponent,
} from "@plasmicapp/loader-react";
import { PLASMIC } from "../plasmic-init";

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = async () => {
  const plasmicData = await PLASMIC.fetchComponentData("/");
  return json(plasmicData);
};

export default function Index() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component="Homepage" />
    </PlasmicRootProvider>
  );
}
