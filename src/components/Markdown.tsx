import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Components = {
  a: ({ node, ...props }) => {
    void node;
    return <a {...props} target="_blank" rel="noopener noreferrer" />;
  },
  table: ({ node, ...props }) => {
    void node;
    return (
      <div className="table-wrap">
        <table {...props} />
      </div>
    );
  },
};

/** Renders assistant output. Raw HTML is never rendered (react-markdown escapes it by default). */
export function Markdown({ children }: { children: string }) {
  return (
    <div className="answer">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
