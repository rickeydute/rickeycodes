export const imageContentRowFragment = `
    fragment ImageContentRowFields on ImageContentRow {
        id
        internalName
        headingElement
        headingAlign
        headingHeader
        body {
            html
        }
        image {
            url
            width
            height
        }
        roundImage
        imagePosition
        imageWidth
        ctaLabel
        ctaHref
        ctaAlignment
        ctaSize
        ctaVariant
    }
`