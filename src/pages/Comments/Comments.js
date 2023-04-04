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
import like from '../../assets/icons/comments_like.png'
import dislike from '../../assets/icons/comments_dislike.png'
import close from '../../assets/icons/close.png'


const Comments = () => {
    return (
        <main className='comments'>
            <div className='comments__under'>
                <div className='comments__header'>
                    <div className='comments__count'>
                        <div className='comments__num'>25</div>
                        <div className='comments__total'>comments</div>
                    </div>
                    <div className='comments__close'>
                        <img className='comments__thumbs' src={close} alt='close icon' />
                    </div>
                </div>
                <div className='comments__user'>
                    <div className='comments__userIcon'><img className='comments__icon' src='' alt='user icon' /></div>
                    <div className='comments__info'>
                        <span className='comments__username'>Name</span>
                        <p className='comments__comments'>I said what I said
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                            In hac habitasse platea dictumst.
                            Nullam dictum felis eu pede mollis pretium.
                            Mauris viverra, urna eget lobortis vehicula, sapien dolor cursus lectus, eget condimentum velit velit id velit.
                            Aenean ultricies mi vitae est.
                            Cras sagittis nulla sit amet feugiat posuere.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Suspendisse potenti.
                            Donec venenatis vulputate lorem.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                            In hac habitasse platea dictumst.
                            Nullam dictum felis eu pede mollis pretium.
                            Mauris viverra, urna eget lobortis vehicula, sapien dolor cursus lectus, eget condimentum velit velit id velit.
                            Aenean ultricies mi vitae est.
                            Cras sagittis nulla sit amet feugiat posuere.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Suspendisse potenti.
                            Donec venenatis vulputate lorem.</p>
                    </div>
                </div>
                <div className='comments__actions'>
                    <img className='comments__like comments__thumbs' src={like} alt='like icon' />
                    <img className='comments__dislike comments__thumbs' src={dislike} alt='dislike icon' />
                </div>
            </div>

            <div className='comments__bottom'>
                <div className='comments__emoji-wrapper'>
                    <img className='comments__emoji' src={ghost} alt='ghost emoji' />
                    <img className='comments__emoji' src={heart} alt='heart emoji' />
                    <img className='comments__emoji' src={hug} alt='hug emoji' />
                    <img className='comments__emoji' src={roll} alt='roll emoji' />
                    <img className='comments__emoji' src={shock} alt='shock emoji' />
                    <img className='comments__emoji' src={tongue} alt='tongue emoji' />
                    <img className='comments__emoji' src={sweat} alt='sweatemoji' />
                    {/* <img className='comments__emoji' src={sunglass} alt='sunglassemoji' />
                <img className='comments__emoji' src={hurt} alt=' hurt emoji' /> */}
                </div>

                <div className='comments__text-wrapper'>
                    <div className='comments__commenter comments__userIcon'>
                        <img src='' alt='commenter icon' />
                    </div>
                    <form className='comments__text'>
                        <textarea
                            className='comments__textarea'
                            placeholder='Add a comment...'
                        ></textarea>
                    </form>
                </div>
            </div>

        </main>

    )

}

export default Comments