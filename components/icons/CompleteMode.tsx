import * as React from 'react';
import { SVGProps } from 'react';
const SvgCompleteMode = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="1em"
        height="1em"
        {...props}
    >
        <rect x={4} y={3} width={12} height={2} rx={1} />
        <rect x={4} y={7} width={12} height={2} rx={1} />
        <rect x={4} y={11} width={3} height={2} rx={1} />
        <rect x={4} y={15} width={3} height={2} rx={1} />
        <rect x={8.5} y={11} width={3} height={2} rx={1} />
        <rect x={8.5} y={15} width={3} height={2} rx={1} />
        <rect x={13} y={11} width={3} height={2} rx={1} />
    </svg>
);
export default SvgCompleteMode;
