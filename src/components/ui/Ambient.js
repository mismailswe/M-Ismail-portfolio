import React from "react";

/** Fixed decorative backdrop: grid, drifting aurora blobs and film grain. */
export default function Ambient() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__grid" />
      <div className="ambient__blob ambient__blob--1" />
      <div className="ambient__blob ambient__blob--2" />
      <div className="ambient__blob ambient__blob--3" />
      <div className="ambient__grain" />
    </div>
  );
}
