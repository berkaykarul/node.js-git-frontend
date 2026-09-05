import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function YemekYolMark({ className, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 99.5 56.5"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16" />
    </svg>
  );
}

export function PinIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M19 9.27C19 5.404 15.866 2.27 12 2.27C8.138 2.27 5 5.454 5 9.27C5 13.035 7.205 17.074 12 21.39C16.795 17.074 19 13.035 19 9.27Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="9" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function ArrowRightIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        d="M12.793 3.793a1 1 0 0 1 1.414 0L21 10.586a2 2 0 0 1 0 2.828l-6.793 6.793a1 1 0 0 1-1.414-1.414L18.586 13H3a1 1 0 1 1 0-2h15.586l-5.793-5.793a1 1 0 0 1 0-1.414Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function UserIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M8 8a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm4.355 1.093C11.049 8.395 9.567 8 8 8c-1.567 0-3.047.394-4.353 1.092C2.509 9.7 2 10.904 2 12.017V14.333C2 15.254 2.747 16 3.667 16h8.666C13.254 16 14 15.254 14 14.333v-2.315c0-1.113-.508-2.317-1.645-2.925Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LocateIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        d="M13.91 3.414a1.25 1.25 0 0 0-1.324-.325L1.586 7.09A1.25 1.25 0 0 0 1.007 8.114c.05.431.372.781.797.866l4.347.869 1.87 4.346c.085.426.435.748.866.798a1.25 1.25 0 0 0 1.025-.58L13.91 3.414Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SearchIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20 16.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CartIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        d="M6 6h15l-1.5 9h-12L6 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M6 6 5 3H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="9" cy="20" r="1.5" fill="currentColor" />
      <circle cx="18" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function MenuIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function StarIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M8 1.5 9.9 5.7l4.6.5-3.4 3.1.9 4.5L8 11.7 3.9 13.8l.9-4.5L1.5 6.2l4.6-.5L8 1.5Z" />
    </svg>
  );
}
