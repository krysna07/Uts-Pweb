"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var projects_json_1 = require("../../data/projects.json");
var ProjectCard_1 = require("@/components/ProjectCard");
var lucide_react_1 = require("lucide-react");
function Projects() {
    var _a = react_1.useState(""), searchTerm = _a[0], setSearchTerm = _a[1];
    var _b = react_1.useState("semua"), category = _b[0], setCategory = _b[1];
    var categories = ["semua", "lingkungan", "bisnis", "web"];
    var filteredProjects = projects_json_1["default"].filter(function (project) {
        var matchSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        var categoryMap = {
            "semua": "all",
            "lingkungan": "environment",
            "bisnis": "business",
            "web": "web"
        };
        var matchCategory = category === "semua" || project.category === categoryMap[category];
        return matchSearch && matchCategory;
    });
    return (React.createElement("div", { className: "px-4 sm:px-6 lg:px-8 py-16 max-w-6xl mx-auto" },
        React.createElement("div", { className: "text-center mb-12" },
            React.createElement("h1", { className: "text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4" }, "Proyek Kami"),
            React.createElement("p", { className: "text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto" }, "Jelajahi solusi digital yang telah kami bangun. Filter berdasarkan kategori atau cari yang spesifik.")),
        React.createElement("div", { className: "flex flex-col md:flex-row justify-between items-center gap-6 mb-12" },
            React.createElement("div", { className: "flex flex-wrap justify-center gap-2" }, categories.map(function (cat) { return (React.createElement("button", { key: cat, onClick: function () { return setCategory(cat); }, className: "px-5 py-2 rounded-full text-sm font-semibold capitalize transition duration-300 " + (category === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700") }, cat)); })),
            React.createElement("div", { className: "relative w-full md:max-w-xs" },
                React.createElement("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" },
                    React.createElement(lucide_react_1.Search, { size: 18, className: "text-slate-400" })),
                React.createElement("input", { type: "text", placeholder: "Cari proyek...", value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); }, className: "w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" }))),
        filteredProjects.length > 0 ? (React.createElement("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" }, filteredProjects.map(function (project) { return (React.createElement(ProjectCard_1["default"], { key: project.slug, project: project })); }))) : (React.createElement("div", { className: "text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400" }, "Tidak ada proyek yang cocok dengan kriteria pencarian."))));
}
exports["default"] = Projects;
