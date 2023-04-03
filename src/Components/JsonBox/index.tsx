import './styles.css';

type Props = {
  jsonString: string;
  onChange: (value: string) => void;
  onCopy: () => void;
  onLoad: () => void;
};

export function JsonBox({ jsonString, onChange, onCopy, onLoad }: Props) {
  return (
    <div>
      <textarea
        className="json-box"
        value={jsonString}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="horizontal-button-group">
        <button onClick={onCopy}>Copy</button>
        <button onClick={onLoad}>Load</button>
      </div>
    </div>
  );
}
