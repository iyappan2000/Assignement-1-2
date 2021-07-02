
import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import MultipleSelect from './MultipleSelect'


function GetAxios() {
    
    const {isLoading , data, error, isSuccess,setOptions} = useQuery("datas",()=>{
        axios.get("https://api.instantwebtools.net/v1/passenger?page=0&size=10").then((response)=>{
            setOptions(response.data.data).catch(error => console.log(error));
        });
    })
    return (
        <div>
            {isSuccess && 
             <MultipleSelect options = {data} setOptions = {setOptions} />
            }
        {isLoading && <p>Loading....</p>}
        {error && <p>error occured</p>}
        </div>
    )
}

export default  GetAxios;
