import pPic from "./img/profilePic4.png";
import logo from "./img/logo.png";
import React from 'react'

function Colorful() {
  return (
    <section className=" flex items-center justify-center">
        <div
          className="h-96 w-44 flex flex-col justify-between bg-theme4-bg bg-cover bg-center rounded-2xl relative"
        >
          <button
            className="p-1 absolute top-2 right-2 rounded-full bg-gradient-to-tl from-cyan-700 to-cyan-400 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-3"
            >
              <path
                fill="#ffffff"
                d="M19.59 12L15 7.41v2.46l-.86.13c-4.31.61-7.23 2.87-8.9 6.33c2.32-1.64 5.2-2.43 8.76-2.43h1v2.69m-2-1.69v.02c-4.47.21-7.67 1.82-10 5.08c1-5 4-10 11-11V5l7 7l-7 7v-4.1c-.33 0-.66.01-1 .02Z"
              />
            </svg>
          </button>
          <div className="flex flex-col items-center">
            <div className="mt-4">
              <img src={pPic} className="size-20 rounded-full " />
            </div>
            <div className="mt-1 text-center">
              <h1 className="font-semibold text-base">Esther Howard</h1>
              <p className="text-sm">Web Developer</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center space-x-2">
            <a href=""
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="size-3"
              >
                <path
                  fill="#3cb97d"
                  d="M13.24 21.58c2.88 5.66 7.52 10.28 13.18 13.18l4.4-4.4c.54-.54 1.34-.72 2.04-.48c2.24.74 4.66 1.14 7.14 1.14c1.1 0 2 .9 2 2V40c0 1.1-.9 2-2 2C21.22 42 6 26.78 6 8c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2c0 2.5.4 4.9 1.14 7.14c.22.7.06 1.48-.5 2.04z"
                /></svg></a>
            <a href=""
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 258"
                className="size-3"
              >
                <defs>
                  <linearGradient
                    id="logosWhatsappIcon0"
                    x1="50%"
                    x2="50%"
                    y1="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#1faf38" />
                    <stop offset="100%" stop-color="#60d669" />
                  </linearGradient>
                  <linearGradient
                    id="logosWhatsappIcon1"
                    x1="50%"
                    x2="50%"
                    y1="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#f9f9f9" />
                    <stop offset="100%" stop-color="#fff" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#logosWhatsappIcon0)"
                  d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                />
                <path
                  fill="url(#logosWhatsappIcon1)"
                  d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
                />
                <path
                  fill="#fff"
                  d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                /></svg></a>
            <a href=""
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-3"
              >
                <path
                  fill="#000"
                  d="M2 20V4h20v16zm10-7l8-5V6l-8 5l-8-5v2z"
                /></svg></a>
            <a href=""
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="size-3"
              >
                <path
                  fill="#1877f2"
                  d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                />
                <path
                  fill="#fff"
                  d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                /></svg></a>
            <a href=""
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="size-3"
              >
                <path
                  d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"
                /></svg></a>
            <a href=""
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 180"
                className="size-3"
              >
                <path
                  fill="#f00"
                  d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                />
                <path
                  fill="#fff"
                  d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                /></svg></a>
          </div>
          <div className="px-2 w-full flex flex-col space-y-1 text-xs text-white">
            <a
          href=""
          className="text-white bg-gradient-to-r from-red-500 to-purple-500 rounded-tl-3xl rounded-br-3xl py-2 flex justify-center items-center"
          >Website</a>
        <a
          href=""
          className="text-white bg-gradient-to-r from-red-500 to-purple-500 rounded-tl-3xl rounded-br-3xl py-2 flex justify-center items-center"
          >Best sofware</a>
        <a
          href=""
          className="text-white bg-gradient-to-r from-red-500 to-purple-500 rounded-tl-3xl rounded-br-3xl py-2 flex justify-center items-center"
          >Agency</a>
        <a
          href=""
          className="text-white bg-gradient-to-r from-red-500 to-purple-500 rounded-tl-3xl rounded-br-3xl py-2 flex justify-center items-centerr"
          >Book an appoinment</a>
          </div>

          <div className="space-y-1 py-2">
            <div className="flex justify-center">
              <div className="bg-gradient-to-l from-gray-600  h-px w-20"></div>
              <div className="bg-gradient-to-r from-gray-600  h-px w-20"></div>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <img src={logo} className="h-4 w-6" />
              <p className="text-xs font-semibold">Bio Link lite</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Colorful
