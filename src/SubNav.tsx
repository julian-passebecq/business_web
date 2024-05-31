import React from "react";
import "./SubNav.css";

interface SubNavProps {
    activePrimaryCategory: string;
    activeSecondaryCategory: string;
}

const SubNav: React.FC<SubNavProps> = ({ activePrimaryCategory, activeSecondaryCategory }) => {
    const subCategories = {
        summary_kpi: ["Summary KPI1", "Summary KPI2", "Summary KPI3"],
        summary_erd: ["Summary ERD1", "Summary ERD2"],
        accounting_kpi: ["Accounting KPI1", "Accounting KPI2"],
        accounting_erd: ["Accounting ERD1", "Accounting ERD2"],
        // Add other combinations here
    };

    const categoryKey = `${activePrimaryCategory}_${activeSecondaryCategory}`;

    return (
        <nav className="sub-nav">
            <ul className="sub-nav-list">
                {subCategories[categoryKey]?.map((subItem) => (
                    <li key={subItem}>
                        <button className="sub-nav-btn">
                            <span className="sub-nav-btn-name">{subItem}</span>
                        </button>
                    </li>
                )) || <li>No sub-categories available</li>}
            </ul>
        </nav>
    );
};

export default SubNav;
