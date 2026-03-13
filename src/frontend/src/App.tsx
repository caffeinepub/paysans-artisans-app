import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Tab = "home" | "shop" | "producers" | "basket" | "community";

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────
function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 2C10 2 3 5 3 11C3 14.3 5.7 17 9 17L10 17L10 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 2C10 2 17 5 17 11C17 14.3 14.3 17 11 17L10 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 17L10 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 9C8.5 10.5 10 11 10 11"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M13 9C11.5 10.5 10 11 10 11"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BellIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 2.5A5 5 0 0 0 5 7.5V12L3.5 13.5V14.5H16.5V13.5L15 12V7.5A5 5 0 0 0 10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 14.5C8.5 15.33 9.17 16 10 16C10.83 16 11.5 15.33 11.5 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M3 9.5L11 3L19 9.5V19H14V14H8V19H3V9.5Z"
        stroke={active ? "#2D4A2D" : "rgba(107,68,35,0.5)"}
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill={active ? "rgba(45,74,45,0.1)" : "none"}
      />
    </svg>
  );
}

function ShopIcon({ active }: { active: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M4 6H18L17 15H5L4 6Z"
        stroke={active ? "#2D4A2D" : "rgba(107,68,35,0.5)"}
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill={active ? "rgba(45,74,45,0.1)" : "none"}
      />
      <path
        d="M8 6L8 4C8 2.9 8.9 2 10 2H12C13.1 2 14 2.9 14 4L14 6"
        stroke={active ? "#2D4A2D" : "rgba(107,68,35,0.5)"}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle
        cx="8"
        cy="18"
        r="1.2"
        fill={active ? "#2D4A2D" : "rgba(107,68,35,0.5)"}
      />
      <circle
        cx="14"
        cy="18"
        r="1.2"
        fill={active ? "#2D4A2D" : "rgba(107,68,35,0.5)"}
      />
    </svg>
  );
}

function ProducersIcon({ active }: { active: boolean }) {
  const c = active ? "#2D4A2D" : "rgba(107,68,35,0.5)";
  return (
    <svg
      aria-hidden="true"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M2 18C2 18 4 12 11 12C18 12 20 18 20 18"
        stroke={c}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="11" cy="7" r="3.5" stroke={c} strokeWidth="1.6" />
      <path
        d="M15 8C16.2 8 17.5 9 18 10"
        stroke={c}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M7 8C5.8 8 4.5 9 4 10"
        stroke={c}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BasketIcon({ active }: { active: boolean }) {
  const s = active ? "#2D4A2D" : "rgba(107,68,35,0.5)";
  return (
    <svg
      aria-hidden="true"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M7 9L5 6L3 6"
        stroke={s}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M15 9L17 6L19 6"
        stroke={s}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3 9H19L17.5 17H4.5L3 9Z"
        stroke={s}
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill={active ? "rgba(45,74,45,0.1)" : "none"}
      />
      <line
        x1="9"
        y1="12"
        x2="9"
        y2="15"
        stroke={s}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="13"
        y1="12"
        x2="13"
        y2="15"
        stroke={s}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BasketCTAIcon() {
  return (
    <svg
      aria-hidden="true"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M7 9L5 6L3 6"
        stroke="#F5EDD6"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M15 9L17 6L19 6"
        stroke="#F5EDD6"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3 9H19L17.5 17H4.5L3 9Z"
        stroke="#F5EDD6"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="rgba(245,237,214,0.15)"
      />
      <line
        x1="9"
        y1="12"
        x2="9"
        y2="15"
        stroke="#F5EDD6"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="13"
        y1="12"
        x2="13"
        y2="15"
        stroke="#F5EDD6"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlayIcon({ color = "#2D4A2D" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <polygon points="9,5 20,12 9,19" fill={color} />
    </svg>
  );
}

function PauseIcon({ color = "#2D4A2D" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect x="6" y="5" width="4" height="14" rx="1.5" fill={color} />
      <rect x="14" y="5" width="4" height="14" rx="1.5" fill={color} />
    </svg>
  );
}

function DecorativeLeaves() {
  return (
    <svg
      aria-hidden="true"
      width="120"
      height="100"
      viewBox="0 0 120 100"
      fill="none"
      className="absolute top-2 right-0 opacity-15 pointer-events-none"
    >
      <path
        d="M90 10C90 10 70 20 65 40C62 52 68 62 80 65L85 66"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M90 10C90 10 110 20 115 40C118 52 112 62 100 65L90 66"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M75 30C78 35 82 38 85 38"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M95 30C92 35 88 38 85 38"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M40 5C40 5 25 12 22 26C20 35 25 42 35 44"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M40 5C40 5 55 12 58 26C60 35 55 42 45 44"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 18C33 22 37 24 40 24"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M50 18C47 22 43 24 40 24"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M65 55C65 55 58 60 57 68C56.5 73 59 77 64 78"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M65 55C65 55 72 60 73 68C73.5 73 71 77 66 78"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function WavyDivider() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 375 40"
      preserveAspectRatio="none"
      className="w-full block"
      style={{ display: "block", marginBottom: -1 }}
    >
      <path
        d="M0 20 Q40 5 80 20 Q120 35 160 20 Q200 5 240 20 Q280 35 320 20 Q350 8 375 18 L375 40 L0 40 Z"
        fill="#F5EDD6"
      />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const VEGGIES = ["🥕", "🥦", "🧅", "🥬", "🍅", "🌽", "🥒", "🫑", "🌿"];

const PRODUCTS = [
  {
    id: 1,
    emoji: "🥕",
    name: "Carottes des Sables",
    producer: "Sophie B.",
    price: "€2.50/kg",
  },
  {
    id: 2,
    emoji: "🥬",
    name: "Salade Verte",
    producer: "Ferme Morel",
    price: "€1.20/pièce",
  },
  {
    id: 3,
    emoji: "🍅",
    name: "Tomates Cœur de Bœuf",
    producer: "Marc D.",
    price: "€4.80/kg",
  },
  {
    id: 4,
    emoji: "🌽",
    name: "Maïs Doux",
    producer: "Les Collines",
    price: "€0.90/épi",
  },
  {
    id: 5,
    emoji: "🥦",
    name: "Brocoli Bio",
    producer: "Claire V.",
    price: "€2.10/pièce",
  },
  {
    id: 6,
    emoji: "🧅",
    name: "Oignons Rosés",
    producer: "Pierre M.",
    price: "€3.20/kg",
  },
];

const PRODUCERS = [
  {
    id: "jm",
    initials: "JM",
    name: "Jean-Pierre Morel",
    farm: "Ferme des Collines",
    region: "Drôme (26)",
    specialty: "Maraîcher bio, variétés anciennes",
    color: "#2D4A2D",
  },
  {
    id: "sb",
    initials: "SB",
    name: "Sophie Bernard",
    farm: "Les Jardins du Vent",
    region: "Ardèche (07)",
    specialty: "Légumes racines, céréales",
    color: "#6B4423",
  },
  {
    id: "md",
    initials: "MD",
    name: "Marc Durand",
    farm: "Domaine de la Salette",
    region: "Vaucluse (84)",
    specialty: "Tomates, herbes aromatiques",
    color: "#C4673A",
  },
];

const BASKET_ITEMS = [
  {
    id: "b1",
    emoji: "🥕",
    name: "Carottes des Sables",
    producer: "Sophie B.",
    qty: 2,
    price: 5.0,
  },
  {
    id: "b2",
    emoji: "🍅",
    name: "Tomates Cœur de Bœuf",
    producer: "Marc D.",
    qty: 1,
    price: 4.8,
  },
  {
    id: "b3",
    emoji: "🥦",
    name: "Brocoli Bio",
    producer: "Claire V.",
    qty: 1,
    price: 2.1,
  },
];

// ─── CountUp hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1200, active = true): number {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const steps = 30;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setVal(Math.round(((target * current) / steps) * 10) / 10);
      if (current >= steps) {
        setVal(target);
        clearInterval(timer);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return val;
}

// ─── SeasonalCounter ─────────────────────────────────────────────────────────
// biome-ignore lint/correctness/noUnusedVariables: kept for reference
function SeasonalCounter() {
  const count = useCountUp(14, 800);
  return (
    <div
      data-ocid="seasonal.counter.card"
      className="mx-4 rounded-2xl p-4 flex flex-col gap-2"
      style={{
        background: "#F5EDD6",
        border: "1px solid rgba(107,68,35,0.2)",
        boxShadow: "var(--shadow-earthy)",
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <div
            className="font-caveat text-6xl font-bold leading-none"
            style={{ color: "#2D4A2D" }}
          >
            {Math.round(count)}
          </div>
          <div className="font-dm text-xs mt-1" style={{ color: "#6B4423" }}>
            légumes de saison
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {VEGGIES.map((v) => (
            <span key={v} className="text-xl leading-tight">
              {v}
            </span>
          ))}
        </div>
      </div>
      <div
        className="font-dm text-xs"
        style={{ color: "rgba(107,68,35,0.65)" }}
      >
        disponibles cette semaine
      </div>
    </div>
  );
}

// ─── ProducerSpotlight ───────────────────────────────────────────────────────
// biome-ignore lint/correctness/noUnusedVariables: kept for reference
function ProducerSpotlight({
  isPlaying,
  onToggle,
}: { isPlaying: boolean; onToggle: () => void }) {
  const fieldLines = [
    0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360,
  ];
  return (
    <div
      data-ocid="producer.spotlight.card"
      className="mx-4 rounded-3xl overflow-hidden"
      style={{ boxShadow: "0 8px 32px rgba(45,74,45,0.18)" }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          height: 180,
          background: "linear-gradient(135deg, #4a7a3a 0%, #2D4A2D 100%)",
        }}
      >
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 375 180"
          preserveAspectRatio="xMidYMid slice"
        >
          <line
            x1="0"
            y1="160"
            x2="375"
            y2="160"
            stroke="white"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="150"
            x2="375"
            y2="150"
            stroke="white"
            strokeWidth="0.5"
          />
          {fieldLines.map((x) => (
            <line
              key={x}
              x1={x}
              y1="160"
              x2={x + 15}
              y2="110"
              stroke="white"
              strokeWidth="0.8"
            />
          ))}
          <circle cx="140" cy="100" r="12" fill="white" />
          <rect x="132" y="112" width="16" height="28" rx="4" fill="white" />
          <line
            x1="132"
            y1="120"
            x2="120"
            y2="135"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="148"
            y1="120"
            x2="160"
            y2="135"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="136"
            y1="140"
            x2="132"
            y2="158"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="144"
            y1="140"
            x2="148"
            y2="158"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute top-2 right-2">
          <svg
            aria-hidden="true"
            width="80"
            height="70"
            viewBox="0 0 80 70"
            fill="none"
            opacity="0.25"
          >
            <path
              d="M60 8C60 8 45 16 42 30C40 39 45 46 55 48"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M60 8C60 8 75 16 78 30C80 39 75 46 65 48"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M52 22C55 26 58 28 60 28"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M68 22C65 26 62 28 60 28"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className={`relative z-10 flex items-center justify-center rounded-full transition-transform active:scale-95 ${isPlaying ? "pulse-anim" : ""}`}
          style={{
            width: 60,
            height: 60,
            background: "rgba(245,237,214,0.88)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          }}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
      <div className="p-4" style={{ background: "white" }}>
        <span
          className="inline-block font-dm text-xs px-2 py-0.5 rounded-md mb-2"
          style={{ color: "#C4673A", background: "rgba(196,103,58,0.1)" }}
        >
          À la Une
        </span>
        <div
          className="font-caveat text-xl font-bold"
          style={{ color: "#2D4A2D" }}
        >
          Jean-Pierre Morel
        </div>
        <div
          className="font-dm text-xs mt-0.5"
          style={{ color: "rgba(107,68,35,0.7)" }}
        >
          Ferme des Collines · Drôme
        </div>
        <p
          className="font-dm text-xs mt-2 leading-relaxed"
          style={{ color: "#4a3520" }}
        >
          Maraîcher bio depuis 15 ans, passionné de variétés anciennes.
        </p>
        <button
          type="button"
          className="mt-3 font-caveat text-base px-4 py-1.5 rounded-xl border transition-colors"
          style={{ borderColor: "#2D4A2D", color: "#2D4A2D" }}
        >
          Voir sa ferme →
        </button>
      </div>
    </div>
  );
}

// ─── OrderCTA ─────────────────────────────────────────────────────────────────
// biome-ignore lint/correctness/noUnusedVariables: kept for reference
function OrderCTA({ onPress }: { onPress: () => void }) {
  const [pressed, setPressed] = useState(false);
  function handleClick() {
    setPressed(true);
    setTimeout(() => setPressed(false), 200);
    onPress();
  }
  return (
    <div className="mx-4">
      <button
        type="button"
        data-ocid="order.primary_button"
        onClick={handleClick}
        className="w-full flex items-center justify-between rounded-2xl font-caveat text-xl font-bold"
        style={{
          background: "#2D4A2D",
          color: "#F5EDD6",
          padding: "18px 20px",
          boxShadow: "0 6px 20px rgba(45,74,45,0.3)",
          transform: pressed ? "scale(0.97)" : "scale(1)",
          transition: "transform 0.15s ease",
        }}
      >
        <span className="flex items-center gap-2">
          <BasketCTAIcon />
          Commander chez vos voisins
        </span>
        <span style={{ fontSize: 20 }}>→</span>
      </button>
    </div>
  );
}

// ─── ProductGrid ──────────────────────────────────────────────────────────────
function ProductGrid({ onAddToBasket }: { onAddToBasket: () => void }) {
  return (
    <div data-ocid="product.grid.panel" className="px-4">
      <h2
        className="font-caveat text-2xl font-bold mb-3"
        style={{ color: "#2D4A2D" }}
      >
        Paniers de saison
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {PRODUCTS.map((product, idx) => (
          <div
            key={product.id}
            data-ocid={`product.item.${idx + 1}`}
            className="rounded-2xl p-3 flex flex-col"
            style={{
              background: "#F5EDD6",
              boxShadow: "0 2px 10px rgba(45,74,45,0.1)",
            }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2 text-3xl"
              style={{ background: "rgba(45,74,45,0.09)" }}
            >
              {product.emoji}
            </div>
            <div
              className="font-caveat text-base font-semibold leading-tight text-center"
              style={{ color: "#2D4A2D" }}
            >
              {product.name}
            </div>
            <div
              className="font-dm text-xs text-center mt-0.5"
              style={{ color: "rgba(107,68,35,0.7)" }}
            >
              {product.producer}
            </div>
            <div className="flex items-center justify-between mt-2">
              <span
                className="font-dm text-sm font-semibold"
                style={{ color: "#C4673A" }}
              >
                {product.price}
              </span>
              <button
                type="button"
                data-ocid={`product.item.${idx + 1}`}
                onClick={onAddToBasket}
                className="flex items-center justify-center rounded-full font-bold transition-transform active:scale-90"
                style={{
                  width: 26,
                  height: 26,
                  background: "#2D4A2D",
                  color: "#F5EDD6",
                  fontSize: 18,
                  lineHeight: "1",
                }}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ProducersTab ─────────────────────────────────────────────────────────────
function ProducersTab() {
  return (
    <div data-ocid="producers.list" className="px-4 pt-4 flex flex-col gap-3">
      <h2
        className="font-caveat text-2xl font-bold"
        style={{ color: "#2D4A2D" }}
      >
        Nos Producteurs
      </h2>
      {PRODUCERS.map((p, idx) => (
        <div
          key={p.id}
          data-ocid={`producers.item.${idx + 1}`}
          className="flex items-center gap-3 rounded-2xl p-4"
          style={{
            background: "#F5EDD6",
            borderLeft: `4px solid ${p.color}`,
            boxShadow: "0 2px 10px rgba(45,74,45,0.1)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-caveat text-lg font-bold flex-shrink-0"
            style={{ background: p.color, color: "#F5EDD6" }}
          >
            {p.initials}
          </div>
          <div className="flex-1 min-w-0">
            <div
              className="font-caveat text-lg font-bold"
              style={{ color: "#2D4A2D" }}
            >
              {p.name}
            </div>
            <div className="font-dm text-xs" style={{ color: "#6B4423" }}>
              {p.farm} · {p.region}
            </div>
            <div
              className="font-dm text-xs mt-0.5"
              style={{ color: "rgba(107,68,35,0.7)" }}
            >
              {p.specialty}
            </div>
          </div>
          <span style={{ color: "#C4673A", fontSize: 18 }}>›</span>
        </div>
      ))}
    </div>
  );
}

// ─── BasketTab ────────────────────────────────────────────────────────────────
function BasketTab({
  basketCount,
  onConfirm,
}: { basketCount: number; onConfirm: () => void }) {
  const total = BASKET_ITEMS.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <div data-ocid="basket.panel" className="px-4 pt-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2
          className="font-caveat text-2xl font-bold"
          style={{ color: "#2D4A2D" }}
        >
          Mon Panier
        </h2>
        <span
          className="font-dm text-xs px-2 py-0.5 rounded-full"
          style={{ background: "#2D4A2D", color: "#F5EDD6" }}
        >
          {basketCount} articles
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {BASKET_ITEMS.map((item, idx) => (
          <div
            key={item.id}
            data-ocid={`basket.item.${idx + 1}`}
            className="flex items-center gap-3 rounded-2xl p-3"
            style={{
              background: "#F5EDD6",
              boxShadow: "0 2px 8px rgba(45,74,45,0.08)",
            }}
          >
            <span className="text-2xl">{item.emoji}</span>
            <div className="flex-1">
              <div
                className="font-caveat text-base font-semibold"
                style={{ color: "#2D4A2D" }}
              >
                {item.name}
              </div>
              <div
                className="font-dm text-xs"
                style={{ color: "rgba(107,68,35,0.7)" }}
              >
                {item.producer}
              </div>
            </div>
            <div className="text-right">
              <div
                className="font-dm text-xs"
                style={{ color: "rgba(107,68,35,0.6)" }}
              >
                ×{item.qty}
              </div>
              <div
                className="font-dm text-sm font-semibold"
                style={{ color: "#C4673A" }}
              >
                €{(item.price * item.qty).toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="rounded-2xl p-4 flex items-center justify-between"
        style={{
          background: "rgba(45,74,45,0.07)",
          border: "1px solid rgba(45,74,45,0.15)",
        }}
      >
        <span className="font-caveat text-lg" style={{ color: "#2D4A2D" }}>
          Total
        </span>
        <span
          className="font-dm text-xl font-semibold"
          style={{ color: "#2D4A2D" }}
        >
          €{total.toFixed(2)}
        </span>
      </div>
      <button
        type="button"
        data-ocid="basket.primary_button"
        onClick={onConfirm}
        className="w-full font-caveat text-xl font-bold rounded-2xl py-4 transition-transform active:scale-95"
        style={{
          background: "#2D4A2D",
          color: "#F5EDD6",
          boxShadow: "0 6px 20px rgba(45,74,45,0.3)",
        }}
      >
        Passer commande →
      </button>
      <p
        className="font-dm text-xs text-center"
        style={{ color: "rgba(107,68,35,0.6)" }}
      >
        🌿 Livraison le jeudi, collecte locale disponible
      </p>
    </div>
  );
}

// ─── TopNav ───────────────────────────────────────────────────────────────────
function TopNav() {
  return (
    <nav
      data-ocid="topnav.panel"
      className="flex items-center justify-between px-5"
      style={{ background: "#2D4A2D", paddingTop: 14, paddingBottom: 14 }}
    >
      <LeafIcon className="text-white opacity-90" />
      <span
        className="font-caveat text-xl font-bold"
        style={{ color: "#F5EDD6", letterSpacing: "0.02em" }}
      >
        Paysans-Artisans
      </span>
      <div className="relative">
        <BellIcon className="text-white opacity-90" />
        <span
          className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full"
          style={{ background: "#C4673A" }}
        />
      </div>
    </nav>
  );
}

// ─── HeroSection ─────────────────────────────────────────────────────────────
// biome-ignore lint/correctness/noUnusedVariables: kept for reference
function HeroSection() {
  return (
    <div
      data-ocid="hero.section"
      className="relative"
      style={{
        background: "linear-gradient(160deg, #3a5c2e 0%, #2D4A2D 100%)",
      }}
    >
      <DecorativeLeaves />
      <div className="px-5 pt-6 pb-2">
        <div
          className="font-caveat text-3xl font-bold leading-tight"
          style={{ color: "#F5EDD6" }}
        >
          Du champ à votre table,
        </div>
        <div
          className="font-caveat text-2xl font-semibold"
          style={{ color: "#C8922A" }}
        >
          directement.
        </div>
        <p
          className="font-dm text-sm mt-2 leading-relaxed"
          style={{ color: "rgba(245,237,214,0.8)" }}
        >
          Produits frais, producteurs locaux, circuits courts.
        </p>
        <button
          type="button"
          className="font-dm text-sm mt-3 mb-4"
          style={{ color: "#C4673A" }}
        >
          En savoir plus →
        </button>
      </div>
      <WavyDivider />
    </div>
  );
}

// ─── CommunityTab ────────────────────────────────────────────────────────────
const COMMUNITY_POSTS = [
  {
    id: 1,
    photo: "/assets/generated/recipe_ratatouille.dim_600x400.jpg",
    recipe: "Ratatouille provençale",
    author: "Marie D.",
    group: "Groupe Univ. Lyon 3",
    time: "il y a 2 h",
    likes: 14,
  },
  {
    id: 2,
    photo: "/assets/generated/recipe_bread.dim_600x400.jpg",
    recipe: "Pain au levain maison",
    author: "Thomas B.",
    group: "Groupe Univ. Lyon 3",
    time: "il y a 5 h",
    likes: 23,
  },
  {
    id: 3,
    photo: "/assets/generated/recipe_tart.dim_600x400.jpg",
    recipe: "Tarte aux poireaux & chèvre",
    author: "Camille L.",
    group: "Groupe Univ. Lyon 3",
    time: "hier",
    likes: 9,
  },
  {
    id: 4,
    photo: "/assets/generated/recipe_soup.dim_600x400.jpg",
    recipe: "Velouté carotte-gingembre",
    author: "Julien M.",
    group: "Groupe Univ. Lyon 3",
    time: "hier",
    likes: 31,
  },
  {
    id: 5,
    photo: "/assets/generated/recipe_bowl.dim_600x400.jpg",
    recipe: "Buddha bowl automnal",
    author: "Sophie R.",
    group: "Groupe Univ. Lyon 3",
    time: "il y a 2 j",
    likes: 18,
  },
  {
    id: 6,
    photo: "/assets/generated/recipe_crumble.dim_600x400.jpg",
    recipe: "Crumble pommes-poires",
    author: "Lucas F.",
    group: "Groupe Univ. Lyon 3",
    time: "il y a 3 j",
    likes: 27,
  },
];

function CommunityTab() {
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());
  const [localLikes, setLocalLikes] = useState<Record<number, number>>(
    Object.fromEntries(COMMUNITY_POSTS.map((p) => [p.id, p.likes])),
  );

  function toggleLike(id: number) {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setLocalLikes((l) => ({ ...l, [id]: l[id] - 1 }));
      } else {
        next.add(id);
        setLocalLikes((l) => ({ ...l, [id]: l[id] + 1 }));
      }
      return next;
    });
  }

  return (
    <div className="flex flex-col">
      {/* Chalkboard header */}
      <div
        className="px-5 pt-6 pb-5 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1A2E1A 0%, #2D4A2D 100%)",
        }}
      >
        {/* Chalk texture dots */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A8C5A8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <h2
              className="font-caveat font-bold text-2xl tracking-wide"
              style={{ color: "#F5EDD6" }}
            >
              Tableau de la Communauté
            </h2>
          </div>
          <p
            className="font-dm text-xs"
            style={{ color: "#A8C5A8", letterSpacing: "0.02em" }}
          >
            Recettes partagées par votre groupe de retrait
          </p>
        </div>
      </div>

      {/* Feed */}
      <div
        data-ocid="community.feed.list"
        className="flex flex-col gap-4 px-4 py-4"
        style={{ background: "#FAF4E8" }}
      >
        {COMMUNITY_POSTS.map((post, idx) => {
          const isLiked = likedIds.has(post.id);
          return (
            <div
              key={post.id}
              data-ocid={`community.post.card.${idx + 1}`}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#FFFDF5",
                boxShadow:
                  "0 2px 12px rgba(45,74,45,0.10), 0 1px 3px rgba(107,68,35,0.08)",
                border: "1px solid rgba(107,68,35,0.10)",
              }}
            >
              {/* Recipe photo */}
              <div className="relative" style={{ aspectRatio: "3/2" }}>
                <img
                  src={post.photo}
                  alt={post.recipe}
                  className="w-full h-full object-cover"
                />
                {/* Group badge overlay */}
                <div
                  className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(26,46,26,0.82)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="#A8C5A8"
                    aria-hidden="true"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span
                    className="font-dm text-xs font-medium"
                    style={{ color: "#D4EAD4", fontSize: 10 }}
                  >
                    {post.group}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="px-4 pt-3 pb-3">
                <h3
                  className="font-caveat font-bold text-lg leading-tight mb-1"
                  style={{ color: "#1A2E1A" }}
                >
                  {post.recipe}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center font-caveat font-bold text-sm"
                      style={{ background: "#2D4A2D", color: "#F5EDD6" }}
                    >
                      {post.author[0]}
                    </div>
                    <span
                      className="font-dm text-xs"
                      style={{ color: "#6B4423" }}
                    >
                      {post.author}
                    </span>
                    <span
                      className="font-dm text-xs"
                      style={{ color: "rgba(107,68,35,0.4)" }}
                    >
                      · {post.time}
                    </span>
                  </div>
                  {/* Like button */}
                  <button
                    type="button"
                    data-ocid={`community.post.like_button.${idx + 1}`}
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full transition-all"
                    style={{
                      background: isLiked
                        ? "rgba(196,103,58,0.12)"
                        : "rgba(107,68,35,0.07)",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill={isLiked ? "#C4673A" : "none"}
                      stroke={isLiked ? "#C4673A" : "#6B4423"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <span
                      className="font-dm font-medium text-xs"
                      style={{ color: isLiked ? "#C4673A" : "#6B4423" }}
                    >
                      {localLikes[post.id]}
                    </span>
                  </button>
                </div>

                {/* Recipe link */}
                <button
                  type="button"
                  className="mt-2.5 font-dm text-xs font-medium"
                  style={{ color: "#2D4A2D" }}
                >
                  Voir la recette →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── BottomNav ────────────────────────────────────────────────────────────────
function BottomNav({
  activeTab,
  setActiveTab,
  basketCount,
}: { activeTab: Tab; setActiveTab: (t: Tab) => void; basketCount: number }) {
  const tabs: {
    id: Tab;
    label: string;
    icon: (a: boolean) => React.ReactElement;
  }[] = [
    { id: "home", label: "Accueil", icon: (a) => <HomeIcon active={a} /> },
    { id: "shop", label: "Boutique", icon: (a) => <ShopIcon active={a} /> },
    {
      id: "producers",
      label: "Producteurs",
      icon: (a) => <ProducersIcon active={a} />,
    },
    {
      id: "community",
      label: "Communauté",
      icon: (a) => (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke={a ? "#2D4A2D" : "rgba(107,68,35,0.5)"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    { id: "basket", label: "Panier", icon: (a) => <BasketIcon active={a} /> },
  ];
  const ocids: Record<Tab, string> = {
    home: "nav.home.tab",
    shop: "nav.shop.tab",
    producers: "nav.producers.tab",
    community: "nav.community.tab",
    basket: "nav.basket.tab",
  };
  return (
    <nav
      data-ocid="bottomnav.panel"
      className="flex items-stretch"
      style={{
        background: "#F5EDD6",
        borderTop: "1px solid rgba(107,68,35,0.15)",
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            type="button"
            key={tab.id}
            data-ocid={ocids[tab.id]}
            onClick={() => setActiveTab(tab.id)}
            className="flex-1 flex flex-col items-center justify-center py-2 gap-0.5 relative"
          >
            <div className="relative">
              {tab.icon(isActive)}
              {tab.id === "basket" && basketCount > 0 && (
                <span
                  className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center font-dm font-bold"
                  style={{ background: "#C4673A", color: "white", fontSize: 9 }}
                >
                  {basketCount}
                </span>
              )}
            </div>
            <span
              className="font-dm text-xs"
              style={{
                color: isActive ? "#2D4A2D" : "rgba(107,68,35,0.5)",
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {tab.label}
            </span>
            {isActive && (
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: "#2D4A2D" }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}

// ─── ImpactMetric ─────────────────────────────────────────────────────────────
function ImpactMetric({
  icon,
  targetInt,
  decimals = 0,
  suffix,
  label,
  delay = 0,
  active,
}: {
  icon: React.ReactNode;
  targetInt: number;
  decimals?: number;
  suffix?: string;
  label: string;
  delay?: number;
  active: boolean;
}) {
  const [val, setVal] = useState(0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: active/delay are intentional triggers
  useEffect(() => {
    if (!active) return;
    const timer = setTimeout(() => {
      const steps = 30;
      const duration = 1200;
      let current = 0;
      const iv = setInterval(() => {
        current += 1;
        const raw = (targetInt * current) / steps;
        setVal(Math.round(raw * 10 ** decimals) / 10 ** decimals);
        if (current >= steps) {
          setVal(targetInt);
          clearInterval(iv);
        }
      }, duration / steps);
    }, delay);
    return () => clearTimeout(timer);
  }, [active]);

  const display =
    decimals > 0 ? val.toFixed(decimals) : String(Math.round(val));

  return (
    <div className="flex flex-col items-center gap-1.5 py-3">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: "rgba(45,74,45,0.1)" }}
      >
        {icon}
      </div>
      <div
        className="font-caveat text-2xl font-bold leading-none"
        style={{ color: "#2D4A2D" }}
      >
        {display}
        {suffix ? <span className="text-lg ml-0.5">{suffix}</span> : null}
      </div>
      <div
        className="font-dm text-xs text-center"
        style={{ color: "rgba(107,68,35,0.7)" }}
      >
        {label}
      </div>
    </div>
  );
}

// ─── PlantLoyaltyBar ──────────────────────────────────────────────────────────
const TIERS = [
  { label: "Graine", icon: "🌱" },
  { label: "Pousse", icon: "🌿" },
  { label: "Jeune Plante", icon: "🪴" },
  { label: "Plante Mature", icon: "🌳" },
  { label: "Gardien de la Terre", icon: "✦" },
];
const CURRENT_TIER = 3; // 1-based index
const CURRENT_PTS = 320;
const NEXT_TIER_PTS = 500;

function PlantLoyaltyBar({ active }: { active: boolean }) {
  const stemColor = "#2D4A2D";
  const dimColor = "#A8C4A8";
  const leafColor = (tier: number) =>
    tier <= CURRENT_TIER ? stemColor : dimColor;

  return (
    <div
      data-ocid="loyalty.card"
      style={{
        background: "rgba(107,68,35,0.06)",
        border: "1px solid rgba(107,68,35,0.12)",
        borderRadius: 16,
        padding: 16,
        marginTop: 16,
      }}
    >
      {/* Title */}
      <p
        className="font-caveat font-bold text-center mb-3"
        style={{ color: "#2D4A2D", fontSize: 20 }}
      >
        Votre Fidélité
      </p>

      {/* Plant SVG */}
      <div className="flex justify-center mb-3">
        <svg
          width="100"
          height="160"
          viewBox="0 0 100 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
          role="img"
          aria-label="Plante de fidélité"
        >
          {/* Soil mound */}
          <ellipse
            cx="50"
            cy="152"
            rx="34"
            ry="10"
            fill="#6B4423"
            opacity="0.35"
          />
          <ellipse
            cx="50"
            cy="150"
            rx="26"
            ry="7"
            fill="#8B6040"
            opacity="0.5"
          />

          {/* Main stem — animated when active */}
          <rect
            x="48"
            y="40"
            width="4"
            height="108"
            rx="2"
            fill={stemColor}
            className={active ? "plant-stem-anim" : ""}
            style={
              active
                ? { transformOrigin: "50px 148px" }
                : { opacity: CURRENT_TIER >= 1 ? 1 : 0 }
            }
          />

          {/* Tier 1 — seed (always at soil) */}
          <ellipse
            cx="50"
            cy="145"
            rx="7"
            ry="5"
            fill={leafColor(1)}
            className={active ? "plant-leaf-anim" : ""}
            style={active ? { animationDelay: "0.1s" } : {}}
          />

          {/* Tier 2 — small leaf pair at bottom */}
          {CURRENT_TIER >= 2 && (
            <>
              <ellipse
                cx="34"
                cy="118"
                rx="11"
                ry="6"
                fill={leafColor(2)}
                transform="rotate(-30 34 118)"
                className={active ? "plant-leaf-anim" : ""}
                style={active ? { animationDelay: "0.3s" } : {}}
              />
              <ellipse
                cx="66"
                cy="118"
                rx="11"
                ry="6"
                fill={leafColor(2)}
                transform="rotate(30 66 118)"
                className={active ? "plant-leaf-anim" : ""}
                style={active ? { animationDelay: "0.4s" } : {}}
              />
            </>
          )}

          {/* Tier 3 — mid leaf pair */}
          {CURRENT_TIER >= 3 && (
            <>
              <ellipse
                cx="32"
                cy="90"
                rx="13"
                ry="7"
                fill={leafColor(3)}
                transform="rotate(-25 32 90)"
                className={active ? "plant-leaf-anim" : ""}
                style={active ? { animationDelay: "0.5s" } : {}}
              />
              <ellipse
                cx="68"
                cy="90"
                rx="13"
                ry="7"
                fill={leafColor(3)}
                transform="rotate(25 68 90)"
                className={active ? "plant-leaf-anim" : ""}
                style={active ? { animationDelay: "0.6s" } : {}}
              />
            </>
          )}

          {/* Tier 4 — upper leaf pair (dimmed since we're at tier 3) */}
          {CURRENT_TIER >= 4 && (
            <>
              <ellipse
                cx="30"
                cy="64"
                rx="14"
                ry="7"
                fill={leafColor(4)}
                transform="rotate(-20 30 64)"
                className={active ? "plant-leaf-anim" : ""}
                style={active ? { animationDelay: "0.7s" } : {}}
              />
              <ellipse
                cx="70"
                cy="64"
                rx="14"
                ry="7"
                fill={leafColor(4)}
                transform="rotate(20 70 64)"
                className={active ? "plant-leaf-anim" : ""}
                style={active ? { animationDelay: "0.8s" } : {}}
              />
            </>
          )}

          {/* Future tier 4 leaves (dimmed) */}
          {CURRENT_TIER < 4 && (
            <>
              <ellipse
                cx="30"
                cy="64"
                rx="14"
                ry="7"
                fill={dimColor}
                transform="rotate(-20 30 64)"
                opacity="0.5"
              />
              <ellipse
                cx="70"
                cy="64"
                rx="14"
                ry="7"
                fill={dimColor}
                transform="rotate(20 70 64)"
                opacity="0.5"
              />
            </>
          )}

          {/* Tier 5 — crown flower (dimmed if not reached) */}
          {CURRENT_TIER >= 5 ? (
            <g
              className={active ? "plant-leaf-anim" : ""}
              style={active ? { animationDelay: "0.9s" } : {}}
            >
              <circle cx="50" cy="38" r="12" fill="#C8922A" opacity="0.9" />
              <circle cx="50" cy="38" r="7" fill="#F5EDD6" />
              <text
                x="50"
                y="43"
                textAnchor="middle"
                fontSize="10"
                fill="#C8922A"
              >
                ✦
              </text>
            </g>
          ) : (
            <g opacity="0.3">
              <circle cx="50" cy="38" r="12" fill={dimColor} />
              <circle cx="50" cy="38" r="7" fill="#F5EDD6" />
              <text
                x="50"
                y="43"
                textAnchor="middle"
                fontSize="10"
                fill={dimColor}
              >
                ✦
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Tier stages row */}
      <div className="flex justify-between items-center mb-3 px-1">
        {TIERS.map((tier, i) => {
          const tierNum = i + 1;
          const isActive = tierNum === CURRENT_TIER;
          const isPast = tierNum < CURRENT_TIER;
          return (
            <div
              key={tier.label}
              className="flex flex-col items-center gap-0.5"
            >
              <span
                style={{ fontSize: 14, opacity: isPast || isActive ? 1 : 0.35 }}
              >
                {tier.icon}
              </span>
              <span
                className="font-dm"
                style={{
                  fontSize: 8,
                  color: isActive ? "#2D4A2D" : isPast ? "#6B4423" : "#A8C4A8",
                  fontWeight: isActive ? 700 : 400,
                  textAlign: "center",
                  maxWidth: 40,
                  lineHeight: 1.2,
                }}
              >
                {tier.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Current tier badge */}
      <div className="flex justify-center mb-3">
        <div
          className="flex items-center gap-1.5 px-3 py-1 rounded-full"
          style={{
            background: "rgba(45,74,45,0.12)",
            border: "1px solid rgba(45,74,45,0.2)",
          }}
        >
          <span style={{ fontSize: 14 }}>🪴</span>
          <span
            className="font-caveat font-bold"
            style={{ color: "#2D4A2D", fontSize: 16 }}
          >
            Jeune Plante
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="w-full h-2 rounded-full overflow-hidden mb-1"
        style={{ background: "rgba(107,68,35,0.1)" }}
      >
        <div
          className={
            active
              ? "loyalty-bar-fill h-full rounded-full"
              : "h-full rounded-full"
          }
          style={{
            background: "linear-gradient(90deg, #2D4A2D 0%, #C8922A 100%)",
            width: active ? undefined : "0%",
          }}
        />
      </div>

      {/* Points labels */}
      <div className="flex justify-between mb-1">
        <span className="font-dm" style={{ fontSize: 11, color: "#6B4423" }}>
          {CURRENT_PTS} pts
        </span>
        <span className="font-dm" style={{ fontSize: 11, color: "#6B4423" }}>
          {NEXT_TIER_PTS} pts
        </span>
      </div>

      {/* Next tier label */}
      <p
        className="font-dm text-center"
        style={{ fontSize: 11, color: "#8B6040", fontStyle: "italic" }}
      >
        Prochain niveau: Plante Mature
      </p>
    </div>
  );
}

// ─── ImpactProgressBar ────────────────────────────────────────────────────────
function ImpactProgressBar({ active }: { active: boolean }) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-dm text-xs" style={{ color: "#6B4423" }}>
          Impact cumulé cette année
        </span>
      </div>
      <div
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ background: "rgba(107,68,35,0.1)" }}
      >
        <div
          className={
            active
              ? "impact-bar-fill h-full rounded-full"
              : "h-full rounded-full"
          }
          style={{
            background: "linear-gradient(90deg, #2D4A2D 0%, #C8922A 100%)",
            width: active ? undefined : "0%",
          }}
        />
      </div>
      <div className="text-right mt-1">
        <span className="font-dm text-xs" style={{ color: "#C4673A" }}>
          68% de votre objectif atteint
        </span>
      </div>
    </div>
  );
}

// ─── OrderConfirmation ────────────────────────────────────────────────────────
function OrderConfirmation({
  visible,
  onClose,
}: { visible: boolean; onClose: () => void }) {
  const [isFarmerVideoPlaying, setIsFarmerVideoPlaying] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setShowContent(true), 50);
      return () => clearTimeout(t);
    }
    setShowContent(false);
    setIsFarmerVideoPlaying(false);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [visible]);

  const fieldLines = [0, 40, 80, 120, 160, 200, 240, 280, 320];

  return (
    <div
      data-ocid="order_confirmation.panel"
      className={`confirm-overlay absolute inset-0 z-50 flex flex-col overflow-hidden ${showContent ? "confirm-visible" : "pointer-events-none"}`}
      style={{ background: "#F5EDD6" }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 flex-shrink-0"
        style={{ background: "#2D4A2D", paddingTop: 14, paddingBottom: 14 }}
      >
        <button
          type="button"
          onClick={onClose}
          className="p-1 -ml-1"
          aria-label="Retour"
        >
          <svg
            aria-hidden="true"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M14 5L8 11L14 17"
              stroke="#F5EDD6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span
          className="font-caveat text-xl font-bold"
          style={{ color: "#F5EDD6" }}
        >
          Merci !
        </span>
        <div
          className="w-7 h-7 rounded-full border-2 flex items-center justify-center"
          style={{ borderColor: "rgba(245,237,214,0.6)" }}
        >
          <svg
            aria-hidden="true"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M2.5 7L5.5 10L11.5 4"
              stroke="#F5EDD6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Scrollable body */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto scrollbar-hide pb-8"
      >
        {/* ── Confirmation badge */}
        <div className="flex flex-col items-center px-5 pt-6 pb-4">
          <div
            className={`w-18 h-18 rounded-full flex items-center justify-center mb-3 ${showContent ? "check-pop" : ""}`}
            style={{
              width: 72,
              height: 72,
              background: "#2D4A2D",
              boxShadow: "0 6px 24px rgba(45,74,45,0.3)",
            }}
          >
            <svg
              aria-hidden="true"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M8 18L15 25L28 11"
                stroke="#F5EDD6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className="font-caveat text-3xl font-bold"
            style={{ color: "#2D4A2D" }}
          >
            Commande confirmée
          </div>
          <div
            className="font-dm text-sm mt-1"
            style={{ color: "rgba(107,68,35,0.7)" }}
          >
            Votre panier arrive bientôt !
          </div>
          <span
            className="mt-2 font-dm text-xs px-3 py-1 rounded-full"
            style={{ background: "#EDE0C0", color: "rgba(107,68,35,0.7)" }}
          >
            N° 2024-0847
          </span>
        </div>

        {/* ── Farmer thank-you video card */}
        <div className="px-5 mb-5">
          <h2
            className="font-caveat text-xl font-bold mb-3"
            style={{ color: "#2D4A2D" }}
          >
            Un message pour vous
          </h2>
          <div
            className="rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 6px 24px rgba(45,74,45,0.16)" }}
          >
            {/* Video area */}
            <div
              className="relative flex items-center justify-center"
              style={{
                height: 200,
                background: "linear-gradient(150deg, #3a5c2e 0%, #2D4A2D 100%)",
              }}
            >
              {/* Rolling hills silhouette */}
              <svg
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 375 60"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 60 Q60 30 120 45 Q180 60 240 35 Q300 10 375 40 L375 60 Z"
                  fill="rgba(255,255,255,0.12)"
                />
                <path
                  d="M0 60 Q80 40 160 50 Q240 60 320 42 Q350 36 375 48 L375 60 Z"
                  fill="rgba(255,255,255,0.08)"
                />
              </svg>
              {/* Sky decorative lines */}
              {fieldLines.map((x) => (
                <div
                  key={x}
                  className="absolute"
                  style={{
                    left: x,
                    top: 8,
                    width: 1,
                    height: 20,
                    background: "rgba(255,255,255,0.06)",
                  }}
                />
              ))}
              {/* Waving farmer silhouette */}
              <svg
                aria-hidden="true"
                className="absolute"
                style={{
                  bottom: 28,
                  left: "50%",
                  transform: "translateX(-120%)",
                }}
                width="60"
                height="80"
                viewBox="0 0 60 80"
                fill="none"
              >
                <circle cx="30" cy="16" r="10" fill="rgba(255,255,255,0.28)" />
                <rect
                  x="22"
                  y="26"
                  width="16"
                  height="26"
                  rx="5"
                  fill="rgba(255,255,255,0.28)"
                />
                {/* Right arm waving up */}
                <path
                  d="M38 30 Q50 20 54 14"
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Left arm */}
                <path
                  d="M22 32 Q12 38 8 44"
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Legs */}
                <path
                  d="M26 52 Q24 64 22 74"
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M34 52 Q36 64 38 74"
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              {/* Badge */}
              <span
                className="absolute top-3 left-3 font-caveat text-xs px-2.5 py-1 rounded-full"
                style={{ background: "#C4673A", color: "#F5EDD6" }}
              >
                Message personnel
              </span>
              {/* Play/Pause */}
              <button
                type="button"
                onClick={() => setIsFarmerVideoPlaying((p) => !p)}
                className={`relative z-10 flex items-center justify-center rounded-full transition-transform active:scale-95 ${isFarmerVideoPlaying ? "farmer-pulse-anim" : ""}`}
                style={{
                  width: 64,
                  height: 64,
                  background: "rgba(245,237,214,0.88)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                }}
              >
                {isFarmerVideoPlaying ? (
                  <PauseIcon color="#2D4A2D" />
                ) : (
                  <PlayIcon color="#2D4A2D" />
                )}
              </button>
            </div>
            {/* Info */}
            <div className="p-4" style={{ background: "#FEFCF8" }}>
              <div
                className="font-caveat text-xl font-bold"
                style={{ color: "#2D4A2D" }}
              >
                Jean-Pierre Morel
              </div>
              <div
                className="font-dm text-xs mt-0.5 mb-3"
                style={{ color: "rgba(107,68,35,0.7)" }}
              >
                Ferme des Collines · Drôme
              </div>
              <div className="flex gap-2 items-start">
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="flex-shrink-0 mt-0.5"
                >
                  <path
                    d="M3 7C3 5 4.5 3.5 7 3.5C9 3.5 10.5 5 10.5 7C10.5 9.5 8.5 11 7 12.5L3 16.5"
                    stroke="#C4673A"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11 7C11 5 12.5 3.5 15 3.5C17 3.5 18.5 5 18.5 7C18.5 9.5 16.5 11 15 12.5L11 16.5"
                    stroke="#C4673A"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                <p
                  className="font-dm text-sm leading-relaxed italic"
                  style={{ color: "#5a3e28" }}
                >
                  Merci pour votre confiance ! Vos carottes ont été récoltées ce
                  matin même. À très bientôt au marché !
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Social Impact Dashboard */}
        <div className="px-5 mb-5">
          <h2
            className="font-caveat text-2xl font-bold"
            style={{ color: "#2D4A2D" }}
          >
            Votre impact
          </h2>
          <p
            className="font-dm text-xs mt-1 mb-4"
            style={{ color: "rgba(107,68,35,0.7)" }}
          >
            Avec cette commande, vous avez contribué à :
          </p>
          <div
            className="rounded-3xl p-5"
            style={{
              background: "#F5EDD6",
              border: "1px solid rgba(107,68,35,0.12)",
              boxShadow: "var(--shadow-earthy)",
            }}
          >
            <div
              className="grid grid-cols-2 divide-x divide-y"
              style={{ borderColor: "rgba(107,68,35,0.08)" }}
            >
              {/* km saved */}
              <ImpactMetric
                active={showContent}
                icon={
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M2 14L6 10L10 12L14 7L18 9"
                      stroke="#2D4A2D"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17H18"
                      stroke="#2D4A2D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                targetInt={47}
                suffix=" km"
                label="trajet évité"
                delay={0}
              />
              {/* CO2 */}
              <ImpactMetric
                active={showContent}
                icon={
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 3C10 3 3 5 3 11C3 14.3 5.7 17 9 17L11 17C14.3 17 17 14.3 17 11C17 5 10 3 10 3Z"
                      stroke="#2D4A2D"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 3L10 9"
                      stroke="#2D4A2D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                targetInt={8.3}
                decimals={1}
                suffix=" kg"
                label="de CO₂"
                delay={100}
              />
              {/* Producers */}
              <ImpactMetric
                active={showContent}
                icon={
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M3 16C3 16 5 11 10 11C15 11 17 16 17 16"
                      stroke="#2D4A2D"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="10"
                      cy="6.5"
                      r="3"
                      stroke="#2D4A2D"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M15 8.5C15.8 9 16.5 9.8 17 11"
                      stroke="#2D4A2D"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                targetInt={3}
                label="producteurs locaux"
                delay={150}
              />
              {/* Euro */}
              <ImpactMetric
                active={showContent}
                icon={
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="7"
                      stroke="#2D4A2D"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M12.5 7C11.8 6.4 10.9 6 10 6C7.8 6 6 7.8 6 10C6 12.2 7.8 14 10 14C10.9 14 11.8 13.6 12.5 13"
                      stroke="#2D4A2D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 9.5H11"
                      stroke="#2D4A2D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 10.5H11"
                      stroke="#2D4A2D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                targetInt={18.6}
                decimals={1}
                suffix=" €"
                label="en circuit court"
                delay={200}
              />
            </div>
            <ImpactProgressBar active={showContent} />
            <PlantLoyaltyBar active={showContent} />
          </div>
        </div>

        {/* ── Share & Continue */}
        <div className="px-5 pb-2">
          <p
            className="font-caveat text-xl font-bold text-center mb-4"
            style={{ color: "#2D4A2D" }}
          >
            Partagez votre impact
          </p>
          <div className="flex items-center justify-center gap-3 mb-5">
            {/* Share */}
            <button
              type="button"
              data-ocid="share.button"
              className="flex flex-col items-center gap-1.5"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "#EDE0C0" }}
              >
                <svg
                  aria-hidden="true"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <circle
                    cx="17"
                    cy="5"
                    r="2.5"
                    stroke="#2D4A2D"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="5"
                    cy="11"
                    r="2.5"
                    stroke="#2D4A2D"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="17"
                    cy="17"
                    r="2.5"
                    stroke="#2D4A2D"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M7.2 9.8L14.8 6.2"
                    stroke="#2D4A2D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.2 12.2L14.8 15.8"
                    stroke="#2D4A2D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span
                className="font-dm text-xs"
                style={{ color: "rgba(107,68,35,0.7)" }}
              >
                Partager
              </span>
            </button>
            {/* Copy link */}
            <button
              type="button"
              className="flex flex-col items-center gap-1.5"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "#EDE0C0" }}
              >
                <svg
                  aria-hidden="true"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M9 13L13 9"
                    stroke="#2D4A2D"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11 7L13 5C14.1 3.9 15.9 3.9 17 5C18.1 6.1 18.1 7.9 17 9L15 11"
                    stroke="#2D4A2D"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11 15L9 17C7.9 18.1 6.1 18.1 5 17C3.9 15.9 3.9 14.1 5 13L7 11"
                    stroke="#2D4A2D"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span
                className="font-dm text-xs"
                style={{ color: "rgba(107,68,35,0.7)" }}
              >
                Copier
              </span>
            </button>
            {/* Message */}
            <button
              type="button"
              className="flex flex-col items-center gap-1.5"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "#EDE0C0" }}
              >
                <svg
                  aria-hidden="true"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M3 5H19V15H13L11 18L9 15H3V5Z"
                    stroke="#2D4A2D"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 9H15"
                    stroke="#2D4A2D"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 12H12"
                    stroke="#2D4A2D"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span
                className="font-dm text-xs"
                style={{ color: "rgba(107,68,35,0.7)" }}
              >
                Message
              </span>
            </button>
          </div>

          <button
            type="button"
            data-ocid="back_home.primary_button"
            onClick={onClose}
            className="w-full font-caveat text-xl font-bold rounded-2xl py-4 transition-transform active:scale-95"
            style={{
              background: "#2D4A2D",
              color: "#F5EDD6",
              boxShadow: "0 6px 20px rgba(45,74,45,0.25)",
            }}
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── PhoneFrame ───────────────────────────────────────────────────────────────
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-start justify-center py-10 px-4">
      <div
        className="relative flex flex-col w-full overflow-hidden"
        style={{
          maxWidth: 375,
          minHeight: 812,
          borderRadius: 36,
          background: "#F5EDD6",
          boxShadow:
            "0 32px 80px rgba(30,46,30,0.28), 0 2px 8px rgba(30,46,30,0.12)",
        }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
          style={{
            width: 120,
            height: 28,
            background: "#1a2e1a",
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-10 rounded-[36px]"
          style={{ boxShadow: "inset 0 0 40px rgba(45,74,45,0.06)" }}
        />
        <div className="flex flex-col flex-1" style={{ paddingTop: 28 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── Home Screen Components ───────────────────────────────────────────────────

function WelcomeBanner({
  onNotificationPress,
}: { onNotificationPress?: () => void }) {
  return (
    <div
      data-ocid="home.welcome.section"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #8B6040 0%, #C8922A 100%)",
        padding: "28px 20px 24px",
      }}
    >
      {/* Decorative wheat SVG */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 opacity-10 pointer-events-none"
        width="140"
        height="100"
        viewBox="0 0 140 100"
        fill="none"
      >
        <path
          d="M30 90 Q35 70 40 50 Q38 35 30 25"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M40 50 Q50 42 55 35"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M40 58 Q28 50 22 42"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M40 65 Q52 58 56 48"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse
          cx="55"
          cy="32"
          rx="5"
          ry="9"
          fill="white"
          opacity="0.6"
          transform="rotate(-20 55 32)"
        />
        <ellipse
          cx="22"
          cy="39"
          rx="5"
          ry="9"
          fill="white"
          opacity="0.6"
          transform="rotate(30 22 39)"
        />
        <ellipse
          cx="57"
          cy="45"
          rx="5"
          ry="9"
          fill="white"
          opacity="0.6"
          transform="rotate(-10 57 45)"
        />
      </svg>
      {/* Decorative leaves top-right */}
      <svg
        aria-hidden="true"
        className="absolute top-0 right-0 opacity-15 pointer-events-none"
        width="120"
        height="110"
        viewBox="0 0 120 110"
        fill="none"
      >
        <path
          d="M100 5 C100 5 75 20 70 45 C67 58 75 68 88 70"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M100 5 C100 5 120 20 118 45 C116 58 108 65 96 67"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M80 15 C80 15 60 28 62 50"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M80 15 C80 15 95 28 90 48"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Notification bell top-right */}
      <button
        data-ocid="home.notification.button"
        type="button"
        onClick={onNotificationPress}
        className="absolute top-4 right-4 flex flex-col items-center gap-0.5"
        aria-label="Notifications Point de Ralliement"
      >
        <div className="relative">
          <svg
            aria-hidden="true"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 3A6 6 0 0 0 6 9V14L4 16V17H20V16L18 14V9A6 6 0 0 0 12 3Z"
              stroke="white"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M10 17C10 18.1 10.9 19 12 19C13.1 19 14 18.1 14 17"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
          <span
            className="absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full text-xs font-bold"
            style={{
              background: "#C4673A",
              color: "white",
              width: 17,
              height: 17,
              fontSize: 10,
            }}
          >
            3
          </span>
        </div>
        <span
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 9,
            letterSpacing: "0.02em",
            fontFamily: "'DM Sans', sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Point de Ralliement
        </span>
      </button>

      {/* Text */}
      <div className="pr-14">
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 13,
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: 4,
          }}
        >
          Bonjour 👋
        </p>
        <h1
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 34,
            color: "white",
            lineHeight: 1.15,
            fontWeight: 700,
            textShadow: "0 1px 4px rgba(0,0,0,0.18)",
            marginBottom: 6,
          }}
        >
          Bienvenue, Marie !
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.88)",
            fontSize: 14,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Votre marché local vous attend.
        </p>
      </div>
    </div>
  );
}

const SEASONAL_ITEMS = [
  {
    emoji: "🎃",
    name: "Courge Butternut",
    producer: "Ferme Morel",
    price: "€2.80/kg",
  },
  {
    emoji: "🍄",
    name: "Champignons Sauvages",
    producer: "Pierre M.",
    price: "€8.50/kg",
  },
  {
    emoji: "🥕",
    name: "Carottes Fanes",
    producer: "Sophie B.",
    price: "€2.20/botte",
  },
  {
    emoji: "🍎",
    name: "Pommes Reinette",
    producer: "Domaine Vert",
    price: "€3.10/kg",
  },
  {
    emoji: "🥬",
    name: "Chou Kale Bio",
    producer: "Claire V.",
    price: "€2.50/pièce",
  },
  { emoji: "🌰", name: "Châtaignes", producer: "Marc D.", price: "€5.20/kg" },
];

function ProducerOfMonthCarousel() {
  return (
    <div data-ocid="home.producers_carousel.panel" className="px-0 pt-5 pb-1">
      <h2
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 22,
          color: "#F5EDD6",
          background: "#2D4A2D",
          display: "inline-block",
          padding: "4px 16px 4px 18px",
          borderRadius: "0 20px 20px 0",
          marginBottom: 14,
          fontWeight: 700,
          boxShadow: "2px 2px 8px rgba(0,0,0,0.18)",
          letterSpacing: "0.01em",
        }}
      >
        Le Producteur du Mois 🌾
      </h2>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: 14,
          paddingLeft: 18,
          paddingRight: 18,
          paddingBottom: 8,
          scrollbarWidth: "none",
        }}
      >
        {/* Card 1 — Jean-Pierre with real photo */}
        <div
          data-ocid="home.producers_carousel.item.1"
          style={{
            flex: "0 0 260px",
            scrollSnapAlign: "start",
            borderRadius: 18,
            overflow: "hidden",
            background: "#F5EDD6",
            boxShadow: "0 6px 24px rgba(45,74,45,0.18)",
            position: "relative",
            minHeight: 320,
          }}
        >
          <img
            src="/assets/generated/farmer-portrait.dim_400x400.jpg"
            alt="Jean-Pierre Morel, maraîcher bio"
            style={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
          <div style={{ padding: "14px 16px 16px" }}>
            <p
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 20,
                color: "#2D4A2D",
                fontWeight: 700,
                marginBottom: 2,
              }}
            >
              Jean-Pierre Morel
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: "#6B4423",
                marginBottom: 4,
              }}
            >
              Ferme des Collines · Drôme
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: "#8B6040",
                marginBottom: 12,
              }}
            >
              Maraîcher bio depuis 15 ans
            </p>
            <button
              type="button"
              style={{
                background: "#2D4A2D",
                color: "#F5EDD6",
                border: "none",
                borderRadius: 20,
                padding: "7px 16px",
                fontSize: 13,
                fontFamily: "'DM Sans', sans-serif",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Voir sa ferme →
            </button>
          </div>
        </div>

        {/* Card 2 — Sophie Bernard placeholder */}
        <div
          data-ocid="home.producers_carousel.item.2"
          style={{
            flex: "0 0 260px",
            scrollSnapAlign: "start",
            borderRadius: 18,
            overflow: "hidden",
            background: "#F5EDD6",
            boxShadow: "0 6px 24px rgba(45,74,45,0.18)",
            minHeight: 320,
          }}
        >
          <div
            style={{
              width: "100%",
              height: 200,
              background: "linear-gradient(160deg, #8B6040 0%, #C8922A 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 70,
            }}
          >
            👩‍🌾
          </div>
          <div style={{ padding: "14px 16px 16px" }}>
            <p
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 20,
                color: "#2D4A2D",
                fontWeight: 700,
                marginBottom: 2,
              }}
            >
              Sophie Bernard
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: "#6B4423",
                marginBottom: 4,
              }}
            >
              Les Jardins de Sophie · Ardèche
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: "#8B6040",
                marginBottom: 12,
              }}
            >
              Arboricultrice depuis 8 ans
            </p>
            <button
              type="button"
              style={{
                background: "#2D4A2D",
                color: "#F5EDD6",
                border: "none",
                borderRadius: 20,
                padding: "7px 16px",
                fontSize: 13,
                fontFamily: "'DM Sans', sans-serif",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Voir sa ferme →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SeasonalSuggestions() {
  const [basket, setBasket] = useState<Set<number>>(new Set());
  return (
    <div data-ocid="home.seasonal.panel" style={{ padding: "10px 18px 6px" }}>
      <h2
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 22,
          color: "#F5EDD6",
          background: "#6B4423",
          display: "inline-block",
          padding: "4px 16px 4px 18px",
          borderRadius: "0 20px 20px 0",
          marginBottom: 14,
          marginLeft: -18,
          fontWeight: 700,
          boxShadow: "2px 2px 8px rgba(0,0,0,0.14)",
        }}
      >
        Suggestions de Saison 🍂
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {SEASONAL_ITEMS.map((item, i) => (
          <div
            key={item.name}
            data-ocid={`home.seasonal.item.${i + 1}`}
            style={{
              background: "#F5EDD6",
              borderRadius: 14,
              padding: "12px 12px 10px",
              boxShadow: "0 3px 10px rgba(45,74,45,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              position: "relative",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(45,74,45,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                marginBottom: 4,
              }}
            >
              {item.emoji}
            </div>
            <p
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 16,
                color: "#2D4A2D",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              {item.name}
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                color: "#8B6040",
              }}
            >
              {item.producer}
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "#C4673A",
                fontWeight: 700,
              }}
            >
              {item.price}
            </p>
            <button
              type="button"
              onClick={() =>
                setBasket((prev) => {
                  const n = new Set(prev);
                  n.has(i) ? n.delete(i) : n.add(i);
                  return n;
                })
              }
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: basket.has(i) ? "#C4673A" : "#2D4A2D",
                color: "#F5EDD6",
                border: "none",
                cursor: "pointer",
                fontSize: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                lineHeight: 1,
                transition: "background 0.2s",
              }}
              aria-label={
                basket.has(i) ? `Retirer ${item.name}` : `Ajouter ${item.name}`
              }
            >
              {basket.has(i) ? "✓" : "+"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiscoverCTA({ onPress }: { onPress: () => void }) {
  return (
    <div style={{ padding: "20px 18px 12px" }}>
      <button
        data-ocid="home.discover.primary_button"
        type="button"
        onClick={onPress}
        style={{
          width: "100%",
          background: "#2D4A2D",
          color: "#F5EDD6",
          border: "none",
          borderRadius: 18,
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          cursor: "pointer",
          boxShadow: "0 6px 20px rgba(45,74,45,0.35)",
          transition: "transform 0.15s, box-shadow 0.15s",
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "scale(0.97)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
        onTouchStart={(e) => {
          e.currentTarget.style.transform = "scale(0.97)";
        }}
        onTouchEnd={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <svg
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="11" cy="11" r="7" stroke="#F5EDD6" strokeWidth="2" />
          <path
            d="M16.5 16.5 L21 21"
            stroke="#F5EDD6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 11 L14 11 M11 8 L11 14"
            stroke="#F5EDD6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.01em",
          }}
        >
          Découvrir nos Produits
        </span>
      </button>
    </div>
  );
}

// ─── HomeContent ─────────────────────────────────────────────────────────────
function HomeContent({
  onOrderPress,
}: {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onAddToBasket: () => void;
  onOrderPress: () => void;
}) {
  return (
    <div style={{ background: "#EDE5D0", minHeight: "100%" }}>
      <WelcomeBanner />
      <ProducerOfMonthCarousel />
      <SeasonalSuggestions />
      <DiscoverCTA onPress={onOrderPress} />
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [basketCount, setBasketCount] = useState(3);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: activeTab is the intentional trigger
  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [activeTab]);

  function handleAddToBasket() {
    setBasketCount((prev) => prev + 1);
  }
  function handleOrderPress() {
    setActiveTab("basket");
  }
  function handleConfirmOrder() {
    setShowOrderConfirmation(true);
  }
  function handleCloseConfirmation() {
    setShowOrderConfirmation(false);
    setActiveTab("home");
  }

  return (
    <PhoneFrame>
      <TopNav />
      <div
        ref={contentRef}
        className="flex-1 overflow-y-auto scrollbar-hide"
        style={{ paddingBottom: 72 }}
      >
        <div className="tab-visible">
          {activeTab === "home" && (
            <HomeContent
              isPlaying={isPlaying}
              onTogglePlay={() => setIsPlaying((p) => !p)}
              onAddToBasket={handleAddToBasket}
              onOrderPress={handleOrderPress}
            />
          )}
          {activeTab === "shop" && (
            <div className="pt-4 flex flex-col gap-4 pb-4">
              <ProductGrid onAddToBasket={handleAddToBasket} />
            </div>
          )}
          {activeTab === "producers" && <ProducersTab />}
          {activeTab === "community" && <CommunityTab />}
          {activeTab === "basket" && (
            <BasketTab
              basketCount={basketCount}
              onConfirm={handleConfirmOrder}
            />
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <BottomNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          basketCount={basketCount}
        />
      </div>
      {/* Order confirmation overlay */}
      <OrderConfirmation
        visible={showOrderConfirmation}
        onClose={handleCloseConfirmation}
      />
    </PhoneFrame>
  );
}
