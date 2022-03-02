import '../index.css';

export const Login = () => {

return <div className="font-['Inter'] w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
    </div>
    <div className="flex items-center justify-between">
      <button onClick={loginButtonAction} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
    </div>
  </form>
</div>
}

const loginButtonAction = () => {
  fetch('http://localhost:8000/api/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({'username': 'johndoe', 'password': 'testpassword'})
  })
  .then(response => response.json())
  .then(data => console.log(data))
}