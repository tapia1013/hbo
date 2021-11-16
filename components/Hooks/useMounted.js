// we use this hook because nextjs is trying to compare login page and its not matching so we have to create this hook
import { useEffect, useState } from "react";



// checks if component has mounted or not
export const useMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, [])

  return { hasMounted }
}




