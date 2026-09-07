import { useState, useEffect } from "react";
import "../styles/CodeEditor.css";

const codeLines = [
  { indent: 0, text: 'const developer = {', delay: 0 },
  { indent: 1, text: 'name: "Shifa Ahmed",', delay: 400 },
  { indent: 1, text: 'role: "Software Developer",', delay: 800 },
  { indent: 1, text: 'stack: [', delay: 1200 },
  { indent: 2, text: '"MERN",', delay: 1500 },
  { indent: 2, text: '"Next.js",', delay: 1800 },
  { indent: 2, text: '"TypeScript"', delay: 2100 },
  { indent: 1, text: '],', delay: 2400 },
  { indent: 1, text: 'passion: "Building meaningful', delay: 2700 },
  { indent: 3, text: 'digital experiences"', delay: 3000 },
  { indent: 0, text: '};', delay: 3300 },
];

const syntaxHighlight = (text) => {
  return text
    .replace(/(const|let|var)\b/g, '<span class="ce-keyword">$1</span>')
    .replace(/(".*?")/g, '<span class="ce-string">$1</span>')
    .replace(/\b(developer)\b/g, '<span class="ce-variable">$1</span>')
    .replace(/\b(name|role|stack|passion)\b(?=:)/g, '<span class="ce-property">$1</span>');
};

const CodeEditor = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = codeLines.map((line, index) =>
      setTimeout(() => setVisibleLines(index + 1), line.delay + 600)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="code-editor">
      <div className="ce-header">
        <div className="ce-dots">
          <span className="ce-dot ce-dot--red"></span>
          <span className="ce-dot ce-dot--yellow"></span>
          <span className="ce-dot ce-dot--green"></span>
        </div>
        <div className="ce-tab">developer.js</div>
        <div className="ce-spacer"></div>
      </div>
      <div className="ce-body">
        <div className="ce-lines">
          {codeLines.map((_, i) => (
            <span key={i} className={`ce-line-num ${i < visibleLines ? 'ce-visible' : ''}`}>
              {i + 1}
            </span>
          ))}
        </div>
        <div className="ce-code">
          {codeLines.map((line, i) => (
            <div
              key={i}
              className={`ce-line ${i < visibleLines ? 'ce-visible' : ''}`}
              style={{ paddingLeft: `${line.indent * 18}px` }}
            >
              <span dangerouslySetInnerHTML={{ __html: syntaxHighlight(line.text) }} />
              {i === visibleLines - 1 && <span className="ce-cursor">|</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="ce-footer">
        <span>JavaScript</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
};

export default CodeEditor;
