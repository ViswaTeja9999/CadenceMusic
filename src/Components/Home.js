import React from 'react';
import "../CSS/Home.css";
import ListenedRecently from './ListenedRecently';
import MightLike from './MightLike';
import RecentlyAdded from './RecentlyAdded';
import ReleasedThisWeek from './ReleasedThisWeek';

function Home() {
    return (
        <div className="uicontainer1">
           <div className="pageheading">
           <h2>Home</h2>
           </div>
         <div className="container100">
                <ListenedRecently rowtitle={"Listened Recently"}/>
                <RecentlyAdded rowtitle={"Recently Added"}/>
                <MightLike rowtitle={"You Might Like"}/>
                <ReleasedThisWeek rowtitle={"Released This Week"}/>
        </div>
        </div>
    )
}

export default Home
