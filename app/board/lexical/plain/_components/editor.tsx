"use client";

import { $getRoot, $getSelection } from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import MyCustomAutoFocusPlugin from "./plugins/MyCustomAutoFocusPlugin";

const theme = {
  ltr: "ltr",
  rtl: "rtl",
  placeholder: "editor-placeholder",
  paragraph: "editor-paragraph",
};

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
