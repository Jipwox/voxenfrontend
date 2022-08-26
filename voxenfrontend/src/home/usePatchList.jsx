import { useEffect, useState } from 'react';
import { axios } from 'axios';

function usePatchList() {
    const [patches, setPatches] = useState([]);

    const getPatches = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/products/");
          setPatches(response.data);
        } catch (error) {
          console.log(error);
        }
    };

    useEffect(() => {
        getPatches();
        console.log(patches);
      });

    return {
        patches: patches
    };
}

export default usePatchList;