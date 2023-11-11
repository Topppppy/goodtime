const APIController = (function(){

  const clientid = '1a9fe9f1a0fe46c59e704483e305cb7f';
  const clientSecret = 'fe7b542e792540b796fd16239920bd1';
  
  const_getToken = async () => {
    const result = await fetch ('https://account.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic' + btoa(clientid + ':' + clientSecret )
      },
      body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
  }
  const _getGenres = async (token) => {
    const result = await fetch('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
       method: 'GET',
       headers:{'Authorization' : 'Bearer' + token}
    });
    const data = await result.json();
    return data.categories.items;
  }

  const _getPlaylistByGenre = async (token,genreld) =>{
    const limit = 10;
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreid}/playlist?limit=${limit}`,
    
    method
   

    
)}

})
();
