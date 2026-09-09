import { Hero } from "@/components/sections/hero";
import { Method } from "@/components/sections/method";
import { Record } from "@/components/sections/record";
import { sectionIds } from "@/content/site";

/**
 * Secciones provisorias: dejan los anclajes del nav y del footer funcionando
 * hasta que cada una se construya en su propio commit.
 */
const placeholders = [
  { id: sectionIds.enquiry, label: "A-10 · Enquiry" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Record />
      <Method />
      {placeholders.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="section-x section-y scroll-mt-18"
        >
          <div className="container-site">
            <p className="type-eyebrow text-gray-deep">{section.label}</p>
          </div>
        </section>
      ))}
    </>
  );
}
