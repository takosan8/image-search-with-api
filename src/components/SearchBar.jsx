import { useState } from "react/cjs/react.development";

export const SearchBar = ({onSubmit}) => {
    const [term, SetTerm] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }
    return (
        <div className="ui segment">

        <form onSubmit={onFormSubmit} className="ui form">
            <div className="field">
                <label>Image search</label>
                <input type="text" name="first-name" placeholder="First Name" value={term} onChange={(e)=>SetTerm(e.target.value)} />
            </div>
        </form>
        </div>
    )
}