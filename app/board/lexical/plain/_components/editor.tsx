"use client";

import { $getRoot, $getSelection } from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import MyCustomAutoFocusPlugin from "./plugins/MyCustomAutoFocusPlugin";
import TextChangePlugin from "./plugins/TextChangePlugin";
import EditorConfig from "./config";

function Placeholder() {
  return <div className="editor-placeholder">Enter some plain text...</div>;
}

export const Editor = () => {
  return (
    <LexicalComposer initialConfig={EditorConfig}>
      <div className="editor-container border rounded-md">
        <PlainTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={TextChangePlugin} />
        <MyCustomAutoFocusPlugin />
      </div>
    </LexicalComposer>
  );
};
