import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'Oct 2021 - Nov 2021'}
                        title={'Front-end React Developer'}
                        subTitle={'Susenix Project'}
                        text={'Developed a business website and make the admin authoraization system.Firebase login system for both users and admin. Secure the admin policy with jwt token.Also make a dynamic search bar for searchi products, impliment payment gateway system for stripe'}
                    />
                    <ResumeItem
                        year={'2020 - Present'}
                        title={'Wordpress Developer'}
                        subTitle={'Freelance'}
                        text={'I have over 2 years of experience in WordPress Web design and development. I am specialized in WordPress, WooCommerce, Theme Customization, and Theme Development. My Skills -- HTML5, CSS3, JavaScript, jQuery, Bootstrap 3-4, WordPress '}
                    />

                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem
                        year={'2015 - 2019'}
                        title={'Bachelor of Science - Chemistry'}
                        subTitle={'Bangladesh National University '}
                        text={'I complete my Bachelor of Science - Chemistry (BSc-Chemistry) from National University. I got first class position from here. In this state i started to learn WordPress theme customization and developemtn. For this i also learn basic PHP.  '}
                    />
                    <ResumeItem
                        year={'2012 - 2014'}
                        title={'HSC'}
                        subTitle={'Govt. Gurudayal College'}
                        text={'I Complete my HSC from Govt. Gurudayal College. This is the best college over kishoregonj district. I again got GPA-5 from Science group. Mainly , I started my programing learning from here. Here I learn basic of C and C++. '}
                    />
                    <ResumeItem
                        year={'2012'}
                        title={'High School Graduation'}
                        subTitle={'Hossainpur Adarsha High School'}
                        text={'I Complete my High School stydy from Hossainpur Adarsha High School. I Complete my SSC from here. I got GPA-5 from Science group. My School is the best School in the kishoregonj district. I started my programing life from this state. '}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
