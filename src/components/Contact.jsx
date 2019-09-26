import React, { Component } from 'react'
import styled from 'styled-components'

export default class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <div className="aboutContainer">
          <div>
            <span>Hello !</span>
            <span>feel free to reach out to me, if you</span>
            <span>wish to talk about something.</span>
          </div>
          <div>
            <span>Contact Me Now</span>
            <form>
              <div>
                <i className="fas fa-user"></i>
                <input placeholder="Name" />
              </div>
              <div>
                <i className="far fa-envelope"></i>
                <input placeholder="Email" />
              </div>
              <div>
                <textarea placeholder="Message"></textarea>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  .aboutContainer {
    display: flex;
    padding: 7% 15% 0;

    > div:nth-child(1) {
      width: 40%;
      display: flex;
      flex-direction: column;

      > span:nth-child(1) {
        font-weight: bold;
        font-size: 35px;
        margin-bottom: 30px;
      }

      > span:nth-child(2),
      > span:nth-child(3) {
        font-size: 17px;
      }
    }

    > div:nth-child(2) {
      width: 60%;
      display: flex;
      flex-direction: column;
      padding-left: 10%;

      > span:nth-child(1) {
        font-family: 'Oswald', sans-serif;
        font-size: 35px;
        margin-bottom: 30px;
      }

      form {
        display: flex;
        flex-direction: column;

        > div:nth-child(1),
        > div:nth-child(2) {
          background-color: #ebeef1;
          height: 50px;
          border-radius: 20px;
          margin-bottom: 20px;
          display: flex;

          > .fas,
          > .far {
            align-self: center;
            color: #9998a9;
            margin: 0 15px;
          }

          > input {
            border: none;
            background-color: #ebeef1;
            width: 100%;
            outline: none;
            border-radius: 20px;
            padding: 5px;
            font-size: 16px;
          }
        }

        > div:nth-child(3) {
          background-color: #ebeef1;
          height: 150px;
          border-radius: 20px;
          margin-bottom: 20px;

          > textarea {
            height: 100%;
            width: 100%;
            background-color: #ebeef1;
            resize: none;
            border: none;
            border-radius: 20px;
            padding: 15px 10px;
            outline: none;
            font-family: Arial;
            font-size: 16px;
          }
        }

        > button {
          background-color: #f33b86;
          border-radius: 50px;
          padding: 15px 0;
          color: #fff;
          border: 1px solid transparent;
          font-size: 16px;
          font-weight: bold;

          &:hover {
            background-color: #fff;
            border: 1px solid #f33b86;
            color: #f33b86;
          }
        }
      }
    }
  }
`
