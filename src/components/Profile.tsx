/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Draggable from "react-draggable";

const Profile = () => {
  const [index, setIndex] = React.useState(10);

  const changeIndex = (className: string) => {
    const element = Array.from(
      document.getElementsByClassName(
        className
      ) as HTMLCollectionOf<HTMLElement>
    );
    const temp = index + 1;
    element[0].style.zIndex = temp.toString();
    setIndex(temp);
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
              I have a deep passion for transforming ideas into artistic
              expressions, particularly within the fashion industry.
            </p>
            <p>
              While I may not excel at verbal communication, I find that my
              creativity in visual imagery and conceptualization allows me to
              convey my thoughts effectively.
            </p>
            <p>
              With a strong foundation in design thinking and a clear creative
              vision, I aim to infuse positive energy and make a meaningful
              impact through my work. Thank you for taking the time to explore
              my passion
            </p>
            <p>Have a wonderfully productive day!</p>
          </div>
          <Draggable onStart={() => changeIndex("img-1")}>
            <div className="profile-img img-1">
              <img src="/assets/images/profile/1.jpeg" draggable={false} />
            </div>
          </Draggable>
          <Draggable onStart={() => changeIndex("img-2")}>
            <div className="profile-img img-2">
              <img src="/assets/images/profile/2.png" draggable={false} />
            </div>
          </Draggable>
          <Draggable onStart={() => changeIndex("img-3")}>
            <div className="profile-img img-3">
              <img src="/assets/images/profile/3.png" draggable={false} />
            </div>
          </Draggable>
          <Draggable onStart={() => changeIndex("img-4")}>
            <div className="profile-img img-4">
              <img src="/assets/images/profile/4.png" draggable={false} />
            </div>
          </Draggable>
          <Draggable onStart={() => changeIndex("img-5")}>
            <div className="profile-img img-5">
              <img src="/assets/images/profile/5.png" draggable={false} />
            </div>
          </Draggable>
          <Draggable onStart={() => changeIndex("img-6")}>
            <div className="img-6">
              <div style={{ overflow: "hidden", height: "100%" }}>
                <div className="img-6__box">
                  <img
                    src="/assets/images/profile/6.png"
                    className="profile-img"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </Draggable>
          <Draggable onStart={() => changeIndex("img-7")}>
            <div className="profile-img img-7">
              <img src="/assets/images/profile/7.png" draggable={false} />
            </div>
          </Draggable>
          <Draggable onStart={() => changeIndex("img-9")}>
            <div className="profile-img img-9">
              <img src="/assets/images/profile/9.png" draggable={false} />
            </div>
          </Draggable>
          <Draggable onStart={() => changeIndex("img-8")}>
            <div className="profile-img img-8">
              <img src="/assets/images/profile/8.png" draggable={false} />
            </div>
          </Draggable>
          <Draggable onStart={() => changeIndex("img-10")}>
            <div className="profile-img img-10">
              <img src="/assets/images/profile/10.jpg" draggable={false} />
            </div>
          </Draggable>
          <Draggable onStart={() => changeIndex("img-11")}>
            <div className="profile-img img-11">
              <img src="/assets/images/profile/11.png" draggable={false} />
            </div>
          </Draggable>
          <Draggable onStart={() => changeIndex("img-12")}>
            <div className="profile-img img-12">
              <img src="/assets/images/profile/12.jpeg" draggable={false} />
            </div>
          </Draggable>
          <Draggable onStart={() => changeIndex("img-13")}>
            <div className="profile-img img-13">
              <img src="/assets/images/profile/13.png" draggable={false} />
            </div>
          </Draggable>

          <div className="image-edited">
            <Draggable onStart={() => changeIndex("img-14")}>
              <div className="img-14">
                <div style={{ overflow: "hidden", height: "100%" }}>
                  <div className="image-edited__box">
                    <img
                      src="/assets/images/profile/14.png"
                      className="profile-img"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </Draggable>
            <Draggable onStart={() => changeIndex("img-15")}>
              <div className="img-15">
                <div style={{ overflow: "hidden", height: "100%" }}>
                  <div className="image-edited__box">
                    <img
                      src="/assets/images/profile/14.png"
                      className="profile-img"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </Draggable>
            <Draggable onStart={() => changeIndex("img-16")}>
              <div className="img-16">
                <div style={{ overflow: "hidden", height: "100%" }}>
                  <div className="image-edited__box">
                    <img
                      src="/assets/images/profile/14.png"
                      className="profile-img"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </Draggable>
            <Draggable onStart={() => changeIndex("img-17")}>
              <div className="img-17">
                <div style={{ overflow: "hidden", height: "100%" }}>
                  <div className="image-edited__box">
                    <img
                      src="/assets/images/profile/14.png"
                      className="profile-img"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </Draggable>
          </div>
          <Draggable onStart={() => changeIndex("img-18")}>
            <div className="img-18">
              <div style={{ overflow: "hidden", height: "100%" }}>
                <div className="img-18__box">
                  <img
                    src="/assets/images/profile/6.png"
                    className="profile-img"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </Draggable>
          <Draggable onStart={() => changeIndex("img-19")}>
            <img
              src="/assets/images/profile/15.jpeg"
              className="profile-img img-19"
              draggable={false}
            />
          </Draggable>
          <Draggable onStart={() => changeIndex("img-20")}>
            <img
              src="/assets/images/profile/16.png"
              className="profile-img img-20"
              draggable={false}
            />
          </Draggable>
          <Draggable onStart={() => changeIndex("img-22")}>
            <img
              src="/assets/images/profile/18.webp"
              className="profile-img img-22"
              draggable={false}
            />
          </Draggable>
          <Draggable onStart={() => changeIndex("img-21")}>
            <img
              src="/assets/images/profile/17.png"
              className="profile-img img-21"
              draggable={false}
            />
          </Draggable>
        </div>
      </section>
    </div>
  );
};

export default Profile;
