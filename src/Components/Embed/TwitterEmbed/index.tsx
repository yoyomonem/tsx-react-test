import * as React from "react";
import * as Props from "../../props";
import { Tweet } from "react-twitter-widgets";

/**
 * # `<TwitterEmbed>` React element
 * Embeds any Tweet just by getting imported!
 */
export const TwitterEmbed = (props: Props.TwitterEmbedProps) => (
    <div className="tweet-embed">
        <Tweet tweetId={props.tweetId} />
        <sup>by <a className="App-link" title={`${props.tweeter.displayName} (@${props.tweeter.username})`} href={`https://twitter.com/${props.tweeter.username}`}>{props.tweeter.displayName} (@{props.tweeter.username})</a></sup>
        <p>This Tweet has been embedded with <code>&lt;ScratchEmbed&gt;</code> and <code>&lt;Embed&gt;</code>; both are React components.</p>
    </div>
);