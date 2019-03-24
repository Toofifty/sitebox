import React, { useEffect, useState } from 'react'
import '../scss/view.scss'
import { cn } from '../util'
import TargetUrl from './target-url'
import { shell } from 'electron';

const View = ({ id, title, url, active, updateFavicon }) => {

    const [targetUrl, setTargetUrl] = useState('')

    useEffect(() => {
        const webview = document.querySelector(`#${id}`)
        webview.addEventListener('page-favicon-updated', ({ favicons }) => {
            if (favicons && favicons.length > 0) {
                updateFavicon(favicons[favicons.length - 1])
            }
        })
        webview.addEventListener('update-target-url', ({ url }) => {
            setTargetUrl(url)
        })
        webview.addEventListener('will-navigate', ({ url }) => {
            console.log(url)
        })
        webview.addEventListener('new-window', ({ url }) => {
            shell.openExternal(url)
        })
    }, [])

    return (
        <div className={cn('view', { 'view--active': active })}>
            <webview
                className="view__webview"
                id={id}
                src={url}
                onLoad={() => init()}
            />
            {targetUrl && <TargetUrl url={targetUrl} />}
        </div>
    )
}

export default View