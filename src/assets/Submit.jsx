export default function Submit({ button, handleSubmit }) {
    return (
        <button className="buttonComponent" onClick={handleSubmit}>
            {button}
        </button>
    );
}
