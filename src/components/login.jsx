import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div 
        className="h-screen w-screen flex justify-center items-center bg-cover bg-center" 
        style={{ 
            backgroundImage: 'url(/src/images/login.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
        }}
    >
            <div className="bg-white border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-96">
                <h1 className="text-2xl font-bold mb-6 text-white text-center">Connexion</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold text-black">Email :</label>
                        <input type="email" id="email" className="w-full p-2 text-black border border-gray-300 rounded mt-1" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-bold text-black">Mot de passe :</label>
                        <input type="password" id="password" className="w-full text-black p-2 border border-gray-300 rounded mt-1" required />
                    </div>
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <input type="checkbox" id="remember" className="mr-2" />
                            <label htmlFor="remember" className="text-black">Enregistrer</label>
                        </div>
                       
                        <Link to="/forgot-password" className="text-blue-900 font-bold hover:underline">Mot de passe oublié?</Link>
                       
                    </div>
                    <button type="submit" className="w-full bg-white text-black py-2 rounded hover:bg-blue-700">Connexion</button>
                    <div className="mt-4 text-center">
                        <Link to="/register" className="text-blue-900 font-bold hover:underline">Creer un nouveau compte</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
