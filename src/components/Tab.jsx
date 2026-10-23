export default function Tab({ page, number }) {
  return (
    <a className="tab" href={`#${page.id}`} style={{ '--tab-bg': page.bg, '--tab-ink': page.ink }}>
      <span className="tab__label">{page.label}</span>
      <span className="tab__badge" aria-hidden="true">
        <span className="tab__num">{number}</span>
      </span>
    </a>
  );
}
