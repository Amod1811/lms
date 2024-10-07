import React from 'react'

import Counter from './Counter'
import PopularCourses from './PopularCourses'
import Review from './Review'
import TrendingCourses from './TrendingCourses '
import Nav from './Nav'
 




const Home = () => {
 return ( 

<>

{/* **************** MAIN CONTENT START **************** */}
<main>

  {/* =======================
Main Banner START */}
<br />
<br />
<br />
<br />
<br />
<br />
  <section className="position-relative overflow-hidden pt-5 pt-lg-3">
    {/* SVG START */}
    <figure className="position-absolute top-50 start-0 translate-middle-y ms-n7 d-none d-xxl-block">
      <svg className="rotate-74 fill-danger opacity-1">
        <circle cx="180.4" cy="15.5" r="7.7" />
        <path d="m159.9 22.4c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z" />
        <ellipse transform="matrix(.3862 -.9224 .9224 .3862 71.25 138.08)" cx="139.4" cy="15.5" rx="6.1" ry="6.1" />
        <circle cx="118.9" cy="15.5" r="5.4" />
        <path d="m98.4 20.1c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2.1 4.6-4.6 4.6z" />
        <path d="m77.9 19.3c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8z" />
        <path d="m57.3 18.6c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1z" />
        <path d="m36.8 17.8c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3z" />
        <circle cx="16.3" cy="15.5" r="1.6" />
        <circle cx="180.4" cy="38.5" r="7.7" />
        <path d="m159.9 45.3c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z" />
        <ellipse transform="matrix(.8486 -.5291 .5291 .8486 .7599 79.566)" cx="139.4" cy="38.5" rx="6.1" ry="6.1" />
        <circle cx="118.9" cy="38.5" r="5.4" />
        <path d="m98.4 43.1c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2.1 4.6-4.6 4.6z" />
        <circle cx="77.9" cy="38.5" r="3.8" />
        <path d="m57.3 41.5c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1c0 1.8-1.4 3.1-3.1 3.1z" />
        <path d="m36.8 40.8c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3z" />
        <circle cx="16.3" cy="38.5" r="1.6" />
        <circle cx="180.4" cy="61.4" r="7.7" />
        <path d="m159.9 68.3c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z" />
        <ellipse transform="matrix(.3862 -.9224 .9224 .3862 28.902 166.26)" cx="139.4" cy="61.4" rx="6.1" ry="6.1" />
        <circle cx="118.9" cy="61.4" r="5.4" />
        <path d="m98.4 66c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6c0 2.6-2.1 4.6-4.6 4.6z" />
        <path d="m77.9 65.2c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8z" />
        <path d="m57.3 64.5c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1z" />
        <path d="m36.8 63.7c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3z" />
        <circle cx="16.3" cy="61.4" r="1.6" />
        <circle cx="180.4" cy="84.4" r="7.7" />
        <path d="m159.9 91.3c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z" />
        <path d="m139.4 90.5c-3.4 0-6.1-2.7-6.1-6.1s2.7-6.1 6.1-6.1 6.1 2.7 6.1 6.1c0 3.3-2.7 6.1-6.1 6.1z" />
        <circle cx="118.9" cy="84.4" r="5.4" />
        <path d="m98.4 89c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2.1 4.6-4.6 4.6z" />
        <path d="m77.9 88.2c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8z" />
        <path d="m57.3 87.4c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1c0 1.8-1.4 3.1-3.1 3.1z" />
        <path d="m36.8 86.7c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3z" />
        <circle cx="16.3" cy="84.4" r="1.6" />
        <circle cx="180.4" cy="107.3" r="7.7" />
        <path d="m159.9 114.2c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z" />
        <path d="m139.4 113.4c-3.4 0-6.1-2.7-6.1-6.1s2.7-6.1 6.1-6.1 6.1 2.7 6.1 6.1-2.7 6.1-6.1 6.1z" />
        <circle cx="118.9" cy="107.3" r="5.4" />
        <path d="m98.4 111.9c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6c0 2.6-2.1 4.6-4.6 4.6z" />
        <path d="m77.9 111.2c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8z" />
        <path d="m57.3 110.4c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1z" />
        <path d="m36.8 109.6c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3c0.1 1.3-1 2.3-2.3 2.3z" />
        <circle cx="16.3" cy="107.3" r="1.6" />
        <circle cx="180.4" cy="130.3" r="7.7" />
        <path d="m159.9 137.2c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z" />
        <ellipse transform="matrix(.3862 -.9224 .9224 .3862 -34.62 208.52)" cx="139.4" cy="130.3" rx="6.1" ry="6.1" />
        <circle cx="118.9" cy="130.3" r="5.4" />
        <path d="m98.4 134.9c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2.1 4.6-4.6 4.6z" />
        <path d="m77.9 134.1c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8z" />
        <path d="m57.3 133.4c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1z" />
        <path d="m36.8 132.6c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3z" />
        <circle cx="16.3" cy="130.3" r="1.6" />
        <circle cx="180.4" cy="153.2" r="7.7" />
        <path d="m159.9 160.1c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z" />
        <ellipse transform="matrix(.3862 -.9224 .9224 .3862 -55.794 222.61)" cx="139.4" cy="153.2" rx="6.1" ry="6.1" />
        <circle cx="118.9" cy="153.2" r="5.4" />
        <path d="m98.4 157.8c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6c0 2.6-2.1 4.6-4.6 4.6z" />
        <circle cx="77.9" cy="153.2" r="3.8" />
        <path d="m57.3 156.3c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1z" />
        <path d="m36.8 155.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3z" />
        <circle cx="16.3" cy="153.2" r="1.6" />
        <circle cx="180.4" cy="176.2" r="7.7" />
        <path d="m159.9 183.1c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z" />
        <ellipse transform="matrix(.3862 -.9224 .9224 .3862 -76.968 236.7)" cx="139.4" cy="176.2" rx="6.1" ry="6.1" />
        <circle cx="118.9" cy="176.2" r="5.4" />
        <path d="m98.4 180.8c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2.1 4.6-4.6 4.6z" />
        <path d="m77.9 180c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8z" />
        <path d="m57.3 179.3c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1z" />
        <path d="m36.8 178.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3z" />
        <circle cx="16.3" cy="176.2" r="1.6" />
      </svg>
    </figure>
    {/* SVG END */}
    {/* SVG START */}
    <span className="position-absolute top-50 end-0 translate-middle-y mt-5 me-n5 d-none d-xxl-inline-flex">
      <svg className="fill-warning rotate-186 opacity-8">
        <path d="m35.4 54.2c0 0.6 0 1.1-0.1 1.7-0.9 9.3-9.2 16.1-18.5 15.1-4.5-0.4-8.5-2.6-11.4-6.1-2.8-3.5-4.2-7.9-3.7-12.4 0.9-9.3 9.2-16.1 18.5-15.1 4.5 0.4 8.5 2.6 11.4 6.1 2.4 3 3.8 6.8 3.8 10.7zm-33.4 0c0 3.8 1.3 7.5 3.8 10.4 2.8 3.4 6.8 5.5 11.2 6 9.1 0.9 17.2-5.8 18.1-14.8 0.4-4.4-0.9-8.7-3.7-12.1s-6.8-5.5-11.2-6c-9.2-0.8-17.3 5.8-18.2 14.9v1.6z" />
        <path d="m39 54.1c0 1.1-0.1 2.2-0.3 3.3-1.8 9.8-11.2 16.2-21 14.4-4.7-0.8-8.8-3.5-11.5-7.4-2.7-4-3.7-8.7-2.8-13.5 1.8-9.8 11.2-16.2 21-14.4 4.7 0.9 8.8 3.6 11.5 7.5 2.1 3 3.1 6.6 3.1 10.1zm-35.6 0.1c0 3.5 1.1 7 3.1 9.9 2.7 3.9 6.7 6.5 11.3 7.4 9.6 1.8 18.8-4.5 20.6-14.1 0.9-4.6-0.1-9.3-2.8-13.2s-6.7-6.5-11.3-7.4c-9.6-1.8-18.8 4.5-20.6 14.1-0.2 1.1-0.3 2.2-0.3 3.3z" />
        <path d="m42.8 54.2c0 1.7-0.2 3.3-0.7 5-2.7 10.2-13.3 16.3-23.5 13.6-5-1.3-9.1-4.5-11.7-8.9-2.5-4.5-3.2-9.7-1.9-14.7 2.7-10.2 13.3-16.3 23.5-13.6 5 1.3 9.1 4.5 11.7 8.9 1.7 3 2.6 6.3 2.6 9.7zm-38.1 0c0 3.3 0.9 6.5 2.5 9.4 2.5 4.4 6.6 7.5 11.5 8.8 10 2.7 20.4-3.3 23.1-13.4 1.3-4.9 0.6-9.9-1.9-14.3s-6.6-7.5-11.5-8.8c-10-2.6-20.4 3.4-23 13.4-0.5 1.6-0.7 3.3-0.7 4.9z" />
        <path d="m46.7 54.2c0 2.2-0.4 4.5-1.1 6.6-3.6 10.7-15.3 16.5-26.1 12.8-5.2-1.8-9.4-5.4-11.8-10.4-2.4-4.9-2.8-10.5-1-15.7 3.6-10.6 15.3-16.4 26-12.8l-0.1 0.2 0.1-0.2c5.2 1.8 9.4 5.4 11.8 10.4 1.5 2.9 2.2 6 2.2 9.1zm-40.8 0c0 3.1 0.7 6.1 2.1 8.9 2.4 4.8 6.5 8.4 11.6 10.2 10.5 3.6 22-2.1 25.6-12.6 1.7-5.1 1.4-10.6-1-15.4s-6.5-8.4-11.6-10.2c-10.5-3.6-22 2.1-25.6 12.6-0.7 2.1-1.1 4.3-1.1 6.5z" />
        <path d="m50.7 54.2c0 2.8-0.5 5.6-1.6 8.2-4.5 11.2-17.4 16.6-28.6 12.1-5.4-2.2-9.7-6.4-12-11.8s-2.3-11.4-0.1-16.8c4.5-11.2 17.4-16.6 28.6-12.1 5.4 2.2 9.7 6.4 12 11.8 1.1 2.8 1.7 5.7 1.7 8.6zm-43.6 0c0 2.8 0.6 5.7 1.7 8.4 2.2 5.3 6.4 9.4 11.8 11.6 11 4.5 23.6-0.9 28.1-11.9 2.2-5.3 2.1-11.2-0.1-16.5s-6.4-9.4-11.8-11.6c-11-4.5-23.6 0.9-28.1 11.9-1.1 2.6-1.6 5.3-1.6 8.1z" />
        <path d="m54.7 54.2c0 3.4-0.7 6.7-2.2 9.9-5.5 11.7-19.5 16.7-31.2 11.3-5.7-2.6-10-7.3-12.1-13.2s-1.8-12.2 0.8-17.9c5.5-11.7 19.4-16.8 31.1-11.3 5.7 2.6 10 7.3 12.1 13.2 1 2.6 1.5 5.3 1.5 8zm-46.5 0c0 2.7 0.5 5.3 1.4 7.9 2.1 5.8 6.3 10.4 11.9 13 11.5 5.4 25.3 0.4 30.6-11.1 2.6-5.6 2.9-11.8 0.8-17.6s-6.3-10.4-11.9-13l0.1-0.2-0.1 0.1c-11.5-5.4-25.3-0.4-30.6 11.1-1.5 3.1-2.2 6.5-2.2 9.8z" />
        <path d="m58.7 54.2c0 4-1 7.9-2.8 11.5-6.4 12.2-21.5 16.9-33.6 10.6-6-3.1-10.3-8.3-12.3-14.6s-1.4-13.1 1.7-19c6.3-12.2 21.4-17 33.6-10.6 5.9 3.1 10.3 8.3 12.3 14.6 0.8 2.5 1.1 5 1.1 7.5zm-49.5 0c0 2.5 0.4 5 1.1 7.4 2 6.3 6.3 11.4 12.1 14.4 12 6.3 26.9 1.6 33.1-10.4 3-5.8 3.6-12.5 1.7-18.7-2-6.3-6.3-11.4-12.1-14.4-12-6.3-26.9-1.6-33.1 10.4-1.9 3.5-2.8 7.4-2.8 11.3z" />
        <path d="m62.9 54.2c0 4.6-1.2 9.1-3.5 13.1-7.3 12.7-23.6 17.1-36.2 9.9-6.1-3.5-10.5-9.2-12.4-16s-0.9-14 2.6-20.1c7.3-12.7 23.5-17.1 36.2-9.8l-0.1 0.2 0.1-0.2c6.1 3.5 10.5 9.2 12.4 16 0.5 2.3 0.9 4.6 0.9 6.9zm-52.7-0.1c0 2.3 0.3 4.6 0.9 6.9 1.8 6.7 6.2 12.3 12.2 15.8 12.5 7.2 28.5 2.9 35.7-9.6 3.5-6.1 4.4-13.1 2.5-19.8-1.8-6.7-6.2-12.3-12.2-15.8-12.5-7.2-28.5-2.8-35.7 9.7-2.2 3.9-3.4 8.3-3.4 12.8z" />
        <path d="m67 54.2c0 5.2-1.4 10.3-4.2 14.8-8.2 13.2-25.5 17.2-38.7 9-6.4-4-10.8-10.2-12.5-17.5s-0.5-14.8 3.5-21.2c8.2-13.2 25.5-17.2 38.7-9 6.4 4 10.8 10.2 12.5 17.5 0.5 2.1 0.7 4.3 0.7 6.4zm-55.9-0.1c0 2.1 0.2 4.3 0.7 6.4 1.7 7.2 6.1 13.3 12.4 17.2 13 8.1 30.1 4.1 38.2-8.9 3.9-6.3 5.1-13.7 3.4-20.9s-6.1-13.3-12.4-17.2c-13-8.1-30.1-4.1-38.2 8.9-2.6 4.4-4.1 9.4-4.1 14.5z" />
        <path d="m71.2 54.2c0 5.8-1.7 11.5-5 16.4-9.1 13.7-27.6 17.4-41.2 8.3-6.6-4.4-11.1-11.1-12.7-18.9s0-15.7 4.4-22.3c9.1-13.6 27.6-17.4 41.2-8.3 6.6 4.4 11.1 11.1 12.7 18.9 0.4 2 0.6 4 0.6 5.9zm-59.1-0.1c0 1.9 0.2 3.9 0.6 5.9 1.5 7.7 6 14.3 12.5 18.6 13.5 9 31.7 5.3 40.7-8.2 4.3-6.5 5.9-14.4 4.3-22-1.5-7.7-6-14.3-12.5-18.6-13.5-9-31.7-5.3-40.7 8.2-3.3 4.8-4.9 10.4-4.9 16.1z" />
        <path d="m75.4 54.3c0 6.4-2 12.7-5.8 18-10 14.1-29.6 17.5-43.7 7.5-6.9-4.8-11.4-12-12.8-20.3s0.5-16.6 5.3-23.4c9.9-14.1 29.6-17.5 43.7-7.5 6.8 4.8 11.4 12 12.8 20.3 0.3 1.8 0.5 3.6 0.5 5.4zm-62.4-0.2c0 1.8 0.2 3.6 0.5 5.3 1.4 8.2 5.9 15.3 12.7 20.1 14 9.9 33.4 6.5 43.2-7.4 4.8-6.8 6.6-15 5.2-23.1-1.4-8.2-5.9-15.3-12.7-20.1-14-9.9-33.4-6.5-43.2 7.4-3.8 5.3-5.7 11.5-5.7 17.8z" />
        <path d="m79.6 54.3c0 7.1-2.3 13.9-6.5 19.7-10.9 14.6-31.6 17.7-46.3 6.8-7.1-5.3-11.7-13-13-21.7s0.9-17.4 6.2-24.5c10.9-14.6 31.6-17.7 46.3-6.8 7.1 5.3 11.7 13 13 21.7 0.2 1.5 0.3 3.1 0.3 4.8zm-65.8-0.2c0 1.6 0.1 3.2 0.4 4.8 1.3 8.7 5.8 16.3 12.8 21.5 14.5 10.8 35 7.7 45.7-6.7 5.2-7 7.4-15.6 6.1-24.2s-5.8-16.3-12.8-21.5l0.1-0.1v0.1c-14.5-10.8-35-7.7-45.7 6.7-4.3 5.7-6.6 12.4-6.6 19.4z" />
        <path d="m83.9 54.3c0 7.7-2.5 15.1-7.4 21.3-11.8 15.1-33.7 17.8-48.8 6-7.3-5.7-12-13.9-13.1-23.1s1.4-18.3 7.1-25.6c11.8-15.1 33.7-17.8 48.8-6 7.3 5.7 12 13.9 13.1 23.1 0.2 1.4 0.3 2.8 0.3 4.3zm-69.2-0.2c0 1.4 0.1 2.9 0.3 4.3 1.1 9.1 5.7 17.2 13 22.9 15 11.7 36.6 9 48.3-6 5.7-7.2 8.1-16.2 7-25.4-1.1-9.1-5.7-17.2-13-22.9-15-11.7-36.6-9-48.3 6-4.8 6.1-7.3 13.5-7.3 21.1z" />
        <path d="m88.1 54.3c0 8.3-2.8 16.4-8.2 22.9-12.7 15.6-35.7 18-51.3 5.3-7.6-6.1-12.3-14.9-13.3-24.5-1-9.7 1.8-19.2 8-26.7 12.7-15.6 35.7-18 51.3-5.3 7.6 6.1 12.3 14.9 13.3 24.5 0.2 1.2 0.2 2.5 0.2 3.8zm-72.6-0.2c0 1.2 0.1 2.5 0.2 3.8 1 9.6 5.6 18.2 13.1 24.3 15.5 12.5 38.3 10.2 50.9-5.2 6.1-7.5 8.9-16.9 7.9-26.5s-5.6-18.2-13.1-24.3c-15.5-12.6-38.3-10.2-50.9 5.2-5.2 6.5-8.1 14.5-8.1 22.7z" />
        <path d="m92.4 54.2c0 9-3.1 17.6-9 24.6-13.6 16.1-37.7 18.1-53.8 4.5-7.8-6.6-12.6-15.8-13.4-26-0.9-10.2 2.3-20 8.9-27.8 13.5-16 37.7-18.1 53.8-4.5 7.8 6.6 12.6 15.8 13.4 26 0.1 1.1 0.1 2.2 0.1 3.2zm-76-0.1c0 1.1 0 2.1 0.1 3.2 0.8 10.1 5.6 19.2 13.3 25.7 15.9 13.5 39.8 11.4 53.3-4.5 6.5-7.7 9.7-17.5 8.8-27.6-0.8-9.9-5.6-19.1-13.3-25.6-15.9-13.5-39.8-11.4-53.3 4.5-5.8 6.9-8.9 15.4-8.9 24.3z" />
        <path d="m96.7 54.2c0 9.7-3.5 18.9-9.9 26.2-14.5 16.6-39.8 18.3-56.3 3.8-8-7-12.8-16.7-13.6-27.4-0.7-10.6 2.8-20.9 9.8-28.9 14.5-16.6 39.8-18.2 56.3-3.8l-0.1 0.1 0.1-0.1c8 7 12.8 16.7 13.6 27.4 0.1 0.9 0.1 1.8 0.1 2.7zm-79.5-0.1c0 0.9 0 1.8 0.1 2.7 0.7 10.6 5.4 20.2 13.4 27.1 16.4 14.4 41.5 12.7 55.8-3.7 7-7.9 10.4-18.1 9.7-28.7-0.7-10.5-5.4-20.1-13.4-27.1-16.4-14.3-41.5-12.7-55.8 3.8-6.4 7.2-9.8 16.4-9.8 25.9z" />
        <path d="m101 54.2c0 10.3-3.8 20.1-10.7 27.9-15.4 17.1-41.8 18.4-58.9 3-8.3-7.5-13.1-17.7-13.7-28.8s3.2-21.8 10.7-30c15.4-17.1 41.8-18.4 58.9-3 8.3 7.5 13.1 17.7 13.7 28.8v2.1zm-83-0.1c0 0.7 0 1.4 0.1 2.2 0.6 11 5.4 21.1 13.6 28.5 16.9 15.3 43.1 13.9 58.4-3 7.4-8.2 11.2-18.8 10.6-29.8s-5.4-21.1-13.6-28.5c-16.9-15.3-43.1-13.9-58.4 3-7 7.7-10.7 17.4-10.7 27.6z" />
        <path d="m105.3 54.2c0 11-4.1 21.4-11.6 29.5-16.3 17.5-43.9 18.6-61.4 2.3-8.5-7.9-13.4-18.6-13.8-30.2-0.5-11.6 3.6-22.7 11.5-31.2 16.3-17.5 43.9-18.5 61.4-2.2 8.5 7.9 13.4 18.6 13.8 30.2 0.1 0.5 0.1 1.1 0.1 1.6zm-86.5-0.1v1.6c0.4 11.5 5.3 22.1 13.7 30 17.4 16.2 44.7 15.2 60.9-2.2 7.8-8.4 11.9-19.4 11.5-30.9s-5.3-22.1-13.7-30l0.1-0.1-0.1 0.1c-17.4-16.1-44.7-15.1-60.9 2.3-7.5 8-11.5 18.3-11.5 29.2z" />
        <path d="m109.6 54.2c0 11.7-4.4 22.7-12.5 31.2-17.2 18-45.9 18.7-63.9 1.5-8.7-8.3-13.7-19.6-14-31.6-0.3-12.1 4.2-23.6 12.5-32.3 17.2-18 45.9-18.7 63.9-1.5 8.7 8.3 13.7 19.6 14 31.6v1.1zm-90 0v1.1c0.3 12 5.2 23.1 13.9 31.4 17.9 17.1 46.3 16.4 63.4-1.5 8.3-8.7 12.7-20 12.4-32s-5.3-23.2-13.9-31.4c-17.9-17.1-46.4-16.4-63.4 1.5-8.1 8.4-12.4 19.3-12.4 30.9z" />
        <path d="m113.9 54.2c0 12.3-4.7 24-13.4 32.8-18.1 18.5-47.9 18.9-66.4 0.8-9-8.8-14-20.5-14.1-33-0.2-12.5 4.6-24.4 13.4-33.4 18.1-18.6 47.9-18.9 66.4-0.8l-0.1 0.1 0.1-0.1c9 8.8 14 20.5 14.1 33v0.6zm-93.6 0v0.5c0.1 12.4 5.1 24.1 14 32.8 18.4 18 48 17.6 65.9-0.7 8.7-8.9 13.4-20.7 13.3-33.1s-5.1-24.1-14-32.8c-18.4-18-48-17.6-65.9 0.7-8.6 8.8-13.3 20.3-13.3 32.6z" />
        <path d="m118.3 54.2c0 13-5.1 25.3-14.3 34.5-19 19-50 19-69 0-9.2-9.2-14.3-21.4-14.3-34.5 0-13 5.1-25.3 14.3-34.5 19-19 50-19 69 0l-0.1 0.1 0.1-0.1c9.2 9.2 14.3 21.5 14.3 34.5zm-97.2 0c0 12.9 5 25.1 14.2 34.2 18.9 18.9 49.6 18.9 68.4 0 9.1-9.1 14.2-21.3 14.2-34.2s-5-25.1-14.2-34.2c-18.8-18.9-49.5-18.9-68.4 0-9.2 9.1-14.2 21.3-14.2 34.2z" />
      </svg>
    </span>
    {/* SVG END */}
    {/* SVG START */}
    <figure className="position-absolute top-0 start-0 ms-5">
      <svg className="fill-orange opacity-4" width="29px" height="29px">
        <path d="M29.004,14.502 C29.004,22.512 22.511,29.004 14.502,29.004 C6.492,29.004 -0.001,22.512 -0.001,14.502 C-0.001,6.492 6.492,-0.001 14.502,-0.001 C22.511,-0.001 29.004,6.492 29.004,14.502 Z" />
      </svg>
    </figure>
    {/* SVG END */}
    {/* Content START */}
    <div className="container">
      {/* Title */}
      <div className="row align-items-center g-5">
        {/* Left content START */}
        <div className="col-lg-5 col-xl-6 position-relative z-index-1 text-center text-lg-start mb-7 mb-sm-0">
          {/* SVG */}
          <figure className="fill-warning position-absolute bottom-0 end-0 me-5 d-none d-xl-block">
            <svg width="42px" height="42px">
              <path d="M21.000,-0.001 L28.424,13.575 L41.999,20.999 L28.424,28.424 L21.000,41.998 L13.575,28.424 L-0.000,20.999 L13.575,13.575 L21.000,-0.001 Z" />
            </svg>
          </figure>
          {/* SVG */}
          <figure className="fill-success position-absolute top-0 start-50 translate-middle-x mt-n5 ms-5">
            <svg width="22px" height="21px">
              <path d="M10.717,4.757 L14.440,-0.001 L14.215,6.023 L20.142,4.757 L16.076,9.228 L21.435,12.046 L15.430,12.873 L17.713,18.457 L12.579,15.252 L10.717,20.988 L8.856,15.252 L3.722,18.457 L6.005,12.873 L-0.000,12.046 L5.359,9.228 L1.292,4.757 L7.220,6.023 L6.995,-0.001 L10.717,4.757 Z" />
            </svg>
          </figure>
          {/* Title */}
          <h1 className="mb-0 display-6">Limitless learning at your
            <span className="position-relative">fingertips
              {/* SVG START */}
              <span className="position-absolute top-50 start-50 translate-middle ms-3 z-index-n1">
                <svg width="300px" height="62.1px" enableBackground="new 0 0 366 62.1" viewBox="0 0 366 62.1" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-warning" d="m322.5 25.3c0 1.4 2.9 0.8 3.1 1.6 0.8 1.1-1.1 1.3-0.6 2.4 13.3 0.9 26.9 1.7 40.2 4-2.5 0.7-4.9 1.6-7.3 1.1-4-0.9-8.2-1-12.2-1.2-8.5-0.5-16.9-1.9-25.5-1.7h-3.1c2.6 0.6 4.8 0.4 5.7 2.2-7.3 0.4-14.1-0.8-21.2-1.1-0.2 0.6-0.5 1.2-0.8 1.8 21.3 0.7 42.5 1.6 64.3 4.6-4.2 1.6-7.7 1-10.8 0.8-6.8-0.5-13.5-1.3-20.3-1.9-0.9-0.1-2.3-0.1-2.9 0.2-2.2 1.6-4.3 0.6-7 0.4 1.4-1 2.5 0.5 3.9-0.8-5.6-1-10.7 0.6-15.9 0s-10.5-0.6-16.6-0.8c2 1.6 4.6 1.3 6.2 1.4 4.9 0 9.9 0.8 14.8 0.7 5.3-0.1 10.4 0.5 15.5 0.9 3.2 0.3 6.7-0.1 9.9-0.4 1.1-0.1 0.5 0.3 0.6 0.6 0.5 0.9 2.2 0.8 3.6 0.8 5.1-0.1 10.1 0.6 14.8 1.5 0.8 0.1 1.5 0 1.7 0.7 0 0.7-0.8 0.6-1.5 0.8-3.9 1.2-7.4-0.2-11.1-0.2-2 0-4.3-1.5-6 0.5-0.3 0.4-1.4 0.1-2.2-0.1-4.5-0.8-9.1-0.5-13.8-1.5-2.3-0.5-5.6 0.1-8.4 0.5-4 0.5-8-0.7-12.1-0.9-3.4-0.2-7.1-0.5-10.5-0.7-7.1-0.3-14.2-1.2-22.3-0.4 4.9 1.1 9.4 1.2 13.8 1.2 9.7 0 19.2 2.3 28.9 1.6 7.3 3.2 15.9 1.5 23.8 2.9 4.9 0.8 10.1 0.8 15.2 1.2 0.5 0 0.8 0.3 1.1 0.9-20-2.1-40.2-1.4-60.8-3 4.9 2.1 10.8-0.3 15.3 2.7-8 1.9-15.8-0.9-23.5-0.1 2.8 1.4 7.1 1.1 9.3 3.3 0.5 0.5 0.2 1.1-1.2 1.3 2.3 1 3.4-2.1 5.7-0.4 0.2-0.6 0.2-1 0.3-1.5 0.8-0.3 2 0.8 1.5 1.5-0.2 0.1 0 0.3 0 0.5 18.7 0.4 37.3 1.7 56.2 3.6-1.7 1.1-2.8 1.2-4.2 1.1-7.1-0.5-14.1-0.9-21.2-1.4-3.1-0.2-6.3-0.4-9.4-0.4-7.6-0.2-15-0.7-22.4-1-9-0.4-17.9-0.1-26.9-0.1-1.2 0-2.9-0.4-3.9 1 14.8 0.3 29.7 0.6 44.4 1.1 14.8 0.6 29.9 1.3 44.2 4.2-4.3 1-8.8 0.9-13 0.5-5.3-0.5-10.5-1.1-15.8-1.2-11.4-0.3-22.9-0.9-34.3-1.2-17.6-0.4-35.4-0.3-53.1-0.4-10.8-0.1-21.7-0.2-32.5 0-17.8 0.4-35.7 0.2-53.5 0.5-13.1 0.3-26.3 0.1-39.4 0.5-11.1 0.3-22.4 0.6-33.6 1-13.1 0.6-26.1 0.2-39.3 0.4-3.9 0.1-7.6 0.2-11.8-0.2 0.9-1.2 2.3-1.3 3.9-1.3 8.4 0.2 16.6-0.4 24.9-0.9 3.9-0.2 7.9-0.4 11.9 0.2 2.5 0.4 5.3-0.3 8-0.4 7.3-0.4 14.7-0.7 22-0.9 11.9-0.5 23.7-1.2 35.6-0.8 7.7 0.2 15.3-0.6 22.9-0.1 2.3 0.2 4.3-0.5 6.5-1h-17.6c-9.6 0-19-0.1-28.6 0-8 0.1-16.1 0.3-24 0.8-2.6 0.2-5.4 0.1-8.2 0.1-10.1 0.3-20.1 0.6-30.2 0.5-5.4 0-10.7-0.1-15.9 0.6-2.3 0.3-4-1.3-6.5-0.6 0.2 0.4 0.5 0.9 0.6 1.5-1.9 0-4 0.4-4.9-0.1-4.2-2.2-9.4-1.5-14.1-2.3-1.7-0.3-3.7-0.1-4.3-1.5-0.5-1.3 1.9-1.5 2.6-2.6-4.2-1.4-4.6-5-8.5-7.2-1.5 0.2-0.9 2.8-4.2 1.3 0.3 2.4 4.5 3.9 2.8 6.4-2.3 0.3-3.2-0.8-4.2-1.7-2.5-4-5.1-8.4-5.1-12.7 0.2-6.8 0.2-13.8 3.6-20.4 0.3-0.5 0.3-1 0.8-1.4 0.9-0.9 1.2-2.4 3.6-2.1 2.2 0.2 2.5 1.5 2.6 2.6 0.2 1.4 1.5 1.8 3.2 2.5 0.9-1.4 0.5-2.9 2.6-3.7 0.2-0.1 0.3-0.4 0.3-0.4-3.1-2.2 1.2-2.2 2.3-3.3-3.1-1.8-4-4.3-3.7-7-1.5-0.3-3.1-0.4-4.5 0-1.7 0.6-2.2-0.5-2.9-1 0.6-0.5 0.8-1.1 2.2-1.3 7.6-0.9 15.2-1.7 22.9-2 20-0.7 39.9-0.9 59.9-1 11.9-0.1 23.8 0.4 35.6 1.1 3.6 0.2 7.1-0.9 10.7-0.5 7.9 0.9 15.8 0.3 23.8 0.5 7.3 0.1 14.4-0.6 21.7-0.1 12.2 0.9 24.4 0.3 36.7 0.6 9.4 0.3 18.9 0.4 28.2 1 11.9 0.7 23.8 1.3 35.6 2 11.1 0.6 22.4 0.5 33.3 2 7.1 1 14.4 1.1 21.3 2.4 4 0.7 8.2 1.6 12.4 1.9 2.2 0.2 0.9 1 1.5 1.5-4-0.8-8-0.8-12.1-1.4-4.3-0.7-8.5-1-12.8 0.4-2.9 1-6.3 0.2-9.3-0.1-10.2-1.1-20.6-1.6-30.8-2.4-12.1-0.9-24.3-1.4-36.4-2.1-9.9-0.6-20-0.5-29.9-1-11.4-0.6-22.7 0-34.2-0.5-6.3-0.3-12.3-0.3-18.5-0.4-4.2-0.1-8.4 1.3-12.8 0.3 0.6 0.2 1.2 0.7 1.9 0.7 10.5 0 20.9 1.9 31.6 1.7 6.5-0.1 13.1 0.2 19.8 0.8 3.2 0.3 6.3-0.4 9.7-0.1 7.6 0.7 15.5 0.5 23 0.8 12.4 0.5 24.7 0.4 37.1 1.1 13.3 0.7 26.8 2.1 39.9 4.1 6.2 0.9 12.7 1.5 19.2 1.7 0.6 0 1.1 0.1 1.5 0.5-4.6 0.1-9.3 0-13.9-0.5-0.6 1.1 1.4 0.9 1.5 1.9-9.7 1.6-19.6-1.4-29.4-0.1 2.2 1.4 5.1 1 7.4 1 7.3 0.1 14.1 1.3 21.2 1.9 2.8 0.3 5.9 0 8.5 0.8 1.5 0.5 4.6-1.1 4.9 1.3 4-0.7 7.3 1.5 11.1 1.2 4-0.3 7.7 0.6 11.6 1.1 0.8 0.1 2.2 0.3 2.3 1.1 0.2 1-1.1 1.2-2 1.5-3.4 1-6.7-0.4-10.1-0.4-0.9 0-2-0.2-2.9-0.2-9.4 0.1-18.8-1.3-28.3-1.8-6-0.4-12.1-0.9-18.1-1.3 0 0.2 0 0.4-0.2 0.6 6.1 0.5 12.1 1.4 18.3 0.7z" />
                </svg>
              </span>
              {/* SVG END */}
            </span>
          </h1>
          {/* Content */}
          <p className="my-4 lead">Online learning and teaching marketplace with 5K+ courses &amp; 10M students. Taught by experts to help you acquire new skills.</p>
          {/* Info */}
          <ul className="list-inline position-relative justify-content-center justify-content-lg-start mb-4">
            <li className="list-inline-item me-2"> <i className="bi bi-patch-check-fill h6 me-1" />Learn with experts</li>
            <li className="list-inline-item me-2"> <i className="bi bi-patch-check-fill h6 me-1" />Get certificate</li>
            <li className="list-inline-item"> <i className="bi bi-patch-check-fill h6 me-1" />Get membership</li>
          </ul>
          <div className="d-sm-flex align-items-center justify-content-center justify-content-lg-start">
            {/* Button */}
            <a href="#" className="btn btn-lg btn-danger-soft me-2 mb-4 mb-sm-0">Get Started</a>
            {/* Video button */}
            <div className="d-flex align-items-center justify-content-center py-2 ms-0 ms-sm-4">
              <a data-glightbox data-gallery="office-tour" href="https://www.youtube.com/embed/tXHviS-4ygo" className="btn btn-round btn-primary-shadow mb-0 overflow-visible me-7"> 
                <i className="fas fa-play" />
                <h6 className="mb-0 ms-3 fw-normal position-absolute start-100 top-50 translate-middle-y">Watch video</h6>
              </a>
            </div>
          </div>
        </div>
        {/* Left content END */}
        {/* Right content START */}
        <div className="col-lg-7 col-xl-6 text-center position-relative">
          {/* SVG decoration */}
          <figure className="position-absolute bottom-0 start-50 translate-middle-x mt-4 mb-0">
            <svg className="pt-5 pt-sm-0" width="550px" height="538px" viewBox="0 0 554 544" style={{enableBackground: 'new 0 0 554 544'}} xmlSpace="preserve">
              <path className="fill-blue" d="M423.3,77.2c49.5,32.5,100.4,67.2,118.4,114.5s3.5,107.1-15.4,165.7c-18.7,58.6-41.8,116.1-84,148.6 c-42.5,32.8-104.2,40.2-163.8,37.3c-59.5-3.2-116.8-17.1-164.7-47.9c-48.3-30.6-87.2-78.2-102-131.6C-3,310.5,6.6,251,25.3,194.7 C43.6,138,70.7,84.3,114.1,49.5C157.2,14.8,216.7-1,270.8,6.4C324.8,14.2,373.4,44.7,423.3,77.2z" />
            </svg>
          </figure>
          {/* SVG decoration */}
          <figure className="position-absolute bottom-0 start-50 translate-middle-x mb-n5 z-index-9">
            <svg width="686px" height="298px" viewBox="0 0 686 298">
              <path className="fill-body" d="M60.9,0L0.1,0C0,0,0,0,0,0.1c1.5,5,0,249.5,11.5,297.9c0,0,649.1,16.1,669-4.6c0,0,0,0,0,0c0.2-0.4,1.2-177.2,4.2-293.3 c0,0,0-0.1-0.1-0.1l-72.9,0c0,0-0.1,0-0.1,0c-0.8,3-43.3,162.3-105.9,209.1c0,0-111.4,87.2-309.9-6C195.9,203.1,66.1,143.2,60.9,0 C61,0,60.9,0,60.9,0z" />
            </svg>
          </figure>
          {/* SVG decoration */}
          <figure className="position-absolute top-50 start-50 translate-middle mt-n7">
            <svg className="fill-warning">
              <path d="m22.3 57.6v0.1c-0.1 0.3 0.1 0.6 0.3 0.7 0.3 0.2 0.7 0.2 1 0.2h1.4c1.3 0.1 2.6 0.1 3.9 0.1 1.2 0 2.4 0 3.7 0.2s2.6 0.1 3.9 0.2c0.8 0.1 0.8-1.2 0-1.3-1.2-0.1-2.5 0-3.7-0.2-1.2-0.1-2.3-0.2-3.4-0.2-1.2 0-2.4 0-3.6-0.1-0.6 0-1.1-0.1-1.7-0.1-0.2 0-0.7 0.1-0.8 0 0.1 0.2 0.2 0.5 0.3 0.7v-0.1c0.2-0.7-1.1-1-1.3-0.2z" />
              <path d="m23.3 57.6c-0.1-0.5-0.2-0.8-0.1-1.3v-1.2-2.9c0-0.4-0.1-0.7-0.2-1.1 0-0.4 0-0.8-0.1-1.1-0.1-0.2-0.3-0.4-0.5-0.6-0.4-0.3-0.7-0.5-1-0.9-1.2-1.3-2.7-2.3-3.8-3.7s-1.8-2.9-2.2-4.6c-0.1-0.5-0.2-1-0.3-1.4s-0.2-0.8-0.2-1.3c0-0.8 0-1.7-0.1-2.5-0.1-0.7-0.3-1.5-0.2-2.3s0.5-1.8 0.9-2.5c0.8-1.5 1.5-3.1 2.6-4.4 0.5-0.6 0.9-1.3 1.5-1.8 0.6-0.6 1.3-1.2 1.9-1.8 0.7-0.5 1.4-1.1 2.2-1.5 0.7-0.3 1.4-0.4 2.1-0.6 0.7-0.1 1.3-0.2 2-0.4 0.9-0.3 1.7-0.6 2.7-0.8 0.9-0.2 1.8-0.1 2.8-0.1 1 0.1 2 0.1 2.9 0.4 0.8 0.2 1.6 0.3 2.3 0.6 0.8 0.3 1.5 0.8 2.2 1.4 1.4 1.2 2.7 2.6 3.8 4.1 0.5 0.7 1.1 1.5 1.5 2.2 0.4 0.8 0.8 1.7 1.2 2.5 0.7 1.7 0.7 3.6 0.7 5.5 0 0.9-0.1 1.8-0.3 2.6l-0.6 2.7c-0.5 1.8-1.7 3.5-3 4.9-0.6 0.7-1.5 1.3-2.3 1.8-0.4 0.3-0.9 0.5-1.3 0.7s-0.7 0.4-1.1 0.6c-0.7 0.2-1.7 0.3-2 1-0.1 0.4-0.1 0.7-0.1 1.1 0 0.5-0.1 1-0.2 1.4-0.1 0.9-0.2 1.9-0.3 2.8-0.1 0.5 0 1 0 1.5 0 0.3 0 0.9-0.1 1.2-0.4 0.7 0.7 1.4 1.1 0.7 0.3-0.5 0.3-1.4 0.3-2.1 0-1 0.1-1.9 0.2-2.9 0.1-0.9 0.3-1.8 0.3-2.7v-0.5c0-0.2-0.1-0.1 0.2-0.1 0.4 0 0.9-0.3 1.3-0.4 1.6-0.7 3.1-1.7 4.4-2.8 0.6-0.5 1.1-1.3 1.7-1.9 0.6-0.7 1-1.6 1.5-2.4 0.4-0.7 0.6-1.5 0.8-2.3 0.2-1 0.5-2 0.7-2.9 0.3-2 0.2-4-0.1-5.9-0.1-0.9-0.4-1.6-0.7-2.4-0.4-0.9-0.8-1.9-1.3-2.7-1-1.7-2.2-3.3-3.6-4.6-1.2-1.2-2.4-2.4-4-3.1-0.8-0.3-1.6-0.4-2.4-0.7-1-0.3-1.9-0.4-3-0.5-1-0.1-2-0.2-3 0-1 0.1-2 0.5-2.9 0.8-1.5 0.5-3 0.5-4.5 1.1-1.6 0.7-2.9 1.9-4.1 3-0.3 0.3-0.6 0.5-0.9 0.8s-0.5 0.7-0.7 1c-0.3 0.4-0.6 0.7-0.9 1-0.3 0.4-0.6 0.8-0.8 1.2-0.5 0.8-0.8 1.6-1.3 2.5-0.4 0.8-0.8 1.6-1.1 2.5-0.2 0.8-0.4 1.5-0.3 2.4s0.2 1.8 0.2 2.7c0 2 0.6 4 1.2 5.9 0.7 1.9 2 3.6 3.5 5 0.8 0.7 1.6 1.4 2.3 2.2l0.5 0.5c0.2 0.1 0.4 0.2 0.5 0.4 0.2 0.2 0.2 0.9 0.2 1.2 0.2 1.1 0.1 2.3 0.1 3.4v1.4c0 0.5 0.1 0.9 0.2 1.4 0.1 0.7 1.3 0.4 1.1-0.4z" />
              <path d="m27.1 56.7c0.1 0 0.1 0 0 0 0.4 0 0.7 0.1 1 0.1-0.2-0.4-0.1-1.1 0-1.5 0-0.8 0.1-1.7 0.1-2.5 0-1.6 0-3.2-0.1-4.8-0.2-3.1-0.1-6.3-0.5-9.4-0.1-0.7-0.2-1.3-0.4-2-0.1-0.7-0.2-1.3-0.6-1.9-0.7-0.9-1.9-1-2.9-0.6-1.1 0.5-1.8 1.4-1.6 2.7 0.1 0.6 0.2 1.2 0.6 1.7s0.9 1 1.4 1.4c2.1 1.7 5 2.5 7.7 2 1.4-0.3 2.8-0.8 4.2-1.3 1.3-0.5 2.3-1.2 3.2-2.2 0.7-0.8 1.3-2.3 1.1-3.3-0.3-1.1-1.5-1.8-2.6-1.9-1.3-0.1-2.3 0.4-3.1 1.3-0.9 1.1-1.3 2.3-1.7 3.6-0.4 1.6-0.3 3.3-0.3 4.9-0.1 1.7-0.1 3.4-0.1 5.1-0.1 1.8-0.2 3.5-0.4 5.3-0.1 0.9-0.1 1.7-0.1 2.6 0 0.7-0.1 1.5 0.1 2.2 0.2 0.8 1.5 0.5 1.3-0.3-0.1-0.4-0.1-1-0.1-1.5 0-0.6 0-1.3 0.1-1.9l0.3-3.9c0.2-2.5 0.2-5 0.3-7.5 0-1.2 0-2.5 0.1-3.7 0.1-0.6 0.3-1.2 0.5-1.8s0.3-1.1 0.6-1.5c0.6-0.9 1.3-1.6 2.4-1.5 0.5 0 1 0.2 1.3 0.5 0.4 0.5 0.2 1.1 0 1.6-0.3 1-1.3 1.9-2.2 2.4-1 0.5-2.2 0.8-3.2 1.1-1.3 0.4-2.5 0.8-3.8 0.6-1.1-0.1-2.3-0.5-3.3-1-0.4-0.2-0.9-0.5-1.3-0.8s-0.9-0.7-1.2-1.2c-0.2-0.4-0.4-1.1-0.3-1.6 0.2-0.5 0.7-0.8 1.2-0.9 1.3-0.3 1.3 1.2 1.5 2.1 0.3 1.3 0.4 2.5 0.4 3.8 0.2 2.9 0.3 5.8 0.4 8.7 0.1 1.5 0 2.9-0.1 4.4 0 0.9-0.4 2.4 0.2 3.3 0.2 0.3 0.6 0.4 0.9 0.2 0.2-0.1 0.3-0.2 0.4-0.4 0.1-0.7-1-1.4-1.4-0.7z" />
              <path d="m17.2 44.3c-0.4-0.3-0.4-0.9-0.7-1.2-0.4-0.5-0.8-1.1-1.1-1.7-0.6-1.2-0.9-2.6-1.1-4-0.1-0.6-0.3-1.2-0.3-1.8v-2.1c0-0.4-0.1-0.7-0.1-1.1 0-0.3 0.1-0.7 0.2-1 0.1-0.7 0.4-1.4 0.7-2.1 0.6-1.3 1.5-2.5 2.3-3.6 0.8-1 1.7-2 2.6-3s2.3-1.7 3.5-2.3c0.7-0.3 1.3-0.6 2-0.8 0.6-0.2 1.3-0.2 1.9-0.4 0.7-0.2 1.4-0.2 2.1-0.2 0.3 0 0.6-0.1 0.8-0.1 0.4-0.1 0.9 0 1.3 0 1.4 0 2.8 0.1 4.2 0.7 0.6 0.2 1.3 0.4 1.8 0.7 0.6 0.3 1.2 0.6 1.8 0.8 1 0.5 2 1.4 2.8 2.1 1 0.9 1.7 1.9 2.4 3 0.6 1 1.6 1.9 1.9 3 0.2 0.7 0.5 1.3 0.6 2.1 0.1 0.7 0 1.5 0 2.2 0 1.5 0 2.9-0.1 4.4-0.1 0.9-0.2 1.7-0.3 2.6-0.1 0.4-0.1 0.8-0.1 1.2s-0.2 0.7-0.3 1c0 1.3-1 2.6-2.1 3.6-0.5 0.4-1 0.8-1.6 1.1-0.6 0.2-1.2 0.6-1.8 0.9s-1.3 0.5-1.9 0.8-1 0.4-1.3 1c-0.3 0.8 0.9 1.1 1.3 0.3-0.1 0.2 0.1 0.1 0.2 0 0.1 0 0.2-0.1 0.3-0.2 0.3-0.1 0.6-0.2 0.9-0.4 0.6-0.3 1.3-0.5 1.9-0.8 0.5-0.3 1.1-0.5 1.6-0.9 0.6-0.4 1.1-0.7 1.6-1.2 1-0.9 1.9-2.2 2.4-3.4 0.2-0.6 0.5-1.2 0.6-1.8l0.3-2.4c0.2-1.6 0.3-3.3 0.3-4.9s0.1-3.1-0.4-4.7c-0.2-0.6-0.4-1.2-0.7-1.7-0.3-0.6-0.7-1.1-1.1-1.6-0.9-1.1-1.5-2.4-2.5-3.4-1.9-1.9-4-3.5-6.6-4.3-0.7-0.2-1.3-0.5-1.9-0.7-0.8-0.2-1.5-0.4-2.4-0.4-0.8 0-1.5-0.1-2.3-0.1-0.7 0-1.5 0.2-2.3 0.2-0.7 0.1-1.4 0.3-2.1 0.4-0.8 0.1-1.4 0.3-2.2 0.5-1.4 0.5-2.8 1.3-4.1 2.1-0.6 0.4-1 0.8-1.5 1.3-0.5 0.6-1 1.1-1.5 1.6-1 1.1-1.9 2.3-2.7 3.6-0.9 1.4-1.4 3-1.6 4.6-0.1 0.8 0 1.7 0.1 2.6 0 0.7-0.1 1.4 0 2.2 0.2 0.8 0.3 1.6 0.4 2.4 0.2 0.8 0.5 1.7 0.8 2.5 0.3 0.7 0.7 1.4 1.2 2 0.2 0.3 0.3 0.5 0.5 0.9 0.1 0.3 0.3 0.6 0.5 0.8 0.7 0.5 1.6-0.4 0.9-0.9z" />
              <path d="m22.8 62.6c1.1-0.4 2.2-0.4 3.4-0.5 1.1-0.1 2.2-0.1 3.3-0.1s2.2 0.1 3.2 0.3c1.1 0.2 2.2 0.5 3.3 0.4-0.2-0.4-0.3-0.7-0.5-1.1-0.2 0.3-0.7 0.3-1 0.5-0.6 0.2-1.1 0.4-1.7 0.5-1.2 0.4-2.5 0.7-3.7 1.1s-2.4 0.7-3.6 1.1c-0.6 0.2-1.2 0.3-1.8 0.5s-1.3 0.5-1.8 0.5c0.1 0.4 0.1 0.9 0.2 1.3 1.1-0.4 2.3-0.4 3.4-0.4 1.2-0.1 2.4-0.1 3.6-0.1s2.4 0.2 3.6 0.6c0.9 0.3 2.1 0.8 2.9 0.3 0.7-0.4 0.1-1.6-0.7-1.1-0.4 0.2-1.2-0.2-1.6-0.3-0.6-0.2-1.1-0.4-1.7-0.5-1.1-0.2-2.2-0.3-3.3-0.3s-2.3 0.1-3.4 0.1c-1.1 0.1-2.2 0.1-3.3 0.5-0.7 0.2-0.6 1.3 0.2 1.3 0.6 0 1.2-0.2 1.8-0.4s1.2-0.4 1.9-0.5c1.4-0.4 2.7-0.8 4.1-1.2 1.3-0.4 2.6-0.8 4-1.2 0.5-0.2 1.1-0.4 1.6-0.5 0.4-0.1 0.9-0.3 1.2-0.6 0.3-0.4 0.2-1.2-0.5-1.1-1.1 0.1-2.3-0.3-3.4-0.5s-2.2-0.3-3.4-0.3-2.4 0.1-3.6 0.2c-1.1 0.1-2.2 0.2-3.2 0.5-0.7 0-0.3 1.3 0.5 1z" />
              <path d="m22.8 57.6c-0.1-0.3-0.1-0.7-0.2-1s-0.1-0.7-0.1-1 0.1-0.7 0.1-1-0.1-0.7-0.1-1v-1c0-0.3-0.1-0.7-0.1-1v-1c0-0.1 0-0.3-0.1-0.4v-0.2 0c-0.4 0.1-0.8 0.1-1.2 0.2 0 0 0 0.1 0.1 0.1 0.4 0.7 1.5 0.1 1.1-0.7 0 0 0-0.1-0.1-0.1-0.3-0.5-1-0.3-1.2 0.2-0.1 0.3 0 0.5 0.1 0.8s0 0.6 0 1 0.1 0.7 0.1 1.1c0 0.3-0.1 0.7 0 1 0 0.3 0.1 0.7 0.1 1 0 0.4 0 0.8-0.1 1.2 0 0.4 0 0.7 0.1 1.1s0.1 0.8 0.2 1.1c0.3 0.8 1.6 0.4 1.3-0.4z" />
              <path d="m19.5 21.6c-1.6 1.9-3.2 3.9-4.4 6.1-1.1 2.2-1.8 4.6-2.1 7-0.3 2.5 0.3 4.9 1.2 7.3 0.9 2.3 2.4 4.1 4.3 5.5 0.7 0.5 1.3-0.6 0.7-1.1-0.9-0.7-1.7-1.4-2.4-2.3s-1.1-2-1.5-3.1c-0.8-2.1-1.1-4.3-0.8-6.5s1-4.4 2-6.3c1.1-2.1 2.6-3.9 4.1-5.7 0.3-0.6-0.6-1.5-1.1-0.9z" />
              <path d="m29.1 4.1c-0.1 0.5-0.1 1-0.1 1.4v1.4c0 1-0.1 2-0.2 3 0 0.3 0.3 0.6 0.6 0.6 0.4 0 0.6-0.3 0.6-0.6 0.1-1 0.2-1.9 0.2-2.9v-1.4c0-0.4 0-0.8 0.1-1.2 0.3-0.7-0.9-1.1-1.2-0.3z" />
              <path d="m2.2 15c0.5 0.2 1 0.6 1.4 1 0.5 0.4 1.1 0.8 1.6 1.2 1.2 0.8 2.4 1.7 3.5 2.6 0.3 0.2 0.7 0.3 0.9 0 0.2-0.2 0.3-0.7 0-0.9-1.2-1-2.5-1.9-3.8-2.8-0.6-0.4-1.1-0.8-1.6-1.2-0.5-0.5-1.1-0.9-1.7-1.1-0.3-0.1-0.7 0.1-0.8 0.5-0.1 0.2 0.1 0.5 0.5 0.7z" />
              <path d="m50.1 21.3c2.3-1.7 4.6-3.5 6.7-5.4 0.6-0.6-0.3-1.5-0.9-0.9-2.1 1.8-4.2 3.6-6.5 5.2-0.3 0.2-0.4 0.6-0.2 0.9 0.2 0.2 0.6 0.4 0.9 0.2z" />
              <path d="m30.3 2.6v-0.1c-0.4-0.1-0.9-0.1-1.3-0.2 0.1 1.5 0.2 2.9 0.1 4.4 0 1.5-0.1 2.9-0.1 4.4 0 0.8 1.3 0.8 1.3 0 0-1.5 0.1-2.9 0.2-4.4s0-2.9-0.1-4.4c-0.1-0.7-1.1-0.9-1.3-0.2v0.1c-0.3 0.9 1 1.2 1.2 0.4z" />
              <path d="m1.1 14.2c0 0.6 0.6 1.1 1.1 1.4s1.1 0.5 1.7 0.7h0.1c0.1 0-0.1-0.1 0 0 0.2 0.1 0.5 0.2 0.7 0.3 0.5 0.2 0.9 0.5 1.4 0.7 0.9 0.5 1.7 1 2.5 1.6 0.3 0.2 0.7 0.3 0.9 0 0.2-0.2 0.3-0.7 0-0.9-1.5-1.1-3.2-2-4.9-2.8-0.4-0.2-0.9-0.3-1.2-0.5-0.3-0.1-0.5-0.2-0.7-0.4l-0.2-0.2c0.1 0 0 0 0 0.1v0c0-0.8-1.3-0.8-1.4 0z" />
              <path d="m52.1 19.7 0.3-0.3c-0.1 0 0 0 0 0 0.1-0.1 0.3-0.2 0.4-0.3l0.9-0.6c0.6-0.4 1.2-0.8 1.8-1.1 0.3-0.2 0.4-0.6 0.2-0.9s-0.6-0.4-0.9-0.2c-1.3 0.7-2.6 1.5-3.7 2.5-0.3 0.2-0.2 0.7 0 0.9 0.4 0.3 0.7 0.3 1 0z" />
              <path d="m20.2 49.3c-0.1 0 0 0 0 0 0.1 0.2 0.1 0.3 0.1 0.4 0.1 0.3 0.2 0.6 0.4 0.9 0.3 0.7 0.5 1.5 0.7 2.3s0.2 1.7 0.3 2.5c0.1 0.7 0.1 1.6 0.5 2.2 0.4 0.7 1.6 0.1 1.1-0.7-0.2-0.3-0.2-0.6-0.2-1 0-0.5-0.1-0.9-0.1-1.4-0.1-0.9-0.2-1.8-0.4-2.7-0.2-0.8-0.5-1.5-0.8-2.3-0.2-0.5-0.3-1.2-0.8-1.4-0.3-0.1-0.7-0.1-0.9 0.2-0.3 0.4-0.3 0.9 0.1 1z" />
            </svg>
          </figure>
          {/* Icon logos START */}
          <div className="p-2 bg-white shadow rounded-3 position-absolute top-50 start-0 translate-middle-y mt-n7 d-none d-sm-block">
            <img src="assets/images/client/science.svg" alt="Icon" />
          </div>
          <div className="p-2 bg-white shadow rounded-3 position-absolute top-0 end-0 me-5">
            <img src="assets/images/client/angular.svg" alt="Icon" />
          </div>
          <div className="p-2 bg-white shadow rounded-3 position-absolute top-50 end-0 translate-middle-y mt-5 ms-5 d-none d-lg-block z-index-9">
            <img src="assets/images/client/figma.svg" alt="Icon" />
          </div>
          {/* Icon logos END */}
          {/* Congratulations message */}
          <div className="p-3 bg-blur border border-light shadow rounded-4 position-absolute bottom-0 start-0 z-index-9 d-none d-xl-block mb-5 ms-5">
            <div className="d-flex justify-content-between align-items-center">
              {/* Icon */}
              <span className="icon-lg bg-warning rounded-circle"><i className="fas fa-envelope text-white" /></span>
              {/* Info */}
              <div className="text-start ms-3">
                <h6 className="mb-0 text-white">Congratulations <span className="ms-4"><i className="fas fa-check-circle text-success" /></span></h6>
                <p className="mb-0 small text-white">Your admission completed</p>
              </div>
            </div>
          </div>
          {/* Active student */} 
          <div className="p-3 bg-success d-inline-block rounded-4 shadow-lg position-absolute top-50 end-0 translate-middle-y mt-n7 z-index-1 d-none d-md-block" style={{background: 'url(assets/images/pattern/01.png) no-repeat center center', backgroundSize: 'cover'}}>
            <p className="text-white">Our daily new students</p>
            {/* Avatar group */}
            <ul className="avatar-group mb-0">
              <li className="avatar avatar-sm">
                <img className="avatar-img rounded-circle border-white" src="assets/images/avatar/01.jpg" alt="avatar" />
              </li>
              <li className="avatar avatar-sm">
                <img className="avatar-img rounded-circle border-white" src="assets/images/avatar/02.jpg" alt="avatar" />
              </li>
              <li className="avatar avatar-sm">
                <img className="avatar-img rounded-circle border-white" src="assets/images/avatar/03.jpg" alt="avatar" />
              </li>
              <li className="avatar avatar-sm">
                <img className="avatar-img rounded-circle border-white" src="assets/images/avatar/04.jpg" alt="avatar" />
              </li>
              <li className="avatar avatar-sm">
                <div className="avatar-img rounded-circle border-white bg-primary">
                  <span className="text-white position-absolute top-50 start-50 translate-middle small">1K+</span>
                </div>
              </li>
            </ul>
          </div>
          {/* Image */}
          <div className="position-relative ms-sm-4">
            <img src="assets/images/element/07.png" alt />
          </div>
        </div>
        {/* Right content END */}
      </div>
    </div>
    {/* Content END */}
  </section>
  {/* =======================
Main Banner END */}
{/* <Counter/> */}
</main>
{/* **************** MAIN CONTENT END **************** */}


{/* <!-- ======================= Popular course START --> */}
{/* <PopulerCources/> */}
{/* <!-- ======================= Popular course END --> */}



{/* Action Box */}

{/* Action Box */}
 
 <Counter/>
 <PopularCourses/>
 <TrendingCourses/>
 <Review/>

</>
  )
}

export default Home