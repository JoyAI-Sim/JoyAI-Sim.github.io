const header = document.querySelector("[data-header]");
const revealItems = document.querySelectorAll(".reveal");
const mediaItems = document.querySelectorAll("video");

document.documentElement.classList.add("js-enabled");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const bindPointerBackdrop = () => {
  const backdrop = document.querySelector(".site-backdrop");

  if (!backdrop) {
    return;
  }

  const style = document.documentElement.style;
  const prefersReducedMotion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null;
  const supportsFinePointer = window.matchMedia ? window.matchMedia("(pointer: fine)") : null;
  const state = {
    x: window.innerWidth * 0.36,
    y: Math.min(window.innerHeight * 0.26, 260),
    targetX: window.innerWidth * 0.36,
    targetY: Math.min(window.innerHeight * 0.26, 260),
    frameId: 0
  };

  const clamp = (value, max) => Math.max(0, Math.min(max, value));

  const paint = (x, y) => {
    const width = Math.max(window.innerWidth, 1);
    const height = Math.max(window.innerHeight, 1);
    const safeX = clamp(x, width);
    const safeY = clamp(y, height);

    style.setProperty("--pointer-x-px", `${safeX}px`);
    style.setProperty("--pointer-y-px", `${safeY}px`);
    style.setProperty("--pointer-x", `${(safeX / width) * 100}%`);
    style.setProperty("--pointer-y", `${(safeY / height) * 100}%`);
  };

  const tick = () => {
    const ease = prefersReducedMotion?.matches ? 1 : 0.14;

    state.x += (state.targetX - state.x) * ease;
    state.y += (state.targetY - state.y) * ease;
    paint(state.x, state.y);

    if (Math.abs(state.targetX - state.x) > 0.5 || Math.abs(state.targetY - state.y) > 0.5) {
      state.frameId = window.requestAnimationFrame(tick);
      return;
    }

    state.x = state.targetX;
    state.y = state.targetY;
    paint(state.x, state.y);
    state.frameId = 0;
  };

  const requestTick = () => {
    if (!state.frameId) {
      state.frameId = window.requestAnimationFrame(tick);
    }
  };

  const setTarget = (x, y) => {
    state.targetX = x;
    state.targetY = y;
    requestTick();
  };

  const resetTarget = () => {
    setTarget(window.innerWidth * 0.36, Math.min(window.innerHeight * 0.26, 260));
  };

  paint(state.x, state.y);
  resetTarget();

  if (!supportsFinePointer || supportsFinePointer.matches) {
    window.addEventListener(
      "pointermove",
      (event) => {
        if (event.pointerType === "touch") {
          return;
        }

        setTarget(event.clientX, event.clientY);
      },
      { passive: true }
    );

    document.addEventListener("mouseleave", resetTarget);
  }

  window.addEventListener(
    "touchmove",
    (event) => {
      const touch = event.touches?.[0];

      if (touch) {
        setTarget(touch.clientX, touch.clientY);
      }
    },
    { passive: true }
  );

  window.addEventListener(
    "resize",
    () => {
      state.x = clamp(state.x, window.innerWidth);
      state.y = clamp(state.y, window.innerHeight);
      state.targetX = clamp(state.targetX, window.innerWidth);
      state.targetY = clamp(state.targetY, window.innerHeight);
      paint(state.x, state.y);
    },
    { passive: true }
  );
};

bindPointerBackdrop();

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if ("IntersectionObserver" in window) {
  const mediaObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting && video.autoplay) {
          video.play().catch(() => {});
        } else if (!entry.isIntersecting && !video.paused) {
          video.pause();
        }
      });
    },
    { threshold: 0.22 }
  );

  mediaItems.forEach((video) => mediaObserver.observe(video));
}
