<<<<<<< HEAD
import React,{useState,useEffect} from 'react'
import ContentLoader, { Facebook } from "react-content-loader";

const windowsize = () => {

  const [isLoading,setIsLoading] = useState(true);

    const [width,setwidth] = useState(window.innerWidth);
    const [height,setheight] = useState(window.innerHeight);

    const listener = () => {
        setwidth(window.innerWidth);
        setheight(window.innerHeight);
    }

    const fetchData = () => {
      setIsLoading(false);
    }

    const MyFacebookLoader = () => <Facebook />;

    useEffect(() => {
        
      setTimeout(() => {
        fetchData();
      }, 1000);

        window.addEventListener('resize',listener);
        return () => {
            window.removeEventListener("resize", listener);
        };

    },[])

  return (
    <React.Fragment>
      {isLoading ? (
        <MyFacebookLoader />
      ) : (
        <div>
           width: {width} <br/>
            height: {height}
        </div>
      )}
    
    </React.Fragment>
  )
}

export default windowsize
=======
import React,{useState,useEffect} from 'react'
import ContentLoader, { Facebook } from "react-content-loader";

const windowsize = () => {

  const [isLoading,setIsLoading] = useState(true);

    const [width,setwidth] = useState(window.innerWidth);
    const [height,setheight] = useState(window.innerHeight);

    const listener = () => {
        setwidth(window.innerWidth);
        setheight(window.innerHeight);
    }

    const fetchData = () => {
      setIsLoading(false);
    }

    const MyFacebookLoader = () => <Facebook />;

    useEffect(() => {
        
      setTimeout(() => {
        fetchData();
      }, 1000);

        window.addEventListener('resize',listener);
        return () => {
            window.removeEventListener("resize", listener);
        };

    },[])

  return (
    <React.Fragment>
      {isLoading ? (
        <MyFacebookLoader />
      ) : (
        <div>
           width: {width} <br/>
            height: {height}
        </div>
      )}
    
    </React.Fragment>
  )
}

export default windowsize
>>>>>>> 86bc598ddba8a03a060d529601dd0e78d8ec1a30
