import { cn } from '@/lib/utils';

/** A dark editor-style card for short code samples. Lines starting with // render as comments. */
export default function CodeCard({ filename, code, className }: { filename: string; code: string; className?: string }) {
  return (
    <figure
      data-reveal="scale"
      className={cn(
        'overflow-hidden rounded-3xl border border-[#a39e94]/15 bg-[#141414]/80 shadow-[0_40px_120px_-60px_rgb(201_169_110/0.4)]',
        className
      )}
    >
      <figcaption className="flex items-center justify-between border-b border-[#a39e94]/10 px-5 py-3.5">
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ecd9b0]/80" />
          <span className="size-2.5 rounded-full bg-[#a39e94]/40" />
          <span className="size-2.5 rounded-full bg-[#c9a96e]/80" />
        </span>
        <span className="font-mono text-xs text-[#a39e94]">{filename}</span>
      </figcaption>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
        <code>
          {code.split('\n').map((line, i) => (
            <span key={i} className={cn('block', line.trim().startsWith('//') ? 'text-[#a39e94]/60' : 'text-[#f5f1e8]/85')}>
              {line || ' '}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
