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

  // Enquiry cart
  const selectedItems = new Set();
  const enquiryBar = document.getElementById('enquiryBar');
  const enquiryCount = document.getElementById('enquiryCount');

  function updateBar(){
    enquiryCount.textContent = selectedItems.size + (selectedItems.size === 1 ? ' item selected' : ' items selected');
    enquiryBar.classList.toggle('visible', selectedItems.size > 0);
  }

  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      if (selectedItems.has(name)) {
        selectedItems.delete(name);
        btn.classList.remove('added');
        btn.textContent = '+ Add';
      } else {
        selectedItems.add(name);
        btn.classList.add('added');
        btn.textContent = '✓ Added';
      }
      updateBar();
    });
  });

  document.getElementById('sendEnquiryBtn').addEventListener('click', () => {
    if (selectedItems.size === 0) return;
    const list = Array.from(selectedItems).map(n => '- ' + n).join('%0A');
    const message = `Hi C'ee Optometrist, I'd like to enquire about:%0A${list}%0A%0APlease let me know availability and pricing.`;
    window.open(`https://wa.me/27183840594?text=${message}`, '_blank');
  });

  document.getElementById('clearEnquiryBtn').addEventListener('click', () => {
    selectedItems.clear();
    document.querySelectorAll('.add-btn.added').forEach(btn => {
      btn.classList.remove('added');
      btn.textContent = '+ Add';
    });
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
