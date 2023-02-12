import * as React from 'react';
import { SVGProps } from 'react';
const SvgShowHistory = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        width="1em"
        height="1em"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.488 2.399A7.75 7.75 0 1 1 4.52 15.48a.75.75 0 0 1 1.06-1.06A6.25 6.25 0 1 0 3.77 9.513l.75-.751a.75.75 0 1 1 1.062 1.06l-2.122 2.122a.75.75 0 0 1-1.06 0L.277 9.823a.75.75 0 1 1 1.061-1.06l.919.918A7.75 7.75 0 0 1 8.488 2.4ZM10 6.25a.75.75 0 0 1 .75.75v2.575l2.136 1.282a.75.75 0 1 1-.772 1.286l-2.5-1.5A.75.75 0 0 1 9.25 10V7a.75.75 0 0 1 .75-.75Z"
        />
    </svg>
);
export default SvgShowHistory;
