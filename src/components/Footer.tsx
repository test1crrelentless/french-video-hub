import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full border-t border-white/[0.06] bg-black/60 backdrop-blur py-14 text-white/60">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

                    <div className="flex flex-col gap-4">
                        <h3 className="font-display text-base font-semibold text-white/90 tracking-wide">Partners</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li><a href="#" className="hover:text-rose-400 transition-colors">All our Partners</a></li>
                            <li><a href="#" className="hover:text-rose-400 transition-colors">Free Porn Site</a></li>
                            <li><a href="#" className="hover:text-rose-400 transition-colors">ThePornMap</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-display text-base font-semibold text-white/90 tracking-wide">Privacy</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link to="/privacy" className="hover:text-rose-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-rose-400 transition-colors">Terms of Service</Link></li>
                            <li><Link to="/cookies" className="hover:text-rose-400 transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-display text-base font-semibold text-white/90 tracking-wide">DMCA</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link to="/" className="hover:text-rose-400 transition-colors">DMCA Complaint</Link></li>
                            <li><Link to="/" className="hover:text-rose-400 transition-colors">Content Removal</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-display text-base font-semibold text-white/90 tracking-wide">18 USC 2257</h3>
                        <p className="text-xs leading-relaxed text-white/50">
                            This site assumes no liability for the content of the videos. All videos are hosted on 3rd party servers.
                        </p>
                        <Link to="/" className="text-rose-400/90 hover:text-rose-400 text-xs mt-2 inline-block transition-colors">
                            2257 Compliance Statement
                        </Link>
                    </div>

                </div>

                <div className="mt-14 border-t border-white/10 pt-8 text-center">
                    <p className="text-xs tracking-wide text-white/40">
                        Copyright © 2026. All rights reserved. <span className="text-white/70">LEAKPORNOFR</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
