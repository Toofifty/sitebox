import React from 'react'
import '../scss/empty-panel.scss'
import icon from '../img/sitebox-icon.png'

const EmptyPanel = () => (
    <div className="empty-panel">
        <img className="empty-panel__icon" src={icon} />
        <h1 className="empty-panel__title">
            Sitebox
        </h1>
        <div className="empty-panel__tooltip">
            <h3 className="empty-panel__tooltip-title">
                Get started
            </h3>
            <h4 className="empty-panel__tooltip-subtext">
                Click the + to add a new app
            </h4>
        </div>
    </div>
)

export default EmptyPanel