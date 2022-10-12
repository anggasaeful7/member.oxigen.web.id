import React from "react";
import "./bg.css";

const Bganimasi = () => {
  return (
    <div>
      <div className="wrapper">
        {/*  */}
        <div className="card card-side w-[900px] h-[500px] glass shadow-xl login">
          <figure>
            <img
              src="https://placeimg.com/280/280/arch"
              className="ml-8 rounded-xl outline outline-offset-2 outline-2"
              alt="Movie"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title mx-auto text-4xl text-white font-bold">
              OXIGEN MEMBER
            </h2>
            <p className="mx-auto text-base text-white font-bold">
              Welcome Oxigen Member !!!
            </p>
            <form>
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-white">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                />
                <label class="label">
                  <a href="/" class="label-text-alt text-white link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="card-actions flex flex-row mt-5">
              <p className="text-white">Belum menjadi member oxigen ?</p>
              <button className="btn btn-warning">
                Register <i className="fas fa-arrow-right ml-4"></i>
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="buble">
          <span className="dot"></span>
        </div>
        <div className="buble">
          <span className="dot"></span>
        </div>
        <div className="buble">
          <span className="dot"></span>
        </div>
        <div className="buble">
          <span className="dot"></span>
        </div>
        <div className="buble">
          <span className="dot"></span>
        </div>
        <div className="buble">
          <span className="dot"></span>
        </div>
        <div className="buble">
          <span className="dot"></span>
        </div>
        <div className="buble">
          <span className="dot"></span>
        </div>
        <div className="buble">
          <span className="dot"></span>
        </div>
        <div className="buble">
          <span className="dot"></span>
        </div>
        <div className="buble">
          <span className="dot"></span>
        </div>
        <div className="buble">
          <span className="dot"></span>
        </div>
        <div className="buble">
          <span className="dot"></span>
        </div>
        <div className="buble">
          <span className="dot"></span>
        </div>
        <div className="buble">
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Bganimasi;
