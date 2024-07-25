import { useEffect,useState } from "react";
const MyWorks = () => {


    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    const fetchData = async ()=>{
        try{
            const response=await fetch("/data.json");
            if(!response.ok){
                throw new Error(`Nie udało sie wczytać dancych ${response.status}`)
            }
            const jsonData=await response.json();
            setData(jsonData);
        }catch(error){
            setError(error.message);
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    if(loading){
        return <div>Loading ...</div>;
    }
    if(error){
        return <div>Error: {error}</div>;
    }
    return ( 
        <div className="works-bg d-flex align-items-center justify-content-center">
            <div className="works-wrapper d-flex flex-column">
                <div className="works-header mb-2 d-flex justify-content-between">
                    <div className="w-header-title">My Works</div>
                    <div className="w-header-all">See All</div>
                </div>
                <div className="works-examples">
                     {data.map((item,index)=>(
                        <div className="works-example d-flex flex-column" key={index}>
                        <img className="w-example-photo" src={`/${item.img_src}`} alt="cos" />
                        <div className="w-example-title">{item.description}</div>
                        <div className="w-example-line"></div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>

     );
}
 
export default MyWorks;