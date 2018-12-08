import React from "react";
import styled from "react-emotion";
import svgKebab from "./images/icon_kebab.svg";


export const SvgImage = ({ svg, ...other }) => (
    // eslint-disable-next-line react/no-danger
    <span dangerouslySetInnerHTML={{ __html: svg }} {...other} />
);

// Styling to handle color/size
const Icon = styled(SvgImage)`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    & > svg {
        fill: currentColor;
        height: 1em;
        width: 1em;
        pointer-events: none;
        position: relative;
        stroke-width: 0;
        stroke: currentColor;
    }
`;

const wrapIcon = svg => props => <Icon svg={svg} {...props} />;
export const IconKebab = wrapIcon(svgKebab);


