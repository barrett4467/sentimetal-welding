const size = {
    xs: "0px",
    sm: "516px",
    lg:"892px",
    xl: "1200px"
}

const device = {
    xs: `(min-width: ${size.xs})`,
    sm:`(min-width: ${size.sm})`,
    lg:`(min-width: ${size.lg})`,
    xl:`(min-width: ${size.xl})`
}

export default {size, device};