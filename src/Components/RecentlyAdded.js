import React from 'react'
import "../CSS/Row.css";
import SongDetails from "./SongDetails";

function RecentlyAdded(props) {
    let rowname=props.rowtitle;
    return (
        <div className="rowcontainer">
            <div className="toptext">
            <h1>{rowname}</h1>
            <button>See All</button>
            </div>
            <div className="songdetails">
            <table>
            <td>
            <SongDetails artworkimage={"https://a10.gaanacdn.com/images/albums/47/3058247/crop_480x480_1613702526_3058247.jpg"}
            albumtitle={"Uppena"}
            artistname={"Devi Sri Prasad"}
            />
            </td>
            <td>
            <SongDetails artworkimage={"https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/ZgWoVV4r32/size_xxl.webp"}
            albumtitle={"Janatha Garage"}
            artistname={"Devi Sri Prasad"}
            />
            </td>
            <td>
            <SongDetails artworkimage={"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(jpg)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1544968378/srch_pplmumbai_IND291813168.jpg"}
            albumtitle={"Maari 2"}
            artistname={"Anirudh RaviChandra"}
            />
            </td>
            <td>
            <SongDetails artworkimage={"https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Shawn_Mendes_and_Camila_Cabello_-_Se%C3%B1orita.png/220px-Shawn_Mendes_and_Camila_Cabello_-_Se%C3%B1orita.png"}
            albumtitle={"Senorita"}
            artistname={"Camila Cabello"}
            />
            </td>
            <td>
            <SongDetails artworkimage={"https://i.pinimg.com/736x/2a/96/df/2a96dfdb00ac3734aa415abd9292699b.jpg"}
            albumtitle={"Pogiren"}
            artistname={"Mugen Rao"}
            />
            </td>
            <td>
            <SongDetails artworkimage={"https://upload.wikimedia.org/wikipedia/en/c/c2/Albumus.jpg"}
            albumtitle={"Backstreet Back"}
            artistname={"Backstreet Boys"}
            />
            </td>
            <td>
            <SongDetails artworkimage={"https://a10.gaanacdn.com/gn_img/albums/R7vKX66Wmr/7vKXaNB63m/size_xxl_1540213139.webp"}
            albumtitle={"Aravindha Sametha"}
            artistname={"Thaman S"}
            />
            </td>
            </table>
            </div>    
        </div>
    )
}

export default RecentlyAdded
