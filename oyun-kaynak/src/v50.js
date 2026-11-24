window.BY_DBG50 = false; /* teşhis notları kapalı */
/* ===== v50 · Başlık ekranında Mağaza dokunuşu (iPhone) teşhis + yedek tetikleme =====
   Bazı iPhone'larda başlıktaki Mağaza satırına dokununca tıklama olayı gelmiyor.
   1) Dokunma bittiğinde 450 ms içinde tıklama gelmezse eylemi biz tetikleriz.
   2) TestFlight teşhisi: by_dbg açıkken ekrana kısa notlar düşer. */
(function () {
 const DBG = () => { try { return window.BY_DBG50 === true } catch (e) { return false } };
 const note = t => { if (DBG()) try { toast('[test] ' + t) } catch (e) {} };
 window.addEventListener('error', e => note('hata: ' + (e.message || e)));
 window.addEventListener('unhandledrejection', e => note('söz hatası: ' + ((e.reason && e.reason.message) || e.reason)));
 let lastClick = 0, sx = 0, sy = 0, moved = false, startEl = null;
 document.addEventListener('click', e => { lastClick = Date.now() }, true);
 document.addEventListener('touchstart', e => { const t = e.touches[0]; sx = t.clientX; sy = t.clientY; moved = false; startEl = e.target.closest && e.target.closest('[data-a]') }, {capture: true, passive: true});
 document.addEventListener('touchmove', e => { const t = e.touches[0]; if (Math.abs(t.clientX - sx) > 10 || Math.abs(t.clientY - sy) > 10) moved = true }, {capture: true, passive: true});
 document.addEventListener('touchend', e => {
  const el = e.target.closest && e.target.closest('[data-a]');
  if (!el || moved || el !== startEl) return;
  if (UI.scr !== 'title' || !el.closest('.title')) return;
  const a = el.dataset.a, v = el.dataset.v, t0 = Date.now();
  note('dokunma: ' + a);
  setTimeout(() => {
   if (lastClick >= t0) return;
   if (UI.scr !== 'title' || !document.body.contains(el)) return;
   note('tıklama gelmedi, yedek tetikleme: ' + a);
   const f = A[a]; if (f && !el.disabled) try { f(v) } catch (err) { note('eylem hatası: ' + err.message) }
  }, 450);
 }, {capture: true, passive: true});
 /* mağaza açıldı mı? */
 setTimeout(() => { if (!A.store33) return; const _s = A.store33; A.store33 = function (v) { note('mağaza açılıyor'); let r; try { r = _s.apply(this, arguments) } catch (err) { note('mağaza hatası: ' + err.message); throw err } setTimeout(() => note('ekran: ' + UI.scr), 50); return r } }, 0);
})();
