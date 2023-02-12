import * as React from "react";
import { SVGProps } from "react";
const SvgEditMode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    width="1em"
    height="1em"
    {...props}
  >
    <rect x={4} y={3} width={12} height={2} rx={1} fill="#ACACBE" />
    <rect x={4} y={7} width={12} height={2} rx={1} fill="#ACACBE" />
    <rect x={4} y={11} width={3} height={2} rx={1} fill="#ACACBE" />
    <rect x={4} y={15} width={4} height={2} rx={1} fill="#ACACBE" />
    <rect x={8.5} y={11} width={3} height={2} rx={1} fill="#ACACBE" />
    <path
      d="M17.154 11.346a1.182 1.182 0 0 0-1.671 0L11 15.829V17.5h1.671l4.483-4.483a1.182 1.182 0 0 0 0-1.671Z"
      fill="#ACACBE"
    />
  </svg>
);
export default SvgEditMode;
