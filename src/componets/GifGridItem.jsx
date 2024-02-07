export const GifGridItem = ({title,url,id}) => {
    return (
        <div className='card'>
            <img src={ url.url } alt={title}/>
            <p>{title}</p>
        </div>
    )
}