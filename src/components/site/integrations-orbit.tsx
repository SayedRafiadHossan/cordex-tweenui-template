"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoMark from "./logo";

gsap.registerPlugin(useGSAP, MotionPathPlugin, ScrollTrigger);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ICON = (slug: string) => `https://cdn.simpleicons.org/${slug}/f5f1e8`;

const INTEGRATIONS = [
  { name: "Notion", slug: "notion" },
  { name: "GitHub", slug: "github" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Stripe", slug: "stripe" },
  { name: "Gmail", slug: "gmail" },
  { name: "Zendesk", slug: "zendesk" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Linear", slug: "linear" },
];

const POINTS = [
  "Scoped, revocable access per agent",
  "Write actions can require a human approval",
  "Bring your own tools via OpenAPI or MCP",
];

/* Geometry in a 600×600 viewBox, hub at the centre. */
const SIZE = 600;
const C = SIZE / 2;
const HUB_R = 78; // where connectors leave the hub
const NODE_R = 212; // where connectors meet a node
const ORBIT_R = 238; // node centres
const BEND = 0.22; // radians of curve on each connector

const polar = (r: number, a: number) => ({
  x: C + r * Math.cos(a),
  y: C + r * Math.sin(a),
});
const f = (n: number) => n.toFixed(1);

const NODES = INTEGRATIONS.map((item, i) => {
  const angle =
    -Math.PI / 2 +
    Math.PI / INTEGRATIONS.length +
    (i * 2 * Math.PI) / INTEGRATIONS.length;
  const from = polar(HUB_R, angle);
  const to = polar(NODE_R, angle);
  const ctrl = polar((HUB_R + NODE_R) / 2, angle + BEND);
  const centre = polar(ORBIT_R, angle);
  return {
    ...item,
    d: `M${f(from.x)} ${f(from.y)} Q${f(ctrl.x)} ${f(ctrl.y)} ${f(to.x)} ${f(to.y)}`,
    left: `${(centre.x / SIZE) * 100}%`,
    top: `${(centre.y / SIZE) * 100}%`,
  };
});

export default function IntegrationsOrbit() {
  const rootRef = useRef<HTMLElement>(null);

  // Same sequence as Tween UI's Integration Hub: hub scales in, connectors
  // draw on, nodes pop in, then a dot travels each connector on a loop.
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const rings = gsap.utils.toArray<HTMLElement>("[data-hub-ring]", root);
      const paths = gsap.utils.toArray<SVGPathElement>("[data-hub-path]", root);
      const dots = gsap.utils.toArray<SVGCircleElement>("[data-hub-dot]", root);
      const nodes = gsap.utils.toArray<HTMLElement>("[data-hub-node]", root);
      const canDraw = paths.every(
        (path) => typeof path.getTotalLength === "function",
      );

      if (prefersReducedMotion() || !canDraw) {
        gsap.set([...rings, ...nodes], { scale: 1 });
        gsap.set(paths, {
          opacity: 1,
          strokeDashoffset: 0,
          strokeDasharray: "none",
        });
        gsap.set(dots, { autoAlpha: 0 });
        return;
      }

      gsap.set(rings, { scale: 0, transformOrigin: "50% 50%" });
      gsap.set(nodes, { scale: 0, transformOrigin: "50% 50%" });
      paths.forEach((path) => {
        const len = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: len,
          strokeDashoffset: len,
          opacity: 1,
        });
      });
      gsap.set(dots, { autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.querySelector("[data-hub-diagram]"),
          start: "top 75%",
          once: true,
        },
      });
      tl.to(rings, {
        scale: 1,
        duration: 0.55,
        ease: "back.out(1.15)",
        stagger: 0.08,
      });
      tl.to(
        paths,
        {
          strokeDashoffset: 0,
          duration: 0.85,
          stagger: 0.06,
          ease: "power2.inOut",
        },
        "-=0.1",
      );
      tl.to(
        nodes,
        { scale: 1, duration: 0.4, stagger: 0.07, ease: "back.out(1.2)" },
        "-=0.05",
      );
      tl.add(() => {
        paths.forEach((path, index) => {
          const dot = dots[index];
          if (!dot) return;
          const tween = gsap.to(dot, {
            duration: 4,
            repeat: -1,
            ease: "none",
            paused: true,
            motionPath: {
              path,
              align: path,
              alignOrigin: [0.5, 0.5],
              autoRotate: false,
              start: 0,
              end: 1,
            },
          });
          gsap.set(dot, { autoAlpha: 1 });
          tween.progress((0.45 + index * 0.08) % 1).play();
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      id="integrations"
      ref={rootRef}
      className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
        {/* Copy */}
        <div className="max-w-xl">
          <p className="text-xs font-medium tracking-[0.2em] text-[#ecd9b0] uppercase">
            Integrations
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-5xl">
            Plugs into the tools{" "}
            <span className="cx-gradient-text">you already use</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#f5f1e8]/60 sm:text-lg">
            400+ integrations out of the box. Agents read, write and take action
            across your stack, and only touch what you allow.
          </p>

          <ul className="mt-8 space-y-3">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-[15px] text-[#f5f1e8]/80"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-3.5"
                    fill="none"
                    stroke="#ecd9b0"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12.5l4.5 4.5L19 7.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#pricing"
            className="group mt-10 inline-flex items-center gap-2 border-b border-[#c9a96e]/40 pb-1 text-sm font-medium text-[#ecd9b0] transition-colors hover:border-[#ecd9b0]"
          >
            Browse all integrations
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        {/* Orbit diagram */}
        <div
          data-hub-diagram
          className="relative mx-auto aspect-square w-full max-w-[560px]"
        >
          <svg
            className="absolute inset-0 size-full"
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            aria-hidden="true"
          >
            <circle
              cx={C}
              cy={C}
              r={ORBIT_R}
              className="fill-none stroke-white/[0.06]"
              strokeDasharray="2 6"
            />
            <circle
              cx={C}
              cy={C}
              r={(HUB_R + NODE_R) / 2}
              className="fill-none stroke-white/[0.04]"
            />
            {NODES.map((node) => (
              <g key={node.name}>
                <path
                  data-hub-path
                  d={node.d}
                  className="fill-none stroke-white/15 opacity-0 motion-reduce:opacity-100"
                  strokeWidth={1}
                />
                <circle
                  data-hub-dot
                  r={2.6}
                  className="fill-[#ecd9b0] opacity-0 motion-reduce:hidden"
                />
              </g>
            ))}
          </svg>

          {/* Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              data-hub-ring
              className="relative grid size-28 scale-0 place-items-center rounded-full border border-white/10 bg-[#141414]/80 backdrop-blur-xl motion-reduce:scale-100 sm:size-32"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(201_169_110/0.28),transparent)] blur-xl"
              />
              <div className="absolute inset-[13%] rounded-full border border-white/10" />
              <LogoMark className="relative size-12 sm:size-14" />
            </div>
          </div>

          {/* Integration nodes */}
          {NODES.map((node) => (
            <div
              key={node.name}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: node.left, top: node.top }}
            >
              <div
                data-hub-node
                title={node.name}
                className="grid size-14 scale-0 place-items-center rounded-2xl border border-white/10 bg-[#141414] shadow-[0_10px_30px_-12px_rgb(0_0_0/0.8)] transition-colors duration-300 hover:border-[#c9a96e]/50 motion-reduce:scale-100 sm:size-16"
              >
                <img
                  src={ICON(node.slug)}
                  alt={node.name}
                  className="size-6 opacity-85 sm:size-7"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
