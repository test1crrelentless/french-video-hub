import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import Popular from "./pages/Popular";
import SearchPage from "./pages/SearchPage";
import VideoPage from "./pages/VideoPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Admin from "./pages/Admin";
import UserPage from "./pages/UserPage";
import NotFound from "./pages/NotFound";

import AntiAdblock from "@/components/AntiAdblock";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    { path: "/", element: <Index /> },
    { path: "/categories", element: <Categories /> },
    { path: "/popular", element: <Popular /> },
    { path: "/search", element: <SearchPage /> },
    { path: "/video/:slug", element: <VideoPage /> },
    { path: "/privacy", element: <PrivacyPolicy /> },
    { path: "/terms", element: <TermsOfService /> },
    { path: "/cookies", element: <CookiePolicy /> },
    { path: "/admin", element: <Admin /> },
    { path: "/user/:username", element: <UserPage /> },
    { path: "*", element: <NotFound /> },
  ]
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AntiAdblock />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
