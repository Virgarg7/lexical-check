import React, { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

function MyOnChangePlugin({ onChange }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const updateListener = ({ editorState }) => {
      onChange(editorState);
    };

    // Register the update listener
    const unregister = editor.registerUpdateListener(updateListener);

    // Cleanup function
    return () => {
      unregister(); // Unregister the update listener
    };
  }, [editor, onChange]);

  return null; // This plugin doesn't render anything
}

export default MyOnChangePlugin;
