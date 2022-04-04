import React from "react";
import EntitySelector from "./EntitySelector";
import "./HomeWhoWeHelp.scss";

import HomeWhoWeHelpHeader from "./HomeWhoWeHelpHeader";
import EntityGroupDescription from "./EntityGroupDescription";
import EntityList from "./EntityList";

export default function HomeWhoWeHelp() {
  const entityGroupDesc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
  const entities = [
    {
      id: 1,
      name: "Organizacja “Lorem Ipsum 1”",
      subtitle: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
      list: ["Egestas", "sed", "tempus"],
    },
    {
      id: 2,
      name: "Organizacja “Lorem Ipsum 2”",
      subtitle:
        "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
      list: ["Ut", "aliquam", "purus", "sit", "amet"],
    },
    {
      id: 3,
      name: "Organizacja “Lorem Ipsum 3”",
      subtitle: "Scelerisque in dictum non consectetur a erat nam.",
      list: ["Mi", "quis", "hendrerit", "dolor"],
    },
  ];
  return (
    <section className="who-we-help" name="who-we-help">
      <HomeWhoWeHelpHeader />
      <EntitySelector />
      <EntityGroupDescription description={entityGroupDesc} />
      <EntityList entities={entities} />
    </section>
  );
}
