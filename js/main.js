(function () {
  'use strict';

  function getEmbedUrl(url) {
    if (url.includes('instagram.com/reel/')) {
      var reelId = url.match(/reel\/([A-Za-z0-9_-]+)/);
      if (reelId) return 'https://www.instagram.com/reel/' + reelId[1] + '/embed/';
    }
    if (url.includes('youtube.com/shorts/')) {
      var shortId = url.match(/shorts\/([A-Za-z0-9_-]+)/);
      if (shortId) return 'https://www.youtube.com/embed/' + shortId[1];
    }
    if (url.includes('youtube.com/watch')) {
      var watchId = url.match(/[?&]v=([A-Za-z0-9_-]+)/);
      if (watchId) return 'https://www.youtube.com/embed/' + watchId[1];
    }
    if (url.includes('youtu.be/')) {
      var ytId = url.match(/youtu\.be\/([A-Za-z0-9_-]+)/);
      if (ytId) return 'https://www.youtube.com/embed/' + ytId[1];
    }
    return url;
  }

  function initMobileMenu() {
    var btn = document.getElementById('nav-menu-btn');
    var menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      btn.classList.toggle('is-open', isOpen);
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        btn.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initVideoCards(selector) {
    document.querySelectorAll(selector).forEach(function (card) {
      var media = card.querySelector('.project-media');
      var playBtn = card.querySelector('.play-btn');
      var videoUrl = card.dataset.videoUrl;

      if (!media || !playBtn || !videoUrl) return;

      playBtn.addEventListener('click', function (e) {
        e.stopPropagation();

        if (videoUrl === 'coming soon') return;

        var iframe = document.createElement('iframe');
        iframe.src = getEmbedUrl(videoUrl);
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');

        media.innerHTML = '';
        media.appendChild(iframe);
      });
    });
  }

  initMobileMenu();
  initVideoCards('.project-card[data-video-url]');
})();
