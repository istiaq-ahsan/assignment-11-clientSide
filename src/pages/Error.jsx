import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div style={{
            backgroundImage: "url('https://i.ibb.co.com/1RWKYx4/404.gif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',

        }} className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-gray-800">
            <Link to="/"
                className="btn btn-outline"
            >
                Go Back
            </Link>
        </div>
    );
};

export default Error;