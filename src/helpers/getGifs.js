export const getGiFs = async (category) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=xX6xJ8DeWmFcudHBJJnTg8ZOqQjnzn8h&q=${category}&limit=10`;
        const res = await fetch(url);
        const  {data = []} = await res.json();
        return data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium
        }));
    }catch (e) {
        console.log(e);
    }
}