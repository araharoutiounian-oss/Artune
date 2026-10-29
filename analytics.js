(() => {
  const measurementId = "G-JB32P10RWF";
  const liveHosts = ["artune.net", "www.artune.net"];
  if (!liveHosts.includes(window.location.hostname) || window.artuneAnalyticsReady) return;
  window.artuneAnalyticsReady = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const googleTag = document.createElement("script");
  googleTag.async = true;
  googleTag.src = "https://www.googletagmanager.com/gtag/js?id=" + measurementId;
  document.head.appendChild(googleTag);

  const bookingEvents = {
    "/checkout/Course/41676": "course_consultation_click",
    "/checkout/Course/43962": "course_only_click",
    "/checkout/Coaching/99": "initial_consultation_click",
    "/checkout/Coaching/100": "individual_coaching_click",
    "/checkout/Coaching/95": "design_consultation_click"
  };

  document.addEventListener("click", (event) => {
    const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!link || event.defaultPrevented || link.hasAttribute("download")) return;

    let destination;
    try {
      destination = new URL(link.href, window.location.href);
    } catch {
      return;
    }

    const parameters = { page_path: window.location.pathname };
    let eventName;
    if (destination.protocol === "mailto:") {
      eventName = "contact_email_click";
    } else if (["https:", "http:"].includes(destination.protocol)) {
      const path = destination.pathname.replace(/\/$/, "") || "/";
      if (destination.hostname.toLowerCase() === "artune.freshlearn.com") {
        eventName = bookingEvents[path] || (path === "/member" ? "member_portal_click" : "outbound_link_click");
      } else {
        eventName = liveHosts.includes(destination.hostname) ? "internal_link_click" : "outbound_link_click";
      }
      parameters.link_url = destination.origin + destination.pathname;
      parameters.link_text = link.textContent.trim().replace(/\s+/g, " ").slice(0, 100);
    }
    if (eventName) window.gtag("event", eventName, parameters);
  });
})();
