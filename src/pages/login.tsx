const Logo = () => (
  <span className="w-5 h-5 mr-2 text-black">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
    </svg>
  </span>
)

export default function SignIn() {
  return (
    <main className="flex w-full min-h-screen p-4 lg:p-8 gap-x-20 justify-center lg:justify-start bg-[url(/img/hero.jpg)]">
      <div className="flex w-full flex-col bg-white shadow rounded-2xl shrink-0 md:w-[608px] space-between">
        <div className="flex items-center justify-between p-6 w-full">
          <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            EPay+
          </span>
        </div>
        <div className="flex flex-col items-center w-full grow px-6 pt-8 md:px-[108px] md:pt-32">
          <div className="w-full mx-auto">
            <h2 className="text-3xl font-normal text-gray-900">
              嗨，近来可好 👋
            </h2>
            <p className="mt-2 text-sm text-gray-600 ">
              欢迎使用EPay+，登录以继续
            </p>
          </div>
          <div className="w-full mx-auto mt-8">
            <div className="bg-white ">
              <div className="flex flex-col gap-3 mt-6">
                <div className="relative flex items-center mt-8">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>

                  <input
                    v-model="SignInData.account"
                    type="account"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-10  focus:border-blue-400 d focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="账户名"
                  />
                </div>

                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>

                  <input
                    v-model="SignInData.password"
                    type="password"
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="账户密码"
                  />
                </div>

                <div className="mt-6">
                  <button
                    // click="SignIn"
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    登录
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 py-6 text-sm font-normal text-gray-500 flex-initial">
          <Logo></Logo>
        </div>
      </div>
      <div className="sm:flex flex-col justify-center hidden lg:flex">
        <h2 className="font-bold text-4xl text-gray-800">
          个人小额支付解决方案
        </h2>
        <p className="text-gray-500 text-base mt-4 text-left">
          简单、快捷、安全、免费
        </p>
      </div>
    </main>
  )
}
