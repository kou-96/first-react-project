import "./Button.css";

export function Button({ label, test }) {
    return (
    <button className="landing-button" onClick={test}>
        { label }</button>
    );
}
