import { useEffect, useState } from "react";

// function artificialTimeout(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export function useImage(fileName) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        /*  Limitations for dynamic import, needs to follow.
            https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations  
        */
        const fetchImage = await import(`../assets/front-${fileName}.png`);
        setImage(fetchImage.default);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getImage();
  }, [fileName]);

  return { image, loading, error };
}
