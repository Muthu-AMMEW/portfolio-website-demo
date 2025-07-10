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
            {/* <!-- footer section starts --> */}
            <section class="footer p-3 p-lg-4">

                <div class="box-container d-flex justify-content-between flex-wrap row-gap-3">
                    <div class="box text-white">
                        <h3>Contact Info</h3>
                        <p> <i class="fas fa-phone"></i>+91 80724 99102</p>
                        <p> <a href="mailto:muthu.ammew333@gmail.com" target="_blank"><i class="fas fa-envelope"></i>
                            muthu.ammew333@gmail.com</a></p>
                        <p> <i class="fas fa-map-marked-alt"></i>Tamil Nadu, India</p>
                        <div class="share">

                            <a href="https://www.linkedin.com/in/muthu-ammew" class="fab fa-linkedin" target="_blank"></a>
                            <a href="https://github.com/Muthu-AMMEW" class="fab fa-github" target="_blank"></a>
                            <a href="mailto:muthu.ammew333@gmail.com" class="fas fa-envelope" target="_blank"></a>
                            <a href="https://x.com/Muthu_AMMEW" class="fab fa-twitter" target="_blank"></a>
                            <a href="https://t.me/Muthu_AMMEW" class="fab fa-telegram-plane" target="_blank"></a>
                        </div>
                    </div>

                    <div class="box text-white">
                        <h3>Quick Links</h3>
                        <a href="#home"><i class="fas fa-chevron-circle-right"></i> Home</a>
                        <a href="#about"><i class="fas fa-chevron-circle-right"></i> About</a>
                        <a href="#skills"><i class="fas fa-chevron-circle-right"></i> Skills</a>
                        <a href="#experience"><i class="fas fa-chevron-circle-right"></i> Experience</a>
                        <a href="#work"><i class="fas fa-chevron-circle-right"></i> Work</a>
                        <a href="#education"><i class="fas fa-chevron-circle-right"></i> Education</a>
                    </div>

                    <div class="box text-white">
                        <h3>Portfolio</h3>
                        <div className='d-flex flex-column justify-content-around'>
                            <p>Thank you for visiting my personal portfolio website.</p>
                            <img src="/images/play-store.webp" className='install-button mb-2' onClick={handleClick} alt="Play Store App" title={titleName} width="160" height="50" />
                            <img src="/images/app-store.webp" className='install-button' onClick={handleClick} alt="App Store App" title={titleName} width="160" height="50" />
                        </div>
                    </div>

                </div>
                <hr />
                <div>
                    <p className="mb-0 text-white">By continuing past this page, you agree to our Terms of Service, Cookie Policy,
                        Privacy Policy and Content Policies. All trademarks are properties of their respective owners.
                        2008-2025 © Portfolio™ Ltd. All rights reserved. <a href="https://www.linkedin.com/in/muthu-ammew" className="text-white text-decoration-none">Designed by <span className="badge text-bg-success author">Muthu</span></a>
                    </p>
                </div>

            </section>
            {/* <!-- footer section ends --> */}
        </>
    )
}
