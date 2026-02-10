import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
    useEffect(() => {
        document.title = "LEAKPORNOFR - Privacy Policy";
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
                        <Shield className="h-8 w-8 text-primary" />
                        <h1 className="text-3xl font-black uppercase tracking-tight text-white">
                            Privacy Policy
                        </h1>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-6 text-zinc-300">
                        <p className="text-sm text-zinc-500">Last updated: January 15, 2026</p>

                        <section>
                            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
                            <p>
                                Welcome to LEAKPORNOFR ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
                            <p>We may collect information about you in various ways, including:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Personal Data:</strong> We do not require registration. However, if you contact us, we may collect your email address and any information you provide.</li>
                                <li><strong>Usage Data:</strong> We automatically collect certain information when you visit, such as your IP address, browser type, operating system, referring URLs, and pages viewed.</li>
                                <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your experience and analyze site traffic.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide, operate, and maintain our website</li>
                                <li>Improve, personalize, and expand our website</li>
                                <li>Understand and analyze how you use our website</li>
                                <li>Deliver targeted advertising and promotions</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">4. Third-Party Advertising</h2>
                            <p>
                                We use third-party advertising companies (including Clickadu) to serve ads when you visit our website. These companies may use cookies and similar technologies to collect information about your visits to this and other websites to provide relevant advertisements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">5. Data Security</h2>
                            <p>
                                We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure. We cannot guarantee the absolute security of your data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">6. Your Rights (GDPR)</h2>
                            <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The right to access, update, or delete your personal information</li>
                                <li>The right to rectification</li>
                                <li>The right to object to processing</li>
                                <li>The right to data portability</li>
                                <li>The right to withdraw consent</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white">7. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at: <span className="text-primary">privacy@leakpornofr.com</span>
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
