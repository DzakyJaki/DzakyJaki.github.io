const sr = ScrollReveal({
  distance: "65px",
  duration: 900,
  reset: true,
});

// navbar scroll animation
sr.reveal(".navbar-brand", { delay: 200, origin: "left", reset: false });
sr.reveal(".navbar-nav", { delay: 200, origin: "right", reset: false });

// section scroll animation
sr.reveal(".about", { delay: 200, origin: "top" });
sr.reveal(".project", { delay: 200, origin: "top" });
sr.reveal(".contact", { delay: 200, origin: "top" });

// jumbotron scroll animation
sr.reveal(".img", { delay: 100, origin: "top" });
sr.reveal(".name", { delay: 200, origin: "top" });
sr.reveal(".profession", { delay: 300, origin: "top" });

// project scroll animation
sr.reveal(".card-yt", { delay: 200, origin: "top", reset: true });
sr.reveal(".card-ig", { delay: 300, origin: "top", reset: true });
sr.reveal(".card-netflix", { delay: 400, origin: "top", reset: true });
sr.reveal(".card-tiktok", { delay: 200, origin: "top", reset: true });
sr.reveal(".card-twitter", { delay: 300, origin: "top", reset: true });

// contact scroll animation
sr.reveal(".contact-identity", { delay: 200, origin: "top", reset: true });
sr.reveal(".contact-form", { delay: 300, origin: "top", reset: true });
