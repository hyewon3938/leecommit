export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string
) => {
  e.preventDefault();

  const el = document.getElementById(id);
  if (!el) return;

  // 오프셋 계산 없이, 진짜 그 섹션의 top으로만 이동
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};
