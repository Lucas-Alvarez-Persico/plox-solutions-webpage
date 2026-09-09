import { sectionIds } from "@/content/site";

/**
 * Secciones provisorias: dejan los anclajes del nav y del footer funcionando
 * hasta que cada una se construya en su propio commit.
 */
const placeholders = [
  { id: sectionIds.hero, label: "A-01 · Hero" },
  { id: sectionIds.record, label: "A-02 · Record" },
  { id: sectionIds.method, label: "A-05 · Method" },
  { id: sectionIds.enquiry, label: "A-10 · Enquiry" },
];

export default function Home() {
  return (
    <>
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
