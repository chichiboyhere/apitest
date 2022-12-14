import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import styles from '../styles/Global';
import assets from '../assets';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";



const Download = () => {

  const [isNotClicked, setIsNotClicked] = useState(true);
  
  const handleClick = () => {
    setIsNotClicked(false);
  }

  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download Interact with Math</h1>
        </div>
        <SectionWrapper
        
        description="Interact with Mathematics, was written with your success in mind. It covers the UTME, WASSCE, NECO and post-UTME syllabuses. Here is a PDF copy of the book. I'm making it available for free download for 2 months: October 17 to December 17, 2022. All I ask of you in return for this free copy is a promise that you'll study the book. The study guide for the book is on the first page. Please don't miss that page if you want to get the best out of the book. Also I enjoin you to recommend the book to a friend who needs it. Encourage them to come to this site to download it. Please don't share your copy with them. Don't transfer the book to them. Just refer them to the site. I'll really appreciate it. May you experience sky-high success as you download, and study this book. Thank you."
        mockupImg={assets.book_cover}
        reverse
        
      />
      
      <a href={assets.book} download><button className={styles.btnPrimary} onClick={handleClick} disabled={!isNotClicked}><FontAwesomeIcon icon ={faDownload}></FontAwesomeIcon> Download</button></a>
       
        
        <div className={styles.flexCenter}>
          <img 
            src={assets.students}
            alt="download_png"
            className={styles.fullImg}
          />
          
        </div>
      </div>
    </div>
  )
}

export default Download