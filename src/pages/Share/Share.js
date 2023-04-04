import './Share.scss'
import close from '../../assets/icons/windowClose.png'
import ig from '../../assets/icons/ig.png'
import fb from '../../assets/icons/fb.png'
import tiktok from '../../assets/icons/tiktok.png'
import shareLink from '../../assets/icons/linksss.png'
import albumArt from '../../assets/images/callherdaddy.png'

const Share = ({ shareModal, setShareModal }) => {

    // open share
    const closeShare = () => {
        console.log('click');
        setShareModal(false)
    }

    return (
        <div className='share' style={{ display: shareModal ? 'block' : 'none' }}>
            <header className='share__header'>
                <img className='share__btn' onClick={closeShare} src={close} alt='close button' />
                <h3 className='share__title'>Share</h3>
            </header>

            <main className='share__main'>
                <div className='share__wrapper'>
                    <button className='share__edit'>Edit</button>
                    <div className='share__box'>
                        <img className='share__art' src={albumArt} alt='cover art' />
                        <h5 className='share__title'>Getting Over a Cheater</h5>
                        <p className='share__descrip'>Call her daddy</p>
                    </div>
                    <div className='share__from'>
                        <h6 className='share__text'>Share from <span className='share__time'>00:15</span></h6>
                    </div>
                </div>
            </main>

            <section className='share__icons'>
                <div className='share__share'>
                    <div className='share__social-wrapper'>
                        <img className='share__social share__caption-link' src={shareLink} alt='social icon' />
                        <h6 className='share__caption '>Copy Link</h6>

                    </div>
                    <div className='share__social-wrapper'>
                        <img className='share__social' src={ig} alt='social icon' />
                        <h6 className='share__caption share__caption--ig'>Stories</h6>
                    </div>

                    <div className='share__social-wrapper'>
                        <img className='share__social' src={fb} alt='social icon' />
                        <h6 className='share__caption'>Feed</h6>

                    </div>

                    <div className='share__social-wrapper'>
                        <img className='share__social' src={tiktok} alt='social icon' />
                        <h6 className='share__caption'>Feed</h6>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Share