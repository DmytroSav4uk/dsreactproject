import {getAlbums} from "../../../Services/axios.service";
import Album from "../Album/Album";
import {useEffect, useState} from "react";
import css from "../../CSS/components.module.css"

export default function Albums (){

    let [albums, setAlbums] =useState([])

    useEffect(()=>{

        getAlbums().then(({data}) => setAlbums(data))
    },[])

        return(

            <div className={css.elements}>


                {albums.map(album => <Album key = {album.id} id={album.id}  title={album.title} />)}

            </div>



        )
    }

