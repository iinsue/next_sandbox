import { $getRoot, $getSelection, EditorState } from "lexical";

/* 
When the editor changes, you can get notified via the LexicalOnChangePlugin!
*/
const TextChangePlugin = (editorState: EditorState) => {
  editorState.read(() => {
    const root = $getRoot();
    const selection = $getSelection();

    console.log("root", root);
    console.log("selection", selection);
  });
};

export default TextChangePlugin;
