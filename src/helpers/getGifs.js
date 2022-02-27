 export const getGifs = async (category) => {
     const url = `http://api.giphy.com/v1/gifs/search?q=${category}&limit=12&api_key=MWugoPBNDHXyK6O7esLbzdWyvK3HBqrj`;
     const res = await fetch(url);
     const {data} = await res.json();
     const gifs = data.map(img => {
         return {
             id: img.id,
             title: img.title,
             url: img.images ?.downsized_medium.url
         }
     })

     return gifs;
 }