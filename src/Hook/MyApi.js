import React from 'react';
import useDataContext from './useDataContext';
import CardItem from '../components/CardItem'; // Import CardItem component

const MyApi = ({productAmount}) => {
  const { data, loading, error } = useDataContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid  max-w-screen-xl mx-auto grid-cols-4 pb-20 px-5 gap-x-10 place-content-center max-lg:grid-cols-1 max-lg:hover:scale-105 max-lg:px-20 max-md:px-4  ">
      {/* Map over the data and render each item as a CardItem component */}
      {data.slice(0, productAmount?productAmount:data.length).map(item => (
        <CardItem 
          key={item._id}
          src={item.image_url}
          text={item.Tagline}
          location={item.location}
          path={`/services/${item._id}`} // Assuming you want to use the item id in the path
        ></CardItem>
      ))}
    </div>
  );
};

export default MyApi;
