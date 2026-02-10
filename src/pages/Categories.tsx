import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const categoriesList = [
    { title: 'ANAL', desc: 'Girl taking anal' },
    { title: 'ARAB', desc: 'Arab girl' },
    { title: 'ASIAN', desc: 'Asian girl naked' },
    { title: 'AUSTRALIAN', desc: 'Australian girl' },
    { title: 'BIG ASS', desc: 'Big ass girl naked' },
    { title: 'BIG TITS', desc: 'Girl showing her tits' },
    { title: 'BLONDE', desc: 'Blonde girl naked' },
    { title: 'BLOWJOB', desc: 'Girl doing a blowjob' },
    { title: 'BRUNETTE', desc: 'Brunette girl naked' },
    { title: 'CREAMPIE', desc: 'Creampie finish' },
    { title: 'EBONY', desc: 'Ebony girl naked' },
    { title: 'FRENCH', desc: 'French girl naked doing a blowjob' },
    { title: 'GERMAN', desc: 'German girl' },
    { title: 'LESBIAN', desc: 'Lesbian girls naked' },
    { title: 'POV', desc: 'Naked girl in POV' },
    { title: 'SEXTAPE', desc: 'Naked girl fucked' },
    { title: 'SOLO', desc: 'Solo girl' },
    { title: 'TATTOOED', desc: 'Tattooed girl' },
    { title: 'WEBCAM', desc: 'Webcam girl' },
];

const Categories = () => {
    useEffect(() => {
        document.title = "LEAKPORNOFR - Categories";
    }, []);

    return (
        <div className="min-h-screen bg-textured">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <h1 className="mb-8 text-4xl font-black uppercase tracking-tighter text-white">
                    All our categories
                </h1>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {categoriesList.map((cat, idx) => (
                        <Link
                            key={idx}
                            to={`/category/${cat.title.toLowerCase().replace(' ', '-')}`}
                            className="group relative block aspect-[3/4] overflow-hidden bg-zinc-900"
                        >
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-zinc-800 transition-transform duration-500 group-hover:scale-110">
                                <div className="flex h-full w-full items-center justify-center text-zinc-700">
                                    {/* Placeholder visual */}
                                    <span className="text-4xl font-black opacity-20">{cat.title[0]}</span>
                                </div>
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            {/* Text Content */}
                            <div className="absolute bottom-4 left-0 w-full px-2 text-center">
                                <span className="block text-2xl font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                                    {cat.title}
                                </span>
                                <div className="mx-auto mt-1 h-0.5 w-8 bg-primary transition-all duration-300 group-hover:w-16" />
                                <span className="mt-2 block text-[10px] uppercase font-bold text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    {cat.desc}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Categories;
