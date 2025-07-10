import { Link } from 'react-router-dom';
import usePWAInstallPrompt from '../../utils/usePWAInstallPrompt';
export default function Foot() {
    const { isStandalone, canInstall, cannotInstall, promptInstall } = usePWAInstallPrompt();

    const handleClick = async () => {
        if (isStandalone) {
            const goToBrowser = window.confirm(
                'You are already using the installed app. Open in browser?'
            );
            if (goToBrowser) {
                window.open(window.location.origin, '_blank');
            }
        } else if (canInstall) {
            await promptInstall();
        } else if (cannotInstall) {
            alert(
                'This app could not install on your device.'
            );
        } else {
            alert('This app is already installed.');
        }
    };

    const titleName = isStandalone
        ? 'Already Installed'
        : canInstall
            ? 'Install App'
            : cannotInstall
                ? 'Cannot as Install'
                : 'Open App';

    return (
        <>
            <footer className="container-fluid bg-body-tertiary p-2 p-sm-5 pb-1 mm-navbg">
                <div className="row">

                    <div className="col-6 col-md d-flex flex-column mb-2 justify-content-around">
                        <h5>Social Networks</h5>
                        <div>
                            <Link to={"https://www.facebook.com/Muthu.AMMEW"}><i className="fa-brands fa-facebook fa-beat fa-2xl py-3 me-2 bg-white rounded-5" style={{ color: "#2568ef" }}></i></Link>
                            <Link to={"https://x.com/Muthu_AMMEW"}><i className="fa-brands fa-square-x-twitter fa-shake fa-2xl py-3 me-2 bg-white rounded-5"></i></Link>
                            <Link to={"https://www.instagram.com/muthu.ammew"}><i className="fa-brands fa-square-instagram fa-beat-fade fa-2xl py-3 me-2 bg-white rounded-5" style={{ color: "#ff7b00" }}></i></Link>
                            <Link to={"https://www.linkedin.com/in/muthu-ammew"}><i className="fa-brands fa-linkedin fa-bounce fa-2xl py-3 me-2 bg-white rounded-5" style={{ color: "#0075d5" }}></i></Link>
                        </div>
                        <img src="/images/play-store.webp" className='install-button' onClick={handleClick} alt="Play Store App" title={titleName} width="160" height="50" />
                        <img src="/images/app-store.webp" className='install-button' onClick={handleClick} alt="App Store App" title={titleName} width="160" height="50" />
                    </div>
                    <div className="col-6 col-md d-flex flex-column mb-2">
                        <h5>About Portfolio</h5>
                        <div>
                            <a href="javascript:void(0)">Who We Are</a><br />
                            <a href="javascript:void(0)">Blog</a><br />
                            <a href="javascript:void(0)">Work With Us</a><br />
                            <a href="javascript:void(0)">Investor Relations</a><br />
                            <a href="javascript:void(0)">Report Fraud</a><br />
                            <a href="javascript:void(0)">Press Kit</a><br />
                            <a href="https://wa.me/918072499102?text=Hi" target="_blank" rel="noreferrer">Contact Us</a><br />
                        </div>
                    </div>
                    <div className="col-6 col-md d-flex flex-column mb-2">
                        <h5>For Portfolio</h5>
                        <div>
                            <a href="javascript:void(0)">Partner With Us</a><br />
                            <a href="javascript:void(0)">Apps For You</a><br />
                        </div>
                    </div>
                    <div className="col-6 col-md d-flex flex-column mb-2">
                        <h5>Learn More</h5>
                        <div>
                            <a href="javascript:void(0)">Privacy</a><br />
                            <a href="javascript:void(0)">Security</a><br />
                            <a href="javascript:void(0)">Terms</a><br />
                        </div>
                    </div>


                </div>
                <hr />
                <div>
                    <p className="mb-0">By continuing past this page, you agree to our Terms of Service, Cookie Policy,
                        Privacy Policy and Content Policies. All trademarks are properties of their respective owners.
                        2008-2025 © Portfolio™ Ltd. All rights reserved.<a href="https://www.linkedin.com/in/muthu-ammew" className="text-black text-decoration-none">Designed by <span className="badge text-bg-success author">Muthu</span></a>
                    </p>
                </div>

            </footer>
        </>
    )
}
