export const getGift = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=3eKnDWZOljZX4Z5Z4DRES0dxtzOl0xo8&q=${ encodeURI(category) }`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gift = data.map( imgGift => {
        return {
            id : imgGift.id,
            title : imgGift.title,
            url : imgGift.images?.downsized_medium.url,
        }
    })

    return gift;
}