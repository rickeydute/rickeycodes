export const heroImageFragment = `
    fragment HeroImageFields on HeroImage {
        id
        internalName
        title
        subtitle
        body {
            html
        }
        image {
            url
            width
            height
        }
        align
        fullHeight
        showOverlay
        ctaLabel
        ctaHref
        ctaSize
        ctaVariant
    }
`