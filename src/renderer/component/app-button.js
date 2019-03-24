import React, { useState } from 'react'
import '../scss/app-button.scss'
import { cn } from '../util'

const AppButton = ({ favicon, alt, add, active, onClick, index, removeApp }) => (
    <div className={cn('app-button', active && 'app-button--active')}>
        <button
            className="app-button__button"
            alt={alt}
            onClick={onClick}
        >
            {favicon && <img className="app-button__image" src={favicon} height="24" width="24" />}
            {!favicon && alt && <span className={cn('app-button__alt', add && 'app-button__alt--add')}>
                {alt}
            </span>}
        </button>
        {!add && (
            <div className="app-button__hover-menu">
                <button className="app-button__delete" onClick={removeApp}>
                    ×
                </button>
                {index < 10 && (
                    <span className="app-button__shortcut">
                        ⌘+{index}
                    </span>
                )}
            </div>
        )}
    </div>
)

export default AppButton