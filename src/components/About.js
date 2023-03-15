import React from 'react';
import './News.css';

export default function About() {
  return (
    <div className="news-container">
      <div className="news-card">
        <img src="https://www.vietvisiontravel.com/wp-content/uploads/2017/09/Top-Best-Cinemas-in-Ho-Chi-Minh-City.jpg" alt="News 1" className="news-image" />
        <h2 className="news-title">Khuyen mai T3 nam 2023 danh cho HSSV U21</h2>
        <p className="news-date">March 1, 2023</p>
        <p className="news-description">Khuyen mai keo dai tu 3/2023-5-2023 danh cho toan bo hoc sinh, sinh vien duoi 21 tuoi</p>
      </div>
      
      <div className="news-card">
        <img src="https://www.shutterstock.com/image-vector/cinema-movie-time-concept-theater-600w-746969203.jpg" alt="News 1" className="news-image" />
        <h2 className="news-title">ĐỒNG HÀNH CÙNG CHƯƠNG TRÌNH" PEPSI DAY" TẠI CÁC RẠP LOTTE CINEMA TRÊN TOÁN QUỐC.</h2>
        <p className="news-date">March 1, 2023</p>
        <p className="news-description">THỎA THÍCH VUI CÙNG NGÀY "PEPSI" - THỨ 6 CUỐI CÙNG MỖI THÁNG.

Ngày thứ 6 cuối cùng mỗi tháng. Lotte Cinema và Pepsico sẽ có các chương trình liên quan và tương ứng với các brand khác nhau. Cụ thể như sau:

- Thời gian: Từ tháng 02/2023 - hết năm 2023 (thứ 6 cuối cùng mỗi tháng).</p>
      </div>
      <div className="news-card">
        <img src="https://www.shutterstock.com/image-vector/cinema-movie-time-concept-theater-600w-746969203.jpg" alt="News 1" className="news-image" />
        <h2 className="news-title">ƯU ĐÃI ĐỒNG GIÁ ÁP DỤNG CHO THÀNH VIÊN CINEMA</h2>
        <p className="news-date">March 1, 2023</p>
        <p className="news-description">Nhập hội thành viên nhận ưu đãi cực Shock áp dụng cho cả tuần, nhanh tay ra rạp ngay hôm nay !

CHI TIẾT CHƯƠNG TRÌNH

Khi khách hàng là thành viên của Lotte Cinema sẽ được ưu đãi giá vé

*Đồng giá 50K: Lotte Cinema Thủ Đức.

*Đồng giá 45k: Lotte Cinema Huế. 

*Đồng giá 55K: Lotte Cinema Cà Mau

Thời gian áp dụng: Cả Tuần (T2 - Chủ Nhật)</p>
      </div>
      
   

      {/* Add more news cards here */}
    </div>
  )
}