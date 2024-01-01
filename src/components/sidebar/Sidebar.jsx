import { Col } from "reactstrap";
import "../../styles/sidebar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/user/UserSlice";

const Sidebar = () => {
  const [selectedPath, setSelectedPath] = useState("recomended");
  const navigate = useNavigate();
  useEffect(() => {
    if (selectedPath === "recomended") {
      navigate("/");
    } else if (selectedPath === "movies") {
      navigate("/movies");
    } else if (selectedPath === "series") {
      navigate("/series");
    } else if (selectedPath === "favorites") {
      navigate("/favorites");
    }
  }, [selectedPath]);
  const dispatch = useDispatch();
  const logoutClick = () => {
    dispatch(userActions.logout());
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="26"
        viewBox="0 0 33 26"
        fill="none"
      >
        <path
          d="M26.463 0.408386L29.663 6.80839H24.863L21.663 0.408386H18.463L21.663 6.80839H16.863L13.663 0.408386H10.463L13.663 6.80839H8.86304L5.66304 0.408386H4.06304C2.29504 0.408386 0.879037 1.84039 0.879037 3.60839L0.863037 22.8084C0.863037 24.5764 2.29504 26.0084 4.06304 26.0084H29.663C31.431 26.0084 32.863 24.5764 32.863 22.8084V0.408386H26.463Z"
          fill="#FC4747"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="200"
        viewBox="0 0 20 200"
        fill="none"
        className="svg__section"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 0H8C8.6 0 9 0.4 9 1V8C9 8.6 8.6 9 8 9H1C0.4 9 0 8.6 0 8V1C0 0.4 0.4 0 1 0ZM1 11H8C8.6 11 9 11.4 9 12V19C9 19.6 8.6 20 8 20H1C0.4 20 0 19.6 0 19V12C0 11.4 0.4 11 1 11ZM19 0H12C11.4 0 11 0.4 11 1V8C11 8.6 11.4 9 12 9H19C19.6 9 20 8.6 20 8V1C20 0.4 19.6 0 19 0ZM12 11H19C19.6 11 20 11.4 20 12V19C20 19.6 19.6 20 19 20H12C11.4 20 11 19.6 11 19V12C11 11.4 11.4 11 12 11Z"
          fill={`${selectedPath === "recomended" ? "white" : "#5A698F"}`}
          onClick={() => setSelectedPath("recomended")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.08 124.481H20V140H0V124.481H4.92L2.22 121.203L3.78 120.029L7 123.909L10.22 120L11.78 121.203L9.08 124.481ZM2 126.421V138.06H12V126.421H2ZM17 134.18H15V132.241H17V134.18ZM15 130.301H17V128.361H15V130.301Z"
          fill={`${selectedPath === "movies" ? "white" : "#5A698F"}`}
          onClick={() => setSelectedPath("movies")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.9556 60H3.04444C1.36304 60 0 61.363 0 63.0444V76.9556C0 78.637 1.36304 80 3.04444 80H16.9556C17.763 80 18.5374 79.6792 19.1083 79.1083C19.6792 78.5374 20 77.763 20 76.9556V63.0444C20 62.237 19.6792 61.4626 19.1083 60.8917C18.5374 60.3208 17.763 60 16.9556 60ZM4 69H2V67H4V69ZM4 71H2V73H4V71ZM18 69H16V67H18V69ZM18 71H16V73H18V71ZM18 62.74V64H16V62H17.26C17.4563 62 17.6445 62.078 17.7833 62.2167C17.922 62.3555 18 62.5437 18 62.74ZM4 62H2.74C2.54374 62 2.35552 62.078 2.21674 62.2167C2.07796 62.3555 2 62.5437 2 62.74V64H4V62ZM2 77.26V76H4V78H2.74C2.54374 78 2.35552 77.922 2.21674 77.7833C2.07796 77.6445 2 77.4563 2 77.26ZM17.26 78C17.6687 78 18 77.6687 18 77.26V76H16V78H17.26Z"
          fill={`${selectedPath === "series" ? "white" : "#5A698F"}`}
          onClick={() => setSelectedPath("series")}
        />
        <path
          d="M17.3866 180C17.5893 180 17.7832 180.04 17.9683 180.119C18.2591 180.234 18.4904 180.414 18.6623 180.661C18.8341 180.908 18.92 181.181 18.92 181.481V198.519C18.92 198.819 18.8341 199.092 18.6623 199.339C18.4904 199.586 18.2591 199.766 17.9683 199.881C17.8008 199.952 17.607 199.987 17.3866 199.987C16.9636 199.987 16.5979 199.846 16.2895 199.564L10.46 193.959L4.63054 199.564C4.31328 199.855 3.94757 200 3.53338 200C3.33069 200 3.13681 199.96 2.95175 199.881C2.66094 199.766 2.42961 199.586 2.25777 199.339C2.08592 199.092 2 198.819 2 198.519V181.481C2 181.181 2.08592 180.908 2.25777 180.661C2.42961 180.414 2.66094 180.234 2.95175 180.119C3.13681 180.04 3.33069 180 3.53338 180H17.3866Z"
          fill={`${selectedPath === "favorites" ? "white" : "#5A698F"}`}
          onClick={() => setSelectedPath("favorites")}
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="173"
        height="20"
        viewBox="0 0 173 20"
        fill="none"
        className="svg__section-resp"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 0H8C8.6 0 9 0.4 9 1V8C9 8.6 8.6 9 8 9H1C0.4 9 0 8.6 0 8V1C0 0.4 0.4 0 1 0ZM1 11H8C8.6 11 9 11.4 9 12V19C9 19.6 8.6 20 8 20H1C0.4 20 0 19.6 0 19V12C0 11.4 0.4 11 1 11ZM19 0H12C11.4 0 11 0.4 11 1V8C11 8.6 11.4 9 12 9H19C19.6 9 20 8.6 20 8V1C20 0.4 19.6 0 19 0ZM12 11H19C19.6 11 20 11.4 20 12V19C20 19.6 19.6 20 19 20H12C11.4 20 11 19.6 11 19V12C11 11.4 11.4 11 12 11Z"
          fill={`${selectedPath === "recomended" ? "white" : "#5A698F"}`}
          onClick={() => setSelectedPath("recomended")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M113.08 4.48109H124V20H104V4.48109H108.92L106.22 1.20272L107.78 0.029098L111 3.90883L114.22 0L115.78 1.20272L113.08 4.48109ZM106 6.42095V18.0601H116V6.42095H106ZM121 14.1804H119V12.2405H121V14.1804ZM119 10.3007H121V8.36082H119V10.3007Z"
          fill={`${selectedPath === "movies" ? "white" : "#5A698F"}`}
          onClick={() => setSelectedPath("movies")}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M68.9556 0H55.0444C53.363 0 52 1.36304 52 3.04444V16.9556C52 18.637 53.363 20 55.0444 20H68.9556C69.763 20 70.5374 19.6792 71.1083 19.1083C71.6792 18.5374 72 17.763 72 16.9556V3.04444C72 2.23701 71.6792 1.46264 71.1083 0.891697C70.5374 0.320753 69.763 0 68.9556 0ZM56 9H54V7H56V9ZM56 11H54V13H56V11ZM70 9H68V7H70V9ZM70 11H68V13H70V11ZM70 2.74V4H68V2H69.26C69.4563 2 69.6445 2.07796 69.7833 2.21674C69.922 2.35552 70 2.54374 70 2.74ZM56 2H54.74C54.5437 2 54.3555 2.07796 54.2167 2.21674C54.078 2.35552 54 2.54374 54 2.74V4H56V2ZM54 17.26V16H56V18H54.74C54.5437 18 54.3555 17.922 54.2167 17.7833C54.078 17.6445 54 17.4563 54 17.26ZM69.26 18C69.6687 18 70 17.6687 70 17.26V16H68V18H69.26Z"
          fill={`${selectedPath === "series" ? "white" : "#5A698F"}`}
          onClick={() => setSelectedPath("series")}
        />
        <path
          d="M171.387 0C171.589 0 171.783 0.0396563 171.968 0.118969C172.259 0.233532 172.49 0.414188 172.662 0.660939C172.834 0.907689 172.92 1.18088 172.92 1.4805V18.5195C172.92 18.8191 172.834 19.0923 172.662 19.3391C172.49 19.5858 172.259 19.7665 171.968 19.881C171.801 19.9515 171.607 19.9868 171.387 19.9868C170.964 19.9868 170.598 19.8458 170.289 19.5638L164.46 13.959L158.631 19.5638C158.313 19.8546 157.948 20 157.533 20C157.331 20 157.137 19.9603 156.952 19.881C156.661 19.7665 156.43 19.5858 156.258 19.3391C156.086 19.0923 156 18.8191 156 18.5195V1.4805C156 1.18088 156.086 0.907689 156.258 0.660939C156.43 0.414188 156.661 0.233532 156.952 0.118969C157.137 0.0396563 157.331 0 157.533 0H171.387Z"
          fill={`${selectedPath === "favorites" ? "white" : "#5A698F"}`}
          onClick={() => setSelectedPath("favorites")}
        />
      </svg>
      <img
        src="https://s3-alpha-sig.figma.com/img/1d61/e37e/da5cdb1a76e0fe3a324be8c07003297e?Expires=1704672000&Signature=kymHJvcWh-FERzwLMLAZ2wEddZnA5S5LieTqVJZ0RGUjXC8NKig11T6PbDksjArLMi2JLYruHDVQ9csLN~pOSoi~N24SDkJKH0EXythcm3NmjVHtMXAM6MyKJJojpz3dowZqpmdItABS-Od96Q~lrdtZ9EPuqUfbvrlqUbt~Fdc4PrJtWJHoSUbtTpiKGgLCB0a5wAs-tM9Oe4TibOFtbtmzi6E0Pf8wjRZh7WLXbG-K~lG27fXXV0vkIWH2vvrcqE4vufSXVyMnO25tpCUyGJEb5o96F6UP7gTkWeKwvwMsoBKOWM5mAIVvdbf5tglwcCEp~hLa~wzqC8SCkx5Q3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="user image"
        style={{ cursor: "pointer" }}
        onClick={logoutClick}
      />
    </div>
  );
};

export default Sidebar;
