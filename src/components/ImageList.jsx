import Masonry from "react-masonry-component"

import "../styles/ImageList.css"
export const ImageList = (props) => {
    const images = props.images.map((image) => {
        return (
            <a href={image.pageURL}
                key={image.id} target='_blank'
                rel='noopener noreferrer'
                className="ui medium image">
                    <img src={image.webformatURL} alt={image.tags} />
            </a>
        )
    })
    return (
        <div>
            <Masonry className="image-list">
                {images}
            </Masonry>
        </div>
    )
}