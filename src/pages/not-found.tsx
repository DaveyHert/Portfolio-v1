import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-indigo-800 text-white p-4">
      <div className="max-w-md w-full p-8 rounded-lg bg-white/10 backdrop-blur-md shadow-xl">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
          <p className="mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <a className="px-6 py-2 bg-white text-purple-900 hover:bg-purple-50 font-medium rounded-full transition-colors">
                Developer Portfolio
              </a>
            </Link>
            <Link href="/writer">
              <a className="px-6 py-2 border border-white hover:bg-white/20 font-medium rounded-full transition-colors">
                Writer Portfolio
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}