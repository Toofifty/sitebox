import React, { useState } from 'react'
import Mousetrap from 'mousetrap'
import '../scss/app.scss'
import SidePanel from './side-panel'
import View from './view'
import { domain, load, find, shortcode, save, favicon } from '../util'

const App = () => {

    const [apps, setAppsState] = useState(load('apps') || [])

    const setApps = (apps) => {
        save('apps', apps)
        setAppsState(apps)
    }

    const [openAppId, setOpenAppIdState] = useState(load('open-app'))

    const setOpenAppId = (id) => {
        save('open-app', id)
        setOpenAppIdState(id)
    }

    const openApp = (() => {
        const app = find(apps, app => app.id === openAppId)
        if (app) {
            return app
        }
        return apps.length > 0 ? apps[0] : null
    })()

    apps.forEach(app => {
        if (app.favicon === undefined) {
            favicon(app.url).then(favicon => {
                app.favicon = favicon
                setApps([...apps])
            })
        }
    })

    const updateFavicon = (app, favicon) => {
        app.favicon = favicon
        setApps([...apps])
    }

    const addApp = (url) => {
        const app = {
            id: shortcode(),
            url: `https://${domain(url)}/`,
            favicon: undefined
        }
        setApps([...apps, app])
        setOpenAppId(app.id)
        return true
    }

    const removeApp = (app) => {
        setApps(apps.filter(({ id }) => id !== app.id))
    }

    apps.forEach((app, i) => {
        if (i < 9) {
            Mousetrap.bind(`command+${i + 1}`, () => {
                setOpenAppId(app.id)
            })
        }
    })

    return (
        <div className="app">
            <SidePanel
                apps={apps}
                openApp={openApp}
                setOpenApp={({ id }) => setOpenAppId(id)}
                addApp={addApp}
                removeApp={removeApp}
            />
            {apps.map(app => (
                <View
                    id={app.id}
                    key={app.id}
                    title={app.title}
                    url={app.url}
                    active={openApp && app.id === openApp.id}
                    updateFavicon={(favicon) => updateFavicon(app, favicon)}
                />
            ))}
        </div>
    )
}

export default App