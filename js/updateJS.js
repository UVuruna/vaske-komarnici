export async function updateJS(modules, version) {
    let loadedModules = {}

    for (const mod of modules) {
        const module = await import(`./${mod}.js?v=${version}`)
        loadedModules[mod] = module
    }
    console.log(`Updated ${modules} to ${version}`)
    return loadedModules
}
