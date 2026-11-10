"use client";

import { useState, type FormEvent } from "react";

type ContactField = {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
};

export type ContactFormData = {
  fields: ContactField[];
  submitLabel: string;
  selectPrompt: string;
  subject: string;
  mailBodyLabels: Record<string, string>;
  successMessage: string;
};

export default function EnquiryForm({ data, recipient }: { data: ContactFormData; recipient: string }) {
  const [submitted, setSubmitted] = useState(false);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const body = data.fields
      .map((field) => `${data.mailBodyLabels[field.name] ?? field.label}: ${String(values.get(field.name) ?? "")}`)
      .join("\n");
    const query = new URLSearchParams({ subject: data.subject, body });
    window.location.href = `mailto:${recipient}?${query.toString()}`;
    setSubmitted(true);
  }

  return (
    <form className="enquiry-form" onSubmit={submitEnquiry}>
      <div className="enquiry-fields">
        {data.fields.map((field) => {
          const id = `enquiry-${field.name}`;
          return (
            <div className={`enquiry-field enquiry-field-${field.name}`} key={field.name}>
              <label htmlFor={id}>{field.label}{field.required ? " *" : ""}</label>
              {field.type === "select" ? (
                <select id={id} name={field.name} required={field.required} defaultValue="">
                  <option value="" disabled>{field.placeholder ?? data.selectPrompt}</option>
                  {field.options?.map((option) => <option value={option} key={option}>{option}</option>)}
                </select>
              ) : field.type === "textarea" ? (
                <textarea id={id} name={field.name} placeholder={field.placeholder} required={field.required} />
              ) : (
                <input id={id} name={field.name} type={field.type === "tel" ? "tel" : "text"} placeholder={field.placeholder} required={field.required} />
              )}
            </div>
          );
        })}
      </div>
      <button className="enquiry-submit" type="submit">{data.submitLabel}<span aria-hidden="true"> →</span></button>
      {submitted && <p className="enquiry-success" role="status">{data.successMessage}</p>}
    </form>
  );
}
