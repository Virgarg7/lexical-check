// import React, { useState, useEffect } from "react";
// import { LexicalComposer } from "@lexical/react/LexicalComposer";
// import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
// import { ContentEditable } from "@lexical/react/LexicalContentEditable";
// import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
// import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
// import { ListPlugin } from "@lexical/react/LexicalListPlugin";
// import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
// import { TRANSFORMERS } from "@lexical/markdown";

// import ToolbarPlugin from "./plugins/ToolbarPlugin";
// import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
// import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
// import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";

// import ExampleTheme from "./themes/ExampleTheme";
// import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
// import { HeadingNode, QuoteNode } from "@lexical/rich-text";
// import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
// import { ListItemNode, ListNode } from "@lexical/list";
// import { CodeNode, CodeHighlightNode } from "@lexical/code";
// import { AutoLinkNode, LinkNode } from "@lexical/link";
// import MyOnChangePlugin from "./plugins/MyOnChangePlugin";

// function Placeholder() {
//     return <div className="editor-placeholder">Start Writing...</div>;
// }

// const editorConfig = {
//     // The editor theme
//     theme: ExampleTheme,
//     // Handling of errors during update
//     onError(error) {
//         throw error;
//     },
//     // Any custom nodes go here
//     nodes: [
//         HeadingNode,
//         ListNode,
//         ListItemNode,
//         QuoteNode,
//         CodeNode,
//         CodeHighlightNode,
//         TableNode,
//         TableCellNode,
//         TableRowNode,
//         AutoLinkNode,
//         LinkNode,
//     ],
// };

// export default function Editor({ input, onSave }) {
//     const [editorState, setEditorState] = useState(input || null);

//     useEffect(() => {
//         const loadContent = async () => {
//             // Simulate loading initial editor state from backend
//             const initialEditorState = await fetchInitialEditorState();
//             setEditorState(initialEditorState);
//         };

//         loadContent();
//     }, []);

//     const fetchInitialEditorState = async () => {
//         // Mock function to fetch initial editor state from backend
//         return '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}';
//     };

//     const updateEditorState = (newEditorState) => {
//         setEditorState(newEditorState);
//         if (onSave) {
//             onSave(newEditorState);
//         }
//     };

//     return (
//         <LexicalComposer initialConfig={editorConfig}>
//             <div className="editor-container">
//                 <div className="tw-overflow-hidden shadow-scroll-x">
//                     <ToolbarPlugin />
//                 </div>
//                 <div className="editor-inner tw-mt-3">
//                     <RichTextPlugin
//                         contentEditable={<ContentEditable className="editor-input tw-border-black tw-border-solid tw-border-[1px] tw-rounded-lg " />}
//                         placeholder={<Placeholder />}
//                         ErrorBoundary={LexicalErrorBoundary}
//                     />
//                     <HistoryPlugin />
//                     <AutoFocusPlugin />
//                     <CodeHighlightPlugin />
//                     <ListPlugin />
//                     <LinkPlugin />
//                     <AutoLinkPlugin />
//                     <ListMaxIndentLevelPlugin maxDepth={7} />
//                     <MyOnChangePlugin onChange={updateEditorState} />
//                     <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
//                 </div>
//             </div>
//         </LexicalComposer>
//     );
// }

import {
    Box,
    CssBaseline,
    Grid,
    ThemeProvider,
    Typography,
} from "@mui/material";
import LexicalEditorWrapper from "./components/LexicalEditorWrapper";
import theme from "./theme";

const Editor = () => {
    return (
        <div className="tw-overflow-hidden shadow-scroll-x">
            <LexicalEditorWrapper />
        </div>
    )
}

export default Editor