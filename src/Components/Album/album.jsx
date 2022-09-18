import './album.css';

import Photo1 from '../../Images/photo 1.jpg';
import Photo2 from '../../Images/photo 2.jpg';
import Photo3 from '../../Images/photo 3.jpg';
import Photo4 from '../../Images/photo 4.jpg';
import Photo5 from '../../Images/photo 5.jpg';
import Photo6 from '../../Images/photo 6.jpg';
import Photo7 from '../../Images/photo 7.jpg';
import Photo8 from '../../Images/photo 8.jpg';
import Photo9 from '../../Images/photo 9.jpg';
import Photo10 from '../../Images/photo 10.jpg';
import Photo11 from '../../Images/photo 11.jpg';
import Photo12 from '../../Images/photo 12.jpg';
import Photo13 from '../../Images/photo 13.jpg';
import Photo14 from '../../Images/photo 14.jpg';
import Photo15 from '../../Images/photo 15.jpg';
import Photo16 from '../../Images/photo 16.jpg';
import Photo17 from '../../Images/photo 17.jpg';
import Photo18 from '../../Images/photo 18.jpg';
import Photo19 from '../../Images/photo 19.jpg';
import Photo20 from '../../Images/photo 20.jpg';
import Photo21 from '../../Images/photo 21.jpg';
import React,{useState} from 'react';
const Album = () => {
    let data=[
        {
            id:1,
            imgSrc:Photo1,

        },
        {
            id:2,
            imgSrc:Photo2,

        },
        {
            id:3,
            imgSrc:Photo3,

        },
        {
            id:4,
            imgSrc:Photo4,

        },
        {
            id:5,
            imgSrc:Photo5,

        },
        {
            id:6,
            imgSrc:Photo6,

        },
        {
            id:7,
            imgSrc:Photo7,

        },
        {
            id:8,
            imgSrc:Photo8,

        },
        {
            id:9,
            imgSrc:Photo9,

        },
        {
            id:10,
            imgSrc:Photo10,

        },
        {
            id:11,
            imgSrc:Photo11,

        },
        {
            id:12,
            imgSrc:Photo12,

        },
        {
            id:13,
            imgSrc:Photo13,

        },
        {
            id:14,
            imgSrc:Photo14,

        },
        {
            id:15,
            imgSrc:Photo15,

        },
        {
            id:16,
            imgSrc:Photo16,

        },
        {
            id:17,
            imgSrc:Photo17,

        },
        {
            id:18,
            imgSrc:Photo18,

        },
        {
            id:19,
            imgSrc:Photo19,

        },
        {
            id:20,
            imgSrc:Photo20,

        },
        {
            id:21,
            imgSrc:Photo21,

        },
    ]
    
    const [model,setModel] = useState(false);
    const[tempImg, setTempImg] = useState('');
    const getImg=(imgSrc)=>{
        setTempImg(imgSrc);
        setModel(true);

    }

    return (
       <>
       <div className={model? "model open":"model"}>
            <img src={tempImg}></img>
            <button className='btn' onClick={()=>{setModel(false)}}>Close</button>
       </div>
        <div className='gallery'>
            {data.map((item,index)=>{
                return(
                    <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc}></img>
                    </div>

                )

            })}
        </div>
       </>
    )

}

export default Album;