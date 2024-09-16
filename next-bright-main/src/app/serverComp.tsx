import React from "react";
import { Code } from "bright";

export function ServerComp({prop}:{prop:string}) {
  return (
    <Code className="code-snippet" theme="dracula" lang="py">
      {prop}
    </Code>
  );
}

export default ServerComp;
