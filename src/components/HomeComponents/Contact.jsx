import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-11/12 mx-auto ">
      <h1 className="text-5xl text-center font-bold pt-20">Contact</h1>
      <p className="mt-5 text-center">
        If you have any doubt or confusion ,feel free to send your message
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center p-6">
        {/* Form Section */}
        <div className="md:w-1/2 p-2 md:p-4">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 bg-white p-6 rounded-lg shadow-md"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Enter your name"
                className="w-full text-black mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="Enter your email"
                className="w-full text-black mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="from_subject"
                placeholder="Subject"
                className="w-full text-black mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                name="message"
                rows="4"
                className="w-full text-black mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-800 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Send Email
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 p-2 md:p-4 text-slate-900">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
            Contact Info
          </h2>
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md space-y-4">
            <div>
              <p className=" font-semibold">📍 Location:</p>
              <p>Chattogram, Bangladesh</p>
            </div>
            <div>
              <p className=" font-semibold">🏠 Address:</p>
              <p>1/1,235,Nabab Sirajuddoula Road By Lane,Chawkbazar</p>
            </div>
            <div>
              <p className=" font-semibold">📞 Phone:</p>
              <p>+880 1575306824</p>
            </div>
            <div>
              <p className=" font-semibold">💬 WhatsApp:</p>
              <p>+880 1575306824</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
