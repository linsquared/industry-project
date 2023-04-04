import './Comments.scss'
import sunglass from '../../assets/emojis/Sunglasses Emoji.png';
import ghost from '../../assets/emojis/ghost.png'
import heart from '../../assets/emojis/heart.png'
import hug from '../../assets/emojis/hug.png'
import hurt from '../../assets/emojis/hurt.png'
import roll from '../../assets/emojis/roll.png'
import sweat from '../../assets/emojis/sweat.png'
import tongue from '../../assets/emojis/tongue.png'
import shock from '../../assets/emojis/shock.png'




const Comments = () => {
    return (
        <main className='comments'>
            <div className='comments__total'>25 comments</div>
            <div className='comments__user'>
                <img className='comments__icon' src='' alt='user icon' />
                <span className='comments__username'>NAME</span>
                <p className='comments__comments'>I SAID WHAT I SAID</p>
            </div>
            <div>
                <img className='comments__love' />
                <img className='comments__dislike' />
            </div>
            <div className='comments__bottom'>
                <img className='comments__emoji' src={ghost} alt='ghost emoji' />
                <img className='comments__emoji' src={heart} alt='heart emoji' />
                <img className='comments__emoji' src={hug} alt='hug emoji' />
                <img className='comments__emoji' src={roll} alt='roll emoji' />
                <img className='comments__emoji' src={shock} alt='shock emoji' />
                <img className='comments__emoji' src={tongue} alt='tongue emoji' />
                <img className='comments__emoji' src={sweat} alt='sweatemoji' />
                <img className='comments__emoji' src={sunglass} alt='sunglassemoji' />
                <img className='comments__emoji' src={hurt} alt=' hurt emoji' />
            </div>
        </main>

    )

}

export default Comments