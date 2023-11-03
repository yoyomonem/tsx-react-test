// Type definitions for React User-Made Element Props 1.0
// Definitions by: Youssef Nasr <https://the-youssef-nasr-company.github.io>
// Type definitions: Typed by Youssef Nasr <https://the-youssef-nasr-company.github.io>.
// TypeScript Version: 4.2 Beta

import * as React from "react";

// eslint-disable
export = Props;
export as namespace Props;

/**
 * # `Props` universal React properties
 * Universal properties for user-made React elements.
 */
declare namespace Props {
    /** Properties for any user-made React element. */
    interface UserElementProps extends React.HTMLAttributes {}
    //#region Properties for user-made embedding React elements.
    /** Properties for `<Embed>` elements. */
    interface EmbedProps extends UserElementProps {
        embedSrc: string;
        width: string | number;
        height: string | number;
        title: string;
        embedBorder?: string | number;
        allow?: string;
        allowFullScreen?: boolean;
        scrolling?: string;
    }
    /** Properties for `<YouTubeEmbed>` elements. */
    interface YouTubeEmbedProps extends UserElementProps {
        videoId: string;
        title: string;
        reupload?: boolean;
        owner: string;
        ownerHandle: string;
    }
    /** Properties for `<TwitterEmbed>` elements. */
    interface TwitterEmbedProps extends UserElementProps {
        tweetId: string;
        tweeter: {
            displayName: string;
            username: string;
        };
    }
    //#endregion
}
