const STORAGE_KEY = "thp_cart_v1";

/* =========================
   I18N (catalogo + UI cart.js)
   ========================= */
function getLang() {
  const v = (localStorage.getItem("thp_lang") || "it").toLowerCase();
  return v === "fr" || v === "de" ? v : "it";
}

const TEXT = {
  it: {
    qty: "Q.tà",
    add: "Aggiungi al Carrello",
    added: "Aggiunto ✓",
    equiv: "Equivalente di",
    work_badge: "In lavorazione",
    new_frag: "Nuova fragranza",
    equiv_tbd: "Equivalente di da definire",
    ph_desc:
      "Stiamo preparando nuove composizioni e nuovi visual. Questo spazio verrà aggiornato con note, immagini e dettagli.",
    empty_cart: "Il carrello è vuoto.",
    each: "cad.",
    remove: "Rimuovi",
  },
  fr: {
    qty: "Qté",
    add: "Ajouter au panier",
    added: "Ajouté ✓",
    equiv: "Équivalent de",
    work_badge: "En préparation",
    new_frag: "Nouvelle fragrance",
    equiv_tbd: "Équivalent à définir",
    ph_desc:
      "Nous préparons de nouvelles compositions et de nouveaux visuels. Cet espace sera mis à jour avec des notes, des images et des détails.",
    empty_cart: "Le panier est vide.",
    each: "pièce",
    remove: "Retirer",
  },
  de: {
    qty: "Menge",
    add: "In den Warenkorb",
    added: "Hinzugefügt ✓",
    equiv: "Äquivalent zu",
    work_badge: "In Arbeit",
    new_frag: "Neue Duftkreation",
    equiv_tbd: "Äquivalent noch offen",
    ph_desc:
      "Wir bereiten neue Kompositionen und neue Visuals vor. Dieser Bereich wird mit Noten, Bildern und Details aktualisiert.",
    empty_cart: "Der Warenkorb ist leer.",
    each: "Stk.",
    remove: "Entfernen",
  },
};

const PRODUCT_I18N = {
  "tierra": {
    fr: {
      desc:
        "Des agrumes lumineux en tête, suivis d’un cœur sec et net. " +
        "Les notes boisées émergent avec élégance, laissant une sensation minérale raffinée. " +
        "Une fragrance équilibrée, discrète mais présente, idéale au quotidien. " +
        "Parfaite au bureau et à la mi-saison. " +
        "Une ligne sobre, moderne, toujours soignée.",
    },
    de: {
      desc:
        "Strahlende Zitrusnoten im Auftakt, gefolgt von einem trockenen, klaren Herzen. " +
        "Holzige Nuancen treten elegant hervor und hinterlassen ein raffiniertes, mineralisches Gefühl. " +
        "Ein ausgewogener Duft, dezent und dennoch präsent – ideal für jeden Tag. " +
        "Perfekt fürs Büro und die Übergangszeit. " +
        "Eine schlichte, moderne, stets gepflegte Linie.",
    },
  },
  "diore": {
    fr: {
      desc:
        "Un floral lumineux et rond, au profil propre et raffiné. " +
        "Des notes de pétales et des accents doux se fondent dans un sillage élégant. " +
        "Soigné et féminin, sans excès. " +
        "Idéal en journée, pour des événements et des contextes formels. " +
        "Impression globale : chic et délicate.",
    },
    de: {
      desc:
        "Ein leuchtender, runder Blumenduft mit klarer, raffinierter Signatur. " +
        "Blütenblattnoten und weiche Akzente verschmelzen zu einer eleganten Spur. " +
        "Gepflegt und feminin, ohne Übertreibung. " +
        "Ideal für tagsüber, Events und formelle Anlässe. " +
        "Gesamteindruck: chic und zart.",
    },
  },
  "black-night": {
    fr: {
      desc:
        "Résines sombres et profondeur intense, avec un caractère nocturne affirmé. " +
        "Enveloppante et magnétique, elle laisse un sillage riche et persistant. " +
        "Idéale le soir et pour celles et ceux qui aiment les profils intenses. " +
        "Une âme chaude et mystérieuse, très reconnaissable. " +
        "Pour les occasions spéciales ou quand tu veux te faire remarquer.",
    },
    de: {
      desc:
        "Dunkle Harze und intensive Tiefe mit entschlossenem Nachtcharakter. " +
        "Umhüllend und magnetisch, hinterlässt er eine reichhaltige, lang anhaltende Spur. " +
        "Ideal für den Abend und für alle, die intensive Profile lieben. " +
        "Warm und geheimnisvoll – sehr wiedererkennbar. " +
        "Für besondere Anlässe oder wenn du auffallen willst.",
    },
  },
  "toscane-blank": {
    fr: {
      desc:
        "Crémeuse et réconfortante, avec une douceur mesurée et moderne. " +
        "Des notes souples évoquent une caresse chaleureuse, sans lourdeur. " +
        "Parfaite pour les mois frais et un usage quotidien apaisant. " +
        "Sillage accueillant, propre, très agréable. " +
        "Un parfum qui met immédiatement à l’aise.",
    },
    de: {
      desc:
        "Cremig und behaglich, mit einer dosierten, modernen Süße. " +
        "Weiche Noten erinnern an eine warme Berührung, ohne schwer zu wirken. " +
        "Perfekt für kühlere Monate und einen entspannten Alltag. " +
        "Eine einladende, saubere, sehr angenehme Spur. " +
        "Ein Duft, der sofort Geborgenheit vermittelt.",
    },
  },
  "allienate": {
    fr: {
      desc:
        "Un ambré-floral éclatant, au cœur lumineux et au fond chaud. " +
        "Une signature distinctive et une évolution qui reste élégante. " +
        "Idéale le soir, mais fonctionne aussi en journée si bien dosée. " +
        "Sensation : magnétique, originale, très reconnaissable. " +
        "Parfaite pour qui cherche un sillage différent.",
    },
    de: {
      desc:
        "Strahlend-amberig floral, mit leuchtendem Herzen und warmem Fond. " +
        "Eine markante Signatur und eine Entwicklung, die elegant bleibt. " +
        "Für den Abend geeignet, funktioniert aber auch tagsüber bei guter Dosierung. " +
        "Gefühl: magnetisch, originell, sehr wiedererkennbar. " +
        "Ideal für alle, die eine andere Duftspur suchen.",
    },
  },
  "oppidum-black": {
    fr: {
      desc:
        "Chaud, moderne et sensuel, avec un sillage intense mais maîtrisé. " +
        "Des notes douces et enveloppantes s’associent à une touche énergique. " +
        "Parfait le soir, pour les rendez-vous et les occasions spéciales. " +
        "Reste agréable sur la peau avec un profil contemporain. " +
        "Un classique moderne, toujours efficace.",
    },
    de: {
      desc:
        "Warm, modern und sinnlich – mit intensiver, aber gepflegter Spur. " +
        "Weiche, umhüllende Noten treffen auf einen energetischen Akzent. " +
        "Perfekt für den Abend, Dates und besondere Anlässe. " +
        "Angenehm auf der Haut, mit zeitgemäßem Profil. " +
        "Ein moderner Klassiker, stets wirkungsvoll.",
    },
  },
};

/* =========================
   Catalogo (6 profumi iniziali)
   ========================= */
const PRODUCTS = [
  {
    id: "tierra",
    name: "Tierra",
    equivalent: "Terre d’Hermès",
    price: 19.99,
    desc:
      "Agrumi luminosi in apertura, seguiti da un cuore asciutto e pulito. " +
      "Le note legnose emergono con eleganza, lasciando una sensazione minerale raffinata. " +
      "È una fragranza equilibrata, discreta ma presente, ideale per tutti i giorni. " +
      "Perfetta in ufficio e nelle mezze stagioni. " +
      "Linea sobria, moderna, sempre ordinata.",
    images: [
      "assets/products/tierra/1.jpg",
      "assets/products/tierra/2.jpg",
      "assets/products/tierra/3.jpg",
    ],
  },
  {
    id: "diore",
    name: "Diore",
    equivalent: "J’adore",
    price: 19.99,
    desc:
      "Un floreale luminoso e rotondo, con un profilo pulito e raffinato. " +
      "Le note di petali e accenti morbidi si fondono in una scia elegante. " +
      "Risulta curato e femminile, senza eccessi. " +
      "Ottimo per il giorno, eventi e contesti formali. " +
      "Impressione complessiva: chic e delicata.",
    images: [
      "assets/products/diore/1.jpg",
      "assets/products/diore/2.jpg",
      "assets/products/diore/3.jpg",
    ],
  },
  {
    id: "black-night",
    name: "Black Night",
    equivalent: "Black Afgano",
    price: 19.99,
    desc:
      "Resine scure e profondità intensa, con un carattere notturno deciso. " +
      "Avvolgente e magnetica, lascia una scia ricca e persistente. " +
      "Ideale per la sera e per chi ama profili intensi. " +
      "Ha un’anima calda e misteriosa, molto riconoscibile. " +
      "Per occasioni speciali o quando vuoi farti notare.",
    images: [
      "assets/products/black-night/1.jpg",
      "assets/products/black-night/2.jpg",
      "assets/products/black-night/3.jpg",
    ],
  },
  {
    id: "toscane-blank",
    name: "Toscane Blank",
    equivalent: "Bianco Latte",
    price: 19.99,
    desc:
      "Cremoso e confortevole, con una dolcezza misurata e moderna. " +
      "Le note morbide ricordano una carezza calda, senza risultare pesanti. " +
      "È perfetto per i mesi freschi e per un utilizzo quotidiano rilassante. " +
      "Scia accogliente, pulita, molto piacevole. " +
      "Un profumo che mette subito a proprio agio.",
    images: [
      "assets/products/toscane-blank/1.jpg",
      "assets/products/toscane-blank/2.jpg",
      "assets/products/toscane-blank/3.jpg",
    ],
  },
  {
    id: "allienate",
    name: "Allienate",
    equivalent: "Alien",
    price: 19.99,
    desc:
      "Ambrato-floreale brillante, con un cuore luminoso e un fondo caldo. " +
      "Ha una firma distintiva e un’evoluzione che resta elegante. " +
      "Si presta alla sera ma funziona anche di giorno se dosato bene. " +
      "Sensazione: magnetica, originale, molto riconoscibile. " +
      "Ideale per chi cerca una scia diversa dal solito.",
    images: [
      "assets/products/allienate/1.jpg",
      "assets/products/allienate/2.jpg",
      "assets/products/allienate/3.jpg",
    ],
  },
  {
    id: "oppidum-black",
    name: "Oppidum Black",
    equivalent: "Black Opium",
    price: 19.99,
    desc:
      "Caldo, moderno e sensuale, con una scia intensa ma curata. " +
      "Le note morbide e avvolgenti si combinano con un tocco energico. " +
      "Perfetto per la sera, appuntamenti e occasioni speciali. " +
      "Resta piacevole sulla pelle e mantiene un profilo contemporaneo. " +
      "Un classico moderno, sempre efficace.",
    images: [
      "assets/products/oppidum-black/1.jpg",
      "assets/products/oppidum-black/2.jpg",
      "assets/products/oppidum-black/3.jpg",
    ],
  },
];

const TOTAL_BOXES = 15;
const PLACEHOLDERS_COUNT = Math.max(0, TOTAL_BOXES - PRODUCTS.length);

const WORK_SVG =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="900" height="675" viewBox="0 0 900 675">
  <rect width="900" height="675" rx="26" fill="#0f1118"/>
  <g opacity="0.9">
    <path d="M250 505c35-85 115-135 200-135s165 50 200 135" fill="none" stroke="#55e0d2" stroke-width="10" stroke-linecap="round"/>
    <circle cx="450" cy="290" r="88" fill="none" stroke="#b7bcc7" stroke-width="10"/>
    <path d="M365 265c20-55 150-55 170 0" fill="none" stroke="#4c6fff" stroke-width="10" stroke-linecap="round"/>
    <path d="M315 515h270" stroke="#262a35" stroke-width="10" stroke-linecap="round"/>
    <path d="M330 545h240" stroke="#262a35" stroke-width="10" stroke-linecap="round"/>
    <path d="M405 342c18 10 72 10 90 0" fill="none" stroke="#b7bcc7" stroke-width="10" stroke-linecap="round"/>
    <path d="M300 220h300l-40-60H340z" fill="none" stroke="#55e0d2" stroke-width="10" stroke-linejoin="round"/>
  </g>
  <g>
    <text x="450" y="615" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="#f5f6f7" font-weight="700">In lavorazione</text>
    <text x="450" y="650" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#b7bcc7">Nuove fragranze in arrivo</text>
  </g>
</svg>
`);

function moneyEUR(n) {
  const lang = getLang();
  const locale = lang === "fr" ? "fr-FR" : lang === "de" ? "de-DE" : "it-IT";
  return new Intl.NumberFormat(locale, { style: "currency", currency: "EUR" }).format(n);
}

/* ✅ Compatibilità: accetta sia OGGETTO (nuovo) sia ARRAY (vecchio) */
function normalizeStoredCart(raw) {
  if (raw && typeof raw === "object" && !Array.isArray(raw)) {
    const out = {};
    for (const [k, v] of Object.entries(raw)) {
      const q = Number(v);
      if (k && Number.isFinite(q) && q > 0) out[k] = Math.floor(q);
    }
    return out;
  }

  if (Array.isArray(raw)) {
    const out = {};
    raw.forEach((it) => {
      if (!it || !it.id) return;
      const q = Number(it.qty);
      if (!Number.isFinite(q) || q <= 0) return;
      out[it.id] = (out[it.id] || 0) + Math.floor(q);
    });
    return out;
  }

  return {};
}

function getCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return normalizeStoredCart(JSON.parse(raw));
  } catch {
    return {};
  }
}

function setCart(cartObj) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartObj || {}));
}

function cartCount(cartObj) {
  return Object.values(cartObj || {}).reduce((sum, qty) => sum + (Number(qty) || 0), 0);
}

/* ✅ Contatore robusto */
function setCartCountUI() {
  const count = String(cartCount(getCart()));
  const byId = document.getElementById("cartCount");
  if (byId) byId.textContent = count;

  document.querySelectorAll("[data-cart-count]").forEach((el) => (el.textContent = count));

  // fallback: se non c'è span, prova ad aggiornare testo link in qualunque lingua
  const re = /(carrello|panier|warenkorb)/i;
  document.querySelectorAll("a.nav-cta, a[href='checkout.html'], a[href='./checkout.html']").forEach((a) => {
    if (a.querySelector && (a.querySelector("#cartCount") || a.querySelector("[data-cart-count]"))) return;
    if (!re.test(a.textContent || "")) return;
    const lang = getLang();
    const label = lang === "fr" ? "Panier" : lang === "de" ? "Warenkorb" : "Carrello";
    a.textContent = `${label} ${count}`;
  });
}

function addToCart(productId, qty) {
  const q = Math.max(1, Math.min(99, Number(qty) || 1));
  const cart = getCart();
  cart[productId] = (Number(cart[productId]) || 0) + q;
  setCart(cart);
  setCartCountUI();
}

function safeImages(arr) {
  return Array.isArray(arr) ? arr.filter(Boolean) : [];
}

function getProductDesc(p, lang) {
  const override = PRODUCT_I18N[p.id] && PRODUCT_I18N[p.id][lang] && PRODUCT_I18N[p.id][lang].desc;
  return override || p.desc;
}

function buildProductsGrid() {
  const mount = document.getElementById("products");
  if (!mount) return;

  const lang = getLang();
  const t = TEXT[lang] || TEXT.it;

  const cards = [];

  for (const p of PRODUCTS) {
    const imgs = safeImages(p.images);
    const mainSrc = imgs[0] || WORK_SVG;

    const thumbsHtml = `
      <div class="thumbs">
        ${imgs
          .map(
            (src, idx) => `
            <button class="thumb-btn ${idx === 0 ? "active" : ""}" type="button"
              data-main-for="${p.id}" data-src="${src}" aria-label="Immagine ${idx + 1}">
              <img src="${src}" alt="${p.name} - immagine ${idx + 1}" loading="lazy">
            </button>`
          )
          .join("")}
      </div>
    `;

    const pDesc = getProductDesc(p, lang);

    cards.push(`
      <article class="product-card" data-product="${p.id}">
        <div class="product-media">
          <div class="product-main" data-open-src="${mainSrc}">
            <img id="main-${p.id}" src="${mainSrc}" alt="${p.name}" loading="lazy">
          </div>
          ${thumbsHtml}
        </div>

        <div class="product-body">
          <div class="p-title">
            ${p.name}
            <span class="p-equ-inline">— ${t.equiv} ${p.equivalent}</span>
          </div>

          <div class="p-desc">${pDesc}</div>

          <div class="p-actions">
            <div class="qty">
              <span class="micro">${t.qty}</span>
              <input type="number" min="1" max="99" value="1" inputmode="numeric" id="qty-${p.id}">
            </div>
            <div class="price">${moneyEUR(p.price)}</div>
          </div>

          <button class="btn-add" type="button" data-add="${p.id}">${t.add}</button>
        </div>
      </article>
    `);
  }

  for (let i = 0; i < PLACEHOLDERS_COUNT; i++) {
    const phId = `ph-${i + 1}`;
    cards.push(`
      <article class="product-card placeholder-card" data-product="${phId}">
        <div class="product-media">
          <div class="product-main" data-open-src="${WORK_SVG}">
            <img id="main-${phId}" src="${WORK_SVG}" alt="${t.work_badge}" loading="lazy">
          </div>
          <div class="thumbs"><span class="badge-work">${t.work_badge}</span></div>
        </div>

        <div class="product-body">
          <div class="p-title">
            ${t.new_frag}
            <span class="p-equ-inline">— ${t.equiv_tbd}</span>
          </div>

          <div class="p-desc">${t.ph_desc}</div>

          <div class="p-actions">
            <div class="qty">
              <span class="micro">${t.qty}</span>
              <input type="number" min="1" max="99" value="1" disabled>
            </div>
            <div class="price">—</div>
          </div>

          <button class="btn-add" type="button" disabled>${t.add}</button>
        </div>
      </article>
    `);
  }

  mount.innerHTML = cards.join("");

  mount.addEventListener("click", (e) => {
    const mainImgEl = e.target.closest(".product-main img");
    const mainBoxEl = e.target.closest(".product-main");

    if (mainImgEl) {
      window.open(mainImgEl.src, "_blank", "noopener");
      return;
    }
    if (mainBoxEl && mainBoxEl.querySelector("img")) {
      window.open(mainBoxEl.querySelector("img").src, "_blank", "noopener");
      return;
    }

    const thumbBtn = e.target.closest(".thumb-btn");
    if (thumbBtn) {
      const productId = thumbBtn.getAttribute("data-main-for");
      const src = thumbBtn.getAttribute("data-src");
      const mainImg = document.getElementById(`main-${productId}`);
      if (mainImg && src) {
        mainImg.src = src;

        const parent = thumbBtn.parentElement;
        if (parent) parent.querySelectorAll(".thumb-btn").forEach((b) => b.classList.remove("active"));
        thumbBtn.classList.add("active");
      }
      return;
    }

    const addBtn = e.target.closest("[data-add]");
    if (addBtn) {
      const id = addBtn.getAttribute("data-add");
      const qtyEl = document.getElementById(`qty-${id}`);
      const qty = qtyEl ? qtyEl.value : 1;

      addToCart(id, qty);

      const lang = getLang();
      const t = TEXT[lang] || TEXT.it;

      const old = addBtn.textContent;
      addBtn.textContent = t.added;
      setTimeout(() => (addBtn.textContent = old), 900);
    }
  });
}

/* Render carrello su checkout.html se esistono gli elementi */
function renderCheckoutIfPresent() {
  if (typeof PRODUCTS === "undefined") return;

  const list =
    document.getElementById("cartItems") ||
    document.getElementById("cart-items") ||
    document.getElementById("cartList");

  if (!list) return;

  const lang = getLang();
  const t = TEXT[lang] || TEXT.it;

  const cart = getCart();
  const byId = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));

  const rows = Object.entries(cart)
    .filter(([id, qty]) => byId[id] && Number(qty) > 0)
    .map(([id, qty]) => {
      const p = byId[id];
      const q = Number(qty);
      return { id, name: p.name, price: p.price, qty: q, line: p.price * q };
    });

  if (rows.length === 0) {
    list.innerHTML = `<p class="lead" style="font-size:1rem; margin:0;">${t.empty_cart}</p>`;
    const subEl = document.getElementById("subtotal");
    const totalEl = document.getElementById("total");
    if (subEl) subEl.textContent = moneyEUR(0);
    if (totalEl) totalEl.textContent = moneyEUR(0);
    return;
  }

  list.innerHTML = rows
    .map(
      (r) => `
    <div class="panel" style="padding:12px; margin-bottom:10px;">
      <div style="display:flex; justify-content:space-between; gap:12px; align-items:center;">
        <div>
          <div style="font-weight:900">${r.name}</div>
          <div class="micro">${moneyEUR(r.price)} ${t.each}</div>
        </div>

        <div style="display:flex; align-items:center; gap:8px;">
          <button class="btn" type="button" data-dec="${r.id}" style="padding:10px 12px;">−</button>
          <strong>${r.qty}</strong>
          <button class="btn" type="button" data-inc="${r.id}" style="padding:10px 12px;">+</button>
          <button class="btn" type="button" data-del="${r.id}" style="padding:10px 12px;">${t.remove}</button>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  const subtotal = rows.reduce((s, r) => s + r.line, 0);

  let ship = 0;
  const shipEl = document.getElementById("shipping");
  if (shipEl) {
    const raw = (shipEl.textContent || "").replace(/[^\d,]/g, "").replace(",", ".");
    const num = Number(raw);
    if (Number.isFinite(num)) ship = num;
  }

  const subEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total");
  if (subEl) subEl.textContent = moneyEUR(subtotal);
  if (totalEl) totalEl.textContent = moneyEUR(subtotal + ship);

  list.onclick = (e) => {
    const cartNow = getCart();

    const inc = e.target.closest("[data-inc]");
    if (inc) {
      const id = inc.getAttribute("data-inc");
      cartNow[id] = (Number(cartNow[id]) || 0) + 1;
      setCart(cartNow);
      setCartCountUI();
      renderCheckoutIfPresent();
      return;
    }

    const dec = e.target.closest("[data-dec]");
    if (dec) {
      const id = dec.getAttribute("data-dec");
      cartNow[id] = Math.max(1, (Number(cartNow[id]) || 1) - 1);
      setCart(cartNow);
      setCartCountUI();
      renderCheckoutIfPresent();
      return;
    }

    const del = e.target.closest("[data-del]");
    if (del) {
      const id = del.getAttribute("data-del");
      delete cartNow[id];
      setCart(cartNow);
      setCartCountUI();
      renderCheckoutIfPresent();
      return;
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  setCartCountUI();
  buildProductsGrid();
  renderCheckoutIfPresent();

  // Re-render quando cambi lingua (click sui bottoni lingua)
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(() => {
        setCartCountUI();
        buildProductsGrid();
        renderCheckoutIfPresent();
      }, 0);
    });
  });
});
