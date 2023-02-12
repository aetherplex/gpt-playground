import * as React from 'react';
import { SVGProps } from 'react';
const SvgUndoLast = (props: SVGProps<SVGSVGElement>) => (
    <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        {...props}
    >
        <path d="M23 4v6h-6M1 20v-6h6" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
);
export default SvgUndoLast;
