import * as React from "react";
import * as Props from "../../props";
import { Embed } from "..";

/**
 * # `<YouTubeEmbed>` React element
 * Embeds any YouTube video just by getting imported!
 */
export const YouTubeEmbed = (props: Props.YouTubeEmbedProps) => (
    <div className="youtube-video-embed">
        <Embed 
            width={885}
            height={498}
            embedSrc={`https://youtube.com/embed/${props.videoId}`}
            title={props.title}
            embedBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        />
        <h2><a className="App-link" title={`${props.title}${props.reupload ? " (REUPLOAD)" : ""}`} href={`https://youtube.com/watch?v=${props.videoId}`}>{props.title} {props.reupload && "(REUPLOAD)"}</a></h2>
        <sup>by <a className="App-link" title={`${props.owner} (@${props.ownerHandle})`} href={`https://youtube.com/@${props.ownerHandle}`} target="_blank" rel="noreferrer noopener">{props.owner} (@{props.ownerHandle})</a></sup>
        <p>This YouTube video has been {props.reupload && "reuploaded and"} embedded with <code>&lt;YouTubeEmbed&gt;</code> and <code>&lt;Embed&gt;</code>; both are React components.</p>
    </div>
);