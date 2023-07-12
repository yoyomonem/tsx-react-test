import * as React from "react";
import * as Props from "../props";

/** 
 * # `<Embed>` React element
 * Embeds anything just by getting imported!
 */
export const Embed = (props: Props.EmbedProps) => (
    <iframe
        src={props.embedSrc}
        width={props.width}
        height={props.height}
        frameBorder={props.embedBorder}
        allow={props.allow}
        allowTransparency={props.allowTransparency}
        allowFullScreen={props.allowFullScreen}
        scrolling={props.scrolling}
        title={props.title}
    />
);