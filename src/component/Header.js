import React from 'react';

export default function Header() {
  return (
    <div>
      <div class="container-fluid" style={{
        "padding": "10px",
        "borderBottom": "7px solid rgb(190, 15, 15)"
      }}>
        <div class="row">
          <div class="col-md-3">
            <img alt="Bootstrap Image Preview" src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png"
              style={{ 'width': '220px' }} />
          </div>
          <div class="col-md-6">
            <h3 style={{
              "fontSize": "18px",
              "line-height": "25px",
              "fontWeight": "700",
              "paddingTop": "20px",
              "letterSpacing": "1px",
              "textAlign": "left"
            }}>
              ĐẠI HỌC BÁCH KHOA HÀ NỘI
              TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG
            </h3>
          </div>
          <div class="col-md-3">
            <div class="row">
              <div class="col-md-6" style={{
                "textAlign": "end"
              }}>

                <img src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/vn.png" />
              </div>
              <div class="col-md-6" style={{
                "textAlign": "left"
              }}>

                <img src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/gb.png" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="input-group rounded" style={{
                  "width": "250px",
                  "marginTop": "10px",
                  "marginLeft": "20px"
                }}>
                  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{
                    "width": "140px"
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
