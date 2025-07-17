export default function Submit({ button, handleSubmit, disable }) {
    return (
        <button className="buttonComponent" onClick={handleSubmit} disabled={disable}>
            {disable ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <div className="loading"></div>
                    Submitting...
                </div>
            ) : (
                button
            )}
        </button>
    );
}