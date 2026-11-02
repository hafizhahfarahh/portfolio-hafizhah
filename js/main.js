const $ = (s, r = document) => r.querySelector(s);
const set = (id, h) => { $(id).innerHTML = h; };
const li = (a, f) => a.map(f).join("");

const img = (src, alt) => `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.outerHTML='<div class=&quot;ph&quot;>Tambahkan gambar:<br>${src}</div>'">`;
const fig = (src, cap) => `<figure><a href="${src}" target="_blank" rel="noopener">${img(src, cap)}</a><figcaption>${cap}</figcaption></figure>`;
const sec = (h, body) => body ? `<section class="case-sec"><h4>${h}</h4>${body}</section>` : "";
const ytId = u => (u.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/) || [])[1];


const video = (u, t) => {
  const yt = u.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  const gd = u.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (!yt && !gd) return "";

  const id = yt ? yt[1] : gd[1];
  const isYt = !!yt;
  const embed = isYt
    ? `https://www.youtube.com/embed/${id}`
    : `https://drive.google.com/file/d/${id}/preview`;
  const watch = isYt
    ? `https://www.youtube.com/watch?v=${id}`
    : `https://drive.google.com/file/d/${id}/view`;
  const label = isYt ? "YouTube" : "Google Drive";

  if (location.protocol === "file:") {
    const thumb = isYt
      ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
      : `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
    return `<a class="video" href="${watch}" target="_blank" rel="noopener"><img src="${thumb}" alt="Video ${t}"><span>Tonton di ${label}</span></a><a class="vlink" href="${watch}" target="_blank" rel="noopener">Buka di ${label}</a>`;
  }

  return `<div class="video"><iframe src="${embed}" title="Video ${t}" referrerpolicy="strict-origin-when-cross-origin" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div><a class="vlink" href="${watch}" target="_blank" rel="noopener">Buka di ${label}</a>`;
};

/* Beranda, Tentang */
const P = PROFILE, C = P.contact;
set("#beranda", `<div><h1>${P.name}</h1><p class="role">${P.role}</p><p class="tag">${P.tagline}</p><p class="status">${P.status}</p>
  <div class="actions"><a class="btn" href="#proyek">Lihat proyek</a>${P.cv ? `<a class="btn alt" href="${P.cv}" download>Unduh CV</a>` : ""}<a class="btn alt" href="#kontak">Hubungi saya</a></div></div>
  <div class="photo">${img(P.photo, "Foto " + P.name)}</div>`);
set("#about", `<h3>${P.about.greeting}</h3><p class="lead">${P.about.lead}</p>${li(P.about.paragraphs, p => `<p>${p}</p>`)}
  <div class="facts">${li(P.stats, s => `<div class="fact"><b>${s.value}</b><span>${s.label}</span></div>`)}</div>`);

/* Kompetensi */
set("#skills", `<div class="skills">${li(COMPETENCIES, c => `<article class="skill"><h3>${c.title}</h3><p>${c.text}</p><div class="chips">${li(c.items, i => `<span class="chip">${i}</span>`)}</div></article>`)}</div>
  <p class="lang"><b>Bahasa:</b> ${LANGUAGES}</p>`);

/* Proyek: kartu + studi kasus */
set("#projects", li(PROJECTS, (p, i) => `<button class="card" data-i="${i}" aria-label="Buka studi kasus ${p.title}">${img(p.cover, p.title)}<div class="body"><span class="type">${p.type}</span><h3>${p.title}</h3><p>${p.summary}</p><span class="cta">Lihat studi kasus</span></div></button>`));
const modal = $("#modal");
const caseHtml = p => `<div class="case-head"><span class="type">${p.type}</span><h3>${p.title}</h3><p>${p.subtitle}</p>
  <div class="meta">${li(p.meta, m => `<span><b>${m.k}</b>${m.v}</span>`)}</div></div>
  <div class="case-body">
  <div class="case-sec two">${li(p.intro, x => `<div><h4>${x.h}</h4><p>${x.t}</p></div>`)}</div>
  ${sec("Peran dan kontribusi", p.contributions && `<div class="rows">${li(p.contributions, c => `<div class="row"><b>${c.title}</b>${c.text}</div>`)}</div>`)}
  ${sec("Alur modul", p.flow && `<div class="steps">${li(p.flow, s => `<div class="step"><b>${s.title}</b><p>${s.text}</p></div>`)}</div>`)}
  ${sec("Fitur yang saya kembangkan", p.features && `<div class="rows">${li(p.features, f => `<div class="feat"><span class="chip">${f.tag}</span><h3>${f.title}</h3><p>${f.text}</p>${fig(f.src, f.caption)}</div>`)}</div>`)}
  ${sec("Video demo", li(p.videos || [], v => video(v, p.title)))}
  ${sec("Tangkapan layar", p.screenshots && p.screenshots.length && `<div class="gal">${li(p.screenshots, s => fig(s.src, s.caption))}</div>`)}
  ${sec("Dokumentasi analisis dan pengujian", p.artifacts && p.artifacts.length && `<div class="gal">${li(p.artifacts, a => fig(a.src, `<b>${a.label}</b>: ${a.text}`))}</div>`)}
  ${p.note ? `<p class="note"><b>Catatan:</b> ${p.note}</p>` : ""}
  ${p.link ? `<p style="margin-top:1.2rem"><a class="btn" href="${p.link}" target="_blank" rel="noopener">Buka tautan proyek</a></p>` : ""}</div>`;
$("#projects").onclick = e => { const c = e.target.closest(".card"); if (c) { set("#modal-body", caseHtml(PROJECTS[c.dataset.i])); modal.scrollTop = 0; modal.showModal(); } };
$("#close").onclick = () => modal.close();
modal.onclick = e => { if (e.target === modal) modal.close(); };
modal.onclose = () => set("#modal-body", ""); /* menghentikan video saat ditutup */

/* Pengujian */
set("#testing", `<div class="two">${li(TESTING.intro, x => `<div><h3>${x.h}</h3><p>${x.t}</p></div>`)}</div>
  <div class="table-wrap"><table><thead><tr><th>ID</th><th>Test scenario</th><th>Hasil yang diharapkan</th><th>Status</th></tr></thead><tbody>
  ${li(TESTING.cases, c => `<tr><td>${c.id}</td><td>${c.scenario}</td><td>${c.expected}</td><td><span class="status">${c.status}</span></td></tr>`)}</tbody></table></div>
  ${TESTING.note ? `<p class="muted">${TESTING.note}</p>` : ""}`);

/* Pengalaman */
const I = INTERNSHIP;
set("#experience", `<div class="banner"><h3>${I.title}</h3><p class="when">${I.role} | ${I.date}</p><p>${I.banner}</p></div>
  <div class="rows">${li(I.points, x => `<div class="row"><b>${x.title}</b>${x.text}</div>`)}</div>
  <h3 class="sub">Pendidikan, sertifikasi, dan study group</h3>${li(CREDENTIALS, c => `<div class="cred"><span class="yr">${c.year}</span><div><h3>${c.title}</h3><p>${c.text}</p></div></div>`)}
  <h3 class="sub">Organisasi dan kepanitiaan</h3>${li(ORGANIZATIONS, o => `<div class="item"><span class="meta2">${o.date} | ${o.where}</span><h3>${o.title}</h3><p>${o.text}</p></div>`)}`);

/* Kontak (item kosong otomatis disembunyikan) */
const links = [["Email", C.email && "mailto:" + C.email, C.email], ["Telepon", C.phone && "tel:" + C.phone.replace(/[^\d+]/g, ""), C.phone], ["LinkedIn", C.linkedin, "Hafizhah Farah Fadhila"], ["GitHub", C.github, "hafizhahfarahh"]];
set("#contact", `<h2>Mari terhubung</h2><p>${P.closing}</p><div class="contact">${li(links.filter(l => l[1]), l => `<a href="${l[1]}" ${l[1].startsWith("http") ? 'target="_blank" rel="noopener"' : ""}><b>${l[0]}</b>${l[2]}</a>`)}</div>`);

/* Navigasi: menu mobile + penanda bagian aktif */
const menu = $("#menu"), burger = $("#burger"), navLinks = [...menu.querySelectorAll("a")];
burger.onclick = () => burger.setAttribute("aria-expanded", menu.classList.toggle("open"));
menu.onclick = e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } };
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && navLinks.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id))), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(s => io.observe(s));
$("#year").textContent = "\u00A9 " + new Date().getFullYear();
