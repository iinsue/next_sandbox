import PlainTheme from "./themes/plain-theme";

/* 
Catch any errors that occur during Lexical updates and log them or
throw them as needed. If you don't throw them, Lexical will try to
recover gracefully without losing user data.
*/
function onError(error: Error) {
  throw error;
}

const EditorConfig = {
  namespace: "MyEditor",
  theme: PlainTheme,
  onError: onError,
  nodes: [],
};

export default EditorConfig;
