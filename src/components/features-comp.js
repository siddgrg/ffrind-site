import * as React from 'react';

const FeaturesComp = () => {
    return (
        <div className="features-layout flex align-items-center">
            <svg id="bg-vector" aria-labelledby="title" role="img" width="1182" height="917" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title lang="en" id="bg-vectorTitle">Background decorative vector</title>
                <path d="M176 464.977c-14.4-94-87.3333-137.167-122-147 653-721 1601 196.5 852 501.5-749 305.003-712-237-730-354.5z" fill="#2B4D5B" />
                <path d="M146.586 425.72c-10.451-94.521-81.5123-140.704-115.7368-151.98C713.469-419.283 1622.22 537.11 861.101 810.478 99.9862 1083.85 159.65 543.87 146.586 425.72z" stroke="#000" strokeWidth="6" />
            </svg>
            <div className="grid">
                <div className="flex flex-column justify-content-center">
                    <h1>Lorem ipsum is placeholder text used for previewing layouts and visual mockups.</h1>
                </div>
                <div className="flex justify-content-center">
                    <svg id="phone-mock" aria-labelledby="title" role="img" width="295" height="590" xmlns="http://www.w3.org/2000/svg">
                        <title lang="en" id="phoneMockTitle">Phone mock</title>
                        <rect x="17.6707" y="10" width="275.238" height="570" rx="27" transform="rotate(1.475 17.6707 3)" fill="none" stroke="#000" stroke-width="4" />
                        <rect y="20" width="268.15" height="570" rx="27" fill="#5BACA3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default FeaturesComp;