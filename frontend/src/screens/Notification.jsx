import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Notification = () => {
  const user = useSelector((state) => state.user.user);

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, [notifications]);

  const fetchNotifications = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/api/notification/" + user._id
      );
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const markAsRead = async (notificationId) => {
    try {
      await fetch(
          `${process.env.REACT_APP_API_URL}/api/notification/${notificationId}/read`,
        {
          method: "PUT",
        }
      );
      // Refresh notifications after marking as read
      toast.success("Marked as read");
      fetchNotifications();
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  return (
    <div className="page-wraper" style={{ position: "relative" }}>
      <Navbar />
      <div className="page-content">
        <div className="aon-page-benner-area2">
          <div className="aon-banner-large2-title">
            Notifications <i className="fa fa-bell text-muted" />
          </div>
        </div>
        <div className="aon-page-jobs-wrap">
          <div className="container">
            <div className="notification-ui_dd-content">
              {notifications.map((notification) => (
                <div
                  className="notification-list notification-list--unread"
                  key={notification._id}
                >
                  <div className="notification-list_content">
                    <div className="notification-list_img p-3">
                      <i className="fa-solid fa-bell"></i>
                    </div>
                    <div className="notification-list_detail">
                      <p>
                        <b>Order ID: </b> {notification.order}
                      </p>
                      <p className="text-muted">{notification.content}</p>
                      <p className="text-muted">
                        <small>{notification.created_at}</small>
                      </p>
                    </div>
                  </div>
                  <div className="notification-list_feature-img">
                    {!notification.is_read && (
                      <button
                        onClick={() => markAsRead(notification._id)}
                        className="btn btn-danger btn-sm"
                      >
                        <i className="fa-solid fa-check"></i>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="text-center">
              <a href="#!" className="dark-link site-button">
                Load more activity
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notification;
