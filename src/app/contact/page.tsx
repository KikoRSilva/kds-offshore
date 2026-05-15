'use client';

import { useState } from 'react';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';
import { useSite } from '@/contexts/site-context';
import { en } from '@/content/en';
import { pt } from '@/content/pt';
import { submitContact } from '@/lib/supabase';

type FormState = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  type: string;
  budget: string;
  message: string;
  nda: boolean;
};

const INITIAL: FormState = {
  name: '', company: '', role: '', email: '',
  phone: '', type: '', budget: '', message: '', nda: false,
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="kds-mono"
      style={{
        fontSize: 10,
        color: 'var(--ink-faint)',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        marginBottom: 8,
      }}
    >
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid var(--line-2)',
  background: 'var(--surface)',
  color: 'var(--ink)',
  fontSize: 15,
  fontFamily: 'inherit',
  outline: 'none',
  borderRadius: 0,
};

function Field({
  label,
  type = 'text',
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}{required && ' *'}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
      >
        <option value="">{placeholder || '–'}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

export default function ContactPage() {
  const { lang } = useSite();
  const t = lang === 'pt' ? pt : en;
  const p = lang === 'pt' ? pt.pages.contact : en.pages.contact;
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const set = (k: keyof FormState) => (v: string | boolean) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: submitError } = await submitContact({
      name: form.name,
      company: form.company,
      role: form.role,
      email: form.email,
      phone: form.phone,
      project_type: form.type,
      budget: form.budget,
      message: form.message,
      nda_required: form.nda,
    });

    setLoading(false);

    if (submitError) {
      setError(submitError);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact/' },
        ]}
      />
      <PageHero
        eyebrow={p.eyebrow}
        lines={[
          { text: p.title1 },
          { text: p.title2, indent: true },
          { text: p.title3, italic: true, accent: true },
        ]}
        lede={p.lede}
      />

      <section style={{ padding: '60px 48px', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {p.promise.map((it, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                style={{
                  padding: '24px 32px',
                  borderRight: i < 2 ? '1px solid var(--line)' : 'none',
                }}
              >
                <div
                  className="kds-mono"
                  style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 10 }}
                >
                  0{i + 1} · {lang === 'pt' ? 'A nossa promessa' : 'Our promise'}
                </div>
                <h4
                  className="kds-display"
                  style={{ fontSize: 22, margin: '0 0 8px', fontWeight: 400 }}
                >
                  {it.t}
                </h4>
                <p
                  className="kds-sans"
                  style={{ fontSize: 13, color: 'var(--ink-dim)', lineHeight: 1.6, margin: 0 }}
                >
                  {it.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: '100px 48px' }}>
        <div
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 80,
          }}
        >
          <div>
            {submitted ? (
              <Reveal>
                <div
                  style={{
                    padding: 80,
                    textAlign: 'center',
                    border: '1px solid var(--accent)',
                    borderRadius: 4,
                  }}
                >
                  <div
                    className="kds-mono"
                    style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 16 }}
                  >
                    ✦ {lang === 'pt' ? 'Enviado' : 'Sent'}
                  </div>
                  <h3
                    className="kds-display"
                    style={{ fontSize: 36, fontWeight: 300, margin: '0 0 16px' }}
                  >
                    {lang === 'pt' ? `Obrigado, ${form.name || 'obrigado'}.` : `Thank you, ${form.name || 'there'}.`}
                  </h3>
                  <p
                    className="kds-sans"
                    style={{ fontSize: 16, color: 'var(--ink-dim)', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}
                  >
                    {lang === 'pt'
                      ? 'Um sócio nomeado responderá num dia útil. Se o projeto for urgente, ligue-nos para +351 213 854 212.'
                      : 'A named principal will reply within one working day. If your project is time-critical, ring us on +351 213 854 212.'
                    }
                  </p>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <Field label={p.form.name} value={form.name} onChange={set('name')} required />
                  <Field label={p.form.company} value={form.company} onChange={set('company')} required />
                  <Field label={p.form.role} value={form.role} onChange={set('role')} />
                  <Field label={p.form.email} type="email" value={form.email} onChange={set('email')} required />
                  <Field label={p.form.phone} value={form.phone} onChange={set('phone')} />
                  <SelectField label={p.form.type} value={form.type} onChange={set('type')} options={p.form.types} />
                  <SelectField label={p.form.budget} value={form.budget} onChange={set('budget')} options={p.form.budgets} />
                </div>

                <div style={{ marginTop: 32 }}>
                  <Label>{p.form.message}</Label>
                  <textarea
                    value={form.message}
                    onChange={(e) => set('message')(e.target.value)}
                    rows={6}
                    placeholder={lang === 'pt' ? 'Uma lancha-piloto de 12 m, actualmente a consumir 90 L/h a 22 nós...' : 'A 12 m pilot boat, currently burning 90 L/h at 22 kn...'}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      display: 'block',
                    }}
                  />
                </div>

                <label
                  className="kds-sans"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginTop: 24,
                    fontSize: 14,
                    color: 'var(--ink-dim)',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={form.nda}
                    onChange={(e) => set('nda')(e.target.checked)}
                    style={{ width: 16, height: 16, accentColor: 'var(--accent)', cursor: 'pointer' }}
                  />
                  {p.form.nda}
                </label>

                {error && (
                  <div
                    className="kds-mono"
                    style={{
                      marginTop: 16,
                      fontSize: 12,
                      color: 'var(--signal)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    ⚠ {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="kds-sans"
                  style={{
                    marginTop: 40,
                    padding: '20px 36px',
                    background: loading ? 'var(--ink-dim)' : 'var(--ink)',
                    color: 'var(--bg)',
                    border: 'none',
                    borderRadius: 999,
                    fontSize: 15,
                    fontWeight: 500,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  {loading ? (lang === 'pt' ? 'A enviar...' : 'Sending...') : p.form.submit} →
                </button>
              </form>
            )}
          </div>

          <aside>
            <Reveal delay={0.1}>
              <div
                className="kds-mono"
                style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 20 }}
              >
                {lang === 'pt' ? 'Ou, diretamente' : 'Or, directly'}
              </div>
              <a
                href={`mailto:${t.cta.mail}`}
                className="kds-display"
                style={{ display: 'block', fontSize: 24, fontWeight: 400, marginBottom: 8 }}
              >
                {t.cta.mail}
              </a>
              <a
                href={`tel:${t.cta.tel.replace(/\s/g, '')}`}
                className="kds-display"
                style={{ display: 'block', fontSize: 24, fontWeight: 400, marginBottom: 32 }}
              >
                {t.cta.tel}
              </a>

              <div style={{ paddingTop: 32, borderTop: '1px solid var(--line)' }}>
                <div
                  className="kds-mono"
                  style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 16 }}
                >
                  {lang === 'pt' ? 'Estúdio' : 'Studio'}
                </div>
                <p
                  className="kds-sans"
                  style={{ fontSize: 14, color: 'var(--ink-dim)', lineHeight: 1.7, margin: 0 }}
                >
                  {t.foot.addr}
                  <br />
                  {t.foot.city}
                  <br />
                  {t.foot.hours}
                </p>
              </div>

              <div style={{ marginTop: 32, paddingTop: 32, borderTop: '1px solid var(--line)' }}>
                <div
                  className="kds-mono"
                  style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 16 }}
                >
                  {lang === 'pt' ? 'Estado' : 'Status'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className="status-dot" aria-hidden />
                  <span className="kds-sans" style={{ fontSize: 14, color: 'var(--ink)' }}>
                    {lang === 'pt' ? 'A aceitar projetos para Q3 2026' : 'Accepting Q3 2026 engagements'}
                  </span>
                </div>
              </div>

              <div
                style={{
                  marginTop: 32,
                  aspectRatio: '4/5',
                  borderRadius: 4,
                  overflow: 'hidden',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/stock/engineering-detail.jpg"
                  alt="KDS Offshore studio, Lisbon, Portugal"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
