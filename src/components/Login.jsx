import React, { useState } from 'react';

const Login = (probs) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      probs.handlerLogin(email,password);
      // console.log("Email:", email);
      // console.log("Password:", password);

      setEmail('');
      setPassword('');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">

      <div
        className="
          w-full 
          max-w-md 
          backdrop-blur-lg 
          bg-white/10 
          border border-white/20 
          rounded-3xl 
          p-8 
          shadow-2xl 
          text-white
          animate-fadeIn
        "
      >

        <h1 className="text-center text-3xl font-semibold mb-8 tracking-wide">
          Welcome Back
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-6">

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              className="
                bg-white/20 
                border border-white/30 
                rounded-lg 
                p-3 
                outline-none 
                focus:ring-2 
                focus:ring-amber-400 
                transition
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Employee@gmail.com'
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              className="
                bg-white/20 
                border border-white/30 
                rounded-lg 
                p-3 
                outline-none 
                focus:ring-2 
                focus:ring-amber-400 
                transition
              "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='*************************'
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              mt-4 
              py-3 
              rounded-lg 
              font-semibold 
              bg-amber-500 
              hover:bg-amber-600 
              active:scale-95 
              transition 
              flex 
              items-center 
              justify-center 
              gap-2
              disabled:opacity-70
            "
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>

        </form>

      </div>
    </div>
    
  );
};

export default Login;