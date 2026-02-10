import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
    useEffect(() => {
        document.title = "LEAKPORNOFR - Terms of Service";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-textured">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <Link
                    to="/"
                    className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Retour à l'accueil
                </Link>

                <div className="mx-auto max-w-3xl">
                    <div className="mb-8 flex items-center gap-3">
                        <FileText className="h-8 w-8 text-primary" />
                        <h1 className="text-3xl font-black uppercase tracking-tight text-white">
                            Terms of Service
                        </h1>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-6 text-zinc-300">
                        <p className="text-sm text-zinc-500">Last updated: January 15, 2026</p>

                        <section>
                            <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using LEAKPORNOFR, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, you must not access or use this website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">2. Age Requirement</h2>
                            <p>
                                <strong>You must be at least 18 years of age (or the age of majority in your jurisdiction) to access this website.</strong> By using this website, you represent and warrant that you meet this age requirement. We reserve the right to terminate your access if we believe you do not meet this requirement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">3. User Conduct</h2>
                            <p>You agree not to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Use the website for any unlawful purpose</li>
                                <li>Attempt to gain unauthorized access to any portion of the website</li>
                                <li>Interfere with the proper working of the website</li>
                                <li>Upload, post, or transmit any content that infringes intellectual property rights</li>
                                <li>Use automated systems (bots, scrapers) to access the website</li>
                                <li>Circumvent any technological measures designed to protect the website</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">4. Content Disclaimer</h2>
                            <p>
                                All videos displayed on this website are hosted by third-party servers. We do not upload, produce, or host any content ourselves. We act solely as an intermediary linking to content already available on the public internet.
                            </p>
                            <p>
                                We do not claim ownership of any videos and are not responsible for their content. All content is provided by third parties and any copyright belongs to its respective owners.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">5. Intellectual Property</h2>
                            <p>
                                The LEAKPORNOFR name, logo, and website design are our intellectual property. You may not use, reproduce, or distribute any of our branding without prior written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">6. Limitation of Liability</h2>
                            <p>
                                TO THE FULLEST EXTENT PERMITTED BY LAW, LEAKPORNOFR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR ACCESS TO OR USE OF THE WEBSITE.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">7. Indemnification</h2>
                            <p>
                                You agree to indemnify and hold harmless LEAKPORNOFR and its affiliates from any claims, damages, or expenses arising from your violation of these Terms or your use of the website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">8. Modifications</h2>
                            <p>
                                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the modified Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">9. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of France, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">10. Contact</h2>
                            <p>
                                For any questions regarding these Terms, please contact us at: <span className="text-primary">legal@leakpornofr.com</span>
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsOfService;
