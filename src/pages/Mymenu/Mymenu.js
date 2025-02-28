import React, { useState } from "react";
import pen from "./pen.svg";
import profile from "./profile.svg";
import trash from "./trash.svg";
import "./Mymenu.css";

import {Link} from "react-router-dom";

export const Mymenu = () => {
    const [menuItems, setMenuItems] = useState(["불고기", "김치찌개", "제육볶음"]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);

    const handleDeleteClick = (index) => {
        setDeleteIndex(index);
        setIsModalOpen(true);
    };

    // 삭제 확인 시 실행
    const handleConfirmDelete = () => {
        setMenuItems(menuItems.filter((_, i) => i !== deleteIndex));
        setIsModalOpen(false);
        setDeleteIndex(null);
    };

    // 모달 닫기 (취소)
    const handleCancelDelete = () => {
        setIsModalOpen(false);
        setDeleteIndex(null);
    };
    const containerStyle = {
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
    };

    return (
        <div className="screen">
            <div className="menu-container">
                <div className="profile-container">
                    <img className="profile" alt="Profile" src={profile} />
                </div>

                <div className="menu-title">My Menu</div>

                <div className="overlap-group">
                    <div className="frame">
                        <div className="rectangle">
                            <div className="menu-list">
                                {menuItems.map((item, index) => (
                                    <div className="menu-item" key={index}>
                                        <div className="menu-text">{item}</div>
                                        <button className="trash-btn" onClick={() => handleDeleteClick(index)}>
                                            <img className="trash" alt="Trash" src={trash} />
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* 🛑 커스텀 삭제 모달 */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p className="modal-text">정말 삭제하시겠습니까?</p>
                        <div className="modal-buttons">
                            <button className="modal-btn confirm" onClick={handleConfirmDelete}>확인</button>
                            <button className="modal-btn cancel" onClick={handleCancelDelete}>취소</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mymenu