const Header = ({ setOpenLogin }) => {
  return (
    <div>
      <div className="Navbar2__Container-sa2air-0 jblxKL undefined header-container">
        <div className="header-left">
          <div className="logo">
            <a href="/">
              <img
                src="https://storage.googleapis.com/fe-production/svgIcon/icon_vxr_full_2.svg"
                alt="logo"
              />
            </a>
          </div>
          <a
            className="rtb"
            href="/vi-VN/nhung-cau-hoi-thuong-gap.html"
            target="_blank"
            rel="noreferrer"
          >
            Cam kết hoàn 150% nếu nhà xe <br /> không cung cấp dịch vụ vận
            chuyển (*)
            <div className="material-icons-wrapper md-16">
              <i
                className="material-icons-outlined"
                style={{ fontWeight: 700 }}
              >
                info
              </i>
            </div>
          </a>
        </div>
        <ul className="header-right ">
          <li className="Navbar2__GroupItem-sa2air-7 fnjukq menu-group-item">
            <a
              href="/vi-VN/ve-cua-toi"
              className="Navbar2__LinkNormalStyled-sa2air-5 chCbIo"
            >
              Đơn hàng của tôi
            </a>
          </li>
          <li className="Navbar2__GroupItem-sa2air-7 fnjukq menu-group-item">
            <a
              href="https://bms.vexere.com/mo-ban-ve-tren-vexere-com?utm_source=Vex&utm_medium=headermenu&utm_campaign=mobanve"
              className="Navbar2__LinkNormalStyled-sa2air-5 chCbIo"
            >
              Mở bán vé trên Vexere
            </a>
          </li>
          <li className="Navbar2__GroupItem-sa2air-7 fnjukq menu-group-item ant-dropdown-trigger">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="Navbar2__MenuItem-sa2air-6 uhmcm"
            >
              Trở thành đối tác
              <div className="material-icons-wrapper md-16  ">
                <i className="material-icons-outlined dropdown-icon">
                  arrow_drop_down
                </i>
              </div>
            </a>
          </li>
          <div className="fix-item">
            <li className="Navbar2__GroupItem-sa2air-7 fnjukq menu-group-item">
              <a
                title="/en-US"
                href="/en-US"
                className="Navbar2__LinkNormalStyled-sa2air-5 chCbIo"
              >
                <img
                  src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/en-flag.svg"
                  alt="en"
                  width={28}
                  height={20}
                  className="Navbar2__FlagImg-sa2air-9 cJYRKt"
                />
              </a>
            </li>
            <li className="Navbar2__GroupItem-sa2air-7 fnjukq">
              <div className="Navbar2__ButtonHotline-sa2air-11 kWkMez">
                <div className="material-icons-wrapper md-20 icon-phone ">
                  <i className="material-icons-round ">phone</i>
                </div>
                <p className="base__Headline03-sc-1tvbuqk-15 boemqK">
                  Hotline 24/7
                </p>
              </div>
            </li>
            <li
              style={{ display: "flex", alignItems: "center" }}
              className="Navbar2__GroupItem-sa2air-7 fnjukq"
            >
              <button
                onClick={() => setOpenLogin(true)}
                type="button"
                className="ant-btn Button__ButtonStyled-sc-1podjgv-0 font-bold jWyAAs btn-secondary btn-sm LoginButton__StyledButton-sc-6y3h9m-0 eKIwDQ"
              >
                <span>Đăng nhập</span>
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
