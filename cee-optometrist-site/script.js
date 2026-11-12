// WhatsApp number that receives enquiries: country code first, no + or spaces.
// Keep it the same as the wa.me links in index.html.
const WHATSAPP_NUMBER = '27731121488';

// Items the visitor has added to their enquiry (filled in by the cart code further down)
const selectedItems = new Set();

// Product grids: build each group from the PRODUCTS list (see products.js)
const EYE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>';

function formatPrice(price) {
  return typeof price === 'number' ? 'R ' + price.toLocaleString('en-US') : 'Ask in store';
}

// A product with no "colors" list is treated as a single colour.
// A colour without its own "images" falls back to the product's "images".
function colorsOf(p) {
  if (p.colors && p.colors.length) {
    return p.colors.map(c => ({ ...c, images: c.images && c.images.length ? c.images : p.images }));
  }
  return [{ name: null, swatch: null, images: p.images }];
}

// swatch can be one colour ("#c42a2e") or two for a two-tone frame (["#dddbca", "#d8452d"])
function swatchBackground(swatch) {
  if (Array.isArray(swatch)) {
    return 'linear-gradient(135deg, ' + swatch[0] + ' 0 50%, ' + swatch[1] + ' 50% 100%)';
  }
  return swatch || '#cccccc';
}

function buildProductCard(p, reserveColorRows) {
  const colors = colorsOf(p);
  const multi = colors.length > 1;
  const baseEnquiry = p.enquiry || p.name;

  const card = document.createElement('div');
  card.className = 'mini-item';

  const img = document.createElement('img');
  img.className = 'lightbox-trigger';

  const name = document.createElement('span');
  name.textContent = p.name;

  const price = document.createElement('span');
  price.className = 'price';
  price.textContent = formatPrice(p.price);

  const view = document.createElement('button');
  view.className = 'view-icon';
  view.setAttribute('aria-label', 'View larger');
  view.innerHTML = EYE_ICON;

  const add = document.createElement('button');
  add.className = 'add-btn';

  card.append(img, name);

  let dots = [];
  let colorName = null;
  if (multi || reserveColorRows) {
    // when any card in this grid has colours, every card keeps the same rows so prices line up
    const swatches = document.createElement('div');
    swatches.className = 'swatches';
    colorName = document.createElement('span');
    colorName.className = 'color-name';
    if (multi) {
      swatches.setAttribute('role', 'group');
      swatches.setAttribute('aria-label', 'Colours for ' + p.name);
      dots = colors.map((c, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'swatch';
        dot.title = c.name;
        dot.setAttribute('aria-label', 'Colour: ' + c.name);
        dot.style.background = swatchBackground(c.swatch);
        dot.addEventListener('click', () => showColor(i));
        swatches.appendChild(dot);
        return dot;
      });
    }
    card.append(swatches, colorName);
  }

  card.append(price, view, add);

  // push the colour dots / price / buttons to the bottom of the card, so prices line up
  // across a row even when one name wraps onto two lines
  (card.querySelector('.swatches') || price).classList.add('push-down');

  function showColor(i) {
    const c = colors[i];
    img.src = c.images[0];
    img.alt = multi ? (c.alt || p.name + ', ' + c.name) : (p.alt || p.name);
    img.dataset.images = c.images.join(',');
    add.dataset.name = multi ? baseEnquiry + ' (' + c.name + ')' : baseEnquiry;
    syncAddButton(add);
    if (multi) {
      colorName.textContent = c.name;
      dots.forEach((d, j) => d.setAttribute('aria-pressed', String(j === i)));
    }
  }
  showColor(0);
  return card;
}

document.querySelectorAll('[data-group]').forEach(grid => {
  const items = PRODUCTS.filter(p => p.group === grid.dataset.group);
  if (items.length === 0) {
    // nothing in this group: hide its heading and grid
    const heading = grid.previousElementSibling;
    if (heading && heading.classList.contains('product-subhead')) heading.remove();
    grid.remove();
    return;
  }
  const reserve = items.some(p => colorsOf(p).length > 1);
  grid.replaceChildren(...items.map(p => buildProductCard(p, reserve)));
});

const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  // Close the menu with Escape or a tap outside it
  const closeNav = () => { links.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); };
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
  document.addEventListener('click', e => {
    if (!links.contains(e.target) && !toggle.contains(e.target)) closeNav();
  });

  // Enquiry cart
  const enquiryBar = document.getElementById('enquiryBar');
  const enquiryCount = document.getElementById('enquiryCount');

  function updateBar(){
    enquiryCount.textContent = selectedItems.size + (selectedItems.size === 1 ? ' item selected' : ' items selected');
    enquiryBar.classList.toggle('visible', selectedItems.size > 0);
  }

  // keeps a "+ Add" button in step with what is selected (also used when a colour changes)
  function syncAddButton(btn) {
    const on = selectedItems.has(btn.dataset.name);
    btn.classList.toggle('added', on);
    btn.textContent = on ? '\u2713 Added' : '+ Add';
  }

  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      if (selectedItems.has(name)) selectedItems.delete(name);
      else selectedItems.add(name);
      syncAddButton(btn);
      updateBar();
    });
  });

  document.getElementById('sendEnquiryBtn').addEventListener('click', () => {
    if (selectedItems.size === 0) return;
    const list = Array.from(selectedItems).map(n => '- ' + n).join('\n');
    const message = "Hi C'ee Optometrist, I'd like to enquire about:\n" + list + '\n\nPlease let me know availability and pricing.';
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message), '_blank');
  });

  document.getElementById('clearEnquiryBtn').addEventListener('click', () => {
    selectedItems.clear();
    document.querySelectorAll('.add-btn').forEach(syncAddButton);
    updateBar();
  });

  // Lightbox
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxDots = document.getElementById('lightboxDots');

  let currentImages = [];
  let currentIndex = 0;
  let currentAlt = '';

  function renderLightbox(){
    lightboxImg.src = currentImages[currentIndex];
    lightboxImg.alt = currentAlt;
    const multi = currentImages.length > 1;
    lightboxPrev.classList.toggle('hidden', !multi);
    lightboxNext.classList.toggle('hidden', !multi);
    lightboxDots.innerHTML = '';
    if (multi) {
      currentImages.forEach((_, i) => {
        const dot = document.createElement('span');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => { currentIndex = i; renderLightbox(); });
        lightboxDots.appendChild(dot);
      });
    }
  }

  function openLightbox(img){
    const raw = img.dataset.images || img.src;
    currentImages = raw.split(',').map(s => s.trim()).filter(Boolean);
    currentIndex = 0;
    currentAlt = img.alt;
    renderLightbox();
    lightboxOverlay.classList.add('open');
  }

  lightboxPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    renderLightbox();
  });
  lightboxNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    renderLightbox();
  });

  document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', () => openLightbox(img));
  });
  document.querySelectorAll('.view-icon').forEach(btn => {
    btn.addEventListener('click', () => {
      const img = btn.closest('.mini-item').querySelector('img');
      if (img) openLightbox(img);
    });
  });
  function closeLightbox(){ lightboxOverlay.classList.remove('open'); }
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (!lightboxOverlay.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && currentImages.length > 1) lightboxPrev.click();
    if (e.key === 'ArrowRight' && currentImages.length > 1) lightboxNext.click();
  });

  // Booking form: send in the background and show the result on the page
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    const statusEl = document.getElementById('formStatus');
    const submitBtn = bookingForm.querySelector('button[type="submit"]');

    bookingForm.addEventListener('submit', async (e) => {
      const key = bookingForm.elements.access_key.value;

      // Service not set up yet: fall back to the visitor's email app
      if (!key || key.startsWith('YOUR_')) {
        bookingForm.querySelectorAll('input[type="hidden"], .hp').forEach(el => { el.disabled = true; });
        return;
      }

      e.preventDefault();
      statusEl.className = 'form-status sending';
      statusEl.textContent = 'Sending your request…';
      submitBtn.disabled = true;

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(bookingForm)))
        });
        const data = await res.json();
        if (res.ok && data.success) {
          statusEl.className = 'form-status ok';
          statusEl.textContent = "Thank you, your request has been sent. We'll contact you to confirm your appointment.";
          bookingForm.reset();
        } else {
          throw new Error(data.message || 'Request failed');
        }
      } catch (err) {
        statusEl.className = 'form-status error';
        statusEl.textContent = "Sorry, your request wasn't sent. Please try again, or call 018 384 0594 or message us on WhatsApp.";
      } finally {
        submitBtn.disabled = false;
      }
    });
  }