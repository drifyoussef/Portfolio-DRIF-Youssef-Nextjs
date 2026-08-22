export default function Footer() {
  return (
    <footer className="border-t-2 border-encre bg-flame text-encre">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-sm font-bold sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span className="text-lg font-black tracking-[-0.03em] uppercase">
          Youssef Drif
        </span>
        <span>© {new Date().getFullYear()} — Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
