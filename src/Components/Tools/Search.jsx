export default function Search({handlSubmit, input, setInput}) {

    return (
        <div className="row">
            <div className="input-field">
                <input
                    type='search'
                    placeholder='search'
                    onKeyDown={(e) => {if (e.key === 'Enter') handlSubmit()}}
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <button 
                    className="btn"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0
                    }}
                    onClick={handlSubmit}
                >Search</button>
            </div>
        </div>
    )
}