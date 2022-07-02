export const alphabetic = (data, direction) =>
  data.sort((a, b) => {
    const first = a.node.name.toLowerCase()
    const second = b.node.name.toLowerCase()

    const x = direction === "asc" ? first : second
    const y = direction === "asc" ? second : first

    if (x < y) return -1
    if (x > y) return 1
    return 0
  })

export const price = (data, direction) =>
  data.sort((a, b) => {
    const first = a.node.price
    const second = b.node.price

    const x = direction === "asc" ? first : second
    const y = direction === "asc" ? second : first

    if (x < y) return -1
    if (x > y) return 1
    return 0
  })
