import React from 'react';
import dummy from '../db/product.json';
import '../css/intro.css';

function Intro(props) {
  return (
    <article className='product'>
       <h2 className='product_title'>Download YTS YIFY movies: HD smallest size</h2>
      <p>Welcome to the official YTS.MX website. Here you can browse and download YIFY movies in excellent</p>
      <p>720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.</p>
      <p>IMPORTANT - YTS.MX is the only new official domain for YIFY Movies</p>
     
      <ul className='product_list'>
        {dummy.products.map(product => (
          <li key={product.title}>
            <img
              src={`${process.env.PUBLIC_URL}/images/${product.filename}`}
              alt={product.title}
            />
            <p>
              <span className='product_title2'>{product.title}</span>
              <span className='product_year'>{product.year}</span>
            </p>
          </li>
        ))}
      </ul>
      <div>
        
      </div>
    </article>
  );
}

export default Intro;
