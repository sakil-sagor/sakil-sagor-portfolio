import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';

function ReviewsSetion() {
    return (
        <ReviewsStyled>
            <Title title={'Reviews'} span={'Reviews'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem
                        text={'I would highly recommend using sakilsagor! He was quick to respond, so easy to work with, understood exactly what I needed and was quick to provide it. He truly goes above and beyond, I really appreciate all of his help. Looking forward to using him again!'}
                    />
                    <ReviewItem
                        text={'Sakil is so good and PROFESSIONAL. I made the website myself but had some technical issue which could be addressed by me and my fellows but he did it within couple of minutes I guess and charged a very little amount for the service he provided.'}
                    />

                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSetion;
