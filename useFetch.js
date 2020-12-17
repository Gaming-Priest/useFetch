import React, { useState, useEffect } from 'react'

export const useFetch = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [data, setData] = useState([]);
   try {
      const getData = async () => {
         const response = await fetch(url);
         const data = await response.json();
         setData(data);
         setIsLoading(false);
      }
   }
   catch (error) { alert('Request Time out.. Check your connection') }
   useEffect(() => {
      getData()
   }, [url]);
   return { isLoading, data }
}
