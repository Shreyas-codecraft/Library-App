"use client"
import React from 'react';

export function ClientComp({
    prop1,prop2,prop3
  }: {
    prop1: React.ReactNode,prop2: React.ReactNode,prop3: React.ReactNode
  }) {
  const [isFirstSnippetShown,setFirstSnippetShown] = React.useState(0);

  return (
    <main>
      <h1>Introduction to Python</h1>
      <h2>Variables and Basic Data Types</h2>
      <p>
        Python is a high-level, interpreted programming language. In Python, you
        dont need to specify the data type of a variable when you declare it.
        Python automatically determines the data type based on the value you
        assign.
      </p>

      {isFirstSnippetShown===1 ? (
        prop1
      ) : (
        <div className="reveal">
          <button onClick={() => setFirstSnippetShown(1)}>
            Reveal Content
          </button>
        </div>
      )}

      <h2>Control Flow: Conditionals and Loops</h2>
      <p>
        Python has standard control flow structures like if statements, for and
        while loops.
      </p>

      {isFirstSnippetShown===2 ? (
        prop2
      ) : (
        <div className="reveal">
          <button onClick={() => setFirstSnippetShown(2)}>
            Reveal Content
          </button>
        </div>
      )}

      <h2>Functions and Basic Data Structures</h2>

      <p>
        In Python, you can define your own functions using the def keyword.
        Python also has built-in data structures like lists and dictionaries.
      </p>

      {isFirstSnippetShown===3 ? (
        prop3
      ) : (
        <div className="reveal">
          <button onClick={() => setFirstSnippetShown(3)}>
            Reveal Content
          </button>
        </div>
      )}
    </main>
  );
}


export default ClientComp;
