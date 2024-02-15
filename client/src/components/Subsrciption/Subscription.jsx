import React from 'react';

const Subscription = ({ darkMode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., submit email to backend)
    console.log('Email submitted');
  };

  return (
    <section id="subscription" >
       
    <div  className={`${darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"} w-full py-12 px-12 sm:px-6 lg:px-8`}>

      <div className={`max-w-[65rem] mx-auto rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"} dark:border dark:border-gray-700`}>
        <div className="p-6 sm:p-8">
          <h3 className={`text-xl font-medium mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Get more updates...</h3>
          <p className={`text-sm text-white-600 ${darkMode ? "dark:text-white-100" : ""}`}>
            Do you want to get notified when a new Blog is added to AI Blog? Sign up for our newsletter and you'll be among the first to find out about new features, components, versions, and tools.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address..."
              className={`formkit-input flex-1 bg-gray-100 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-4 mt-4 sm:mt-0 sm:mr-4 ${darkMode ? "dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-600" : ""}`}
              required
            />
            <button
              type="submit"
              className={`btn-subscribe mt-4 sm:mt-0 px-6 py-3 text-sm font-medium text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${darkMode ? "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-600" : ""}`}
            >
              Subscribe
            </button>
          </form>
          <div className="text-sm text-white-600 mt-4">
            By subscribing, you agree with ConvertKit's <a href="https://convertkit.com/terms" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="https://convertkit.com/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
   
   
    </section >
  );
};

export default Subscription;
