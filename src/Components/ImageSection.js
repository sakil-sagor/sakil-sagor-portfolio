
import React from 'react'
import styled from 'styled-components';
import cover from '../img/cover.png';
import PrimaryButton from './PrimaryButton';
import './Components.css'

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={cover} alt="" className="aboutImg" />
            </div>
            <div className="right-content">
                <h4>I am <span>A K M Sakil Sagor</span></h4>
                <p className="paragraph">
                    I'm Sakil Sagor, a Web developer and specializes in front-end technologies. I'm highly passionate about JavaScript-based software development technologies such as MERN Stack (MongoDB, Express.js, React, Node.js)

                </p>
                {/* hello my dear  */}
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p >: A K M Sakil Sagor</p>
                        <p>: 24</p>
                        <p>: Bangladehs </p>
                        <p>: Bangla, English </p>
                        <p>: Kishoregonj, Dhaka, Bangladehs</p>
                        <p>: Full Time, Remote,  Freelance</p>
                    </div>


                </div>
                <PrimaryButton title={'Download Cv'} />

            </div>
        </ImageSectionStyled >
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    align-items: center;




  
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
