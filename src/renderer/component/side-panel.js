import React, { useState } from 'react'
import '../scss/side-panel.scss'
import AppButton from './app-button'
import AddApp from './add-app';

const SidePanel = ({ apps, openApp, setOpenApp, addApp, removeApp }) => {

    const [addingApp, setAddingApp] = useState(false)

    return (
        <div className="side-panel">
            <div className="side-panel__traffic-light-spacer" />
            {apps.map((app, index) => (
                <AppButton
                    alt={app.title}
                    key={app.id}
                    favicon={app.favicon}
                    active={openApp && app.id === openApp.id}
                    onClick={() => setOpenApp(app)}
                    removeApp={() => removeApp(app)}
                    index={index + 1}
                />
            ))}
            <div className="side-panel__spacer" />
            <AppButton alt="+" add onClick={() => setAddingApp(true)} />
            {addingApp && <AddApp onClose={() => setAddingApp(false)} addApp={addApp} />}
        </div>
    )
}


export default SidePanel