import {  useState,useEffect } from "react";
import React  from "react";
import DataContext from "./Context";


const DataProvider = ({children})=> {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://e-com-backend-neon.vercel.app/api/get_all_destinations');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                  }
                  const jsonData = await response.json();
                  setData(jsonData);
                  setLoading(false);
                  
                
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
      fetchData()
    
      }, []);
      return(
        <DataContext.Provider value={{data,loading,error}}>
            {children}
        </DataContext.Provider>
      )

}
export default DataProvider