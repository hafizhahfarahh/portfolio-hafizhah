/* Membuat semua bagian dari data di js/data/. Biasanya tidak perlu diedit. */
const $ = (s, r = document) => r.querySelector(s);
const set = (id, h) => { $(id).innerHTML = h; };
const li = (a, f) => a.map(f).join("");
const esc = s => String(s || "").replace(/"/g, "&quot;");
const IMG = /\.(jpe?g|png|webp|gif|svg)($|\?)/i;
/* Jika gambar belum ada, tampilkan kotak penanda berisi nama file yang diharapkan */
const img = (src, alt) => `<img src="${src}" alt="${esc(alt)}" loading="lazy" onerror="this.outerHTML='<div class=&quot;ph&quot;>Tambahkan gambar:<br>${src}</div>'">`;
const fig = (src, cap) => `<figure><a href="${src}" target="_blank" rel="noopener">${img(src, cap)}</a><figcaption>${cap}</figcaption></figure>`;
const sec = (h, body) => body ? `<section class="case-sec"><h4>${h}</h4>${body}</section>` : "";
const ytId = u => (u.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/) || [])[1];
const driveId = u => (u.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([\w-]+)/) || [])[1];
const gdoc = u => u.match(/docs\.google\.com\/(document|presentation|spreadsheets)\/d\/([\w-]+)/) || [];
const num = t => t.replace(/(\d[\d.,+\/]*)/g, "<b>$1</b>");

/* BUKTI: kolom "proof" di data boleh berisi 1 tautan/file atau beberapa ([...]). Kosong = tombol tidak muncul. */
const PROOFS = [];
const toItems = p => (Array.isArray(p) ? p : p ? [p] : []).map(x => typeof x === "string" ? { src: x } : x).filter(x => x.src);
const reg = p => { const it = toItems(p); return it.length ? PROOFS.push(it) - 1 : -1; };
const proofBtn = (p, label = "Lihat bukti", title = "") => { const id = reg(p); return id < 0 ? "" : `<button class="proof" data-pid="${id}" data-t="${esc(title)}">${label}</button>`; };
const pf = (p, label, title) => { const b = proofBtn(p, label, title); return b ? `<div class="pf">${b}</div>` : ""; };
const cols = (a, f) => `<div class="cols" style="--n:${Math.min(a.length, 3)}">${li(a, f)}</div>`;
const ul = a => a && a.length ? `<ul class="bul">${li(a, x => { const o = typeof x === "string" ? { t: x } : x; return `<li>${num(o.t)}${proofBtn(o.proof, "Lihat bukti", o.t)}</li>`; })}</ul>` : "";
const chips = a => a && a.length ? `<div class="chips">${li(a, i => `<span class="chip">${i}</span>`)}</div>` : "";
const courseChips = a => `<div class="chips">${li(a, c => { const o = typeof c === "string" ? { name: c } : c, id = reg(o.proof); return id < 0 ? `<span class="chip">${o.name}</span>` : `<button class="chip proof-chip" data-pid="${id}" data-t="${esc(o.name)}">${o.name}</button>`; })}</div>`;

/* Video: YouTube atau Google Drive. YouTube menolak pemutar tertanam (Error 153) bila halaman dibuka dari file://,
   jadi di mode itu tampil pratinjau yang membuka YouTube. Google Drive: file harus dibagikan "Siapa saja yang memiliki link". */
const video = (u, t) => {
  const d = driveId(u);
  if (d) return `<div class="video"><iframe src="https://drive.google.com/file/d/${d}/preview" title="Video ${esc(t)}" allow="autoplay; fullscreen" allowfullscreen loading="lazy"></iframe></div><a class="vlink" href="${u}" target="_blank" rel="noopener">Buka di Google Drive</a>`;
  const id = ytId(u), url = "https://www.youtube.com/watch?v=" + id;
  const box = location.protocol === "file:"
    ? `<a class="video" href="${url}" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="Video ${esc(t)}"><span>Tonton di YouTube</span></a>`
    : `<div class="video"><iframe src="https://www.youtube.com/embed/${id}" title="Video ${esc(t)}" referrerpolicy="strict-origin-when-cross-origin" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>`;
  return box + `<a class="vlink" href="${url}" target="_blank" rel="noopener">Buka di YouTube</a>`;
};

/* Jendela bukti: gambar, PDF, YouTube, Google Drive/Docs, atau tautan lain */
const viewItem = it => {
  const s = it.src, d = driveId(s), g = gdoc(s), open = (l) => `<a class="vlink" href="${s}" target="_blank" rel="noopener">${l}</a>`;
  let b;
  if (/youtu/.test(s) && ytId(s)) b = video(s, it.caption || "bukti");
  else if (d) b = `<iframe class="vframe" src="https://drive.google.com/file/d/${d}/preview" title="Bukti" allow="autoplay; fullscreen" allowfullscreen></iframe>${open("Buka di Google Drive")}`;
  else if (/\/pubhtml/.test(s)) b = `<iframe class="vframe" src="${s}${s.includes("?") ? "&" : "?"}widget=true&headers=false" title="Bukti"></iframe>${open("Buka di Google Sheets")}`;
  else if (g[2]) b = `<iframe class="vframe" src="https://docs.google.com/${g[1]}/d/${g[2]}/${g[1] === "spreadsheets" ? "htmlview" : "preview"}" title="Bukti"></iframe>${open("Buka di Google Docs")}`;  else if (/\.pdf($|\?)/i.test(s)) b = `<iframe class="vframe" src="${s}" title="Bukti"></iframe>${open("Buka PDF di tab baru")}`;
  else if (IMG.test(s)) b = img(s, it.caption || "Bukti");
  else b = `<a class="btn" href="${s}" target="_blank" rel="noopener">Buka tautan</a>`;
  return `<figure>${b}${it.caption ? `<figcaption>${it.caption}</figcaption>` : ""}</figure>`;
};
const viewer = $("#viewer");
document.addEventListener("click", e => {
  const b = e.target.closest("[data-pid]"); if (!b) return;
  set("#viewer-body", `${b.dataset.t ? `<h3 class="vt">${b.dataset.t}</h3>` : ""}${li(PROOFS[b.dataset.pid], viewItem)}`);
  viewer.showModal();
});
$("#vclose").onclick = () => viewer.close();
viewer.onclick = e => { if (e.target === viewer) viewer.close(); };
viewer.onclose = () => set("#viewer-body", ""); /* menghentikan video saat ditutup */

/* Beranda, Tentang */
const P = PROFILE, C = P.contact;
set("#beranda", `<div><h1>${P.name}</h1><p class="role">${P.role}</p><p class="tag">${P.tagline}</p>
  <div class="actions"><a class="btn" href="#proyek">Lihat proyek</a>${P.cv ? `<a class="btn alt" href="${P.cv}" download>Lihat CV</a>` : ""}<a class="btn alt" href="#kontak">Hubungi saya</a></div></div>
  <div class="photo">${img(P.photo, "Foto " + P.name)}</div>`);
set("#about", `<h3>${P.about.greeting}</h3>${li(P.about.paragraphs, p => `<p>${p}</p>`)}</div>`);

/* Pendidikan */
const E = EDUCATION;
set("#education", `<div class="item"><span class="meta2">${E.date}</span><h3>${E.school}</h3><p class="who">${E.program} | IPK ${E.gpa}</p><p>${E.text}</p>${pf(E.proof, "Lihat bukti", E.school)}
  <h4 class="lbl">Mata Kuliah Relevan</h4>${courseChips(E.courses)}${E.courses.some(c => c.proof) ? `<p class="hint2">Klik mata kuliah bertanda titik untuk melihat bukti hasil belajar.</p>` : ""}</div>
  <h3 class="sub">Sertifikasi dan pendidikan lainnya</h3>${cols(CREDENTIALS, c => `<div class="cred"><span class="yr">${c.year}</span><div><h3>${c.title}</h3><p>${c.text}</p>${pf(c.proof, "Lihat sertifikat", c.title)}</div></div>`)}`);

/* Kompetensi */
set("#skills", `<div class="skills">${li(COMPETENCIES, c => `<article class="skill"><h3>${c.title}</h3><p>${c.text}</p>${chips(c.items)}</article>`)}</div><p class="lang"><b>Bahasa:</b> ${LANGUAGES}</p>`);

/* Proyek: kartu + studi kasus */
set("#projects", li(PROJECTS, (p, i) => `<button class="card" data-i="${i}" aria-label="Buka studi kasus ${esc(p.title)}">${img(p.cover, p.title)}<div class="body"><span class="type">${p.type}</span><h3>${p.title}</h3><p>${p.summary}</p><span class="cta">Lihat studi kasus</span></div></button>`));
const modal = $("#modal");
const artifact = (a, t) => IMG.test(a.src) ? fig(a.src, `<b>${a.label}</b>: ${a.text}`) : `<div class="row"><b>${a.label}</b>${a.text}${pf(a.src, "Lihat dokumen", a.label)}</div>`;
const caseHtml = p => `<div class="case-head"><span class="type">${p.type}</span><h3>${p.title}</h3><p>${p.subtitle}</p>
  <div class="meta">${li(p.meta, m => `<span><b>${m.k}</b>${m.v}</span>`)}</div></div>
  <div class="case-body">
  ${p.highlights ? `<div class="facts">${li(p.highlights, h => `<div class="fact"><b>${h.v}</b><span>${h.l}</span></div>`)}</div>` : ""}
  <div class="case-sec two">${li(p.intro, x => `<div><h4>${x.h}</h4><p>${x.t}</p></div>`)}</div>
  ${sec("Fokus Pekerjaan", ul(p.focus))}
  ${sec("Peran dan Kontribusi", p.role && li(p.role, t => `<p>${t}</p>`))}
  ${sec("Metode dan Pendekatan", p.method && `<div class="rows">${li(p.method, m => `<div class="row"><b>${m.h}</b>${m.t}</div>`)}</div>`)}
  ${sec("Teknologi dan Tools", p.tools && `<div class="rows two">${li(p.tools, t => `<div class="row"><b>${t.h}</b>${chips(t.items)}</div>`)}</div>`)}
  ${sec("Hasil", ul(p.outcomes))}
  ${sec("Alur Modul", p.flow && `<div class="steps">${li(p.flow, s => `<div class="step"><b>${s.title}</b><p>${s.text}</p></div>`)}</div>`)}
  ${sec("Fitur yang Saya Kembangkan", p.features && `<div class="rows">${li(p.features, f => `<div class="feat"><span class="chip">${f.tag}</span><h3>${f.title}</h3><p>${f.text}</p>${fig(f.src, f.caption)}</div>`)}</div>`)}
  ${sec("Video Demo", li(p.videos || [], v => video(v, p.title)))}
  ${sec("Tangkapan Layar", p.screenshots && p.screenshots.length && `<div class="gal">${li(p.screenshots, s => fig(s.src, s.caption))}</div>`)}
  ${sec("Dokumentasi Analisis dan Pengujian", p.artifacts && p.artifacts.length && `<div class="gal">${li(p.artifacts, artifact)}</div>`)}
  ${p.status ? `<p class="note"><b>Status proyek:</b> ${p.status}</p>` : ""}
  ${pf(p.proof, "Lihat dokumen terkait", p.title)}
  ${p.link ? `<p style="margin-top:1.2rem"><a class="btn" href="${p.link}" target="_blank" rel="noopener">Buka tautan proyek</a></p>` : ""}</div>`;
$("#projects").onclick = e => { const c = e.target.closest(".card"); if (c) { set("#modal-body", caseHtml(PROJECTS[c.dataset.i])); modal.scrollTop = 0; modal.showModal(); } };
$("#close").onclick = () => modal.close();
modal.onclick = e => { if (e.target === modal) modal.close(); };
modal.onclose = () => set("#modal-body", "");

/* Pengujian */
const docs = TESTING.docs || [];
const hasNote = TESTING.cases.some(c => c.note || c.fix);
set("#testing", `<div class="two">${li(TESTING.intro, x => `<div><h3>${x.h}</h3><p>${x.t}</p></div>`)}</div>
  ${docs.length ? `<h3 class="sub">Dokumen dan hasil pengujian</h3><div class="rows two">${li(docs, d => `<div class="row"><b>${d.title}</b>${num(d.text)}${pf(d.proof, "Lihat dokumen", d.title)}</div>`)}</div>` : ""}
    <h3 class="sub">Cuplikan test case</h3>
  <div class="table-wrap"><table><thead><tr><th>Skenario ID</th><th>Test Case</th><th>Test Scenario</th><th>Type</th><th>Pre Condition</th><th>Steps Description</th><th>Expected Result</th><th>Status</th>${hasNote ? "<th>Keterangan</th><th>Perbaikan</th>" : ""}</tr></thead><tbody>
  ${li(TESTING.cases, c => `<tr><td>${c.sid}</td><td>${c.tc}</td><td>${c.scenario}</td><td>${c.type}</td><td>${c.pre}</td><td><ol class="stp">${li(c.steps, s => `<li>${s}</li>`)}</ol></td><td>${c.expected}</td><td><span class="status">${c.status}</span></td>${hasNote ? `<td>${c.note || ""}</td><td>${c.fix || ""}</td>` : ""}</tr>`)}</tbody></table></div>
  ${TESTING.note ? `<p class="muted">${TESTING.note}</p>` : ""}`);

/* Pengalaman */
const I = INTERNSHIP;
const entry = o => `<div class="item"><span class="meta2">${o.date}${o.where ? " | " + o.where : ""}</span><h3>${o.title}</h3><p class="who">${o.sub}</p>${o.text ? `<p>${o.text}</p>` : ""}${ul(o.points)}${chips(o.chips)}${pf(o.proof, "Lihat bukti", o.title)}</div>`;
set("#experience", `<div class="banner"><h3>${I.title}</h3><p class="when">${I.role} | ${I.date}</p><p>${I.overview}</p>${pf(I.proof, "Lihat bukti", I.title)}</div>
  <div class="cols" style="--n:3">${li(I.groups, g => `<div class="item"><h3>${g.title}</h3>${ul(g.points)}</div>`)}
  <div class="item span2"><h3>Kontribusi Utama</h3>${ul(I.contributions)}</div>
  <div class="item"><h3>Keterampilan yang Diterapkan</h3>${chips(I.skills)}</div></div>
  <h3 class="sub">Kelompok Studi</h3>${cols(STUDY_GROUPS, entry)}
  <h3 class="sub">Organisasi</h3>${cols(ORGANIZATIONS, entry)}
  <h3 class="sub">Kepanitiaan</h3>${cols(COMMITTEES, entry)}`);

/* Kontak: nomor telepon menjadi tautan WhatsApp (item kosong otomatis disembunyikan) */
const wa = n => { let d = n.replace(/\D/g, ""); if (d.startsWith("0")) d = "62" + d.slice(1); return "https://wa.me/" + d; };
const links = [["Email", C.email && "mailto:" + C.email, C.email], ["WhatsApp", C.phone && wa(C.phone), C.phone], ["LinkedIn", C.linkedin, "Hafizhah Farah Fadhila"], ["GitHub", C.github, "hafizhahfarahh"]];
set("#contact", `<h2>Mari terhubung</h2><p>${P.closing}</p><div class="contact">${li(links.filter(l => l[1]), l => `<a href="${l[1]}" ${l[1].startsWith("http") ? 'target="_blank" rel="noopener"' : ""}><b>${l[0]}</b>${l[2]}</a>`)}</div>`);

/* Navigasi: menu mobile + penanda bagian aktif */
const menu = $("#menu"), burger = $("#burger"), navLinks = [...menu.querySelectorAll("a")];
burger.onclick = () => burger.setAttribute("aria-expanded", menu.classList.toggle("open"));
menu.onclick = e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } };
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && navLinks.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id))), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(s => io.observe(s));
$("#year").textContent = "\u00A9 " + new Date().getFullYear();
