const apiKey = 'nOrYXyJ9tS3fJx84zMVqkRFI0ylncirl';

export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=2`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    // const gifs = data.map( images => {
    //     console.log(images);
    //     console.log(images.id);
    //     console.log(images.title);
    //     console.log(images.images.downsized_medium.url);
    // })
    const gifs = data.map( ( { id, title, images } ) => ({
        id, title, url: images.downsized_medium
    }) );

    console.log( gifs );
    return gifs;
}