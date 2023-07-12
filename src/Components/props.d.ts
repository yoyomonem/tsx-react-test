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
    //#region Props for user-made embedder React elements.
    /** Props for `<Embed>` elements. */
    interface EmbedProps extends UserElementProps {
        embedSrc: string;
        width: string | number;
        height: string | number;
        title: string;
        embedBorder?: string | number;
        allow?: string;
        allowTransparency?: boolean;
        allowFullScreen?: boolean;
        scrolling?: string;
    }
    /** Props for `<YouTubeEmbed>` elements. */
    interface YouTubeEmbedProps extends UserElementProps {
        videoId: string;
        title: string;
        reupload?: boolean;
    }
    /** Props for `<ScratchEmbed>` elements. */
    interface ScratchEmbedProps extends UserElementProps {
        projectId: string;
        title: string;
        reshared?: boolean;
    }
    //#endregion
}
