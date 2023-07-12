import * as React from "react";
import * as Props from "../../props";
import { Embed } from "..";

/**
 * # `<ScratchEmbed>` React element
 * Embeds any Scratch project just by getting imported!
 */
export const ScratchEmbed = (props: Props.ScratchEmbedProps) => (
    <div className="scratch-project-embed">
        <Embed 
            width={485}
            height={402}
            embedSrc={`https://scratch.mit.edu/projects/${props.projectId}/embed`}
            title={props.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        />
        <h2><a title={`${props.title}${props.reshared ? " (RESHARED)" : ""}`} href={`https://scratch.mit.edu/projects/${props.projectId}`}>{props.title} {props.reshared && "(RESHARED)"}</a></h2>
        <p>This Scratch project has been {props.reshared && "reshared and"} embedded with <code>&lt;ScratchEmbed&gt;</code> and <code>&lt;Embed&gt;</code>; both are React components.</p>
    </div>
);