import { EmojiEmotions, Label, PermMedia, Room} from '@mui/icons-material';
import './share.css'
import Post from '../posts/post';
import { useState } from 'react';
import { Posts } from '../../dumy';
function Share(){
    const [poste,sepost]=useState(Posts)
    return(
        <div className='share'>
            <div className="wrappshare">
                <div className="sharetop">
                    <img src="/images/person/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className="shareimage" />
                <input type="text" placeholder='wat in your mind' className='sharin'/>
                </div>
                <hr className="hrss" />
                <div className="sharebottom">
                    <div className="shareopetaions">
                        <div className="shareopetaion">
                            <PermMedia className='sicon'htmlColor='tomato'/>
                            <span className="otext">photo or video</span>
                        </div>
                        <div className="shareopetaion">
                            <Label className='sicon' htmlColor='blue'/>
                            <span className="otext">Tag</span>
                        </div>
                        <div className="shareopetaion">
                            <Room className='sicon' htmlColor='green'/>
                            <span className="otext">location</span>
                        </div>
                        <div className="shareopetaion">
                            <EmojiEmotions className='sicon' htmlColor='goldenrod'/>
                            <span className="otext">feelings</span>
                        </div>
                    </div>
                    <button className='sharbtn' onClick={(()=>{
                        const x=document.querySelector('.sharin').value;
                        sepost(()=>{Posts.push({id:Math.random()*100,dis:x})});
                        <Post poo={Posts}/>
                        console.log(Posts)
                    })}>share</button>
                </div>
            </div>
        </div>
    )
}
export default Share;