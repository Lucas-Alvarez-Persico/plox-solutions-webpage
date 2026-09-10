"use client";

import { useId, useState } from "react";

import { enquiry } from "@/content/home";
import { sectionIds } from "@/content/site";

type Status = "idle" | "sending" | "success" | "error" | "notConfigured";

const FIELD_SHELL =
  "flex h-14 items-center bg-ink-deep px-4 transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-orange";

const CONTROL =
  "type-body-l w-full bg-transparent text-bone placeholder:text-gray-deep focus:outline-none";

export function Enquiry() {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [invalid, setInvalid] = useState<string[]>([]);

  const isSending = status === "sending";

  const message =
    status === "success"
      ? enquiry.messages.success
      : status === "notConfigured"
        ? enquiry.messages.notConfigured
        : status === "error"
          ? invalid.length > 0
            ? enquiry.messages.invalid
            : enquiry.messages.error
          : "";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<
      string,
      string
    >;

    const missing = enquiry.fields
      .filter((field) => field.required && !data[field.name]?.trim())
      .map((field) => field.name);

    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      missing.push("email");
    }

    if (missing.length > 0) {
      setInvalid([...new Set(missing)]);
      setStatus("error");
      return;
    }

    setInvalid([]);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus(response.status === 501 ? "notConfigured" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id={sectionIds.enquiry}
      className="section-x scroll-mt-18 bg-ink py-16 tablet:py-24 desktop:py-40"
    >
      <div className="container-site flex flex-col gap-16">
        <header data-reveal className="flex flex-col gap-4">
          <h2 className="type-display-2 text-bone">{enquiry.title}</h2>
          <p className="type-prose max-w-[660px] text-gray">
            {enquiry.subtitle}
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          noValidate
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          className="flex flex-col gap-8"
        >
          <div className="grid gap-6 tablet:grid-cols-2 tablet:gap-x-8 desktop:gap-y-8 desktop:gap-x-10">
            {enquiry.fields.map((field) => {
              const fieldId = `${formId}-${field.name}`;
              const hasError = invalid.includes(field.name);

              return (
                <div key={field.name} className="flex flex-col gap-2.5">
                  <label
                    htmlFor={fieldId}
                    className="type-eyebrow text-gray"
                  >
                    {field.label}
                  </label>
                  <div
                    className={`${FIELD_SHELL} ${hasError ? "outline outline-2 outline-orange" : ""}`}
                  >
                    <input
                      id={fieldId}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      aria-invalid={hasError || undefined}
                      disabled={isSending}
                      className={CONTROL}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-2.5">
            <label
              htmlFor={`${formId}-details`}
              className="type-eyebrow text-gray"
            >
              {enquiry.details.label}
            </label>
            <div className="bg-ink-deep p-4 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-orange">
              <textarea
                id={`${formId}-details`}
                name={enquiry.details.name}
                placeholder={enquiry.details.placeholder}
                rows={5}
                disabled={isSending}
                className={`${CONTROL} block h-32 resize-y`}
              />
            </div>
          </div>

          {/* Honeypot: invisible para personas, tentador para bots. */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="sr-only"
          />

          <div className="flex flex-col">
            <button
              type="submit"
              disabled={isSending}
              className="corner-cut type-label inline-flex h-12 w-full items-center justify-center bg-orange px-6 text-bone transition-colors hover:bg-navy disabled:opacity-70 tablet:w-auto tablet:self-start"
            >
              {isSending ? enquiry.messages.sending : enquiry.submitLabel}
            </button>

            {/*
              El mensaje vive siempre en el DOM para que aria-live lo anuncie,
              pero sin margen propio cuando está vacío: así el bloque mide lo
              mismo que el botón mientras no hay nada que decir.
            */}
            <p
              role="status"
              aria-live="polite"
              className={`type-eyebrow ${message ? "mt-4" : ""} ${
                status === "success" ? "text-bone" : "text-orange"
              }`}
            >
              {message}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
