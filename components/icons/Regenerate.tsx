import * as React from 'react';
import { SVGProps } from 'react';
const SvgRegenerate = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M1 4v6h6" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
    </svg>
);
export default SvgRegenerate;
