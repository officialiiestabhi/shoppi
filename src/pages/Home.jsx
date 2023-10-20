import Spinner from "../components/Spinner";
import { useState,useEffect } from "react";
import Product from "../components/Product";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setloading]=useState(false);
  const[posts,setPosts]=useState([]);
  async function fetchProductdata(){
    setloading(true);

    try{
      const res=await fetch(API_URL);
      const data=await res.json();
      setPosts(data);

    }catch(error){
      console.log("Jiska intezaar tha wohi hua ,Error aa gaya");
      setPosts([]);
    }
    setloading(false);    
  }

  useEffect(()=>{
    fetchProductdata();
  },[])

  return (
    <div>
      {
        loading ? <Spinner /> :
        posts.length>0 ?
        (<div className="grid xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto space-y-10
        space-x-5">
            {
              posts.map((post)=>(
                <Product key={post.id} post={post} />
              ))
            }
          </div>
        ):<div className="flex justify-center items-center">
          <p>No Post Found</p>
          </div>
      }
    </div>
  );
};

export default Home;
