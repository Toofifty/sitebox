/**
 * Turn any amount of objects, arrays or strings into
 * a class name
 */
export const cn = (...classes) => classes.map(cls => {
    if (Array.isArray(cls)) {
        return cls.filter(Boolean).join(' ')
    }
    if (typeof(cls) === 'object' && cls !== null) {
        return Object.keys(cls).filter(k => !!cls[k]).join(' ')
    }
    return cls ? '' + cls : ''
}).join(' ')

/**
 * Get the domain name from a URL
 */
export const domain = (url) => {
    return url
        .replace(/https?:\/\//, '')
        .replace(/\/.+/, '')
}

/**
 * Get a favicon for a URL
 */
export const favicon = async (url) => {
    const data = await fetch(`https://favicongrabber.com/api/grab/${domain(url)}`).then(res => res.json())
    if (data.icons) {
        return data.icons[data.icons.length - 1].src
    }
    return null
}

/**
 * Load from storage
 */
export const load = (key) => {
    return JSON.parse(localStorage.getItem(key) || 'null')
}

/**
 * Save to storage
 */
export const save = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data))
}

/**
 * Generate random shortcode
 */
export const shortcode = (length = 8) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    return Array(length)
        .fill(0)
        .map(n => chars.charAt(Math.floor(Math.random() * chars.length)))
        .join('')
}

/**
 * Find an element in the array
 */
export const find = (arr, callback) => {
    const filtered = arr.filter(callback)
    return filtered.length > 0 ? filtered[0] : null
}

/**
 * Check if favicon exists (no 404)
 */
export const checkFavicon = async (url) => {
    try {
        await fetch(url)
    } catch {
        return false
    }
    return true
}