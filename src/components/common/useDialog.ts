import { useEffect, useRef } from 'react';
export function useDialog(open: boolean, close: () => void) {
 const ref = useRef<HTMLDivElement>(null);
 const closeRef = useRef(close); closeRef.current = close;
 useEffect(() => {
  if (!open) return;
  const previous = document.activeElement as HTMLElement | null;
  const overflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  const selectors = 'button:not([disabled]), a[href], input, select, textarea, [tabindex="0"]';
  const first = ref.current?.querySelector<HTMLElement>(selectors); first?.focus();
  const handle = (e: KeyboardEvent) => {
   if (e.key === 'Escape') { e.preventDefault(); closeRef.current(); }
   if (e.key !== 'Tab') return;
   const items = [...(ref.current?.querySelectorAll<HTMLElement>(selectors) || [])].filter(el => el.getClientRects().length);
   const first = items[0], last = items[items.length-1];
   if (!first) { e.preventDefault(); return; }
   if (!ref.current?.contains(document.activeElement)) { e.preventDefault(); first.focus(); return; }
   if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
   else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };
  document.addEventListener('keydown', handle);
  return () => { document.body.style.overflow = overflow; document.removeEventListener('keydown', handle); previous?.focus(); };
 }, [open]);
 return ref;
}
