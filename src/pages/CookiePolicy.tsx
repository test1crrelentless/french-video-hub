import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
    useEffect(() => {
        document.title = "LEAKPORNOFR - Cookie Policy";
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
                        <Cookie className="h-8 w-8 text-primary" />
                        <h1 className="text-3xl font-black uppercase tracking-tight text-white">
                            Cookie Policy
                        </h1>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-6 text-zinc-300">
                        <p className="text-sm text-zinc-500">Last updated: January 15, 2026</p>

                        <section>
                            <h2 className="text-xl font-bold text-white">1. What Are Cookies?</h2>
                            <p>
                                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">2. How We Use Cookies</h2>
                            <p>LEAKPORNOFR uses cookies for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., maintaining your session).</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous information.</li>
                                <li><strong>Advertising Cookies:</strong> Used by our advertising partners to deliver targeted advertisements based on your browsing behavior.</li>
                                <li><strong>Preference Cookies:</strong> Remember your preferences and settings to enhance your experience.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">3. Third-Party Cookies</h2>
                            <p>
                                Our website uses cookies from third-party services, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Clickadu:</strong> Advertising network that serves targeted ads</li>
                                <li><strong>Google Analytics:</strong> Website analytics and traffic measurement</li>
                                <li><strong>Bunny.net CDN:</strong> Content delivery optimization</li>
                            </ul>
                            <p>
                                These third parties may use cookies to collect information about your online activities over time and across different websites.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">4. Cookie Duration</h2>
                            <p>Cookies can be classified by their duration:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser.</li>
                                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them manually.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">5. Managing Cookies</h2>
                            <p>
                                Most web browsers allow you to control cookies through their settings. You can:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>View what cookies are stored on your device</li>
                                <li>Delete individual or all cookies</li>
                                <li>Block cookies from specific or all websites</li>
                                <li>Set preferences for certain types of cookies</li>
                            </ul>
                            <p className="text-sm text-zinc-400">
                                Note: Disabling cookies may affect the functionality of our website and prevent you from accessing certain features.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">6. Updates to This Policy</h2>
                            <p>
                                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">7. Contact Us</h2>
                            <p>
                                If you have any questions about our use of cookies, please contact us at: <span className="text-primary">cookies@leakpornofr.com</span>
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CookiePolicy;
