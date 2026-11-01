export default function SectionTitle({ id, children }) {
  return (
    <div className="overflow-hidden pb-3">
      <h2
        id={id}
        data-anim="title"
        className="font-display text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.95] font-extrabold tracking-tight text-balance"
      >
        {children}
      </h2>
    </div>
  );
}
