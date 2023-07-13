// Type definitions for React User-Made Element Props 1.0
// Definitions by: Youssef Nasr <https://the-youssef-nasr-company.github.io>
// TypeScript Version: 4.1

import * as React from "react";

// eslint-disable-next-line
export = Props;
// eslint-disable-next-line
export as namespace Props;

declare namespace Props {
    /** Props for any user-made React element. */
    interface UserElementProps extends React.HTMLAttributes {}
    //#region Props for user-made iframe (embedding) React elements.
    /** Props for `<Embed>` elements. */
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
    /** Props for `<YouTubeEmbed>` elements. */
    interface YouTubeEmbedProps extends UserElementProps {
        videoId: string;
        title: string;
        reupload?: boolean;
        owner: string;
        ownerHandle: string;
    }
    /** Props for `<TwitterEmbed>` elements. */
    interface TwitterEmbedProps extends UserElementProps {
        tweetId: string;
        tweeter: {
            displayName: string;
            username: string;
        };
    }
    //#endregion
}
