"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
function TeamCard(_a) {
    var name = _a.name, role = _a.role, image = _a.image, description = _a.description, skills = _a.skills;
    return (React.createElement("div", { className: "bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-slate-100 dark:border-slate-800 flex flex-col items-center flex-1" },
        React.createElement("div", { className: "w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-50 dark:border-blue-900" },
            React.createElement("div", { className: "w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-50 dark:border-blue-900" },
                React.createElement(image_1["default"], { src: image, alt: name, width: 128, height: 128, className: "object-cover w-full h-full" })),
            React.createElement("h3", { className: "text-2xl font-bold text-slate-900 dark:text-white mb-2" }, name),
            React.createElement("p", { className: "text-blue-600 dark:text-blue-400 font-medium mb-4" }, role),
            React.createElement("p", { className: "text-slate-600 dark:text-slate-400 text-center mb-6 leading-relaxed" }, description),
            React.createElement("div", { className: "flex flex-wrap justify-center gap-2 mt-auto" }, skills.map(function (skill) { return (React.createElement("span", { key: skill, className: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide" }, skill)); }))),
        "); }"));
}
exports["default"] = TeamCard;
