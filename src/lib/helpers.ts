export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string
) => {
  e.preventDefault();

  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 80; // 고정 헤더 높이만큼 여유
  const rect = el.getBoundingClientRect();
  const scrollTop = window.scrollY || window.pageYOffset;
  const targetY = rect.top + scrollTop - headerOffset;

  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });
};
