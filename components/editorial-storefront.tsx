"use client";

import * as React from "react";
import ClothingRailHero from "@/components/ui/product-rail-gallery";
import { RAIL_DEMO_ITEMS } from "@/components/rail-demo";

export function EditorialStorefront() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const onSelectionChange = React.useCallback((index: number | null) => {
    setSelectedIndex(index ?? 0);
  }, []);
  const selected = RAIL_DEMO_ITEMS[selectedIndex] ?? RAIL_DEMO_ITEMS[0];

  return (
    <div className="storefront">
      <div className="storefront-frame">
        <header className="masthead" aria-label="DHXWHY Studio">
          <p className="brandmark">
            DHXWHY <span>/</span> STUDIO
          </p>
          <p className="season-mark">SEASON 01 · 2025</p>
        </header>

        <main>
          <section className="intro" aria-labelledby="page-title">
            <div className="eyebrow">
              <span aria-hidden="true" />
              <p>New season · Ten pieces on the rail</p>
              <span aria-hidden="true" />
            </div>
            <h1 id="page-title">
              <span>A clothing rail you can handle,</span>
              <span>right on the page.</span>
            </h1>
            <p className="intro-caption">
              Brush along the rail, slide a hanger, lift a piece to see the back.
            </p>
          </section>

          <section className="rail-editor" aria-label="The clothing edit">
            <div className="rail-kicker">
              <p>
                ON THE RAIL <span>{String(RAIL_DEMO_ITEMS.length).padStart(2, "0")}</span>
              </p>
              <p>↔ BRUSH TO BROWSE</p>
            </div>

            <ClothingRailHero
              items={RAIL_DEMO_ITEMS}
              hanger="none"
              autoplay
              className="editorial-gallery"
              onSelectionChange={onSelectionChange}
            />

            <div className="product-strip" aria-live="polite">
              <p className="item-count">
                {String(selectedIndex + 1).padStart(2, "0")}
                <span> / {String(RAIL_DEMO_ITEMS.length).padStart(2, "0")}</span>
              </p>
              <div className="product-copy">
                <h2>{selected.name}</h2>
                <p>{selected.description}</p>
              </div>
              <p className="product-price">{selected.tag}</p>
            </div>
          </section>

          <div className="shop-action">
            <button type="button">Shop the edit</button>
          </div>

          <div className="side-notes" aria-label="Collection notes">
            <p>↘ MADE TO KEEP</p>
            <p>NATURAL TEXTURES · EASY LAYERS</p>
          </div>
        </main>

        <footer className="page-footer">
          <p>THOUGHTFULLY CHOSEN.</p>
          <p>NEW SEASON. IN GOOD COMPANY.</p>
        </footer>
      </div>
    </div>
  );
}
