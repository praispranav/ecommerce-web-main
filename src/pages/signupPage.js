import React from "react";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Colors } from "../config/Colors";
import { Font } from "../config/Font";
import LoginImage from "../assets/images/loginimg.jpg";

const Whitebackground = styled.div({
  height: "700px",
  width: "100%",
  backgroundColor: Colors.creamy,
});

const Bluecard = styled.div({
  height: "500px",
  width: "230px",
  backgroundColor: Colors.Primary,
  borderRadius: " 3px",
  color: Colors.White,

  fontFamily: "sans-serif",
});

const Whitecard = styled.div({
  height: "500px",
  width: "400px",
  backgroundColor: Colors.White,
  borderRadius: " 3px",
});

const Signupcard = styled.div({
  display: "flex",
  paddingLeft: "370px",
  paddingTop: "85px",
});

const BluecardFont = styled.p({
  fontFamily: "sans-serif",
  fontSize: "20px",
});

const BluecardFont2 = styled.p({
  fontFamily: "sans-serif",
  fontSize: Font.Medium,
});

const InputNumber = styled.input({
  padding: "8px 10px 10px 0",
  width: "350px",
  fontSize: " 12px    ",
  backgroundColor: Colors.White,
  border: "none",
  borderBottom: "1px solid lightgrey",
  marginLeft: "14px",
  outline:"none"
});
const Whitecardfont = styled.p({
  fontSize: Font.Small,
  fontWeight: "500",
  color: Colors.Grey,
});

const Whitecardfont2 = styled.p({
  fontSize: Font.Small,
  fontWeight: "500",
  color: Colors.Primary,
});

const Continuebtn = styled.button({
  backgroundColor: Colors.Orange,
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: Colors.White,
  width: "350px",
  height: "48px",
  fontSize: Font.Normal,
  borderRadius: "2px",
  fontWeight: "500",
  marginLeft: "14px",
});

const Existinguserbtn = styled.button({
  border: "none",
  lineHeight: "180%",
  textAlign: "center",
  color: Colors.Primary,
  backgroundColor: Colors.White,
  marginTop: "16px",
  boxShadow: "0 4px 6px 0 rgb(0 0 0 / 12%)",
  width: "350px",
  height: "48px",
  fontSize: Font.Normal,
  fontWeight: "500",
  marginLeft: "14px",
  marginTop: "40px",
});
export default function addressPage() {
  return (
    <div className="w-100 h-100 m-0 p-0">
      <div>
        <TopNav />
        <Header />
        <SearchBar selectedCategory={"All Categories"} queryParams={""} />
        <div>
          <Whitebackground>
            <Signupcard>
              <Bluecard>
                <BluecardFont className="pt-4 ps-3">
                  {" "}
                  Looks like you're new here!{" "}
                </BluecardFont>
                <BluecardFont2 className="pt-2 ps-3">
                  Sign up with your mobile number to get started
                </BluecardFont2>
                <div>
                  <img
                    src={LoginImage}
                    style={{
                      height: "200px",
                      width: "200px",
                      marginTop: "150px",
                      marginLeft: "15px",
                    }}
                  />
                </div>
              </Bluecard>
              <Whitecard>
                <div className="pt-5">
                  <div className="container pt-4">
                    <InputNumber
                      type="number"
                      placeholder="Enter Mobile Number"
                      className=""
                    ></InputNumber>
                    <div className=" d-flex pt-4">
                      <div className="ps-3">
                        <Whitecardfont>
                          By continuing, you agree to Flipkart's
                        </Whitecardfont>
                      </div>
                      <Whitecardfont2 className="ps-1">
                        Terms of Use
                      </Whitecardfont2>
                      <Whitecardfont className="ps-1">and</Whitecardfont>
                    </div>

                    <Whitecardfont2 className="ps-3">
                      Privacy Policy
                    </Whitecardfont2>
                    <div className="pt-4">
                      <Continuebtn type="submit">CONTINUE</Continuebtn>
                    </div>
                    <Existinguserbtn type="submit">
                      Existing User? Log in
                    </Existinguserbtn>
                  </div>
                </div>
              </Whitecard>
            </Signupcard>
          </Whitebackground>
        </div>

        <Footer />
      </div>
    </div>
  );
}
