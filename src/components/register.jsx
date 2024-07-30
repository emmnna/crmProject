import { Link } from 'react-router-dom';

export default function Register() {
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
            <div className="bg-white border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-80 relative w-96">
                <h1 className="text-3xl font-extrabold mb-6 text-center">Créer un compte</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold">Nom :</label>
                        <input type="text" id="name" className="w-full p-2 text-gray-900 border border-gray-300 rounded mt-1" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold">Email :</label>
                        <input type="email" id="email" className="w-full p-2 text-gray-900 border border-gray-300 rounded mt-1" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold">Mot de passe :</label>
                        <input type="password" id="password" className="w-full text-gray-900 p-2 border border-gray-300 rounded mt-1" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirm-password" className="block text-gray-700 font-bold">Confirmer le mot de passe :</label>
                        <input type="password" id="confirm-password" className="w-full text-gray-900 p-2 border border-gray-300 rounded mt-1" required />
                    </div>
                    <button type="submit" className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-600 font-bold">Créer un compte</button>
                    <div className="mt-4 text-center">
                        <Link to="/login" className="text-blue-500 hover:underline font-bold">Déjà inscrit? Connectez-vous</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
