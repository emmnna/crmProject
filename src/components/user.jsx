import Sidebar from "./sideBar";
import image from '../images/crm.pnj.webp';
import image2 from '../images/login1.jpg';
import NavBar from "./navBar";

export default function User(){
    
    const user = [{
        name: "Emna Rahmouni",
        email: "Emna.rahmoouni@gmail.com",
        phone: "+216555555",
        address: "Ariana, ghazela",
        picture: image
    },
    {
        name: "client 1",
        email: "client@gmail.com",
        phone: "+2165555444",
        address: "tunisie marsa",
        picture: image2
    },
]
  
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <NavBar />
            <div className="flex-1 flex flex-col items-center justify-center lg:ml-64 p-6 space-y-8">
                {user.map((user, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg space-y-4 max-w-md w-full">
                        <div className="flex items-center justify-center mb-6">
                            <img 
                                src={user.picture} 
                                alt="Profile" 
                                className="rounded-full w-32 h-32 object-cover border-4 border-gray-300"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">{user.name}</h2>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-gray-700">Téléphone :</span>
                                <span>{user.phone}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-gray-700">Adresse :</span>
                                <span>{user.address}</span>
                            </div>
                        </div>
                        <div className="flex justify-center space-x-4 mt-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Modifier le profil</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </div>
);

    };