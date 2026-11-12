/**
 * SystemOps mark: three stacked layers. The solid layer is the available
 * product; the outlined layers are the products still in development.
 */
export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2.5" width="20" height="5" rx="1" fill="currentColor" />
      <rect x="2.75" y="10.25" width="18.5" height="3.5" rx="0.75" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2.75" y="17.25" width="18.5" height="3.5" rx="0.75" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
