import './App.css';
import AppHeader from './components/AppHeader';
import HomeItem from './components/HomeItem';
import flowers from './data/flowers';
import React, { useState } from "react";
import HomePost from './components/HomePost';
import HomeSearch from './components/HomeSearch';

function App() {
    const [selectedFlower, setSelectedFlower] = useState(null)
    const [searchText, setSearchText] = useState('');

    /*ฟังก์ชัน เพื่อกดดูรูปภาพดอกไม้ */
    function onFlowerOpenClick(flower) {
        setSelectedFlower(flower);
    }

    /*ฟังก์ชัน เพื่อกดปิดรูปภาพดอกไม้ */
    function onFlowerCloseClick() {
        setSelectedFlower(null);
    }
    
    /*ในส่วนของการเสริชหาชื่อดอกไม้ อันนี้จะได้ทั้งชื่อพิมพ์เล็กและพิมพ์ใหญ่ กำหนดจาก toLowerCase*/
    const flowerElements = flowers.filter((flower) => {
        return flower.title.toLowerCase().includes(searchText.toLowerCase());
    }).map((flower, index) => {
        /*onFlowerClick = { onFlowerOpenClick } เราเรียกใช้จาก function ที่เราสร้างไว้ด้านบน*/
       return <HomeItem key={index} flower={flower} onFlowerClick={onFlowerOpenClick}  />
    });

    let flowerPost = null;
    if (!!selectedFlower) {
        /*onBgClick={onFlowerCloseClick} เราเรียกใช้จาก function ที่เราสร้างไว้ด้านบน มันคือการกดเพื่อปิดรูปภาพที่เรากดเปิดดู*/
        flowerPost = <HomePost flower={selectedFlower} onBgClick={onFlowerCloseClick} />
    }
    return (
        <div className="app">
            <AppHeader />
            <section className='app-section'>
                <div className="app-container">
                    <HomeSearch value={searchText} onValueChange={setSearchText} />
                    <div className="app-grid">
                        {flowerElements}
                    </div>
                </div>
            </section>
           {flowerPost}
        </div>
    );
}

export default App;
