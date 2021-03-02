import React,{useState,useRef, useEffect} from 'react'
import "../CSS/Player.css"
import DehazeIcon from '@material-ui/icons/Dehaze';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import Grid from '@material-ui/core/Grid';
import VolumeDown from '@material-ui/icons/VolumeDown';
import Button from '@material-ui/core/Button';
import VolumeUp from '@material-ui/icons/VolumeUp';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import { orange } from '@material-ui/core/colors';
import Slider from "@material-ui/core/Slider";
import ControlsToggleButton from "./ControlsToggleButton";
import one from "../Assets/one.mp3";



function valuetext(volumevalue) {
  return `${volumevalue}`;
}

function Player() {
  const audioElement = useRef();
  const [isPrevClicked, setPrevClicked] = useState(false);
  const [isNextClicked, setNextClicked] = useState(false);
  const [isPlaying, setPlayPauseClicked] = useState(false);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currTime, setCurrTime] = useState(0);
  const [isliked, setIsLiked]=useState(false);
  const [isRepeatClicked, setRepeatClick] = useState(false);
  const handleToggle = (type,val)=>{
    switch(type){
      case "repeat":
                setRepeatClick(val);
                break;
            case "prev":
                setPrevClicked(val);
                break;
            case "play-pause":
                setPlayPauseClicked(val);
                break;
            case "next":
                setNextClicked(val);
                break;
            case "liked":
                 setIsLiked(val);
                 break;
            default:
                break;
    }
  }

  const handleSeekChange = (event, newValue) => {
    audioElement.current.currentTime =(newValue*duration)/100;
    setSeekTime(newValue)
};

  useEffect(() => {
    isPlaying
        ? audioElement.current.play(): audioElement.current.pause();
    audioElement.current.loop = isRepeatClicked;
    audioElement.current.onloadeddata = () => {
        if (audioElement.current !== null)
            setDuration(audioElement.current.duration)
    };
    setInterval(() => {
        if (audioElement.current !== null)
            setCurrTime(audioElement.current.currentTime);
    })
});
useEffect(() => {
  setSeekTime((currTime) / (duration / 100))
}, [currTime, duration]);

function formatTime(secs) {
  const t = new Date(1970, 0, 1);
  t.setSeconds(secs);
  let s = t.toTimeString().substr(0, 8);
  return s.substring(3);
}

useEffect(()=>{
  audioElement.current.onended = ()=> {
      setNextClicked(true);
  };
})

  const [volume, setVolume] = useState(50);
  const handleVolumeChange = (event, newValue) => {
    audioElement.current.volume =(newValue)/100;
    setVolume(newValue)
};

    return (
        <div className="playercontainer">
          <div className="topicons">
            <Button ><DehazeIcon style={{ color: orange[500] }}/></Button>
            <ControlsToggleButton  
           type={"liked"} 
           defaultIcon={<FavoriteBorderIcon style={{ color: orange[500] }} />} 
           changeIcon={<FavoriteIcon style={{ color: orange[500] }} />} 
           onClicked={handleToggle} />
          </div>
          <div className="artworkcontainer">
            <img src="https://a10.gaanacdn.com/images/albums/47/3058247/crop_480x480_1613702526_3058247.jpg" alt="albumartwork"></img>
          </div>
          <div className="albumtitle">
           <h1>Nee Kannu Neeli Samudhram</h1>
           <h1>Devi Sri Prasad</h1>
           <h1>Uppena</h1>
          </div>

          <div className="seektime">
            <div>
           <p>{formatTime(currTime)}</p>
           </div>
           <div>
           <p>{formatTime(duration)}</p>
           </div>
          </div>

          <div className="seekbar">
          <Slider value={seekTime} onChange={handleSeekChange} style={{ color: orange[500] }}/>
          </div>

          <div className="contronbtns">
           <Button><SkipPreviousIcon type={"prev"} fontSize="large" style={{ color: orange[500] }}/></Button>
           <ControlsToggleButton 
           className="audio"  
           type={"play-pause"} 
           defaultIcon={<PlayArrowIcon style={{ color: orange[500] }} fontSize={"large"}/>} 
           changeIcon={<PauseIcon style={{ color: orange[500] }} fontSize={"large"}/>} 
           onClicked={handleToggle} />
           <audio ref={audioElement} src={one} type="audio/mpeg"/>
            <Button><SkipNextIcon type={"next"} fontSize="large" style={{ color: orange[500] }}/></Button>
          </div>

          <div className="bottomicons">
          <ControlsToggleButton type={"repeat"}
            defaultIcon={<RepeatIcon  style={{ color: orange[500] }} />}
            changeIcon={<RepeatOneIcon style={{ color: orange[500] }}/>}
            onClicked={handleToggle}/>
           <Button><AllInclusiveIcon style={{ color: orange[500] }}/></Button>
           <Button><ShuffleIcon style={{ color: orange[500] }}/></Button>
          </div>

          <div className="volumecontrol">
          <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
        <div className="volumebar">
        <Slider 
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
         value={volume} 
         onChange={handleVolumeChange}
        style={{ color: orange[500] }}/>
          </div>
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
      </div>
        </div>
    )
}

export default Player
