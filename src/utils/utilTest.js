export const createWrapper = (origin,node) => {
    return origin.findAll(`[data-input = ${node}]`)
}