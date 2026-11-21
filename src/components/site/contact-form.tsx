'use client';

import { useState, type FormEvent } from 'react';
import { cn } from '@/lib/utils';

const TOPICS = ['Book a demo', 'Sales & pricing', 'Support', 'Partnerships'] as const;
const SIZES = ['1–10', '11–50', '51–200', '201–1,000', '1,000+'];

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

const field =
  'mt-2 block w-full rounded-xl border border-[#a39e94]/20 bg-[#0a0a0b]/70 px-4 py-3 text-[15px] text-[#f5f1e8] placeholder:text-[#a39e94]/60 transition-colors focus:border-[#c9a96e]/70 focus:outline-none aria-[invalid=true]:border-[#e07a5f]';

/**
 * Contact form UI with client-side validation.
 * TEMPLATE NOTE: there is no backend. `submit` only shows the success state;
 * connect it to your email service or API before launch.
 */
export default function ContactForm() {
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>('Book a demo');
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};
    if (!String(data.get('name') ?? '').trim()) next.name = 'Please tell us your name.';
    const email = String(data.get('email') ?? '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid work email.';
    if (String(data.get('message') ?? '').trim().length < 10) next.message = 'A sentence or two helps us prepare.';
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="flex min-h-[520px] flex-col items-center justify-center rounded-3xl border border-[#c9a96e]/30 bg-[#141414]/80 p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-[#c9a96e]/15">
          <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="#ecd9b0" strokeWidth="2.2" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="mt-6 font-display text-2xl font-semibold">Thanks, we’ve got it</h2>
        <p className="mt-2 max-w-sm text-[#f5f1e8]/60">Someone from our team will reply within one business day.</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 cursor-pointer text-sm font-medium text-[#ecd9b0] underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={submit} className="rounded-3xl border border-[#a39e94]/12 bg-[#141414]/80 p-6 sm:p-8">
      <fieldset>
        <legend className="text-sm font-medium text-[#f5f1e8]/80">What can we help with?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <label
              key={t}
              className={cn(
                'cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#ecd9b0]',
                topic === t ? 'border-transparent bg-[#c9a96e] text-[#0a0a0b]' : 'border-[#a39e94]/20 text-[#f5f1e8]/70 hover:border-[#c9a96e]/50'
              )}
            >
              <input type="radio" name="topic" value={t} checked={topic === t} onChange={() => setTopic(t)} className="sr-only" />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#f5f1e8]/80">
          Full name
          <input name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined} />
          {errors.name ? <span id="err-name" className="mt-1.5 block text-xs text-[#e07a5f]">{errors.name}</span> : null}
        </label>
        <label className="block text-sm font-medium text-[#f5f1e8]/80">
          Work email
          <input name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined} />
          {errors.email ? <span id="err-email" className="mt-1.5 block text-xs text-[#e07a5f]">{errors.email}</span> : null}
        </label>
        <label className="block text-sm font-medium text-[#f5f1e8]/80">
          Company
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="block text-sm font-medium text-[#f5f1e8]/80">
          Team size
          <select name="size" defaultValue="11–50" className={cn(field, 'appearance-none')}>
            {SIZES.map((s) => (
              <option key={s} value={s} className="bg-[#141414]">
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-[#f5f1e8]/80">
        How can we help?
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about the work you’d like an agent to take on…"
          className={cn(field, 'resize-y')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'err-message' : undefined}
        />
        {errors.message ? <span id="err-message" className="mt-1.5 block text-xs text-[#e07a5f]">{errors.message}</span> : null}
      </label>

      <button
        type="submit"
        className="mt-7 inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#c9a96e] px-7 text-[15px] font-medium text-[#0a0a0b] transition-colors duration-300 hover:bg-[#ecd9b0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ecd9b0] sm:w-auto"
      >
        Send message <span aria-hidden="true">→</span>
      </button>
      <p className="mt-4 text-xs text-[#a39e94]">We reply within one business day. We never share your details.</p>
    </form>
  );
}
