import React from "react";

export default function PageSelector({ entities }) {
  const pages = Math.ceil(entities.length / 3);
  return <div>{pages}</div>;
}
