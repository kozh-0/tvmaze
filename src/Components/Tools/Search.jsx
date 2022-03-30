import { useDispatch, useSelector } from "react-redux"
import { handleInputText } from "../../Redux/actions"
import { getInput } from "../../Redux/thunks"


export default function Search() {

    const dispatch = useDispatch()
    const text = useSelector(state => state.inputReducer.text)

    const handle = (e) => {
        dispatch(handleInputText(e.target.value))
    }

    const handlSubmit = () => {
        if (text !== '') {
            dispatch(getInput(text))
        }
    }

    return (
        <div className="row">
            <div className="input-field">
                <input
                    className="input-field-text-area"
                    type='text'
                    placeholder='Search'
                    onKeyDown={(e) => {if (e.key === 'Enter') handlSubmit()}}
                    onChange={handle}
                    value={text}
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