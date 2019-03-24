import React, { useState } from 'react'
import '../scss/add-app.scss'

const AddApp = ({ onClose: close, addApp }) => {

    const [url, setUrl] = useState('')

    return (
        <div className="add-app" onClick={close}>
            <div className="add-app__modal" onClick={(e) => e.preventDefault() || e.stopPropagation()}>
                <h3 className="add-app__title">
                    Add a new site
                </h3>
                <div className="add-app__input-group">
                    <label htmlFor="url" className="add-app__label">
                        Application URL
                    </label>
                    <input
                        type="text"
                        name="url"
                        className="add-app__input"
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Application URL"
                        autoFocus
                    />
                </div>
                <button className="add-app__confirm" onClick={() => addApp(url) && close()}>
                    Add
                </button>
            </div>
        </div>
    )
}

export default AddApp