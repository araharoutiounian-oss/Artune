(() => {
  const openService = () => {
    if (!window.location.hash) return;
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
    const service = document.getElementById(id);
    if (service?.matches('details.school-service')) service.open = true;
  };
  document.querySelectorAll('a[href^="#service-"]').forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.hash.slice(1));
      if (target?.matches('details.school-service')) target.open = true;
    });
  });
  window.addEventListener('hashchange', openService);
  openService();
})();
