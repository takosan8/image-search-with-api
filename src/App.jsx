import axios from 'axios';
import { useState } from 'react';
import { ImageList } from './components/ImageList';
import { SearchBar } from './components/SearchBar';
function App() {
  const [images,setImages] = useState([]);
  const ApiKey = process.env.REACT_APP_PIXABAY_APIKEY;
  const onSearchSubmit = async (term) => {
    try {
      const params = {
        key: ApiKey,
        q: term,
      };
      const response = await axios.get('https://pixabay.com/api/', { params });
      setImages(response.data.hits);
      if(response.data.total === 0){
        alert('No image has found.');
      }
    }
    catch {
      alert('Faild to get images.')
    }
  }
  return (
    <div className="App ui container" style={{ marginTop: "20px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
