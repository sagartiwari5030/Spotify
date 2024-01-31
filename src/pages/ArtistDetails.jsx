import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  console.log("artist id =>", artistId)
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

  // if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  // if (error) return <Error />;

  const [data, setData] = useState([]);

  const GetArtistDetailAPI = async () => {
    try {
      const url = "https://academics.newtonschool.co";
      const headers = {
        "Content-Type": "application/json",
        "projectId": "f104bi07c490"
      };

      // Make a POST request to your API endpoint
      const response = await axios.get(`${url}/api/v1/music/artist/:id`, { headers });

      // Do something with the response
      console.log("Data received =>",response.data.data[0]);
      setData(response.data.data);


      // Set loading to false, indicating that the data has been fetched
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setLoading(false);
    }
  };
  
  useEffect(() => {
    // Update the document title using the browser API
   GetArtistDetailAPI()
  },[]);


  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={_id}
        artistData={artistData?.data[0]}
      />

      <RelatedSongs
        data={artistData?.data[0].views['top-songs']?._id}
        artistId={_id}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
