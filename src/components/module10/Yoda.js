import { useEffect, useState, useRef } from "react";
import "./Yoda.css"

export default function Yoda() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setTranslated(null);
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      setLoading(true);
      const res = await fetch(
        `https://api.funtranslations.com/translate/yoda.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ text }),
          signal: ctrl.signal,
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();
      setTranslated(data.contents.translated);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  };

  const cancel = () => {
    abortRef.current?.abort();
  };

  return (
    <div class='pereklad'>
      <h2>Yoda Translator</h2>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Enter English phrase"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          Translate
        </button>
        <button type="button" onClick={cancel} disabled={!loading}>
          Cancel
        </button>
      </form>

      {loading && <p>Translating...</p>}
      {error && <p>{error}</p>}
      {translated && (
        <>
          <h3>Yoda says:</h3>
          <p>{translated}</p>
        </>
      )}
    </div>
  );
}
