import React, { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import SubNav from "./SubNav";

export default function App() {
    const [activePrimaryCategory, setActivePrimaryCategory] = useState("summary");
    const [activeSecondaryCategory, setActiveSecondaryCategory] = useState("kpi");

    const handlePrimaryCategoryChange = (category: string) => {
        setActivePrimaryCategory(category);
    };

    const handleSecondaryCategoryChange = (category: string) => {
        setActiveSecondaryCategory(category);
    };

    return (
        <div className="App">
            <Nav onCategoryChange={handlePrimaryCategoryChange} categories={[
                { name: "Accounting", category: "accounting", icon: "accounting.png" },
                { name: "Finance", category: "finance", icon: "finance.png" },
                { name: "Logistics", category: "logistics", icon: "logistics.png" },
                { name: "Sales", category: "sales", icon: "sales.png" },
                { name: "Marketing", category: "marketing", icon: "marketing.png" },
                { name: "Project", category: "project", icon: "project.png" },
            ]} />
            <Nav onCategoryChange={handleSecondaryCategoryChange} categories={[
                { name: "KPI", category: "kpi", icon: "kpi.png" },
                { name: "ERD", category: "erd", icon: "erd.png" },
                { name: "SQL", category: "sql", icon: "sql.png" },
                { name: "Modeling", category: "modeling", icon: "modeling.png" },
                { name: "Power BI", category: "powerbi", icon: "powerbi.png" },
                { name: "Statistics", category: "statistics", icon: "statistics.png" },
                { name: "Excel", category: "excel", icon: "excel.png" },
                { name: "D365", category: "d365", icon: "d365.png" },
                { name: "Forecasting", category: "forecasting", icon: "forecasting.png" },
            ]} />
            <div className="content">
                <SubNav activePrimaryCategory={activePrimaryCategory} activeSecondaryCategory={activeSecondaryCategory} />
                <div className="main-content">
                    <h1>Hello CodeSandbox</h1>
                    <h2>Start editing to see some magic happen!</h2>
                </div>
            </div>
        </div>
    );
}
