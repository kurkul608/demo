
import React from "react";
import { Listmusic } from "./Listmusic";
import "./PlayList.css"



const tracks = [
    {
        "track": 1,
        "name": "All This Is - Joe L.'s Studio",
        "duration": "2:46",
        "file": "JLS_ATI"
    }, {
        "track": 2,
        "name": "The Forsaken - Broadwing Studio (Final Mix)",
        "duration": "8:30",
        "file": "BS_TF"
    }, {
        "track": 3,
        "name": "All The King's Men - Broadwing Studio (Final Mix)",
        "duration": "5:01",
        "file": "BS_ATKM"
    }, {
        "track": 4,
        "name": "The Forsaken - Broadwing Studio (First Mix)",
        "duration": "8:31",
        "file": "BSFM_TF"
    }, {
        "track": 5,
        "name": "All The King's Men - Broadwing Studio (First Mix)",
        "duration": "5:05",
        "file": "BSFM_ATKM"
    }, {
        "track": 6,
        "name": "All This Is - Alternate Cuts",
        "duration": "2:48",
        "file": "AC_ATI"
    }, {
        "track": 7,
        "name": "All The King's Men (Take 1) - Alternate Cuts",
        "duration": "5:44",
        "file": "AC_ATKMTake_1"
    }, {
        "track": 8,
        "name": "All The King's Men (Take 2) - Alternate Cuts",
        "duration": "5:26",
        "file": "AC_ATKMTake_2"
    }, {
        "track": 9,
        "name": "Magus - Alternate Cuts",
        "duration": "5:46",
        "file": "AC_M"
    }, {
        "track": 10,
        "name": "The State Of Wearing Address (fucked up) - Alternate Cuts",
        "duration": "5:25",
        "file": "AC_TSOWAfucked_up"
    }, {
        "track": 11,
        "name": "Magus - Popeye's (New Years '04 - '05)",
        "duration": "5:53",
        "file": "PNY04-05_M"
    }, {
        "track": 12,
        "name": "On The Waterfront - Popeye's (New Years '04 - '05)",
        "duration": "4:40",
        "file": "PNY04-05_OTW"
    }, {
        "track": 13,
        "name": "Trance - Popeye's (New Years '04 - '05)",
        "duration": "13:15",
        "file": "PNY04-05_T"
    }, {
        "track": 14,
        "name": "The Forsaken - Popeye's (New Years '04 - '05)",
        "duration": "8:12",
        "file": "PNY04-05_TF"
    }, {
        "track": 15,
        "name": "The State Of Wearing Address - Popeye's (New Years '04 - '05)",
        "duration": "7:02",
        "file": "PNY04-05_TSOWA"
    }, {
        "track": 16,
        "name": "Magus - Popeye's (Valentine's Day '05)",
        "duration": "5:43",
        "file": "PVD_M"
    }, {
        "track": 17,
        "name": "Trance - Popeye's (Valentine's Day '05)",
        "duration": "10:45",
        "file": "PVD_T"
    }, {
        "track": 18,
        "name": "The State Of Wearing Address - Popeye's (Valentine's Day '05)",
        "duration": "5:36",
        "file": "PVD_TSOWA"
    }, {
        "track": 19,
        "name": "All This Is - Smith St. Basement (01/08/04)",
        "duration": "2:48",
        "file": "SSB01_08_04_ATI"
    }, {
        "track": 20,
        "name": "Magus - Smith St. Basement (01/08/04)",
        "duration": "5:46",
        "file": "SSB01_08_04_M"
    }, {
        "track": 21,
        "name": "Beneath The Painted Eye - Smith St. Basement (06/06/03)",
        "duration": "13:07",
        "file": "SSB06_06_03_BTPE"
    }, {
        "track": 22,
        "name": "Innocence - Smith St. Basement (06/06/03)",
        "duration": "5:16",
        "file": "SSB06_06_03_I"
    }, {
        "track": 23,
        "name": "Magus - Smith St. Basement (06/06/03)",
        "duration": "5:46",
        "file": "SSB06_06_03_M"
    }, {
        "track": 24,
        "name": "Madness Explored - Smith St. Basement (06/06/03)",
        "duration": "4:51",
        "file": "SSB06_06_03_ME"
    }, {
        "track": 25,
        "name": "The Forsaken - Smith St. Basement (06/06/03)",
        "duration": "8:43",
        "file": "SSB06_06_03_TF"
    }, {
        "track": 26,
        "name": "All This Is - Smith St. Basement (12/28/03)",
        "duration": "3:00",
        "file": "SSB12_28_03_ATI"
    }, {
        "track": 27,
        "name": "Magus - Smith St. Basement (12/28/03)",
        "duration": "6:09",
        "file": "SSB12_28_03_M"
    }, {
        "track": 28,
        "name": "Madness Explored - Smith St. Basement (12/28/03)",
        "duration": "5:05",
        "file": "SSB12_28_03_ME"
    }, {
        "track": 29,
        "name": "Trance - Smith St. Basement (12/28/03)",
        "duration": "12:32",
        "file": "SSB12_28_03_T"
    }, {
        "track": 30,
        "name": "The Forsaken - Smith St. Basement (12/28/03)",
        "duration": "8:56",
        "file": "SSB12_28_03_TF"
    }, {
        "track": 31,
        "name": "All This Is (Take 1) - Smith St. Basement (Nov. '03)",
        "duration": "4:55",
        "file": "SSB___11_03_ATITake_1"
    }, {
        "track": 32,
        "name": "All This Is (Take 2) - Smith St. Basement (Nov. '03)",
        "duration": "5:45",
        "file": "SSB___11_03_ATITake_2"
    }, {
        "track": 33,
        "name": "Beneath The Painted Eye (Take 1) - Smith St. Basement (Nov. '03)",
        "duration": "14:05",
        "file": "SSB___11_03_BTPETake_1"
    }, {
        "track": 34,
        "name": "Beneath The Painted Eye (Take 2) - Smith St. Basement (Nov. '03)",
        "duration": "13:25",
        "file": "SSB___11_03_BTPETake_2"
    }, {
        "track": 35,
        "name": "The Forsaken (Take 1) - Smith St. Basement (Nov. '03)",
        "duration": "8:37",
        "file": "SSB___11_03_TFTake_1"
    }, {
        "track": 36,
        "name": "The Forsaken (Take 2) - Smith St. Basement (Nov. '03)",
        "duration": "8:36",
        "file": "SSB___11_03_TFTake_2"
    }]

export const PlayList = () => {



    return (

        <div id="MusicList">
            <div className="main-header anim">Playlist</div>

        <div id="player-track" className="anim">
                    <div id="album-name">Dawn</div>
                    <div id="track-name">Skylike - Dawn</div>
                    <div id="track-time" className="active">
                        <div id="current-time">00:07</div>
                        <div id="track-length">03:09</div>
                    </div>
                    <div id="s-area">
                        <div id="ins-time"></div>
                        <div id="s-hover"></div>
                        <div id="seek-bar" ></div>
                    </div>
                </div>

                <div className="anim" id="player-content">



                    <div  id="album-art">
                        <img  id="_1" src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg" alt=""/>
                        <img className="active" id="_2" src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_2.jpg" alt=""/>
                        <img   id="_3" src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_3.jpg" alt=""/>
                        <img  id="_4" src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_4.jpg" alt=""/>
                        <img  id="_5" src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_5.jpg" alt=""/>
                    </div>

            
            
                <div id="player-controls">
                <button type="button" className="prev" aria-label="Previous"><svg width="28" height="16" viewBox="0 0 28 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.875 0C1.10706 0 1.32962 0.0921874 1.49372 0.256282C1.65781 0.420376 1.75 0.642936 1.75 0.875V6.559L12.7173 0.196C13.6273 -0.3325 14.875 0.27125 14.875 1.414V6.559L25.8423 0.196C26.7523 -0.3325 28 0.27125 28 1.414V14.336C28 15.4788 26.7523 16.0825 25.8423 15.554L14.875 9.191V14.336C14.875 15.4788 13.6273 16.0825 12.7173 15.554L1.75 9.191V14.875C1.75 15.1071 1.65781 15.3296 1.49372 15.4937C1.32962 15.6578 1.10706 15.75 0.875 15.75C0.642936 15.75 0.420376 15.6578 0.256282 15.4937C0.0921873 15.3296 0 15.1071 0 14.875V0.875C0 0.642936 0.0921873 0.420376 0.256282 0.256282C0.420376 0.0921874 0.642936 0 0.875 0V0ZM13.125 1.98275L2.968 7.875L13.125 13.7672V1.98275ZM26.25 1.98275L16.093 7.875L26.25 13.7672V1.98275Z" fill="#fff"></path></svg></button>
                <button type="button" className="play" aria-label="Play"><svg width="14" height="16" viewBox="0 0 14 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.907 7.99997L1.75 2.10772V13.8922L11.907 7.99997ZM13.293 6.78197C13.5076 6.90481 13.6858 7.08214 13.8098 7.29602C13.9339 7.5099 13.9992 7.75275 13.9992 7.99997C13.9992 8.2472 13.9339 8.49004 13.8098 8.70392C13.6858 8.9178 13.5076 9.09514 13.293 9.21797L2.15775 15.679C1.24775 16.2075 0 15.6037 0 14.461V1.53897C0 0.396223 1.24775 -0.207528 2.15775 0.320972L13.293 6.78197Z" fill="#fff"></path></svg></button>
                <button type="button" className="next" aria-label="Next"><svg width="28" height="16" viewBox="0 0 28 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.125 0C27.3571 0 27.5796 0.0921874 27.7437 0.256282C27.9078 0.420376 28 0.642936 28 0.875V14.875C28 15.1071 27.9078 15.3296 27.7437 15.4937C27.5796 15.6578 27.3571 15.75 27.125 15.75C26.8929 15.75 26.6704 15.6578 26.5063 15.4937C26.3422 15.3296 26.25 15.1071 26.25 14.875V9.191L15.2827 15.554C14.3727 16.0825 13.125 15.4788 13.125 14.336V9.191L2.15775 15.554C1.24775 16.0825 0 15.4788 0 14.336V1.414C0 0.27125 1.24775 -0.3325 2.15775 0.196L13.125 6.559V1.414C13.125 0.27125 14.3727 -0.3325 15.2827 0.196L26.25 6.559V0.875C26.25 0.642936 26.3422 0.420376 26.5063 0.256282C26.6704 0.0921874 26.8929 0 27.125 0V0ZM1.75 1.98275V13.7672L11.907 7.875L1.75 1.98275ZM14.875 1.98275V13.7672L25.032 7.875L14.875 1.98275Z" fill="#fff"></path></svg></button>
                </div>
            </div>





                                <ul id="plList">
                                    {tracks.map((CurrentValue) => {
                                        return <Listmusic data={CurrentValue} />;
                                    })}

                                </ul>
        </div>


    )
}
