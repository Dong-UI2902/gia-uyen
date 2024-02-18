/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const Profile = () => {
  let offsetX: number, offsetY: number;
  const move = (e: { target: any; pageX: number; pageY: number }) => {
    const el = e.target;
    el.style.left = `${e.pageX - offsetX}px`;
    el.style.top = `${e.pageY - offsetY}px`;
  };

  const add = (e: { target: any; clientX: number; clientY: number }) => {
    const el = e.target;
    offsetX = e.clientX - el.getBoundingClientRect().left;
    offsetY = e.clientY - el.getBoundingClientRect().top;
    el.addEventListener("mousemove", move);
  };

  const remove = (e: { target: any }) => {
    const el = e.target;
    el.removeEventListener("mousemove", move);
  };

  return (
    <div>
      <section className="profile" id="profile">
        {/* <div
          onMouseDown={add}
          onMouseUp={remove}
          style={{
            backgroundColor: "black",
            width: "100px",
            height: "100px",
            position: "absolute",
            zIndex: "999",
          }}
        ></div> */}

        <div style={{ position: "relative" }}>
          <div className="profile-content">
            <p>
              An endless passion to transform ideas to be an artistic way - I
              have nothing but a strong passion for creativity, especially the
              fashion industry
            </p>
            <p>
              Not a good communicator, but creativity in images and ideas can
              help you and I understand each other better.
            </p>
            <p>
              With a strong foundation in design thinking and creative vision,
              the images I put here hope to bring good energy and a positive
              impact to you.
            </p>
            <p>
              Thank you for taking the time to look at my passion
              <br />
              And
              <br />
              Have a productive day!!!
            </p>
          </div>
          <div
            className="profile-img img-1"
            onMouseDown={add}
            onMouseUp={remove}
          >
            <img src="/assets/images/profile/1.jpeg" />
          </div>
          <div className="profile-img img-2">
            <img src="/assets/images/profile/2.png" />
          </div>
          <div className="profile-img img-3">
            <img src="/assets/images/profile/3.png" />
          </div>
          <div className="profile-img img-4">
            <img src="/assets/images/profile/4.png" />
          </div>
          <div className="profile-img img-5">
            <img src="/assets/images/profile/5.png" />
          </div>

          <div className="img-6">
            <div style={{ overflow: "hidden", height: "100%" }}>
              <div className="img-6__box">
                <img
                  src="/assets/images/profile/6.png"
                  className="profile-img"
                />
              </div>
            </div>
          </div>
          <div className="profile-img img-7">
            <img src="/assets/images/profile/7.jpeg" />
          </div>
          <div className="profile-img img-9">
            <img src="/assets/images/profile/9.webp" />
          </div>
          <div className="profile-img img-8">
            <img src="/assets/images/profile/8.jpeg" />
          </div>
          <div className="profile-img img-10">
            <img src="/assets/images/profile/10.jpg" />
          </div>
          <div className="profile-img img-11">
            <img src="/assets/images/profile/11.png" />
          </div>
          <div className="profile-img img-12">
            <img src="/assets/images/profile/12.jpeg" />
          </div>
          <div className="profile-img img-13">
            <img src="/assets/images/profile/13.webp" />
          </div>
          <div className="image-edited">
            <div className="img-14">
              <div style={{ overflow: "hidden", height: "100%" }}>
                <div className="image-edited__box">
                  <img
                    src="/assets/images/profile/14.png"
                    className="profile-img"
                  />
                </div>
              </div>
            </div>
            <div className="img-15">
              <div style={{ overflow: "hidden", height: "100%" }}>
                <div className="image-edited__box">
                  <img
                    src="/assets/images/profile/14.png"
                    className="profile-img"
                  />
                </div>
              </div>
            </div>
            <div className="img-16">
              <div style={{ overflow: "hidden", height: "100%" }}>
                <div className="image-edited__box">
                  <img
                    src="/assets/images/profile/14.png"
                    className="profile-img"
                  />
                </div>
              </div>
            </div>
            <div className="img-17">
              <div style={{ overflow: "hidden", height: "100%" }}>
                <div className="image-edited__box">
                  <img
                    src="/assets/images/profile/14.png"
                    className="profile-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="img-18">
            <div style={{ overflow: "hidden", height: "100%" }}>
              <div className="img-18__box">
                <img
                  src="/assets/images/profile/6.png"
                  className="profile-img"
                />
              </div>
            </div>
          </div>
          <img
            src="/assets/images/profile/15.jpeg"
            className="profile-img img-19"
          />
          <img
            src="/assets/images/profile/16.png"
            className="profile-img img-20"
          />
          <img
            src="/assets/images/profile/18.webp"
            className="profile-img img-22"
          />
          <img
            src="/assets/images/profile/17.png"
            className="profile-img img-21"
          />
        </div>
      </section>
    </div>
  );
};

export default Profile;
