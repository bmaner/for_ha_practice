import React, {useState} from "react";
import datas from "../datas";

function Gallery(){

    const [selected, setSelected]=useState(datas[0].picture);
    const [selectedName, setSelectedName]=useState(datas[0].name);

    return(
        <section className="container">
            <div className="image_container">
                {datas.map((data, index)=>{
                    return <img key={index} src={data.picture} alt={data.name} onClick={()=>{
                        setSelected(data.picture)
                        setSelectedName(data.name)
                    }}/> 
                })}
            </div>
            <h1>{selectedName}</h1>
            <img src={selected} alt="selectedPicture" className="selected"/>
        </section>
    );
};

export default Gallery;