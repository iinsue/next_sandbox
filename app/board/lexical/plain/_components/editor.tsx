"use client";

import { $getRoot, $getSelection } from "lexical";
import { useEffect } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

const theme = {
  ltr: "ltr",
  rtl: "rtl",
  placeholder: "editor-placeholder",
  paragraph: "editor-paragraph",
};

/* 
Lexical React plugins are React components, which makes them
hgihly composable. Furthermore, you can lazy load plugins if
desired, so you don't pay the cost for plugins until you
actually use them.
*/
function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the eidtor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

/* 
Catch any errors that occur during Lexical updates and log them or
throw them as needed. If you don't throw them, Lexical will try to
recover gracefully without losing user data.
*/
function onError(error: Error) {
  console.error(error);
}

function Placeholder() {
  return <div className="editor-placeholder">Enter some plain text...</div>;
}

export const Editor = () => {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container border rounded-md">
        <PlainTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <MyCustomAutoFocusPlugin />
      </div>
    </LexicalComposer>
  );
};
