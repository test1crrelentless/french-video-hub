import { useEffect, useState } from 'react';
import { ShieldAlert } from 'lucide-react';

const AntiAdblock = () => {
    const [isAdblockDetected, setIsAdblockDetected] = useState(false);

    useEffect(() => {
        // 1. Create a "bait" script/element that adblockers usually target
        const bait = document.createElement('div');
        bait.setAttribute('class', 'ads ad-banner doubleclick ad-placement carbon-ads');
        bait.style.position = 'absolute';
        bait.style.top = '-1000px';
        bait.style.left = '-1000px';
        bait.style.width = '1px';
        bait.style.height = '1px';
        document.body.appendChild(bait);

        // 2. Check if the bait was blocked (hidden or removed)
        const checkAdblock = () => {
            if (
                !document.body.contains(bait) ||
                bait.offsetParent === null ||
                bait.offsetHeight === 0 ||
                bait.offsetLeft === 0 ||
                window.getComputedStyle(bait).display === 'none' ||
                window.getComputedStyle(bait).visibility === 'hidden'
            ) {
                setIsAdblockDetected(true);
            }
            document.body.removeChild(bait);
        };

        // Small delay to let adblocker act
        const timer = setTimeout(checkAdblock, 500);

        return () => clearTimeout(timer);
    }, []);

    if (!isAdblockDetected) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl border border-red-500/20 bg-zinc-900 p-6 shadow-2xl">
                <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-red-500/10 p-3">
                        <ShieldAlert className="h-10 w-10 text-red-500" />
                    </div>
                </div>
                <h2 className="mb-2 text-center text-xl font-bold text-white">Adblock Détecté</h2>
                <p className="mb-6 text-center text-zinc-400">
                    Nous avons besoin de la publicité pour maintenir ce service gratuit.
                    Veuillez désactiver votre bloqueur de publicité pour accéder au contenu.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition-colors hover:bg-red-700"
                >
                    J'ai désactivé mon bloqueur
                </button>
            </div>
        </div>
    );
};

export default AntiAdblock;
