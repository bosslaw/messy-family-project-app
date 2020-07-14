(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calendar-calendar-module"],{

/***/ "./node_modules/ionic2-calendar/calendar.js":
/*!**************************************************!*\
  !*** ./node_modules/ionic2-calendar/calendar.js ***!
  \**************************************************/
/*! exports provided: Step, CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");




function CalendarComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const view_r23 = ctx.view;
    const row_r24 = ctx.row;
    const col_r25 = ctx.col;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", view_r23.dates[row_r24 * 7 + col_r25].label, " ");
} }
function CalendarComponent_ng_template_2_ion_list_0_ion_item_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, event_r32.startTime, "HH:mm"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, event_r32.endTime, "HH:mm"), " ");
} }
function CalendarComponent_ng_template_2_ion_list_0_ion_item_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r34.allDayLabel);
} }
function CalendarComponent_ng_template_2_ion_list_0_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_ng_template_2_ion_list_0_ion_item_1_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const event_r32 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r36.eventSelected(event_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarComponent_ng_template_2_ion_list_0_ion_item_1_span_1_Template, 4, 8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarComponent_ng_template_2_ion_list_0_ion_item_1_span_2_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !event_r32.allDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", event_r32.allDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", event_r32.title, "");
} }
function CalendarComponent_ng_template_2_ion_list_0_ion_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noEventsLabel_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).noEventsLabel;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](noEventsLabel_r28);
} }
function CalendarComponent_ng_template_2_ion_list_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarComponent_ng_template_2_ion_list_0_ion_item_1_Template, 5, 3, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarComponent_ng_template_2_ion_list_0_ion_item_2_Template, 3, 1, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectedDate_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().selectedDate;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", selectedDate_r27 == null ? null : selectedDate_r27.events);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (selectedDate_r27 == null ? null : selectedDate_r27.events.length) == 0);
} }
function CalendarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CalendarComponent_ng_template_2_ion_list_0_Template, 3, 2, "ion-list", 14);
} if (rf & 2) {
    const showEventDetail_r26 = ctx.showEventDetail;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", showEventDetail_r26);
} }
function CalendarComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const viewDate_r40 = ctx.viewDate;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", viewDate_r40.dayHeader, " ");
} }
function CalendarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const displayEvent_r41 = ctx.displayEvent;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](displayEvent_r41.event.title);
} }
function CalendarComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const displayEvent_r42 = ctx.displayEvent;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](displayEvent_r42.event.title);
} }
function CalendarComponent_ng_template_10_div_0_div_1_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0, a1) { return { top: a0, width: a1, height: "25px" }; };
const _c1 = function (a0) { return { displayEvent: a0 }; };
function CalendarComponent_ng_template_10_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_ng_template_10_div_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const displayEvent_r47 = ctx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r49.eventSelected(displayEvent_r47.event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarComponent_ng_template_10_div_0_div_1_ng_template_1_Template, 0, 0, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const displayEvent_r47 = ctx.$implicit;
    const eventTemplate_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).eventTemplate;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, 25 * displayEvent_r47.position + "px", 100 * (displayEvent_r47.endIndex - displayEvent_r47.startIndex) + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", eventTemplate_r44)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, displayEvent_r47));
} }
const _c2 = function (a0) { return { "calendar-event-wrap": a0 }; };
const _c3 = function (a0) { return { height: a0 }; };
function CalendarComponent_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarComponent_ng_template_10_div_0_div_1_Template, 2, 8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().day;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, day_r43.events))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, 25 * day_r43.events.length + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", day_r43.events);
} }
function CalendarComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CalendarComponent_ng_template_10_div_0_Template, 2, 7, "div", 24);
} if (rf & 2) {
    const day_r43 = ctx.day;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r43.events);
} }
function CalendarComponent_ng_template_12_div_0_ng_template_1_Template(rf, ctx) { }
const _c4 = function (a0) { return { top: a0, width: "100%", height: "25px" }; };
function CalendarComponent_ng_template_12_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_ng_template_12_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const displayEvent_r56 = ctx.$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r59.eventSelected(displayEvent_r56.event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarComponent_ng_template_12_div_0_ng_template_1_Template, 0, 0, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const displayEvent_r56 = ctx.$implicit;
    const eventIndex_r57 = ctx.index;
    const eventTemplate_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().eventTemplate;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c4, 25 * eventIndex_r57 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", eventTemplate_r54)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, displayEvent_r56));
} }
function CalendarComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CalendarComponent_ng_template_12_div_0_Template, 2, 7, "div", 26);
} if (rf & 2) {
    const allDayEvents_r53 = ctx.allDayEvents;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", allDayEvents_r53);
} }
function CalendarComponent_ng_template_14_div_0_div_1_ng_template_1_Template(rf, ctx) { }
const _c5 = function (a0, a1, a2, a3) { return { top: a0, left: a1, width: a2, height: a3 }; };
function CalendarComponent_ng_template_14_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_ng_template_14_div_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const displayEvent_r67 = ctx.$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r69.eventSelected(displayEvent_r67.event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarComponent_ng_template_14_div_0_div_1_ng_template_1_Template, 0, 0, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const displayEvent_r67 = ctx.$implicit;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const hourParts_r63 = ctx_r71.hourParts;
    const eventTemplate_r64 = ctx_r71.eventTemplate;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c5, 37 * displayEvent_r67.startOffset / hourParts_r63 + "px", 100 / displayEvent_r67.overlapNumber * displayEvent_r67.position + "%", 100 / displayEvent_r67.overlapNumber + "%", 37 * (displayEvent_r67.endIndex - displayEvent_r67.startIndex - (displayEvent_r67.endOffset + displayEvent_r67.startOffset) / hourParts_r63) + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", eventTemplate_r64)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, displayEvent_r67));
} }
function CalendarComponent_ng_template_14_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarComponent_ng_template_14_div_0_div_1_Template, 2, 10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().tm;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, tm_r62.events));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tm_r62.events);
} }
function CalendarComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CalendarComponent_ng_template_14_div_0_Template, 2, 4, "div", 29);
} if (rf & 2) {
    const tm_r62 = ctx.tm;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tm_r62.events);
} }
function CalendarComponent_ng_template_16_Template(rf, ctx) { }
function CalendarComponent_ng_template_18_Template(rf, ctx) { }
function CalendarComponent_monthview_21_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "monthview", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRangeChanged", function CalendarComponent_monthview_21_Template_monthview_onRangeChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.rangeChanged($event); })("onEventSelected", function CalendarComponent_monthview_21_Template_monthview_onEventSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.eventSelected($event); })("onTimeSelected", function CalendarComponent_monthview_21_Template_monthview_onTimeSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.timeSelected($event); })("onTitleChanged", function CalendarComponent_monthview_21_Template_monthview_onTitleChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.titleChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formatDay", ctx_r20.formatDay)("formatDayHeader", ctx_r20.formatDayHeader)("formatMonthTitle", ctx_r20.formatMonthTitle)("startingDayMonth", ctx_r20.startingDayMonth)("showEventDetail", ctx_r20.showEventDetail)("noEventsLabel", ctx_r20.noEventsLabel)("autoSelect", ctx_r20.autoSelect)("eventSource", ctx_r20.eventSource)("markDisabled", ctx_r20.markDisabled)("monthviewDisplayEventTemplate", ctx_r20.monthviewDisplayEventTemplate || _r0)("monthviewInactiveDisplayEventTemplate", ctx_r20.monthviewInactiveDisplayEventTemplate || _r0)("monthviewEventDetailTemplate", ctx_r20.monthviewEventDetailTemplate || _r2)("locale", ctx_r20.locale)("dateFormatter", ctx_r20.dateFormatter)("dir", ctx_r20.dir)("lockSwipeToPrev", ctx_r20.lockSwipeToPrev)("lockSwipes", ctx_r20.lockSwipes)("sliderOptions", ctx_r20.sliderOptions);
} }
function CalendarComponent_weekview_22_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "weekview", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRangeChanged", function CalendarComponent_weekview_22_Template_weekview_onRangeChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.rangeChanged($event); })("onEventSelected", function CalendarComponent_weekview_22_Template_weekview_onEventSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.eventSelected($event); })("onTimeSelected", function CalendarComponent_weekview_22_Template_weekview_onTimeSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.timeSelected($event); })("onTitleChanged", function CalendarComponent_weekview_22_Template_weekview_onTitleChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.titleChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formatWeekTitle", ctx_r21.formatWeekTitle)("formatWeekViewDayHeader", ctx_r21.formatWeekViewDayHeader)("formatHourColumn", ctx_r21.formatHourColumn)("startingDayWeek", ctx_r21.startingDayWeek)("allDayLabel", ctx_r21.allDayLabel)("hourParts", ctx_r21.hourParts)("autoSelect", ctx_r21.autoSelect)("hourSegments", ctx_r21.hourSegments)("eventSource", ctx_r21.eventSource)("markDisabled", ctx_r21.markDisabled)("weekviewHeaderTemplate", ctx_r21.weekviewHeaderTemplate || _r4)("weekviewAllDayEventTemplate", ctx_r21.weekviewAllDayEventTemplate || _r6)("weekviewNormalEventTemplate", ctx_r21.weekviewNormalEventTemplate || _r8)("weekviewAllDayEventSectionTemplate", ctx_r21.weekviewAllDayEventSectionTemplate || _r10)("weekviewNormalEventSectionTemplate", ctx_r21.weekviewNormalEventSectionTemplate || _r14)("weekviewInactiveAllDayEventSectionTemplate", ctx_r21.weekviewInactiveAllDayEventSectionTemplate || _r16)("weekviewInactiveNormalEventSectionTemplate", ctx_r21.weekviewInactiveNormalEventSectionTemplate || _r18)("locale", ctx_r21.locale)("dateFormatter", ctx_r21.dateFormatter)("dir", ctx_r21.dir)("scrollToHour", ctx_r21.scrollToHour)("preserveScrollPosition", ctx_r21.preserveScrollPosition)("lockSwipeToPrev", ctx_r21.lockSwipeToPrev)("lockSwipes", ctx_r21.lockSwipes)("startHour", ctx_r21.startHour)("endHour", ctx_r21.endHour)("sliderOptions", ctx_r21.sliderOptions);
} }
function CalendarComponent_dayview_23_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dayview", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRangeChanged", function CalendarComponent_dayview_23_Template_dayview_onRangeChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.rangeChanged($event); })("onEventSelected", function CalendarComponent_dayview_23_Template_dayview_onEventSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.eventSelected($event); })("onTimeSelected", function CalendarComponent_dayview_23_Template_dayview_onTimeSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.timeSelected($event); })("onTitleChanged", function CalendarComponent_dayview_23_Template_dayview_onTitleChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.titleChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formatDayTitle", ctx_r22.formatDayTitle)("formatHourColumn", ctx_r22.formatHourColumn)("allDayLabel", ctx_r22.allDayLabel)("hourParts", ctx_r22.hourParts)("hourSegments", ctx_r22.hourSegments)("eventSource", ctx_r22.eventSource)("markDisabled", ctx_r22.markDisabled)("dayviewAllDayEventTemplate", ctx_r22.dayviewAllDayEventTemplate || _r6)("dayviewNormalEventTemplate", ctx_r22.dayviewNormalEventTemplate || _r8)("dayviewAllDayEventSectionTemplate", ctx_r22.dayviewAllDayEventSectionTemplate || _r12)("dayviewNormalEventSectionTemplate", ctx_r22.dayviewNormalEventSectionTemplate || _r14)("dayviewInactiveAllDayEventSectionTemplate", ctx_r22.dayviewInactiveAllDayEventSectionTemplate || _r16)("dayviewInactiveNormalEventSectionTemplate", ctx_r22.dayviewInactiveNormalEventSectionTemplate || _r18)("locale", ctx_r22.locale)("dateFormatter", ctx_r22.dateFormatter)("dir", ctx_r22.dir)("scrollToHour", ctx_r22.scrollToHour)("preserveScrollPosition", ctx_r22.preserveScrollPosition)("lockSwipeToPrev", ctx_r22.lockSwipeToPrev)("lockSwipes", ctx_r22.lockSwipes)("startHour", ctx_r22.startHour)("endHour", ctx_r22.endHour)("sliderOptions", ctx_r22.sliderOptions);
} }
var Step;
(function (Step) {
    Step[Step["QuarterHour"] = 15] = "QuarterHour";
    Step[Step["HalfHour"] = 30] = "HalfHour";
    Step[Step["Hour"] = 60] = "Hour";
})(Step || (Step = {}));
class CalendarComponent {
    constructor(calendarService, appLocale) {
        this.calendarService = calendarService;
        this.appLocale = appLocale;
        this.eventSource = [];
        this.calendarMode = 'month';
        this.formatDay = 'd';
        this.formatDayHeader = 'EEE';
        this.formatDayTitle = 'MMMM dd, yyyy';
        this.formatWeekTitle = 'MMMM yyyy, \'Week\' w';
        this.formatMonthTitle = 'MMMM yyyy';
        this.formatWeekViewDayHeader = 'EEE d';
        this.formatHourColumn = 'ha';
        this.showEventDetail = true;
        this.startingDayMonth = 0;
        this.startingDayWeek = 0;
        this.allDayLabel = 'all day';
        this.noEventsLabel = 'No Events';
        this.queryMode = 'local';
        this.step = Step.Hour;
        this.timeInterval = 60;
        this.autoSelect = true;
        this.dir = "";
        this.scrollToHour = 0;
        this.preserveScrollPosition = false;
        this.lockSwipeToPrev = false;
        this.lockSwipes = false;
        this.locale = "";
        this.startHour = 0;
        this.endHour = 24;
        this.onCurrentDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hourParts = 1;
        this.hourSegments = 1;
        this.locale = appLocale;
    }
    get currentDate() {
        return this._currentDate;
    }
    set currentDate(val) {
        if (!val) {
            val = new Date();
        }
        this._currentDate = val;
        this.calendarService.setCurrentDate(val, true);
        this.onCurrentDateChanged.emit(this._currentDate);
    }
    ngOnInit() {
        if (this.autoSelect) {
            if (this.autoSelect.toString() === 'false') {
                this.autoSelect = false;
            }
            else {
                this.autoSelect = true;
            }
        }
        this.hourSegments = 60 / this.timeInterval;
        this.hourParts = 60 / this.step;
        if (this.hourParts <= this.hourSegments) {
            this.hourParts = 1;
        }
        else {
            this.hourParts = this.hourParts / this.hourSegments;
        }
        this.startHour = parseInt(this.startHour.toString());
        this.endHour = parseInt(this.endHour.toString());
        this.calendarService.queryMode = this.queryMode;
        this.currentDateChangedFromChildrenSubscription = this.calendarService.currentDateChangedFromChildren$.subscribe(currentDate => {
            this._currentDate = currentDate;
            this.onCurrentDateChanged.emit(currentDate);
        });
    }
    ngOnDestroy() {
        if (this.currentDateChangedFromChildrenSubscription) {
            this.currentDateChangedFromChildrenSubscription.unsubscribe();
            this.currentDateChangedFromChildrenSubscription = null;
        }
    }
    rangeChanged(range) {
        this.onRangeChanged.emit(range);
    }
    eventSelected(event) {
        this.onEventSelected.emit(event);
    }
    timeSelected(timeSelected) {
        this.onTimeSelected.emit(timeSelected);
    }
    titleChanged(title) {
        this.onTitleChanged.emit(title);
    }
    loadEvents() {
        this.calendarService.loadEvents();
    }
    slideNext() {
        this.calendarService.slide(1);
    }
    slidePrev() {
        this.calendarService.slide(-1);
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_1__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); };
CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["calendar"]], inputs: { currentDate: "currentDate", eventSource: "eventSource", calendarMode: "calendarMode", formatDay: "formatDay", formatDayHeader: "formatDayHeader", formatDayTitle: "formatDayTitle", formatWeekTitle: "formatWeekTitle", formatMonthTitle: "formatMonthTitle", formatWeekViewDayHeader: "formatWeekViewDayHeader", formatHourColumn: "formatHourColumn", showEventDetail: "showEventDetail", startingDayMonth: "startingDayMonth", startingDayWeek: "startingDayWeek", allDayLabel: "allDayLabel", noEventsLabel: "noEventsLabel", queryMode: "queryMode", step: "step", timeInterval: "timeInterval", autoSelect: "autoSelect", markDisabled: "markDisabled", monthviewDisplayEventTemplate: "monthviewDisplayEventTemplate", monthviewInactiveDisplayEventTemplate: "monthviewInactiveDisplayEventTemplate", monthviewEventDetailTemplate: "monthviewEventDetailTemplate", weekviewHeaderTemplate: "weekviewHeaderTemplate", weekviewAllDayEventTemplate: "weekviewAllDayEventTemplate", weekviewNormalEventTemplate: "weekviewNormalEventTemplate", dayviewAllDayEventTemplate: "dayviewAllDayEventTemplate", dayviewNormalEventTemplate: "dayviewNormalEventTemplate", weekviewAllDayEventSectionTemplate: "weekviewAllDayEventSectionTemplate", weekviewNormalEventSectionTemplate: "weekviewNormalEventSectionTemplate", dayviewAllDayEventSectionTemplate: "dayviewAllDayEventSectionTemplate", dayviewNormalEventSectionTemplate: "dayviewNormalEventSectionTemplate", weekviewInactiveAllDayEventSectionTemplate: "weekviewInactiveAllDayEventSectionTemplate", weekviewInactiveNormalEventSectionTemplate: "weekviewInactiveNormalEventSectionTemplate", dayviewInactiveAllDayEventSectionTemplate: "dayviewInactiveAllDayEventSectionTemplate", dayviewInactiveNormalEventSectionTemplate: "dayviewInactiveNormalEventSectionTemplate", dateFormatter: "dateFormatter", dir: "dir", scrollToHour: "scrollToHour", preserveScrollPosition: "preserveScrollPosition", lockSwipeToPrev: "lockSwipeToPrev", lockSwipes: "lockSwipes", locale: "locale", startHour: "startHour", endHour: "endHour", sliderOptions: "sliderOptions" }, outputs: { onCurrentDateChanged: "onCurrentDateChanged", onRangeChanged: "onRangeChanged", onEventSelected: "onEventSelected", onTimeSelected: "onTimeSelected", onTitleChanged: "onTitleChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_calendar_service__WEBPACK_IMPORTED_MODULE_1__["CalendarService"]])], decls: 24, vars: 7, consts: [["monthviewDefaultDisplayEventTemplate", ""], ["monthviewDefaultEventDetailTemplate", ""], ["defaultWeekviewHeaderTemplate", ""], ["defaultAllDayEventTemplate", ""], ["defaultNormalEventTemplate", ""], ["defaultWeekViewAllDayEventSectionTemplate", ""], ["defaultDayViewAllDayEventSectionTemplate", ""], ["defaultNormalEventSectionTemplate", ""], ["defaultInactiveAllDayEventSectionTemplate", ""], ["defaultInactiveNormalEventSectionTemplate", ""], [3, "ngSwitch"], [3, "formatDay", "formatDayHeader", "formatMonthTitle", "startingDayMonth", "showEventDetail", "noEventsLabel", "autoSelect", "eventSource", "markDisabled", "monthviewDisplayEventTemplate", "monthviewInactiveDisplayEventTemplate", "monthviewEventDetailTemplate", "locale", "dateFormatter", "dir", "lockSwipeToPrev", "lockSwipes", "sliderOptions", "onRangeChanged", "onEventSelected", "onTimeSelected", "onTitleChanged", 4, "ngSwitchCase"], [3, "formatWeekTitle", "formatWeekViewDayHeader", "formatHourColumn", "startingDayWeek", "allDayLabel", "hourParts", "autoSelect", "hourSegments", "eventSource", "markDisabled", "weekviewHeaderTemplate", "weekviewAllDayEventTemplate", "weekviewNormalEventTemplate", "weekviewAllDayEventSectionTemplate", "weekviewNormalEventSectionTemplate", "weekviewInactiveAllDayEventSectionTemplate", "weekviewInactiveNormalEventSectionTemplate", "locale", "dateFormatter", "dir", "scrollToHour", "preserveScrollPosition", "lockSwipeToPrev", "lockSwipes", "startHour", "endHour", "sliderOptions", "onRangeChanged", "onEventSelected", "onTimeSelected", "onTitleChanged", 4, "ngSwitchCase"], [3, "formatDayTitle", "formatHourColumn", "allDayLabel", "hourParts", "hourSegments", "eventSource", "markDisabled", "dayviewAllDayEventTemplate", "dayviewNormalEventTemplate", "dayviewAllDayEventSectionTemplate", "dayviewNormalEventSectionTemplate", "dayviewInactiveAllDayEventSectionTemplate", "dayviewInactiveNormalEventSectionTemplate", "locale", "dateFormatter", "dir", "scrollToHour", "preserveScrollPosition", "lockSwipeToPrev", "lockSwipes", "startHour", "endHour", "sliderOptions", "onRangeChanged", "onEventSelected", "onTimeSelected", "onTitleChanged", 4, "ngSwitchCase"], ["class", "event-detail-container", "has-bouncing", "false", "overflow-scroll", "false", 4, "ngIf"], ["has-bouncing", "false", "overflow-scroll", "false", 1, "event-detail-container"], [3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"], ["class", "monthview-eventdetail-timecolumn", 4, "ngIf"], [1, "event-detail"], [1, "monthview-eventdetail-timecolumn"], [1, "no-events-label"], [1, "calendar-event-inner"], [3, "ngClass", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["class", "calendar-event", "tappable", "", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["tappable", "", 1, "calendar-event", 3, "ngStyle", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "formatDay", "formatDayHeader", "formatMonthTitle", "startingDayMonth", "showEventDetail", "noEventsLabel", "autoSelect", "eventSource", "markDisabled", "monthviewDisplayEventTemplate", "monthviewInactiveDisplayEventTemplate", "monthviewEventDetailTemplate", "locale", "dateFormatter", "dir", "lockSwipeToPrev", "lockSwipes", "sliderOptions", "onRangeChanged", "onEventSelected", "onTimeSelected", "onTitleChanged"], [3, "formatWeekTitle", "formatWeekViewDayHeader", "formatHourColumn", "startingDayWeek", "allDayLabel", "hourParts", "autoSelect", "hourSegments", "eventSource", "markDisabled", "weekviewHeaderTemplate", "weekviewAllDayEventTemplate", "weekviewNormalEventTemplate", "weekviewAllDayEventSectionTemplate", "weekviewNormalEventSectionTemplate", "weekviewInactiveAllDayEventSectionTemplate", "weekviewInactiveNormalEventSectionTemplate", "locale", "dateFormatter", "dir", "scrollToHour", "preserveScrollPosition", "lockSwipeToPrev", "lockSwipes", "startHour", "endHour", "sliderOptions", "onRangeChanged", "onEventSelected", "onTimeSelected", "onTitleChanged"], [3, "formatDayTitle", "formatHourColumn", "allDayLabel", "hourParts", "hourSegments", "eventSource", "markDisabled", "dayviewAllDayEventTemplate", "dayviewNormalEventTemplate", "dayviewAllDayEventSectionTemplate", "dayviewNormalEventSectionTemplate", "dayviewInactiveAllDayEventSectionTemplate", "dayviewInactiveNormalEventSectionTemplate", "locale", "dateFormatter", "dir", "scrollToHour", "preserveScrollPosition", "lockSwipeToPrev", "lockSwipes", "startHour", "endHour", "sliderOptions", "onRangeChanged", "onEventSelected", "onTimeSelected", "onTitleChanged"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CalendarComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalendarComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CalendarComponent_ng_template_6_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CalendarComponent_ng_template_8_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CalendarComponent_ng_template_10_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CalendarComponent_ng_template_12_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CalendarComponent_ng_template_14_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CalendarComponent_ng_template_16_Template, 0, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CalendarComponent_ng_template_18_Template, 0, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CalendarComponent_monthview_21_Template, 1, 18, "monthview", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CalendarComponent_weekview_22_Template, 1, 27, "weekview", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CalendarComponent_dayview_23_Template, 1, 23, "dayview", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.calendarMode, "view-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.calendarMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "day");
    } }, styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] { height: 100%; }\n\n        .event-detail-container[_ngcontent-%COMP%] {\n          border-top: 2px darkgrey solid;\n        }\n\n        .no-events-label[_ngcontent-%COMP%] {\n          font-weight: bold;\n          color: darkgrey;\n          text-align: center;\n        }\n\n        .event-detail[_ngcontent-%COMP%] {\n          cursor: pointer;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n\n        .monthview-eventdetail-timecolumn[_ngcontent-%COMP%] {\n          width: 110px;\n          overflow: hidden;\n        }\n\n        .calendar-event-inner[_ngcontent-%COMP%] {\n          overflow: hidden;\n          background-color: #3a87ad;\n          color: white;\n          height: 100%;\n          width: 100%;\n          padding: 2px;\n          line-height: 15px;\n          text-align: initial;\n        }\n\n        @media (max-width: 750px) {\n          .calendar-event-inner[_ngcontent-%COMP%] {\n            font-size: 12px;\n          }\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'calendar',
                template: `
        <ng-template #monthviewDefaultDisplayEventTemplate let-view="view" let-row="row" let-col="col">
            {{view.dates[row*7+col].label}}
        </ng-template>
        <ng-template #monthviewDefaultEventDetailTemplate let-showEventDetail="showEventDetail" let-selectedDate="selectedDate" let-noEventsLabel="noEventsLabel">
            <ion-list class="event-detail-container" has-bouncing="false" *ngIf="showEventDetail" overflow-scroll="false">
                <ion-item *ngFor="let event of selectedDate?.events" (click)="eventSelected(event)">
                        <span *ngIf="!event.allDay" class="monthview-eventdetail-timecolumn">{{event.startTime|date: 'HH:mm'}}
                            -
                            {{event.endTime|date: 'HH:mm'}}
                        </span>
                    <span *ngIf="event.allDay" class="monthview-eventdetail-timecolumn">{{allDayLabel}}</span>
                    <span class="event-detail">  |  {{event.title}}</span>
                </ion-item>
                <ion-item *ngIf="selectedDate?.events.length==0">
                    <div class="no-events-label">{{noEventsLabel}}</div>
                </ion-item>
            </ion-list>
        </ng-template>
        <ng-template #defaultWeekviewHeaderTemplate let-viewDate="viewDate">
            {{ viewDate.dayHeader }}
        </ng-template>
        <ng-template #defaultAllDayEventTemplate let-displayEvent="displayEvent">
            <div class="calendar-event-inner">{{displayEvent.event.title}}</div>
        </ng-template>
        <ng-template #defaultNormalEventTemplate let-displayEvent="displayEvent">
            <div class="calendar-event-inner">{{displayEvent.event.title}}</div>
        </ng-template>
        <ng-template #defaultWeekViewAllDayEventSectionTemplate let-day="day" let-eventTemplate="eventTemplate">
            <div [ngClass]="{'calendar-event-wrap': day.events}" *ngIf="day.events"
                 [ngStyle]="{height: 25*day.events.length+'px'}">
                <div *ngFor="let displayEvent of day.events" class="calendar-event" tappable
                     (click)="eventSelected(displayEvent.event)"
                     [ngStyle]="{top: 25*displayEvent.position+'px', width: 100*(displayEvent.endIndex-displayEvent.startIndex)+'%', height: '25px'}">
                    <ng-template [ngTemplateOutlet]="eventTemplate"
                                 [ngTemplateOutletContext]="{displayEvent:displayEvent}">
                    </ng-template>
                </div>
            </div>
        </ng-template>
        <ng-template #defaultDayViewAllDayEventSectionTemplate let-allDayEvents="allDayEvents" let-eventTemplate="eventTemplate">
            <div *ngFor="let displayEvent of allDayEvents; let eventIndex=index"
                 class="calendar-event" tappable
                 (click)="eventSelected(displayEvent.event)"
                 [ngStyle]="{top: 25*eventIndex+'px',width: '100%',height:'25px'}">
                <ng-template [ngTemplateOutlet]="eventTemplate"
                             [ngTemplateOutletContext]="{displayEvent:displayEvent}">
                </ng-template>
            </div>
        </ng-template>
        <ng-template #defaultNormalEventSectionTemplate let-tm="tm" let-hourParts="hourParts" let-eventTemplate="eventTemplate">
            <div [ngClass]="{'calendar-event-wrap': tm.events}" *ngIf="tm.events">
                <div *ngFor="let displayEvent of tm.events" class="calendar-event" tappable
                     (click)="eventSelected(displayEvent.event)"
                     [ngStyle]="{top: (37*displayEvent.startOffset/hourParts)+'px',left: 100/displayEvent.overlapNumber*displayEvent.position+'%', width: 100/displayEvent.overlapNumber+'%', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+'px'}">
                    <ng-template [ngTemplateOutlet]="eventTemplate"
                                 [ngTemplateOutletContext]="{displayEvent:displayEvent}">
                    </ng-template>
                </div>
            </div>
        </ng-template>
        <ng-template #defaultInactiveAllDayEventSectionTemplate>
        </ng-template>
        <ng-template #defaultInactiveNormalEventSectionTemplate>
        </ng-template>

        <div [ngSwitch]="calendarMode" class="{{calendarMode}}view-container">
            <monthview *ngSwitchCase="'month'"
                [formatDay]="formatDay"
                [formatDayHeader]="formatDayHeader"
                [formatMonthTitle]="formatMonthTitle"
                [startingDayMonth]="startingDayMonth"
                [showEventDetail]="showEventDetail"
                [noEventsLabel]="noEventsLabel"
                [autoSelect]="autoSelect"
                [eventSource]="eventSource"
                [markDisabled]="markDisabled"
                [monthviewDisplayEventTemplate]="monthviewDisplayEventTemplate||monthviewDefaultDisplayEventTemplate"
                [monthviewInactiveDisplayEventTemplate]="monthviewInactiveDisplayEventTemplate||monthviewDefaultDisplayEventTemplate"
                [monthviewEventDetailTemplate]="monthviewEventDetailTemplate||monthviewDefaultEventDetailTemplate"
                [locale]="locale"
                [dateFormatter]="dateFormatter"
                [dir]="dir"
                [lockSwipeToPrev]="lockSwipeToPrev"
                [lockSwipes]="lockSwipes"
                [sliderOptions]="sliderOptions"
                (onRangeChanged)="rangeChanged($event)"
                (onEventSelected)="eventSelected($event)"
                (onTimeSelected)="timeSelected($event)"
                (onTitleChanged)="titleChanged($event)">
            </monthview>
            <weekview *ngSwitchCase="'week'"
                [formatWeekTitle]="formatWeekTitle"
                [formatWeekViewDayHeader]="formatWeekViewDayHeader"
                [formatHourColumn]="formatHourColumn"
                [startingDayWeek]="startingDayWeek"
                [allDayLabel]="allDayLabel"
                [hourParts]="hourParts"
                [autoSelect]="autoSelect"
                [hourSegments]="hourSegments"
                [eventSource]="eventSource"
                [markDisabled]="markDisabled"
                [weekviewHeaderTemplate]="weekviewHeaderTemplate||defaultWeekviewHeaderTemplate"
                [weekviewAllDayEventTemplate]="weekviewAllDayEventTemplate||defaultAllDayEventTemplate"
                [weekviewNormalEventTemplate]="weekviewNormalEventTemplate||defaultNormalEventTemplate"
                [weekviewAllDayEventSectionTemplate]="weekviewAllDayEventSectionTemplate||defaultWeekViewAllDayEventSectionTemplate"
                [weekviewNormalEventSectionTemplate]="weekviewNormalEventSectionTemplate||defaultNormalEventSectionTemplate"
                [weekviewInactiveAllDayEventSectionTemplate]="weekviewInactiveAllDayEventSectionTemplate||defaultInactiveAllDayEventSectionTemplate"
                [weekviewInactiveNormalEventSectionTemplate]="weekviewInactiveNormalEventSectionTemplate||defaultInactiveNormalEventSectionTemplate"
                [locale]="locale"
                [dateFormatter]="dateFormatter"
                [dir]="dir"
                [scrollToHour]="scrollToHour"
                [preserveScrollPosition]="preserveScrollPosition"
                [lockSwipeToPrev]="lockSwipeToPrev"
                [lockSwipes]="lockSwipes"
                [startHour]="startHour"
                [endHour]="endHour"
                [sliderOptions]="sliderOptions"
                (onRangeChanged)="rangeChanged($event)"
                (onEventSelected)="eventSelected($event)"
                (onTimeSelected)="timeSelected($event)"
                (onTitleChanged)="titleChanged($event)">
            </weekview>
            <dayview *ngSwitchCase="'day'"
                [formatDayTitle]="formatDayTitle"
                [formatHourColumn]="formatHourColumn"
                [allDayLabel]="allDayLabel"
                [hourParts]="hourParts"
                [hourSegments]="hourSegments"
                [eventSource]="eventSource"
                [markDisabled]="markDisabled"
                [dayviewAllDayEventTemplate]="dayviewAllDayEventTemplate||defaultAllDayEventTemplate"
                [dayviewNormalEventTemplate]="dayviewNormalEventTemplate||defaultNormalEventTemplate"
                [dayviewAllDayEventSectionTemplate]="dayviewAllDayEventSectionTemplate||defaultDayViewAllDayEventSectionTemplate"
                [dayviewNormalEventSectionTemplate]="dayviewNormalEventSectionTemplate||defaultNormalEventSectionTemplate"
                [dayviewInactiveAllDayEventSectionTemplate]="dayviewInactiveAllDayEventSectionTemplate||defaultInactiveAllDayEventSectionTemplate"
                [dayviewInactiveNormalEventSectionTemplate]="dayviewInactiveNormalEventSectionTemplate||defaultInactiveNormalEventSectionTemplate"
                [locale]="locale"
                [dateFormatter]="dateFormatter"
                [dir]="dir"
                [scrollToHour]="scrollToHour"
                [preserveScrollPosition]="preserveScrollPosition"
                [lockSwipeToPrev]="lockSwipeToPrev"
                [lockSwipes]="lockSwipes"
                [startHour]="startHour"
                [endHour]="endHour"
                [sliderOptions]="sliderOptions"
                (onRangeChanged)="rangeChanged($event)"
                (onEventSelected)="eventSelected($event)"
                (onTimeSelected)="timeSelected($event)"
                (onTitleChanged)="titleChanged($event)">
            </dayview>
        </div>
    `,
                styles: [`
        :host > div { height: 100%; }

        .event-detail-container {
          border-top: 2px darkgrey solid;
        }

        .no-events-label {
          font-weight: bold;
          color: darkgrey;
          text-align: center;
        }

        .event-detail {
          cursor: pointer;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .monthview-eventdetail-timecolumn {
          width: 110px;
          overflow: hidden;
        }

        .calendar-event-inner {
          overflow: hidden;
          background-color: #3a87ad;
          color: white;
          height: 100%;
          width: 100%;
          padding: 2px;
          line-height: 15px;
          text-align: initial;
        }

        @media (max-width: 750px) {
          .calendar-event-inner {
            font-size: 12px;
          }
        }
    `],
                providers: [_calendar_service__WEBPACK_IMPORTED_MODULE_1__["CalendarService"]]
            }]
    }], function () { return [{ type: _calendar_service__WEBPACK_IMPORTED_MODULE_1__["CalendarService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }]; }, { currentDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], eventSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], calendarMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formatDay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formatDayHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formatDayTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formatWeekTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formatMonthTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formatWeekViewDayHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formatHourColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showEventDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startingDayMonth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startingDayWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allDayLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noEventsLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], queryMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timeInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], markDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], monthviewDisplayEventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], monthviewInactiveDisplayEventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], monthviewEventDetailTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], weekviewHeaderTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], weekviewAllDayEventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], weekviewNormalEventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dayviewAllDayEventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dayviewNormalEventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], weekviewAllDayEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], weekviewNormalEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dayviewAllDayEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dayviewNormalEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], weekviewInactiveAllDayEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], weekviewInactiveNormalEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dayviewInactiveAllDayEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dayviewInactiveNormalEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dateFormatter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollToHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], preserveScrollPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lockSwipeToPrev: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lockSwipes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], endHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sliderOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onCurrentDateChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onRangeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onEventSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onTimeSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onTitleChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./node_modules/ionic2-calendar/calendar.module.js":
/*!*********************************************************!*\
  !*** ./node_modules/ionic2-calendar/calendar.module.js ***!
  \*********************************************************/
/*! exports provided: NgCalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCalendarModule", function() { return NgCalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _monthview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monthview */ "./node_modules/ionic2-calendar/monthview.js");
/* harmony import */ var _weekview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weekview */ "./node_modules/ionic2-calendar/weekview.js");
/* harmony import */ var _dayview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dayview */ "./node_modules/ionic2-calendar/dayview.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar */ "./node_modules/ionic2-calendar/calendar.js");
/* harmony import */ var _init_position_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./init-position-scroll */ "./node_modules/ionic2-calendar/init-position-scroll.js");











class NgCalendarModule {
}
NgCalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgCalendarModule });
NgCalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgCalendarModule_Factory(t) { return new (t || NgCalendarModule)(); }, imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgCalendarModule, { declarations: [_monthview__WEBPACK_IMPORTED_MODULE_3__["MonthViewComponent"], _weekview__WEBPACK_IMPORTED_MODULE_4__["WeekViewComponent"], _dayview__WEBPACK_IMPORTED_MODULE_5__["DayViewComponent"], _calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"], _init_position_scroll__WEBPACK_IMPORTED_MODULE_7__["initPositionScrollComponent"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _monthview__WEBPACK_IMPORTED_MODULE_3__["MonthViewComponent"], _weekview__WEBPACK_IMPORTED_MODULE_4__["WeekViewComponent"], _dayview__WEBPACK_IMPORTED_MODULE_5__["DayViewComponent"], _calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"], _init_position_scroll__WEBPACK_IMPORTED_MODULE_7__["initPositionScrollComponent"]
                ],
                imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackdrop"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardSubtitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonMenu"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonMenuToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonNav"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonNavLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonNote"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRange"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonReorder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonReorderGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRippleEffect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSkeletonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSplitPane"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonThumbnail"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NumericValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["VirtualFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["VirtualHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["VirtualItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonVirtualScroll"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _monthview__WEBPACK_IMPORTED_MODULE_3__["MonthViewComponent"], _weekview__WEBPACK_IMPORTED_MODULE_4__["WeekViewComponent"], _dayview__WEBPACK_IMPORTED_MODULE_5__["DayViewComponent"], _calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"], _init_position_scroll__WEBPACK_IMPORTED_MODULE_7__["initPositionScrollComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]]);


/***/ }),

/***/ "./node_modules/ionic2-calendar/calendar.service.js":
/*!**********************************************************!*\
  !*** ./node_modules/ionic2-calendar/calendar.service.js ***!
  \**********************************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class CalendarService {
    constructor() {
        this.currentDateChangedFromParent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentDateChangedFromChildren = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.eventSourceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.slideChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentDateChangedFromParent$ = this.currentDateChangedFromParent.asObservable();
        this.currentDateChangedFromChildren$ = this.currentDateChangedFromChildren.asObservable();
        this.eventSourceChanged$ = this.eventSourceChanged.asObservable();
        this.slideChanged$ = this.slideChanged.asObservable();
    }
    setCurrentDate(val, fromParent = false) {
        this._currentDate = new Date(val);
        if (fromParent) {
            this.currentDateChangedFromParent.next(val);
        }
        else {
            this.currentDateChangedFromChildren.next(val);
        }
    }
    get currentDate() {
        return this._currentDate;
    }
    rangeChanged(component) {
        if (this.queryMode === 'local') {
            if (component.eventSource && component.onDataLoaded) {
                component.onDataLoaded();
            }
        }
        else if (this.queryMode === 'remote') {
            let rangeStart = new Date(component.range.startTime.getTime()), rangeEnd = new Date(component.range.endTime.getTime());
            rangeStart.setHours(0);
            if (rangeStart.getHours() === 23) {
                rangeStart.setTime(rangeStart.getTime() + 3600000);
            }
            rangeEnd.setHours(0);
            if (rangeEnd.getHours() === 23) {
                rangeEnd.setTime(rangeEnd.getTime() + 3600000);
            }
            component.onRangeChanged.emit({
                startTime: rangeStart,
                endTime: rangeEnd
            });
        }
    }
    getStep(mode) {
        switch (mode) {
            case 'month':
                return {
                    years: 0,
                    months: 1,
                    days: 0
                };
            case 'week':
                return {
                    years: 0,
                    months: 0,
                    days: 7
                };
            case 'day':
                return {
                    years: 0,
                    months: 0,
                    days: 1
                };
        }
    }
    getAdjacentCalendarDate(mode, direction) {
        let calculateCalendarDate = this.currentDate;
        const step = this.getStep(mode), year = calculateCalendarDate.getFullYear() + direction * step.years, month = calculateCalendarDate.getMonth() + direction * step.months, date = calculateCalendarDate.getDate() + direction * step.days;
        calculateCalendarDate = new Date(year, month, date, 12, 0, 0);
        if (mode === 'month') {
            const firstDayInNextMonth = new Date(year, month + 1, 1, 12, 0, 0);
            if (firstDayInNextMonth.getTime() <= calculateCalendarDate.getTime()) {
                calculateCalendarDate = new Date(firstDayInNextMonth.getTime() - 24 * 60 * 60 * 1000);
            }
        }
        return calculateCalendarDate;
    }
    getAdjacentViewStartTime(component, direction) {
        let adjacentCalendarDate = this.getAdjacentCalendarDate(component.mode, direction);
        return component.getRange(adjacentCalendarDate).startTime;
    }
    populateAdjacentViews(component) {
        let currentViewStartDate, currentViewData, toUpdateViewIndex, currentViewIndex = component.currentViewIndex;
        if (component.direction === 1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
            toUpdateViewIndex = (currentViewIndex + 1) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
        }
        else if (component.direction === -1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
            toUpdateViewIndex = (currentViewIndex + 2) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
        }
        else {
            if (!component.views) {
                currentViewData = [];
                currentViewStartDate = component.range.startTime;
                currentViewData.push(component.getViewData(currentViewStartDate));
                currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
                currentViewData.push(component.getViewData(currentViewStartDate));
                currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
                currentViewData.push(component.getViewData(currentViewStartDate));
                component.views = currentViewData;
            }
            else {
                currentViewStartDate = component.range.startTime;
                component.views[currentViewIndex] = component.getViewData(currentViewStartDate);
                currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
                toUpdateViewIndex = (currentViewIndex + 2) % 3;
                component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
                currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
                toUpdateViewIndex = (currentViewIndex + 1) % 3;
                component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
            }
        }
    }
    loadEvents() {
        this.eventSourceChanged.next();
    }
    slide(direction) {
        this.slideChanged.next(direction);
    }
}
CalendarService.ɵfac = function CalendarService_Factory(t) { return new (t || CalendarService)(); };
CalendarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalendarService, factory: CalendarService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./node_modules/ionic2-calendar/dayview.js":
/*!*************************************************!*\
  !*** ./node_modules/ionic2-calendar/dayview.js ***!
  \*************************************************/
/*! exports provided: DayViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayViewComponent", function() { return DayViewComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _init_position_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init-position-scroll */ "./node_modules/ionic2-calendar/init-position-scroll.js");







const _c0 = ["daySlider"];
function DayViewComponent_td_10_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0) { return { "calendar-event-wrap": a0 }; };
const _c2 = function (a0) { return { height: a0 }; };
const _c3 = function (a0, a1) { return { allDayEvents: a0, eventTemplate: a1 }; };
function DayViewComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DayViewComponent_td_10_ng_template_1_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, ctx_r250.views[0].allDayEvents.length > 0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, 25 * ctx_r250.views[0].allDayEvents.length + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r250.dayviewAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c3, ctx_r250.views[0].allDayEvents, ctx_r250.dayviewAllDayEventTemplate));
} }
function DayViewComponent_td_11_ng_template_1_Template(rf, ctx) { }
const _c4 = function (a0) { return { allDayEvents: a0 }; };
function DayViewComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DayViewComponent_td_11_ng_template_1_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r251.dayviewInactiveAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c4, ctx_r251.views[0].allDayEvents));
} }
function DayViewComponent_init_position_scroll_12_tr_3_ng_template_4_Template(rf, ctx) { }
const _c5 = function (a0, a1, a2) { return { tm: a0, hourParts: a1, eventTemplate: a2 }; };
function DayViewComponent_init_position_scroll_12_tr_3_Template(rf, ctx) { if (rf & 1) {
    const _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DayViewComponent_init_position_scroll_12_tr_3_Template_td_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r269); const tm_r265 = ctx.$implicit; const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r268.select(tm_r265.time, tm_r265.events); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DayViewComponent_init_position_scroll_12_tr_3_ng_template_4_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r265 = ctx.$implicit;
    const i_r266 = ctx.index;
    const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r264.hourColumnLabels[i_r266], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r264.dayviewNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c5, tm_r265, ctx_r264.hourParts, ctx_r264.dayviewNormalEventTemplate));
} }
function DayViewComponent_init_position_scroll_12_Template(rf, ctx) { if (rf & 1) {
    const _r271 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "init-position-scroll", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onScroll", function DayViewComponent_init_position_scroll_12_Template_init_position_scroll_onScroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r271); const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r270.setScrollPosition($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DayViewComponent_init_position_scroll_12_tr_3_Template, 5, 7, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initPosition", ctx_r252.initScrollPosition)("emitEvent", ctx_r252.preserveScrollPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r252.views[0].rows);
} }
function DayViewComponent_init_position_scroll_13_tr_3_ng_template_4_Template(rf, ctx) { }
const _c6 = function (a0, a1) { return { tm: a0, hourParts: a1 }; };
function DayViewComponent_init_position_scroll_13_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DayViewComponent_init_position_scroll_13_tr_3_ng_template_4_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r273 = ctx.$implicit;
    const i_r274 = ctx.index;
    const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r272.hourColumnLabels[i_r274], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r272.dayviewInactiveNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c6, tm_r273, ctx_r272.hourParts));
} }
function DayViewComponent_init_position_scroll_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "init-position-scroll", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DayViewComponent_init_position_scroll_13_tr_3_Template, 5, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initPosition", ctx_r253.initScrollPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r253.views[0].rows);
} }
function DayViewComponent_td_22_ng_template_1_Template(rf, ctx) { }
function DayViewComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DayViewComponent_td_22_ng_template_1_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, ctx_r254.views[1].allDayEvents.length > 0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, 25 * ctx_r254.views[1].allDayEvents.length + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r254.dayviewAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c3, ctx_r254.views[1].allDayEvents, ctx_r254.dayviewAllDayEventTemplate));
} }
function DayViewComponent_td_23_ng_template_1_Template(rf, ctx) { }
function DayViewComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DayViewComponent_td_23_ng_template_1_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r255.dayviewInactiveAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c4, ctx_r255.views[1].allDayEvents));
} }
function DayViewComponent_init_position_scroll_24_tr_3_ng_template_4_Template(rf, ctx) { }
function DayViewComponent_init_position_scroll_24_tr_3_Template(rf, ctx) { if (rf & 1) {
    const _r283 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DayViewComponent_init_position_scroll_24_tr_3_Template_td_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r283); const tm_r279 = ctx.$implicit; const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r282.select(tm_r279.time, tm_r279.events); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DayViewComponent_init_position_scroll_24_tr_3_ng_template_4_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r279 = ctx.$implicit;
    const i_r280 = ctx.index;
    const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r278.hourColumnLabels[i_r280], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r278.dayviewNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c5, tm_r279, ctx_r278.hourParts, ctx_r278.dayviewNormalEventTemplate));
} }
function DayViewComponent_init_position_scroll_24_Template(rf, ctx) { if (rf & 1) {
    const _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "init-position-scroll", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onScroll", function DayViewComponent_init_position_scroll_24_Template_init_position_scroll_onScroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r285); const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r284.setScrollPosition($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DayViewComponent_init_position_scroll_24_tr_3_Template, 5, 7, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initPosition", ctx_r256.initScrollPosition)("emitEvent", ctx_r256.preserveScrollPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r256.views[1].rows);
} }
function DayViewComponent_init_position_scroll_25_tr_3_ng_template_4_Template(rf, ctx) { }
function DayViewComponent_init_position_scroll_25_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DayViewComponent_init_position_scroll_25_tr_3_ng_template_4_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r287 = ctx.$implicit;
    const i_r288 = ctx.index;
    const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r286.hourColumnLabels[i_r288], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r286.dayviewInactiveNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c6, tm_r287, ctx_r286.hourParts));
} }
function DayViewComponent_init_position_scroll_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "init-position-scroll", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DayViewComponent_init_position_scroll_25_tr_3_Template, 5, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initPosition", ctx_r257.initScrollPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r257.views[1].rows);
} }
function DayViewComponent_td_34_ng_template_1_Template(rf, ctx) { }
function DayViewComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DayViewComponent_td_34_ng_template_1_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, ctx_r258.views[2].allDayEvents.length > 0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, 25 * ctx_r258.views[2].allDayEvents.length + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r258.dayviewAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c3, ctx_r258.views[2].allDayEvents, ctx_r258.dayviewAllDayEventTemplate));
} }
function DayViewComponent_td_35_ng_template_1_Template(rf, ctx) { }
function DayViewComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DayViewComponent_td_35_ng_template_1_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r259.dayviewInactiveAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c4, ctx_r259.views[2].allDayEvents));
} }
function DayViewComponent_init_position_scroll_36_tr_3_ng_template_4_Template(rf, ctx) { }
function DayViewComponent_init_position_scroll_36_tr_3_Template(rf, ctx) { if (rf & 1) {
    const _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DayViewComponent_init_position_scroll_36_tr_3_Template_td_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r297); const tm_r293 = ctx.$implicit; const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r296.select(tm_r293.time, tm_r293.events); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DayViewComponent_init_position_scroll_36_tr_3_ng_template_4_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r293 = ctx.$implicit;
    const i_r294 = ctx.index;
    const ctx_r292 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r292.hourColumnLabels[i_r294], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r292.dayviewNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c5, tm_r293, ctx_r292.hourParts, ctx_r292.dayviewNormalEventTemplate));
} }
function DayViewComponent_init_position_scroll_36_Template(rf, ctx) { if (rf & 1) {
    const _r299 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "init-position-scroll", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onScroll", function DayViewComponent_init_position_scroll_36_Template_init_position_scroll_onScroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r299); const ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r298.setScrollPosition($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DayViewComponent_init_position_scroll_36_tr_3_Template, 5, 7, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initPosition", ctx_r260.initScrollPosition)("emitEvent", ctx_r260.preserveScrollPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r260.views[2].rows);
} }
function DayViewComponent_init_position_scroll_37_tr_3_ng_template_4_Template(rf, ctx) { }
function DayViewComponent_init_position_scroll_37_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DayViewComponent_init_position_scroll_37_tr_3_ng_template_4_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r301 = ctx.$implicit;
    const i_r302 = ctx.index;
    const ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r300.hourColumnLabels[i_r302], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r300.dayviewInactiveNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c6, tm_r301, ctx_r300.hourParts));
} }
function DayViewComponent_init_position_scroll_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "init-position-scroll", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DayViewComponent_init_position_scroll_37_tr_3_Template, 5, 6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initPosition", ctx_r261.initScrollPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r261.views[2].rows);
} }
class DayViewComponent {
    constructor(calendarService, elm) {
        this.calendarService = calendarService;
        this.elm = elm;
        this.class = true;
        this.dir = '';
        this.scrollToHour = 0;
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.direction = 0;
        this.mode = 'day';
        this.inited = false;
        this.callbackOnInit = true;
    }
    static createDateObjects(startTime, startHour, endHour, timeInterval) {
        const rows = [], currentHour = 0, currentDate = startTime.getDate();
        let time, hourStep, minStep;
        if (timeInterval < 1) {
            hourStep = Math.floor(1 / timeInterval);
            minStep = 60;
        }
        else {
            hourStep = 1;
            minStep = Math.floor(60 / timeInterval);
        }
        for (let hour = startHour; hour < endHour; hour += hourStep) {
            for (let interval = 0; interval < 60; interval += minStep) {
                time = new Date(startTime.getTime());
                time.setHours(currentHour + hour, interval);
                time.setDate(currentDate);
                rows.push({
                    time,
                    events: []
                });
            }
        }
        return rows;
    }
    static compareEventByStartOffset(eventA, eventB) {
        return eventA.startOffset - eventB.startOffset;
    }
    static calculateWidth(orderedEvents, size, hourParts) {
        const totalSize = size * hourParts, cells = new Array(totalSize);
        // sort by position in descending order, the right most columns should be calculated first
        orderedEvents.sort((eventA, eventB) => {
            return eventB.position - eventA.position;
        });
        for (let i = 0; i < totalSize; i += 1) {
            cells[i] = {
                calculated: false,
                events: []
            };
        }
        const len = orderedEvents.length;
        for (let i = 0; i < len; i += 1) {
            const event = orderedEvents[i];
            let index = event.startIndex * hourParts + event.startOffset;
            while (index < event.endIndex * hourParts - event.endOffset) {
                cells[index].events.push(event);
                index += 1;
            }
        }
        let i = 0;
        while (i < len) {
            let event = orderedEvents[i];
            if (!event.overlapNumber) {
                const overlapNumber = event.position + 1;
                event.overlapNumber = overlapNumber;
                const eventQueue = [event];
                while (event = eventQueue.shift()) {
                    let index = event.startIndex * hourParts + event.startOffset;
                    while (index < event.endIndex * hourParts - event.endOffset) {
                        if (!cells[index].calculated) {
                            cells[index].calculated = true;
                            if (cells[index].events) {
                                const eventCountInCell = cells[index].events.length;
                                for (let j = 0; j < eventCountInCell; j += 1) {
                                    const currentEventInCell = cells[index].events[j];
                                    if (!currentEventInCell.overlapNumber) {
                                        currentEventInCell.overlapNumber = overlapNumber;
                                        eventQueue.push(currentEventInCell);
                                    }
                                }
                            }
                        }
                        index += 1;
                    }
                }
            }
            i += 1;
        }
    }
    ngOnInit() {
        if (!this.sliderOptions) {
            this.sliderOptions = {};
        }
        this.sliderOptions.loop = true;
        this.hourRange = (this.endHour - this.startHour) * this.hourSegments;
        if (this.dateFormatter && this.dateFormatter.formatDayViewTitle) {
            this.formatTitle = this.dateFormatter.formatDayViewTitle;
        }
        else {
            const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](this.locale);
            this.formatTitle = function (date) {
                return datePipe.transform(date, this.formatDayTitle);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatDayViewHourColumn) {
            this.formatHourColumnLabel = this.dateFormatter.formatDayViewHourColumn;
        }
        else {
            const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](this.locale);
            this.formatHourColumnLabel = function (date) {
                return datePipe.transform(date, this.formatHourColumn);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.hourColumnLabels = this.getHourColumnLabels();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(currentDate => {
            this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(() => {
            this.onDataLoaded();
        });
        this.slideChangedSubscription = this.calendarService.slideChanged$.subscribe(direction => {
            if (direction === 1) {
                this.slider.slideNext();
            }
            else if (direction === -1) {
                this.slider.slidePrev();
            }
        });
    }
    ngAfterViewInit() {
        const title = this.getTitle();
        this.onTitleChanged.emit(title);
        if (this.scrollToHour > 0) {
            const hourColumns = this.elm.nativeElement.querySelector('.dayview-normal-event-container').querySelectorAll('.calendar-hour-column');
            const me = this;
            setTimeout(() => {
                me.initScrollPosition = hourColumns[me.scrollToHour - me.startHour].offsetTop;
            }, 50);
        }
    }
    ngOnChanges(changes) {
        if (!this.inited) {
            return;
        }
        const eventSourceChange = changes.eventSource;
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        const lockSwipeToPrev = changes.lockSwipeToPrev;
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        const lockSwipes = changes.lockSwipes;
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    }
    ngOnDestroy() {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
        if (this.slideChangedSubscription) {
            this.slideChangedSubscription.unsubscribe();
            this.slideChangedSubscription = null;
        }
    }
    onSlideChanged() {
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        let direction = 0;
        const currentViewIndex = this.currentViewIndex;
        this.slider.getActiveIndex().then((currentSlideIndex) => {
            currentSlideIndex = (currentSlideIndex + 2) % 3;
            if (isNaN(currentSlideIndex)) {
                currentSlideIndex = currentViewIndex;
            }
            if (currentSlideIndex - currentViewIndex === 1) {
                direction = 1;
            }
            else if (currentSlideIndex === 0 && currentViewIndex === 2) {
                direction = 1;
                this.slider.slideTo(1, 0, false);
            }
            else if (currentViewIndex - currentSlideIndex === 1) {
                direction = -1;
            }
            else if (currentSlideIndex === 2 && currentViewIndex === 0) {
                direction = -1;
                this.slider.slideTo(3, 0, false);
            }
            this.currentViewIndex = currentSlideIndex;
            this.move(direction);
        });
    }
    move(direction) {
        if (direction === 0) {
            return;
        }
        this.direction = direction;
        const adjacentDate = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
        this.calendarService.setCurrentDate(adjacentDate);
        this.refreshView();
        this.direction = 0;
    }
    getHourColumnLabels() {
        const hourColumnLabels = [];
        for (let hour = 0, length = this.views[0].rows.length; hour < length; hour += 1) {
            // handle edge case for DST
            if (hour === 0 && this.views[0].rows[hour].time.getHours() !== this.startHour) {
                const time = new Date(this.views[0].rows[hour].time);
                time.setDate(time.getDate() + 1);
                time.setHours(this.startHour);
                hourColumnLabels.push(this.formatHourColumnLabel(time));
            }
            else {
                hourColumnLabels.push(this.formatHourColumnLabel(this.views[0].rows[hour].time));
            }
        }
        return hourColumnLabels;
    }
    getViewData(startTime) {
        return {
            rows: DayViewComponent.createDateObjects(startTime, this.startHour, this.endHour, this.hourSegments),
            allDayEvents: []
        };
    }
    getRange(currentDate) {
        const year = currentDate.getFullYear(), month = currentDate.getMonth(), date = currentDate.getDate(), startTime = new Date(year, month, date, 12, 0, 0), endTime = new Date(year, month, date + 1, 12, 0, 0);
        return {
            startTime,
            endTime
        };
    }
    onDataLoaded() {
        const eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = this.range.startTime, endTime = this.range.endTime, utcStartTime = Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate()), utcEndTime = Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate()), currentViewIndex = this.currentViewIndex, rows = this.views[currentViewIndex].rows, allDayEvents = this.views[currentViewIndex].allDayEvents = [], oneHour = 3600000, eps = 0.016, rangeStartRowIndex = this.startHour * this.hourSegments, rangeEndRowIndex = this.endHour * this.hourSegments;
        let normalEventInRange = false;
        for (let hour = 0; hour < this.hourRange; hour += 1) {
            rows[hour].events = [];
        }
        for (let i = 0; i < len; i += 1) {
            const event = eventSource[i];
            const eventStartTime = event.startTime;
            const eventEndTime = event.endTime;
            let eventUTCStartTime, eventUTCEndTime;
            if (event.allDay) {
                eventUTCStartTime = eventStartTime.getTime();
                eventUTCEndTime = eventEndTime.getTime();
            }
            else {
                eventUTCStartTime = Date.UTC(eventStartTime.getFullYear(), eventStartTime.getMonth(), eventStartTime.getDate());
                eventUTCEndTime = Date.UTC(eventEndTime.getFullYear(), eventEndTime.getMonth(), eventEndTime.getDate() + 1);
            }
            if (eventUTCEndTime <= utcStartTime || eventUTCStartTime >= utcEndTime || eventStartTime >= eventEndTime) {
                continue;
            }
            if (event.allDay) {
                allDayEvents.push({
                    event
                });
            }
            else {
                normalEventInRange = true;
                let timeDifferenceStart;
                if (eventUTCStartTime < utcStartTime) {
                    timeDifferenceStart = 0;
                }
                else {
                    timeDifferenceStart = (eventStartTime.getHours() + eventStartTime.getMinutes() / 60) * this.hourSegments;
                }
                let timeDifferenceEnd;
                if (eventUTCEndTime > utcEndTime) {
                    timeDifferenceEnd = (utcEndTime - utcStartTime) / oneHour * this.hourSegments;
                }
                else {
                    timeDifferenceEnd = (eventEndTime.getHours() + eventEndTime.getMinutes() / 60) * this.hourSegments;
                }
                let startIndex = Math.floor(timeDifferenceStart);
                let endIndex = Math.ceil(timeDifferenceEnd - eps);
                let startOffset = 0;
                let endOffset = 0;
                if (this.hourParts !== 1) {
                    if (startIndex < rangeStartRowIndex) {
                        startOffset = 0;
                    }
                    else {
                        startOffset = Math.floor((timeDifferenceStart - startIndex) * this.hourParts);
                    }
                    if (endIndex > rangeEndRowIndex) {
                        endOffset = 0;
                    }
                    else {
                        endOffset = Math.floor((endIndex - timeDifferenceEnd) * this.hourParts);
                    }
                }
                if (startIndex < rangeStartRowIndex) {
                    startIndex = 0;
                }
                else {
                    startIndex -= rangeStartRowIndex;
                }
                if (endIndex > rangeEndRowIndex) {
                    endIndex = rangeEndRowIndex;
                }
                endIndex -= rangeStartRowIndex;
                if (startIndex < endIndex) {
                    const displayEvent = {
                        event,
                        startIndex,
                        endIndex,
                        startOffset,
                        endOffset
                    };
                    let eventSet = rows[startIndex].events;
                    if (eventSet) {
                        eventSet.push(displayEvent);
                    }
                    else {
                        eventSet = [];
                        eventSet.push(displayEvent);
                        rows[startIndex].events = eventSet;
                    }
                }
            }
        }
        if (normalEventInRange) {
            let orderedEvents = [];
            for (let hour = 0; hour < this.hourRange; hour += 1) {
                if (rows[hour].events) {
                    rows[hour].events.sort(DayViewComponent.compareEventByStartOffset);
                    orderedEvents = orderedEvents.concat(rows[hour].events);
                }
            }
            if (orderedEvents.length > 0) {
                this.placeEvents(orderedEvents);
            }
        }
    }
    refreshView() {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            const title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.calendarService.rangeChanged(this);
    }
    getTitle() {
        const startingDate = new Date(this.range.startTime.getTime());
        startingDate.setHours(12, 0, 0, 0);
        return this.formatTitle(startingDate);
    }
    select(selectedTime, events) {
        let disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedTime);
        }
        this.onTimeSelected.emit({
            selectedTime,
            events: events.map(e => e.event),
            disabled
        });
    }
    placeEvents(orderedEvents) {
        this.calculatePosition(orderedEvents);
        DayViewComponent.calculateWidth(orderedEvents, this.hourRange, this.hourParts);
    }
    placeAllDayEvents(orderedEvents) {
        this.calculatePosition(orderedEvents);
    }
    overlap(event1, event2) {
        let earlyEvent = event1, lateEvent = event2;
        if (event1.startIndex > event2.startIndex || (event1.startIndex === event2.startIndex && event1.startOffset > event2.startOffset)) {
            earlyEvent = event2;
            lateEvent = event1;
        }
        if (earlyEvent.endIndex <= lateEvent.startIndex) {
            return false;
        }
        else {
            return !(earlyEvent.endIndex - lateEvent.startIndex === 1 && earlyEvent.endOffset + lateEvent.startOffset >= this.hourParts);
        }
    }
    calculatePosition(events) {
        const len = events.length, isForbidden = new Array(len);
        let maxColumn = 0, col;
        for (let i = 0; i < len; i += 1) {
            for (col = 0; col < maxColumn; col += 1) {
                isForbidden[col] = false;
            }
            for (let j = 0; j < i; j += 1) {
                if (this.overlap(events[i], events[j])) {
                    isForbidden[events[j].position] = true;
                }
            }
            for (col = 0; col < maxColumn; col += 1) {
                if (!isForbidden[col]) {
                    break;
                }
            }
            if (col < maxColumn) {
                events[i].position = col;
            }
            else {
                events[i].position = maxColumn++;
            }
        }
        if (this.dir === 'rtl') {
            for (let i = 0; i < len; i += 1) {
                events[i].position = maxColumn - 1 - events[i].position;
            }
        }
    }
    eventSelected(event) {
        this.onEventSelected.emit(event);
    }
    setScrollPosition(scrollPosition) {
        this.initScrollPosition = scrollPosition;
    }
}
DayViewComponent.ɵfac = function DayViewComponent_Factory(t) { return new (t || DayViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
DayViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DayViewComponent, selectors: [["dayview"]], viewQuery: function DayViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
    } }, hostVars: 2, hostBindings: function DayViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dayview", ctx.class);
    } }, inputs: { dayviewAllDayEventTemplate: "dayviewAllDayEventTemplate", dayviewNormalEventTemplate: "dayviewNormalEventTemplate", dayviewAllDayEventSectionTemplate: "dayviewAllDayEventSectionTemplate", dayviewNormalEventSectionTemplate: "dayviewNormalEventSectionTemplate", dayviewInactiveAllDayEventSectionTemplate: "dayviewInactiveAllDayEventSectionTemplate", dayviewInactiveNormalEventSectionTemplate: "dayviewInactiveNormalEventSectionTemplate", formatHourColumn: "formatHourColumn", formatDayTitle: "formatDayTitle", allDayLabel: "allDayLabel", hourParts: "hourParts", eventSource: "eventSource", markDisabled: "markDisabled", locale: "locale", dateFormatter: "dateFormatter", dir: "dir", scrollToHour: "scrollToHour", preserveScrollPosition: "preserveScrollPosition", lockSwipeToPrev: "lockSwipeToPrev", lockSwipes: "lockSwipes", startHour: "startHour", endHour: "endHour", sliderOptions: "sliderOptions", hourSegments: "hourSegments" }, outputs: { onRangeChanged: "onRangeChanged", onEventSelected: "onEventSelected", onTimeSelected: "onTimeSelected", onTitleChanged: "onTitleChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 38, vars: 17, consts: [[1, "slides-container", 3, "options", "dir", "ionSlideDidChange"], ["daySlider", ""], [1, "slide-container"], [1, "dayview-allday-table"], [1, "dayview-allday-label"], [1, "dayview-allday-content-wrapper", "scroll-content"], [1, "table", "table-bordered", "dayview-allday-content-table"], ["class", "calendar-cell", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "calendar-cell", 4, "ngIf"], ["class", "dayview-normal-event-container", 3, "initPosition", "emitEvent", "onScroll", 4, "ngIf"], ["class", "dayview-normal-event-container", 3, "initPosition", 4, "ngIf"], [1, "calendar-cell", 3, "ngClass", "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "calendar-cell"], [1, "dayview-normal-event-container", 3, "initPosition", "emitEvent", "onScroll"], [1, "table", "table-bordered", "table-fixed", "dayview-normal-event-table"], [4, "ngFor", "ngForOf"], [1, "calendar-hour-column", "text-center"], ["tappable", "", 1, "calendar-cell", 3, "click"], [1, "dayview-normal-event-container", 3, "initPosition"]], template: function DayViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlideDidChange", function DayViewComponent_Template_ion_slides_ionSlideDidChange_0_listener() { return ctx.onSlideChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-slide", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DayViewComponent_td_10_Template, 2, 11, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DayViewComponent_td_11_Template, 2, 4, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DayViewComponent_init_position_scroll_12_Template, 4, 3, "init-position-scroll", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DayViewComponent_init_position_scroll_13_Template, 4, 2, "init-position-scroll", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-slide", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, DayViewComponent_td_22_Template, 2, 11, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DayViewComponent_td_23_Template, 2, 4, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, DayViewComponent_init_position_scroll_24_Template, 4, 3, "init-position-scroll", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DayViewComponent_init_position_scroll_25_Template, 4, 2, "init-position-scroll", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-slide", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, DayViewComponent_td_34_Template, 2, 11, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, DayViewComponent_td_35_Template, 2, 4, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, DayViewComponent_init_position_scroll_36_Template, 4, 3, "init-position-scroll", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, DayViewComponent_init_position_scroll_37_Template, 4, 2, "init-position-scroll", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.sliderOptions)("dir", ctx.dir);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.allDayLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 0 === ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 0 !== ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 0 === ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 0 !== ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.allDayLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 1 === ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 1 !== ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 1 === ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 1 !== ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.allDayLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 2 === ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 2 !== ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 2 === ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 2 !== ctx.currentViewIndex);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgTemplateOutlet"], _init_position_scroll__WEBPACK_IMPORTED_MODULE_4__["initPositionScrollComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]], styles: ["\n        .table-fixed {\n            table-layout: fixed;\n        }\n\n        .table {\n            width: 100%;\n            max-width: 100%;\n            background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n            padding: 8px;\n            line-height: 20px;\n            vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n            vertical-align: bottom;\n            border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n            border-top: 0\n        }\n\n        .table > tbody + tbody {\n            border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n            border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n            border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n            border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n            background-color: #f9f9f9\n        }\n\n        .calendar-hour-column {\n            width: 50px;\n            white-space: nowrap;\n        }\n\n        .calendar-event-wrap {\n            position: relative;\n            width: 100%;\n            height: 100%;\n        }\n\n        .calendar-event {\n            position: absolute;\n            padding: 2px;\n            cursor: pointer;\n            z-index: 10000;\n        }\n\n        .slides-container {\n            height: 100%;\n        }\n\n        .slide-container {\n            display: block;\n        }\n\n        .calendar-cell {\n            padding: 0 !important;\n            height: 37px;\n        }\n\n        .dayview-allday-label {\n            float: left;\n            height: 100%;\n            line-height: 50px;\n            text-align: center;\n            width: 50px;\n            border-left: 1px solid #ddd;\n        }\n\n        [dir=\"rtl\"] .dayview-allday-label {\n            border-right: 1px solid #ddd;\n            float: right;\n        }\n\n        .dayview-allday-content-wrapper {\n            margin-left: 50px;\n            overflow: hidden;\n            height: 51px;\n        }\n\n        [dir=\"rtl\"] .dayview-allday-content-wrapper {\n            margin-left: 0;\n            margin-right: 50px;\n        }\n\n        .dayview-allday-content-table {\n            min-height: 50px;\n        }\n\n        .dayview-allday-content-table td {\n            border-left: 1px solid #ddd;\n            border-right: 1px solid #ddd;\n        }\n\n        .dayview-allday-table {\n            height: 50px;\n            position: relative;\n            border-bottom: 1px solid #ddd;\n            font-size: 14px;\n        }\n\n        .dayview-normal-event-container {\n            margin-top: 50px;\n            overflow: hidden;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            position: absolute;\n            font-size: 14px;\n        }\n\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }\n\n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n            display: none;\n        }\n\n        .table > tbody > tr > td.calendar-hour-column {\n            padding-left: 0;\n            padding-right: 0;\n            vertical-align: middle;\n        }\n\n        @media (max-width: 750px) {\n            .dayview-allday-label, .calendar-hour-column {\n                width: 31px;\n                font-size: 12px;\n            }\n\n            .dayview-allday-label {\n                padding-top: 4px;\n            }\n\n            .table > tbody > tr > td.calendar-hour-column {\n                padding-left: 0;\n                padding-right: 0;\n                vertical-align: middle;\n                line-height: 12px;\n            }\n\n            .dayview-allday-label {\n                line-height: 20px;\n            }\n\n            .dayview-allday-content-wrapper {\n                margin-left: 31px;\n            }\n\n            [dir=\"rtl\"] .dayview-allday-content-wrapper {\n                margin-left: 0;\n                margin-right: 31px;\n            }\n        }\n    "], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DayViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dayview',
                template: `
        <ion-slides #daySlider [options]="sliderOptions" [dir]="dir" (ionSlideDidChange)="onSlideChanged()" class="slides-container">
            <ion-slide class="slide-container">
                <div class="dayview-allday-table">
                    <div class="dayview-allday-label">{{allDayLabel}}</div>
                    <div class="dayview-allday-content-wrapper scroll-content">
                        <table class="table table-bordered dayview-allday-content-table">
                            <tbody>
                            <tr>
                                <td class="calendar-cell" [ngClass]="{'calendar-event-wrap':views[0].allDayEvents.length>0}"
                                    [ngStyle]="{height: 25*views[0].allDayEvents.length+'px'}"
                                    *ngIf="0===currentViewIndex">
                                    <ng-template [ngTemplateOutlet]="dayviewAllDayEventSectionTemplate"
                                                 [ngTemplateOutletContext]="{allDayEvents:views[0].allDayEvents,eventTemplate:dayviewAllDayEventTemplate}">
                                    </ng-template>
                                </td>
                                <td class="calendar-cell" *ngIf="0!==currentViewIndex">
                                    <ng-template [ngTemplateOutlet]="dayviewInactiveAllDayEventSectionTemplate"
                                                 [ngTemplateOutletContext]="{allDayEvents:views[0].allDayEvents}">
                                    </ng-template>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <init-position-scroll *ngIf="0===currentViewIndex" class="dayview-normal-event-container"
                                      [initPosition]="initScrollPosition" [emitEvent]="preserveScrollPosition"
                                      (onScroll)="setScrollPosition($event)">
                    <table class="table table-bordered table-fixed dayview-normal-event-table">
                        <tbody>
                        <tr *ngFor="let tm of views[0].rows; let i = index">
                            <td class="calendar-hour-column text-center">
                                {{hourColumnLabels[i]}}
                            </td>
                            <td class="calendar-cell" tappable (click)="select(tm.time, tm.events)">
                                <ng-template [ngTemplateOutlet]="dayviewNormalEventSectionTemplate"
                                             [ngTemplateOutletContext]="{tm:tm, hourParts: hourParts, eventTemplate:dayviewNormalEventTemplate}">
                                </ng-template>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </init-position-scroll>
                <init-position-scroll *ngIf="0!==currentViewIndex" class="dayview-normal-event-container"
                                      [initPosition]="initScrollPosition">
                    <table class="table table-bordered table-fixed dayview-normal-event-table">
                        <tbody>
                        <tr *ngFor="let tm of views[0].rows; let i = index">
                            <td class="calendar-hour-column text-center">
                                {{hourColumnLabels[i]}}
                            </td>
                            <td class="calendar-cell">
                                <ng-template [ngTemplateOutlet]="dayviewInactiveNormalEventSectionTemplate"
                                             [ngTemplateOutletContext]="{tm:tm, hourParts: hourParts}">
                                </ng-template>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </init-position-scroll>
            </ion-slide>
            <ion-slide class="slide-container">
                <div class="dayview-allday-table">
                    <div class="dayview-allday-label">{{allDayLabel}}</div>
                    <div class="dayview-allday-content-wrapper scroll-content">
                        <table class="table table-bordered dayview-allday-content-table">
                            <tbody>
                            <tr>
                                <td class="calendar-cell" [ngClass]="{'calendar-event-wrap':views[1].allDayEvents.length>0}"
                                    [ngStyle]="{height: 25*views[1].allDayEvents.length+'px'}"
                                    *ngIf="1===currentViewIndex">
                                    <ng-template [ngTemplateOutlet]="dayviewAllDayEventSectionTemplate"
                                                 [ngTemplateOutletContext]="{allDayEvents:views[1].allDayEvents,eventTemplate:dayviewAllDayEventTemplate}">
                                    </ng-template>
                                </td>
                                <td class="calendar-cell" *ngIf="1!==currentViewIndex">
                                    <ng-template [ngTemplateOutlet]="dayviewInactiveAllDayEventSectionTemplate"
                                                 [ngTemplateOutletContext]="{allDayEvents:views[1].allDayEvents}">
                                    </ng-template>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <init-position-scroll *ngIf="1===currentViewIndex" class="dayview-normal-event-container"
                                      [initPosition]="initScrollPosition" [emitEvent]="preserveScrollPosition"
                                      (onScroll)="setScrollPosition($event)">
                    <table class="table table-bordered table-fixed dayview-normal-event-table">
                        <tbody>
                        <tr *ngFor="let tm of views[1].rows; let i = index">
                            <td class="calendar-hour-column text-center">
                                {{hourColumnLabels[i]}}
                            </td>
                            <td class="calendar-cell" tappable (click)="select(tm.time, tm.events)">
                                <ng-template [ngTemplateOutlet]="dayviewNormalEventSectionTemplate"
                                             [ngTemplateOutletContext]="{tm:tm, hourParts: hourParts, eventTemplate:dayviewNormalEventTemplate}">
                                </ng-template>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </init-position-scroll>
                <init-position-scroll *ngIf="1!==currentViewIndex" class="dayview-normal-event-container"
                                      [initPosition]="initScrollPosition">
                    <table class="table table-bordered table-fixed dayview-normal-event-table">
                        <tbody>
                        <tr *ngFor="let tm of views[1].rows; let i = index">
                            <td class="calendar-hour-column text-center">
                                {{hourColumnLabels[i]}}
                            </td>
                            <td class="calendar-cell">
                                <ng-template [ngTemplateOutlet]="dayviewInactiveNormalEventSectionTemplate"
                                             [ngTemplateOutletContext]="{tm:tm, hourParts: hourParts}">
                                </ng-template>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </init-position-scroll>
            </ion-slide>
            <ion-slide class="slide-container">
                <div class="dayview-allday-table">
                    <div class="dayview-allday-label">{{allDayLabel}}</div>
                    <div class="dayview-allday-content-wrapper scroll-content">
                        <table class="table table-bordered dayview-allday-content-table">
                            <tbody>
                            <tr>
                                <td class="calendar-cell" [ngClass]="{'calendar-event-wrap':views[2].allDayEvents.length>0}"
                                    [ngStyle]="{height: 25*views[2].allDayEvents.length+'px'}"
                                    *ngIf="2===currentViewIndex">
                                    <ng-template [ngTemplateOutlet]="dayviewAllDayEventSectionTemplate"
                                                 [ngTemplateOutletContext]="{allDayEvents:views[2].allDayEvents,eventTemplate:dayviewAllDayEventTemplate}">
                                    </ng-template>
                                </td>
                                <td class="calendar-cell" *ngIf="2!==currentViewIndex">
                                    <ng-template [ngTemplateOutlet]="dayviewInactiveAllDayEventSectionTemplate"
                                                 [ngTemplateOutletContext]="{allDayEvents:views[2].allDayEvents}">
                                    </ng-template>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <init-position-scroll *ngIf="2===currentViewIndex" class="dayview-normal-event-container"
                                      [initPosition]="initScrollPosition" [emitEvent]="preserveScrollPosition"
                                      (onScroll)="setScrollPosition($event)">
                    <table class="table table-bordered table-fixed dayview-normal-event-table">
                        <tbody>
                        <tr *ngFor="let tm of views[2].rows; let i = index">
                            <td class="calendar-hour-column text-center">
                                {{hourColumnLabels[i]}}
                            </td>
                            <td class="calendar-cell" tappable (click)="select(tm.time, tm.events)">
                                <ng-template [ngTemplateOutlet]="dayviewNormalEventSectionTemplate"
                                             [ngTemplateOutletContext]="{tm:tm, hourParts: hourParts, eventTemplate:dayviewNormalEventTemplate}">
                                </ng-template>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </init-position-scroll>
                <init-position-scroll *ngIf="2!==currentViewIndex" class="dayview-normal-event-container"
                                      [initPosition]="initScrollPosition">
                    <table class="table table-bordered table-fixed dayview-normal-event-table">
                        <tbody>
                        <tr *ngFor="let tm of views[2].rows; let i = index">
                            <td class="calendar-hour-column text-center">
                                {{hourColumnLabels[i]}}
                            </td>
                            <td class="calendar-cell">
                                <ng-template [ngTemplateOutlet]="dayviewInactiveNormalEventSectionTemplate"
                                             [ngTemplateOutletContext]="{tm:tm, hourParts: hourParts}">
                                </ng-template>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </init-position-scroll>
            </ion-slide>
        </ion-slides>
    `,
                styles: [`
        .table-fixed {
            table-layout: fixed;
        }

        .table {
            width: 100%;
            max-width: 100%;
            background-color: transparent;
        }

        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,
        .table > tbody > tr > td, .table > tfoot > tr > td {
            padding: 8px;
            line-height: 20px;
            vertical-align: top;
        }

        .table > thead > tr > th {
            vertical-align: bottom;
            border-bottom: 2px solid #ddd;
        }

        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {
            border-top: 0
        }

        .table > tbody + tbody {
            border-top: 2px solid #ddd;
        }

        .table-bordered {
            border: 1px solid #ddd;
        }

        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,
        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {
            border: 1px solid #ddd;
        }

        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {
            border-bottom-width: 2px;
        }

        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {
            background-color: #f9f9f9
        }

        .calendar-hour-column {
            width: 50px;
            white-space: nowrap;
        }

        .calendar-event-wrap {
            position: relative;
            width: 100%;
            height: 100%;
        }

        .calendar-event {
            position: absolute;
            padding: 2px;
            cursor: pointer;
            z-index: 10000;
        }

        .slides-container {
            height: 100%;
        }

        .slide-container {
            display: block;
        }

        .calendar-cell {
            padding: 0 !important;
            height: 37px;
        }

        .dayview-allday-label {
            float: left;
            height: 100%;
            line-height: 50px;
            text-align: center;
            width: 50px;
            border-left: 1px solid #ddd;
        }

        [dir="rtl"] .dayview-allday-label {
            border-right: 1px solid #ddd;
            float: right;
        }

        .dayview-allday-content-wrapper {
            margin-left: 50px;
            overflow: hidden;
            height: 51px;
        }

        [dir="rtl"] .dayview-allday-content-wrapper {
            margin-left: 0;
            margin-right: 50px;
        }

        .dayview-allday-content-table {
            min-height: 50px;
        }

        .dayview-allday-content-table td {
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
        }

        .dayview-allday-table {
            height: 50px;
            position: relative;
            border-bottom: 1px solid #ddd;
            font-size: 14px;
        }

        .dayview-normal-event-container {
            margin-top: 50px;
            overflow: hidden;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            position: absolute;
            font-size: 14px;
        }

        .scroll-content {
            overflow-y: auto;
            overflow-x: hidden;
        }

        ::-webkit-scrollbar,
        *::-webkit-scrollbar {
            display: none;
        }

        .table > tbody > tr > td.calendar-hour-column {
            padding-left: 0;
            padding-right: 0;
            vertical-align: middle;
        }

        @media (max-width: 750px) {
            .dayview-allday-label, .calendar-hour-column {
                width: 31px;
                font-size: 12px;
            }

            .dayview-allday-label {
                padding-top: 4px;
            }

            .table > tbody > tr > td.calendar-hour-column {
                padding-left: 0;
                padding-right: 0;
                vertical-align: middle;
                line-height: 12px;
            }

            .dayview-allday-label {
                line-height: 20px;
            }

            .dayview-allday-content-wrapper {
                margin-left: 31px;
            }

            [dir="rtl"] .dayview-allday-content-wrapper {
                margin-left: 0;
                margin-right: 31px;
            }
        }
    `],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['daySlider', { static: true }]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.dayview']
        }], dayviewAllDayEventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dayviewNormalEventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dayviewAllDayEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dayviewNormalEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dayviewInactiveAllDayEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dayviewInactiveNormalEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], formatHourColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], formatDayTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allDayLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hourParts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], eventSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], markDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dateFormatter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scrollToHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], preserveScrollPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], lockSwipeToPrev: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], lockSwipes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], startHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], endHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sliderOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hourSegments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onRangeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onEventSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onTimeSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onTitleChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./node_modules/ionic2-calendar/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ionic2-calendar/index.js ***!
  \***********************************************/
/*! exports provided: NgCalendarModule, CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.module */ "./node_modules/ionic2-calendar/calendar.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgCalendarModule", function() { return _calendar_module__WEBPACK_IMPORTED_MODULE_0__["NgCalendarModule"]; });

/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar */ "./node_modules/ionic2-calendar/calendar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return _calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"]; });





/***/ }),

/***/ "./node_modules/ionic2-calendar/init-position-scroll.js":
/*!**************************************************************!*\
  !*** ./node_modules/ionic2-calendar/init-position-scroll.js ***!
  \**************************************************************/
/*! exports provided: initPositionScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPositionScrollComponent", function() { return initPositionScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class initPositionScrollComponent {
    constructor(el) {
        this.onScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listenerAttached = false;
        this.element = el;
    }
    ngOnChanges(changes) {
        let initPosition = changes['initPosition'];
        if (initPosition && initPosition.currentValue !== undefined && this.scrollContent) {
            const me = this;
            setTimeout(function () {
                me.scrollContent.scrollTop = initPosition.currentValue;
            }, 0);
        }
    }
    ngAfterViewInit() {
        const scrollContent = this.scrollContent = this.element.nativeElement.querySelector('.scroll-content');
        if (this.initPosition !== undefined) {
            scrollContent.scrollTop = this.initPosition;
        }
        if (this.emitEvent && !this.listenerAttached) {
            let onScroll = this.onScroll;
            this.handler = function () {
                onScroll.emit(scrollContent.scrollTop);
            };
            this.listenerAttached = true;
            scrollContent.addEventListener('scroll', this.handler);
        }
    }
    ngOnDestroy() {
        if (this.listenerAttached) {
            this.scrollContent.removeEventListener('scroll', this.handler);
        }
    }
}
initPositionScrollComponent.ɵfac = function initPositionScrollComponent_Factory(t) { return new (t || initPositionScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
initPositionScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: initPositionScrollComponent, selectors: [["init-position-scroll"]], inputs: { initPosition: "initPosition", emitEvent: "emitEvent" }, outputs: { onScroll: "onScroll" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "scroll-content", 2, "height", "100%"]], template: function initPositionScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }        \n    "], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](initPositionScrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'init-position-scroll',
                template: `
        <div class="scroll-content" style="height:100%">
            <ng-content></ng-content>
        </div>
    `,
                styles: [`
        .scroll-content {
            overflow-y: auto;
            overflow-x: hidden;
        }        
    `],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { initPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], emitEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./node_modules/ionic2-calendar/monthview.js":
/*!***************************************************!*\
  !*** ./node_modules/ionic2-calendar/monthview.js ***!
  \***************************************************/
/*! exports provided: MonthViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthViewComponent", function() { return MonthViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






const _c0 = ["monthSlider"];
function MonthViewComponent_table_4_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dayHeader_r98 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dayHeader_r98);
} }
function MonthViewComponent_table_4_tr_5_td_1_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0, a1, a2) { return { view: a0, row: a1, col: a2 }; };
function MonthViewComponent_table_4_tr_5_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthViewComponent_table_4_tr_5_td_1_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const col_r101 = ctx.$implicit; const row_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r103.select(ctx_r103.views[0].dates[row_r99 * 7 + col_r101]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthViewComponent_table_4_tr_5_td_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r101 = ctx.$implicit;
    const row_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r100.getHighlightClass(ctx_r100.views[0].dates[row_r99 * 7 + col_r101]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r100.monthviewDisplayEventTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c1, ctx_r100.views[0], row_r99, col_r101));
} }
const _c2 = function () { return [0, 1, 2, 3, 4, 5, 6]; };
function MonthViewComponent_table_4_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthViewComponent_table_4_tr_5_td_1_Template, 2, 7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return [0, 1, 2, 3, 4, 5]; };
function MonthViewComponent_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthViewComponent_table_4_th_3_Template, 3, 1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MonthViewComponent_table_4_tr_5_Template, 2, 2, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r89.views[0].dayHeaders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
} }
function MonthViewComponent_table_5_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dayHeader_r109 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dayHeader_r109);
} }
function MonthViewComponent_table_5_tr_5_td_1_ng_template_1_Template(rf, ctx) { }
function MonthViewComponent_table_5_tr_5_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthViewComponent_table_5_tr_5_td_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r112 = ctx.$implicit;
    const row_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r111.monthviewInactiveDisplayEventTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c1, ctx_r111.views[0], row_r110, col_r112));
} }
function MonthViewComponent_table_5_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthViewComponent_table_5_tr_5_td_1_Template, 2, 6, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function MonthViewComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthViewComponent_table_5_th_3_Template, 3, 1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MonthViewComponent_table_5_tr_5_Template, 2, 2, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r90.views[0].dayHeaders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
} }
function MonthViewComponent_table_7_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dayHeader_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dayHeader_r117);
} }
function MonthViewComponent_table_7_tr_5_td_1_ng_template_1_Template(rf, ctx) { }
function MonthViewComponent_table_7_tr_5_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthViewComponent_table_7_tr_5_td_1_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const col_r120 = ctx.$implicit; const row_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r122.select(ctx_r122.views[1].dates[row_r118 * 7 + col_r120]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthViewComponent_table_7_tr_5_td_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r120 = ctx.$implicit;
    const row_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r119.getHighlightClass(ctx_r119.views[1].dates[row_r118 * 7 + col_r120]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r119.monthviewDisplayEventTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c1, ctx_r119.views[1], row_r118, col_r120));
} }
function MonthViewComponent_table_7_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthViewComponent_table_7_tr_5_td_1_Template, 2, 7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function MonthViewComponent_table_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthViewComponent_table_7_th_3_Template, 3, 1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MonthViewComponent_table_7_tr_5_Template, 2, 2, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r91.views[1].dayHeaders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
} }
function MonthViewComponent_table_8_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dayHeader_r128 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dayHeader_r128);
} }
function MonthViewComponent_table_8_tr_5_td_1_ng_template_1_Template(rf, ctx) { }
function MonthViewComponent_table_8_tr_5_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthViewComponent_table_8_tr_5_td_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r131 = ctx.$implicit;
    const row_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r130.monthviewInactiveDisplayEventTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c1, ctx_r130.views[1], row_r129, col_r131));
} }
function MonthViewComponent_table_8_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthViewComponent_table_8_tr_5_td_1_Template, 2, 6, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function MonthViewComponent_table_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthViewComponent_table_8_th_3_Template, 3, 1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MonthViewComponent_table_8_tr_5_Template, 2, 2, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r92.views[1].dayHeaders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
} }
function MonthViewComponent_table_10_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dayHeader_r136 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dayHeader_r136);
} }
function MonthViewComponent_table_10_tr_5_td_1_ng_template_1_Template(rf, ctx) { }
function MonthViewComponent_table_10_tr_5_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonthViewComponent_table_10_tr_5_td_1_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const col_r139 = ctx.$implicit; const row_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r141.select(ctx_r141.views[2].dates[row_r137 * 7 + col_r139]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthViewComponent_table_10_tr_5_td_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r139 = ctx.$implicit;
    const row_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r138.getHighlightClass(ctx_r138.views[2].dates[row_r137 * 7 + col_r139]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r138.monthviewDisplayEventTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c1, ctx_r138.views[2], row_r137, col_r139));
} }
function MonthViewComponent_table_10_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthViewComponent_table_10_tr_5_td_1_Template, 2, 7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function MonthViewComponent_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthViewComponent_table_10_th_3_Template, 3, 1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MonthViewComponent_table_10_tr_5_Template, 2, 2, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r93.views[2].dayHeaders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
} }
function MonthViewComponent_table_11_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dayHeader_r147 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dayHeader_r147);
} }
function MonthViewComponent_table_11_tr_5_td_1_ng_template_1_Template(rf, ctx) { }
function MonthViewComponent_table_11_tr_5_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthViewComponent_table_11_tr_5_td_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r150 = ctx.$implicit;
    const row_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r149.monthviewInactiveDisplayEventTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c1, ctx_r149.views[2], row_r148, col_r150));
} }
function MonthViewComponent_table_11_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthViewComponent_table_11_tr_5_td_1_Template, 2, 6, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function MonthViewComponent_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthViewComponent_table_11_th_3_Template, 3, 1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MonthViewComponent_table_11_tr_5_Template, 2, 2, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r94.views[2].dayHeaders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
} }
function MonthViewComponent_ng_template_12_Template(rf, ctx) { }
const _c4 = function (a0, a1, a2) { return { showEventDetail: a0, selectedDate: a1, noEventsLabel: a2 }; };
class MonthViewComponent {
    constructor(calendarService) {
        this.calendarService = calendarService;
        this.autoSelect = true;
        this.dir = '';
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.mode = 'month';
        this.direction = 0;
        this.moveOnSelected = false;
        this.inited = false;
        this.callbackOnInit = true;
    }
    ;
    static getDates(startDate, n) {
        const dates = new Array(n), current = new Date(startDate.getTime());
        let i = 0;
        while (i < n) {
            dates[i++] = new Date(current.getTime());
            current.setDate(current.getDate() + 1);
        }
        return dates;
    }
    ngOnInit() {
        if (!this.sliderOptions) {
            this.sliderOptions = {};
        }
        this.sliderOptions.loop = true;
        if (this.dateFormatter && this.dateFormatter.formatMonthViewDay) {
            this.formatDayLabel = this.dateFormatter.formatMonthViewDay;
        }
        else {
            const dayLabelDatePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US');
            this.formatDayLabel = function (date) {
                return dayLabelDatePipe.transform(date, this.formatDay);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatMonthViewDayHeader) {
            this.formatDayHeaderLabel = this.dateFormatter.formatMonthViewDayHeader;
        }
        else {
            const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatDayHeaderLabel = function (date) {
                return datePipe.transform(date, this.formatDayHeader);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatMonthViewTitle) {
            this.formatTitle = this.dateFormatter.formatMonthViewTitle;
        }
        else {
            const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatTitle = function (date) {
                return datePipe.transform(date, this.formatMonthTitle);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(currentDate => {
            this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(() => {
            this.onDataLoaded();
        });
        this.slideChangedSubscription = this.calendarService.slideChanged$.subscribe(direction => {
            if (direction === 1) {
                this.slider.slideNext();
            }
            else if (direction === -1) {
                this.slider.slidePrev();
            }
        });
    }
    ngOnDestroy() {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
        if (this.slideChangedSubscription) {
            this.slideChangedSubscription.unsubscribe();
            this.slideChangedSubscription = null;
        }
    }
    ngOnChanges(changes) {
        if (!this.inited) {
            return;
        }
        const eventSourceChange = changes.eventSource;
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        const lockSwipeToPrev = changes.lockSwipeToPrev;
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        const lockSwipes = changes.lockSwipes;
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    }
    ngAfterViewInit() {
        const title = this.getTitle();
        this.onTitleChanged.emit(title);
    }
    onSlideChanged() {
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        let direction = 0;
        const currentViewIndex = this.currentViewIndex;
        this.slider.getActiveIndex().then((currentSlideIndex) => {
            currentSlideIndex = (currentSlideIndex + 2) % 3;
            if (isNaN(currentSlideIndex)) {
                currentSlideIndex = currentViewIndex;
            }
            if (currentSlideIndex - currentViewIndex === 1) {
                direction = 1;
            }
            else if (currentSlideIndex === 0 && currentViewIndex === 2) {
                direction = 1;
                this.slider.slideTo(1, 0, false);
            }
            else if (currentViewIndex - currentSlideIndex === 1) {
                direction = -1;
            }
            else if (currentSlideIndex === 2 && currentViewIndex === 0) {
                direction = -1;
                this.slider.slideTo(3, 0, false);
            }
            this.currentViewIndex = currentSlideIndex;
            this.move(direction);
        });
    }
    move(direction) {
        if (direction === 0) {
            return;
        }
        this.direction = direction;
        if (!this.moveOnSelected) {
            const adjacentDate = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
            this.calendarService.setCurrentDate(adjacentDate);
        }
        this.refreshView();
        this.direction = 0;
        this.moveOnSelected = false;
    }
    createDateObject(date) {
        let disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(date);
        }
        return {
            date,
            events: [],
            label: this.formatDayLabel(date),
            secondary: false,
            disabled
        };
    }
    getViewData(startTime) {
        const startDate = startTime, date = startDate.getDate(), month = (startDate.getMonth() + (date !== 1 ? 1 : 0)) % 12;
        const dates = MonthViewComponent.getDates(startDate, 42);
        const days = [];
        for (let i = 0; i < 42; i++) {
            const dateObject = this.createDateObject(dates[i]);
            dateObject.secondary = dates[i].getMonth() !== month;
            days[i] = dateObject;
        }
        const dayHeaders = [];
        for (let i = 0; i < 7; i++) {
            dayHeaders.push(this.formatDayHeaderLabel(days[i].date));
        }
        return {
            dates: days,
            dayHeaders
        };
    }
    getHighlightClass(date) {
        let className = '';
        if (date.hasEvent) {
            if (date.secondary) {
                className = 'monthview-secondary-with-event';
            }
            else {
                className = 'monthview-primary-with-event';
            }
        }
        if (date.selected) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-selected';
        }
        if (date.current) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-current';
        }
        if (date.secondary) {
            if (className) {
                className += ' ';
            }
            className += 'text-muted';
        }
        if (date.disabled) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-disabled';
        }
        return className;
    }
    getRange(currentDate) {
        const year = currentDate.getFullYear(), month = currentDate.getMonth(), firstDayOfMonth = new Date(year, month, 1, 12, 0, 0), // set hour to 12 to avoid DST problem
        difference = this.startingDayMonth - firstDayOfMonth.getDay(), numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : -difference, startDate = new Date(firstDayOfMonth.getTime());
        if (numDisplayedFromPreviousMonth > 0) {
            startDate.setDate(-numDisplayedFromPreviousMonth + 1);
        }
        const endDate = new Date(startDate.getTime());
        endDate.setDate(endDate.getDate() + 42);
        return {
            startTime: startDate,
            endTime: endDate
        };
    }
    onDataLoaded() {
        const range = this.range, eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = range.startTime, endTime = range.endTime, utcStartTime = Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate()), utcEndTime = Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate()), currentViewIndex = this.currentViewIndex, dates = this.views[currentViewIndex].dates, oneDay = 86400000, eps = 0.0006;
        for (let r = 0; r < 42; r += 1) {
            if (dates[r].hasEvent) {
                dates[r].hasEvent = false;
                dates[r].events = [];
            }
        }
        for (let i = 0; i < len; i += 1) {
            const event = eventSource[i], eventStartTime = event.startTime, eventEndTime = event.endTime;
            let eventUTCStartTime, eventUTCEndTime;
            if (event.allDay) {
                eventUTCStartTime = eventStartTime.getTime();
                eventUTCEndTime = eventEndTime.getTime();
            }
            else {
                eventUTCStartTime = Date.UTC(eventStartTime.getFullYear(), eventStartTime.getMonth(), eventStartTime.getDate());
                eventUTCEndTime = Date.UTC(eventEndTime.getFullYear(), eventEndTime.getMonth(), eventEndTime.getDate() + 1);
            }
            if (eventUTCEndTime <= utcStartTime || eventUTCStartTime >= utcEndTime) {
                continue;
            }
            let timeDifferenceStart, timeDifferenceEnd;
            if (eventUTCStartTime < utcStartTime) {
                timeDifferenceStart = 0;
            }
            else {
                timeDifferenceStart = (eventUTCStartTime - utcStartTime) / oneDay;
            }
            if (eventUTCEndTime > utcEndTime) {
                timeDifferenceEnd = (utcEndTime - utcStartTime) / oneDay;
            }
            else {
                timeDifferenceEnd = (eventUTCEndTime - utcStartTime) / oneDay;
            }
            let index = Math.floor(timeDifferenceStart);
            const endIndex = Math.ceil(timeDifferenceEnd - eps);
            while (index < endIndex) {
                dates[index].hasEvent = true;
                let eventSet = dates[index].events;
                if (eventSet) {
                    eventSet.push(event);
                }
                else {
                    eventSet = [];
                    eventSet.push(event);
                    dates[index].events = eventSet;
                }
                index += 1;
            }
        }
        for (let r = 0; r < 42; r += 1) {
            if (dates[r].hasEvent) {
                dates[r].events.sort(this.compareEvent);
            }
        }
        if (this.autoSelect) {
            let findSelected = false;
            for (let r = 0; r < 42; r += 1) {
                if (dates[r].selected) {
                    this.selectedDate = dates[r];
                    findSelected = true;
                    break;
                }
            }
            if (findSelected) {
                this.onTimeSelected.emit({
                    selectedTime: this.selectedDate.date,
                    events: this.selectedDate.events,
                    disabled: this.selectedDate.disabled
                });
            }
        }
    }
    refreshView() {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            const title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.updateCurrentView(this.range.startTime, this.views[this.currentViewIndex]);
        this.calendarService.rangeChanged(this);
    }
    getTitle() {
        const currentViewStartDate = this.range.startTime, date = currentViewStartDate.getDate(), month = (currentViewStartDate.getMonth() + (date !== 1 ? 1 : 0)) % 12, year = currentViewStartDate.getFullYear() + (date !== 1 && month === 0 ? 1 : 0), headerDate = new Date(year, month, 1, 12, 0, 0, 0);
        return this.formatTitle(headerDate);
    }
    compareEvent(event1, event2) {
        if (event1.allDay) {
            return 1;
        }
        else if (event2.allDay) {
            return -1;
        }
        else {
            return (event1.startTime.getTime() - event2.startTime.getTime());
        }
    }
    select(viewDate) {
        if (!this.views) {
            return;
        }
        const selectedDate = viewDate.date, events = viewDate.events;
        if (!viewDate.disabled) {
            const dates = this.views[this.currentViewIndex].dates, currentCalendarDate = this.calendarService.currentDate, currentMonth = currentCalendarDate.getMonth(), currentYear = currentCalendarDate.getFullYear(), selectedMonth = selectedDate.getMonth(), selectedYear = selectedDate.getFullYear();
            let direction = 0;
            if (currentYear === selectedYear) {
                if (currentMonth !== selectedMonth) {
                    direction = currentMonth < selectedMonth ? 1 : -1;
                }
            }
            else {
                direction = currentYear < selectedYear ? 1 : -1;
            }
            this.calendarService.setCurrentDate(selectedDate);
            if (direction === 0) {
                const currentViewStartDate = this.range.startTime, oneDay = 86400000, selectedDayDifference = Math.round((Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()) - Date.UTC(currentViewStartDate.getFullYear(), currentViewStartDate.getMonth(), currentViewStartDate.getDate())) / oneDay);
                for (let r = 0; r < 42; r += 1) {
                    dates[r].selected = false;
                }
                if (selectedDayDifference >= 0 && selectedDayDifference < 42) {
                    dates[selectedDayDifference].selected = true;
                    this.selectedDate = dates[selectedDayDifference];
                }
            }
            else {
                this.moveOnSelected = true;
                this.slideView(direction);
            }
        }
        this.onTimeSelected.emit({ selectedTime: selectedDate, events, disabled: viewDate.disabled });
    }
    slideView(direction) {
        if (direction === 1) {
            this.slider.slideNext();
        }
        else if (direction === -1) {
            this.slider.slidePrev();
        }
    }
    updateCurrentView(currentViewStartDate, view) {
        const currentCalendarDate = this.calendarService.currentDate, today = new Date(), oneDay = 86400000, selectedDayDifference = Math.round((Date.UTC(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), currentCalendarDate.getDate()) - Date.UTC(currentViewStartDate.getFullYear(), currentViewStartDate.getMonth(), currentViewStartDate.getDate())) / oneDay), currentDayDifference = Math.round((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(currentViewStartDate.getFullYear(), currentViewStartDate.getMonth(), currentViewStartDate.getDate())) / oneDay);
        for (let r = 0; r < 42; r += 1) {
            view.dates[r].selected = false;
        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 42 && !view.dates[selectedDayDifference].disabled && (this.autoSelect || this.moveOnSelected)) {
            view.dates[selectedDayDifference].selected = true;
            this.selectedDate = view.dates[selectedDayDifference];
        }
        else {
            this.selectedDate = {
                date: null,
                events: [],
                label: null,
                secondary: null,
                disabled: false
            };
        }
        if (currentDayDifference >= 0 && currentDayDifference < 42) {
            view.dates[currentDayDifference].current = true;
        }
    }
    eventSelected(event) {
        this.onEventSelected.emit(event);
    }
}
MonthViewComponent.ɵfac = function MonthViewComponent_Factory(t) { return new (t || MonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"])); };
MonthViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonthViewComponent, selectors: [["monthview"]], viewQuery: function MonthViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
    } }, inputs: { monthviewDisplayEventTemplate: "monthviewDisplayEventTemplate", monthviewInactiveDisplayEventTemplate: "monthviewInactiveDisplayEventTemplate", monthviewEventDetailTemplate: "monthviewEventDetailTemplate", formatDay: "formatDay", formatDayHeader: "formatDayHeader", formatMonthTitle: "formatMonthTitle", eventSource: "eventSource", startingDayMonth: "startingDayMonth", showEventDetail: "showEventDetail", noEventsLabel: "noEventsLabel", autoSelect: "autoSelect", markDisabled: "markDisabled", locale: "locale", dateFormatter: "dateFormatter", dir: "dir", lockSwipeToPrev: "lockSwipeToPrev", lockSwipes: "lockSwipes", sliderOptions: "sliderOptions" }, outputs: { onRangeChanged: "onRangeChanged", onEventSelected: "onEventSelected", onTimeSelected: "onTimeSelected", onTitleChanged: "onTitleChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 14, consts: [[3, "options", "dir", "ionSlideDidChange"], ["monthSlider", ""], ["class", "table table-bordered table-fixed monthview-datetable", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "table", "table-bordered", "table-fixed", "monthview-datetable"], [4, "ngFor", "ngForOf"], ["tappable", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["tappable", "", 3, "ngClass", "click"], [1, "text-center"]], template: function MonthViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-slides", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionSlideDidChange", function MonthViewComponent_Template_ion_slides_ionSlideDidChange_1_listener() { return ctx.onSlideChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MonthViewComponent_table_4_Template, 6, 3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MonthViewComponent_table_5_Template, 7, 3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MonthViewComponent_table_7_Template, 6, 3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MonthViewComponent_table_8_Template, 7, 3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MonthViewComponent_table_10_Template, 6, 3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MonthViewComponent_table_11_Template, 7, 3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MonthViewComponent_ng_template_12_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.sliderOptions)("dir", ctx.dir);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 0 === ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 0 !== ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 1 === ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 1 !== ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 2 === ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 2 !== ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.monthviewEventDetailTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c4, ctx.showEventDetail, ctx.selectedDate, ctx.noEventsLabel));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".text-muted[_ngcontent-%COMP%] {\n            color: #999;\n        }\n\n        .table-fixed[_ngcontent-%COMP%] {\n            table-layout: fixed;\n        }\n\n        .table[_ngcontent-%COMP%] {\n            width: 100%;\n            max-width: 100%;\n            background-color: transparent;\n        }\n\n        .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n            padding: 8px;\n            line-height: 20px;\n            vertical-align: top;\n        }\n\n        .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n            vertical-align: bottom;\n            border-bottom: 2px solid #ddd;\n        }\n\n        .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child    > th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child    > td[_ngcontent-%COMP%] {\n            border-top: 0\n        }\n\n        .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n            border-top: 2px solid #ddd;\n        }\n\n        .table-bordered[_ngcontent-%COMP%] {\n            border: 1px solid #ddd;\n        }\n\n        .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n            border: 1px solid #ddd;\n        }\n\n        .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n            border-bottom-width: 2px;\n        }\n\n        .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > th[_ngcontent-%COMP%] {\n            background-color: #f9f9f9\n        }\n\n        .monthview-primary-with-event[_ngcontent-%COMP%] {\n            background-color: #3a87ad;\n            color: white;\n        }\n\n        .monthview-current[_ngcontent-%COMP%] {\n            background-color: #f0f0f0;\n        }\n\n        .monthview-selected[_ngcontent-%COMP%] {\n            background-color: #009900;\n            color: white;\n        }\n\n        .monthview-datetable[_ngcontent-%COMP%]   td.monthview-disabled[_ngcontent-%COMP%] {\n            color: lightgrey;\n            cursor: default;\n        }\n\n        .monthview-datetable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n            text-align: center;\n        }\n\n        .monthview-datetable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n            cursor: pointer;\n            text-align: center;\n        }\n\n        .monthview-secondary-with-event[_ngcontent-%COMP%] {\n            background-color: #d9edf7;\n        }\n\n        [_ngcontent-%COMP%]::-webkit-scrollbar, *[_ngcontent-%COMP%]::-webkit-scrollbar {\n            display: none;\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'monthview',
                template: `
        <div>
            <ion-slides #monthSlider [options]="sliderOptions" [dir]="dir" (ionSlideDidChange)="onSlideChanged()">
                <ion-slide>
                    <table *ngIf="0===currentViewIndex" class="table table-bordered table-fixed monthview-datetable">
                        <thead>
                        <tr>
                            <th *ngFor="let dayHeader of views[0].dayHeaders">
                                <small>{{dayHeader}}</small>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr *ngFor="let row of [0,1,2,3,4,5]">
                            <td *ngFor="let col of [0,1,2,3,4,5,6]" tappable (click)="select(views[0].dates[row*7+col])"
                                [ngClass]="getHighlightClass(views[0].dates[row*7+col])">
                                <ng-template [ngTemplateOutlet]="monthviewDisplayEventTemplate"
                                             [ngTemplateOutletContext]="{view: views[0], row: row, col: col}">
                                </ng-template>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table *ngIf="0!==currentViewIndex" class="table table-bordered table-fixed monthview-datetable">
                        <thead>
                        <tr class="text-center">
                            <th *ngFor="let dayHeader of views[0].dayHeaders">
                                <small>{{dayHeader}}</small>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr *ngFor="let row of [0,1,2,3,4,5]">
                            <td *ngFor="let col of [0,1,2,3,4,5,6]">
                                <ng-template [ngTemplateOutlet]="monthviewInactiveDisplayEventTemplate"
                                             [ngTemplateOutletContext]="{view: views[0], row: row, col: col}">
                                </ng-template>
                            </td>
                        <tr>
                        </tbody>
                    </table>
                </ion-slide>
                <ion-slide>
                    <table *ngIf="1===currentViewIndex" class="table table-bordered table-fixed monthview-datetable">
                        <thead>
                        <tr>
                            <th *ngFor="let dayHeader of views[1].dayHeaders">
                                <small>{{dayHeader}}</small>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr *ngFor="let row of [0,1,2,3,4,5]">
                            <td *ngFor="let col of [0,1,2,3,4,5,6]" tappable (click)="select(views[1].dates[row*7+col])"
                                [ngClass]="getHighlightClass(views[1].dates[row*7+col])">
                                <ng-template [ngTemplateOutlet]="monthviewDisplayEventTemplate"
                                             [ngTemplateOutletContext]="{view: views[1], row: row, col: col}">
                                </ng-template>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table *ngIf="1!==currentViewIndex" class="table table-bordered table-fixed monthview-datetable">
                        <thead>
                        <tr class="text-center">
                            <th *ngFor="let dayHeader of views[1].dayHeaders">
                                <small>{{dayHeader}}</small>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr *ngFor="let row of [0,1,2,3,4,5]">
                            <td *ngFor="let col of [0,1,2,3,4,5,6]">
                                <ng-template [ngTemplateOutlet]="monthviewInactiveDisplayEventTemplate"
                                             [ngTemplateOutletContext]="{view: views[1], row: row, col: col}">
                                </ng-template>
                            </td>
                        <tr>
                        </tbody>
                    </table>
                </ion-slide>
                <ion-slide>
                    <table *ngIf="2===currentViewIndex" class="table table-bordered table-fixed monthview-datetable">
                        <thead>
                        <tr>
                            <th *ngFor="let dayHeader of views[2].dayHeaders">
                                <small>{{dayHeader}}</small>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr *ngFor="let row of [0,1,2,3,4,5]">
                            <td *ngFor="let col of [0,1,2,3,4,5,6]" tappable (click)="select(views[2].dates[row*7+col])"
                                [ngClass]="getHighlightClass(views[2].dates[row*7+col])">
                                <ng-template [ngTemplateOutlet]="monthviewDisplayEventTemplate"
                                             [ngTemplateOutletContext]="{view: views[2], row: row, col: col}">
                                </ng-template>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table *ngIf="2!==currentViewIndex" class="table table-bordered table-fixed monthview-datetable">
                        <thead>
                        <tr class="text-center">
                            <th *ngFor="let dayHeader of views[2].dayHeaders">
                                <small>{{dayHeader}}</small>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr *ngFor="let row of [0,1,2,3,4,5]">
                            <td *ngFor="let col of [0,1,2,3,4,5,6]">
                                <ng-template [ngTemplateOutlet]="monthviewInactiveDisplayEventTemplate"
                                             [ngTemplateOutletContext]="{view: views[2], row: row, col: col}">
                                </ng-template>
                            </td>
                        <tr>
                        </tbody>
                    </table>
                </ion-slide>
            </ion-slides>
            <ng-template [ngTemplateOutlet]="monthviewEventDetailTemplate"
                         [ngTemplateOutletContext]="{showEventDetail:showEventDetail, selectedDate: selectedDate, noEventsLabel: noEventsLabel}">
            </ng-template>
        </div>
    `,
                styles: [`
        .text-muted {
            color: #999;
        }

        .table-fixed {
            table-layout: fixed;
        }

        .table {
            width: 100%;
            max-width: 100%;
            background-color: transparent;
        }

        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,
        .table > tbody > tr > td, .table > tfoot > tr > td {
            padding: 8px;
            line-height: 20px;
            vertical-align: top;
        }

        .table > thead > tr > th {
            vertical-align: bottom;
            border-bottom: 2px solid #ddd;
        }

        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {
            border-top: 0
        }

        .table > tbody + tbody {
            border-top: 2px solid #ddd;
        }

        .table-bordered {
            border: 1px solid #ddd;
        }

        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,
        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {
            border: 1px solid #ddd;
        }

        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {
            border-bottom-width: 2px;
        }

        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {
            background-color: #f9f9f9
        }

        .monthview-primary-with-event {
            background-color: #3a87ad;
            color: white;
        }

        .monthview-current {
            background-color: #f0f0f0;
        }

        .monthview-selected {
            background-color: #009900;
            color: white;
        }

        .monthview-datetable td.monthview-disabled {
            color: lightgrey;
            cursor: default;
        }

        .monthview-datetable th {
            text-align: center;
        }

        .monthview-datetable td {
            cursor: pointer;
            text-align: center;
        }

        .monthview-secondary-with-event {
            background-color: #d9edf7;
        }

        ::-webkit-scrollbar,
        *::-webkit-scrollbar {
            display: none;
        }
    `]
            }]
    }], function () { return [{ type: _calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"] }]; }, { slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['monthSlider', { static: true }]
        }], monthviewDisplayEventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], monthviewInactiveDisplayEventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], monthviewEventDetailTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formatDay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formatDayHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formatMonthTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], eventSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startingDayMonth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showEventDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noEventsLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], markDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dateFormatter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lockSwipeToPrev: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lockSwipes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sliderOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onRangeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onEventSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onTimeSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onTitleChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./node_modules/ionic2-calendar/weekview.js":
/*!**************************************************!*\
  !*** ./node_modules/ionic2-calendar/weekview.js ***!
  \**************************************************/
/*! exports provided: WeekViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekViewComponent", function() { return WeekViewComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _init_position_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init-position-scroll */ "./node_modules/ionic2-calendar/init-position-scroll.js");







const _c0 = ["weekSlider"];
function WeekViewComponent_th_7_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0) { return { viewDate: a0 }; };
function WeekViewComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WeekViewComponent_th_7_Template_th_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r166); const date_r163 = ctx.$implicit; const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r165.daySelected(date_r163); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_th_7_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r163 = ctx.$implicit;
    const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r154.getHighlightClass(date_r163));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r154.weekviewHeaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, date_r163));
} }
function WeekViewComponent_div_8_td_8_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0, a1) { return { day: a0, eventTemplate: a1 }; };
function WeekViewComponent_div_8_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_8_td_8_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r169 = ctx.$implicit;
    const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r167.weekviewAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c2, day_r169, ctx_r167.weekviewAllDayEventTemplate));
} }
function WeekViewComponent_div_8_tr_12_td_3_ng_template_1_Template(rf, ctx) { }
const _c3 = function (a0, a1, a2) { return { tm: a0, hourParts: a1, eventTemplate: a2 }; };
function WeekViewComponent_div_8_tr_12_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WeekViewComponent_div_8_tr_12_td_3_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r177); const tm_r174 = ctx.$implicit; const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r176.select(tm_r174.time, tm_r174.events); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_8_tr_12_td_3_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r174 = ctx.$implicit;
    const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r173.weekviewNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c3, tm_r174, ctx_r173.hourParts, ctx_r173.weekviewNormalEventTemplate));
} }
function WeekViewComponent_div_8_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WeekViewComponent_div_8_tr_12_td_3_Template, 2, 6, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r171 = ctx.$implicit;
    const i_r172 = ctx.index;
    const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r168.hourColumnLabels[i_r172], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r171);
} }
function WeekViewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WeekViewComponent_div_8_td_8_Template, 2, 5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "init-position-scroll", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onScroll", function WeekViewComponent_div_8_Template_init_position_scroll_onScroll_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r179); const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r178.setScrollPosition($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WeekViewComponent_div_8_tr_12_Template, 4, 2, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r155.allDayLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r155.views[0].dates);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initPosition", ctx_r155.initScrollPosition)("emitEvent", ctx_r155.preserveScrollPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r155.views[0].rows);
} }
function WeekViewComponent_div_9_td_8_ng_template_1_Template(rf, ctx) { }
const _c4 = function (a0) { return { day: a0 }; };
function WeekViewComponent_div_9_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_9_td_8_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r182 = ctx.$implicit;
    const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r180.weekviewInactiveAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c4, day_r182));
} }
function WeekViewComponent_div_9_tr_12_td_3_ng_template_1_Template(rf, ctx) { }
const _c5 = function (a0, a1) { return { tm: a0, hourParts: a1 }; };
function WeekViewComponent_div_9_tr_12_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_9_tr_12_td_3_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r187 = ctx.$implicit;
    const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r186.weekviewInactiveNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c5, tm_r187, ctx_r186.hourParts));
} }
function WeekViewComponent_div_9_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WeekViewComponent_div_9_tr_12_td_3_Template, 2, 5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r184 = ctx.$implicit;
    const i_r185 = ctx.index;
    const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r181.hourColumnLabels[i_r185], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r184);
} }
function WeekViewComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WeekViewComponent_div_9_td_8_Template, 2, 4, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "init-position-scroll", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WeekViewComponent_div_9_tr_12_Template, 4, 2, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r156.allDayLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r156.views[0].dates);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initPosition", ctx_r156.initScrollPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r156.views[0].rows);
} }
function WeekViewComponent_th_15_ng_template_1_Template(rf, ctx) { }
function WeekViewComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WeekViewComponent_th_15_Template_th_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r192); const date_r189 = ctx.$implicit; const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r191.daySelected(date_r189); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_th_15_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r189 = ctx.$implicit;
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r157.getHighlightClass(date_r189));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r157.weekviewHeaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, date_r189));
} }
function WeekViewComponent_div_16_td_8_ng_template_1_Template(rf, ctx) { }
function WeekViewComponent_div_16_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_16_td_8_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r195 = ctx.$implicit;
    const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r193.weekviewAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c2, day_r195, ctx_r193.weekviewAllDayEventTemplate));
} }
function WeekViewComponent_div_16_tr_12_td_3_div_1_ng_template_1_Template(rf, ctx) { }
const _c6 = function (a0) { return { "calendar-event-wrap": a0 }; };
function WeekViewComponent_div_16_tr_12_td_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_16_tr_12_td_3_div_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c6, tm_r200.events));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r201.weekviewNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](5, _c3, tm_r200, ctx_r201.hourParts, ctx_r201.weekviewNormalEventTemplate));
} }
function WeekViewComponent_div_16_tr_12_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WeekViewComponent_div_16_tr_12_td_3_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r205); const tm_r200 = ctx.$implicit; const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r204.select(tm_r200.time, tm_r200.events); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_16_tr_12_td_3_div_1_Template, 2, 9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r200 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tm_r200.events);
} }
function WeekViewComponent_div_16_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WeekViewComponent_div_16_tr_12_td_3_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r197 = ctx.$implicit;
    const i_r198 = ctx.index;
    const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r194.hourColumnLabels[i_r198], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r197);
} }
function WeekViewComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WeekViewComponent_div_16_td_8_Template, 2, 5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "init-position-scroll", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onScroll", function WeekViewComponent_div_16_Template_init_position_scroll_onScroll_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r207); const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r206.setScrollPosition($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WeekViewComponent_div_16_tr_12_Template, 4, 2, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r158.allDayLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r158.views[1].dates);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initPosition", ctx_r158.initScrollPosition)("emitEvent", ctx_r158.preserveScrollPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r158.views[1].rows);
} }
function WeekViewComponent_div_17_td_8_ng_template_1_Template(rf, ctx) { }
function WeekViewComponent_div_17_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_17_td_8_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r210 = ctx.$implicit;
    const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r208.weekviewInactiveAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c4, day_r210));
} }
function WeekViewComponent_div_17_tr_12_td_3_div_1_ng_template_1_Template(rf, ctx) { }
function WeekViewComponent_div_17_tr_12_td_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_17_tr_12_td_3_div_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c6, tm_r215.events));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r216.weekviewInactiveNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c5, tm_r215, ctx_r216.hourParts));
} }
function WeekViewComponent_div_17_tr_12_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_17_tr_12_td_3_div_1_Template, 2, 8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r215 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tm_r215.events);
} }
function WeekViewComponent_div_17_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WeekViewComponent_div_17_tr_12_td_3_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r212 = ctx.$implicit;
    const i_r213 = ctx.index;
    const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r209.hourColumnLabels[i_r213], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r212);
} }
function WeekViewComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WeekViewComponent_div_17_td_8_Template, 2, 4, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "init-position-scroll", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WeekViewComponent_div_17_tr_12_Template, 4, 2, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r159.allDayLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r159.views[1].dates);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initPosition", ctx_r159.initScrollPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r159.views[1].rows);
} }
function WeekViewComponent_th_23_ng_template_1_Template(rf, ctx) { }
function WeekViewComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    const _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WeekViewComponent_th_23_Template_th_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r222); const date_r219 = ctx.$implicit; const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r221.daySelected(date_r219); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_th_23_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r219 = ctx.$implicit;
    const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r160.getHighlightClass(date_r219));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r160.weekviewHeaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, date_r219));
} }
function WeekViewComponent_div_24_td_8_ng_template_1_Template(rf, ctx) { }
function WeekViewComponent_div_24_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_24_td_8_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r225 = ctx.$implicit;
    const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r223.weekviewAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c2, day_r225, ctx_r223.weekviewAllDayEventTemplate));
} }
function WeekViewComponent_div_24_tr_12_td_3_div_1_ng_template_1_Template(rf, ctx) { }
function WeekViewComponent_div_24_tr_12_td_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_24_tr_12_td_3_div_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c6, tm_r230.events));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r231.weekviewNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](5, _c3, tm_r230, ctx_r231.hourParts, ctx_r231.weekviewNormalEventTemplate));
} }
function WeekViewComponent_div_24_tr_12_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WeekViewComponent_div_24_tr_12_td_3_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r235); const tm_r230 = ctx.$implicit; const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r234.select(tm_r230.time, tm_r230.events); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_24_tr_12_td_3_div_1_Template, 2, 9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r230 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tm_r230.events);
} }
function WeekViewComponent_div_24_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WeekViewComponent_div_24_tr_12_td_3_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r227 = ctx.$implicit;
    const i_r228 = ctx.index;
    const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r224.hourColumnLabels[i_r228], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r227);
} }
function WeekViewComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WeekViewComponent_div_24_td_8_Template, 2, 5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "init-position-scroll", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onScroll", function WeekViewComponent_div_24_Template_init_position_scroll_onScroll_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r237); const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r236.setScrollPosition($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WeekViewComponent_div_24_tr_12_Template, 4, 2, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r161.allDayLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r161.views[2].dates);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initPosition", ctx_r161.initScrollPosition)("emitEvent", ctx_r161.preserveScrollPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r161.views[2].rows);
} }
function WeekViewComponent_div_25_td_8_ng_template_1_Template(rf, ctx) { }
function WeekViewComponent_div_25_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_25_td_8_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r240 = ctx.$implicit;
    const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r238.weekviewInactiveAllDayEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c4, day_r240));
} }
function WeekViewComponent_div_25_tr_12_td_3_div_1_ng_template_1_Template(rf, ctx) { }
function WeekViewComponent_div_25_tr_12_td_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_25_tr_12_td_3_div_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c6, tm_r245.events));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r246.weekviewInactiveNormalEventSectionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c5, tm_r245, ctx_r246.hourParts));
} }
function WeekViewComponent_div_25_tr_12_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeekViewComponent_div_25_tr_12_td_3_div_1_Template, 2, 8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r245 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", tm_r245.events);
} }
function WeekViewComponent_div_25_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WeekViewComponent_div_25_tr_12_td_3_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r242 = ctx.$implicit;
    const i_r243 = ctx.index;
    const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r239.hourColumnLabels[i_r243], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r242);
} }
function WeekViewComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WeekViewComponent_div_25_td_8_Template, 2, 4, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "init-position-scroll", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WeekViewComponent_div_25_tr_12_Template, 4, 2, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r162.allDayLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r162.views[2].dates);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initPosition", ctx_r162.initScrollPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r162.views[2].rows);
} }
class WeekViewComponent {
    constructor(calendarService, elm) {
        this.calendarService = calendarService;
        this.elm = elm;
        this.class = true;
        this.autoSelect = true;
        this.dir = '';
        this.scrollToHour = 0;
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.direction = 0;
        this.mode = 'week';
        this.inited = false;
        this.callbackOnInit = true;
    }
    static createDateObjects(startTime, startHour, endHour, timeInterval) {
        const times = [], currentHour = 0, currentDate = startTime.getDate();
        let hourStep, minStep;
        if (timeInterval < 1) {
            hourStep = Math.floor(1 / timeInterval);
            minStep = 60;
        }
        else {
            hourStep = 1;
            minStep = Math.floor(60 / timeInterval);
        }
        for (let hour = startHour; hour < endHour; hour += hourStep) {
            for (let interval = 0; interval < 60; interval += minStep) {
                const row = [];
                for (let day = 0; day < 7; day += 1) {
                    const time = new Date(startTime.getTime());
                    time.setHours(currentHour + hour, interval);
                    time.setDate(currentDate + day);
                    row.push({
                        events: [],
                        time
                    });
                }
                times.push(row);
            }
        }
        return times;
    }
    static getDates(startTime, n) {
        const dates = new Array(n), current = new Date(startTime.getTime());
        let i = 0;
        while (i < n) {
            dates[i++] = {
                date: new Date(current.getTime()),
                events: [],
                dayHeader: ''
            };
            current.setDate(current.getDate() + 1);
        }
        return dates;
    }
    static compareEventByStartOffset(eventA, eventB) {
        return eventA.startOffset - eventB.startOffset;
    }
    static calculateWidth(orderedEvents, size, hourParts) {
        const totalSize = size * hourParts, cells = new Array(totalSize);
        // sort by position in descending order, the right most columns should be calculated first
        orderedEvents.sort((eventA, eventB) => {
            return eventB.position - eventA.position;
        });
        for (let i = 0; i < totalSize; i += 1) {
            cells[i] = {
                calculated: false,
                events: []
            };
        }
        const len = orderedEvents.length;
        for (let i = 0; i < len; i += 1) {
            const event = orderedEvents[i];
            let index = event.startIndex * hourParts + event.startOffset;
            while (index < event.endIndex * hourParts - event.endOffset) {
                cells[index].events.push(event);
                index += 1;
            }
        }
        let i = 0;
        while (i < len) {
            let event = orderedEvents[i];
            if (!event.overlapNumber) {
                const overlapNumber = event.position + 1;
                event.overlapNumber = overlapNumber;
                const eventQueue = [event];
                while (event = eventQueue.shift()) {
                    let index = event.startIndex * hourParts + event.startOffset;
                    while (index < event.endIndex * hourParts - event.endOffset) {
                        if (!cells[index].calculated) {
                            cells[index].calculated = true;
                            if (cells[index].events) {
                                const eventCountInCell = cells[index].events.length;
                                for (let j = 0; j < eventCountInCell; j += 1) {
                                    const currentEventInCell = cells[index].events[j];
                                    if (!currentEventInCell.overlapNumber) {
                                        currentEventInCell.overlapNumber = overlapNumber;
                                        eventQueue.push(currentEventInCell);
                                    }
                                }
                            }
                        }
                        index += 1;
                    }
                }
            }
            i += 1;
        }
    }
    ngOnInit() {
        if (!this.sliderOptions) {
            this.sliderOptions = {};
        }
        this.sliderOptions.loop = true;
        this.hourRange = (this.endHour - this.startHour) * this.hourSegments;
        if (this.dateFormatter && this.dateFormatter.formatWeekViewDayHeader) {
            this.formatDayHeader = this.dateFormatter.formatWeekViewDayHeader;
        }
        else {
            const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](this.locale);
            this.formatDayHeader = function (date) {
                return datePipe.transform(date, this.formatWeekViewDayHeader);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatWeekViewTitle) {
            this.formatTitle = this.dateFormatter.formatWeekViewTitle;
        }
        else {
            const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](this.locale);
            this.formatTitle = function (date) {
                return datePipe.transform(date, this.formatWeekTitle);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatWeekViewHourColumn) {
            this.formatHourColumnLabel = this.dateFormatter.formatWeekViewHourColumn;
        }
        else {
            const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](this.locale);
            this.formatHourColumnLabel = function (date) {
                return datePipe.transform(date, this.formatHourColumn);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.hourColumnLabels = this.getHourColumnLabels();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(currentDate => {
            this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(() => {
            this.onDataLoaded();
        });
        this.slideChangedSubscription = this.calendarService.slideChanged$.subscribe(direction => {
            if (direction === 1) {
                this.slider.slideNext();
            }
            else if (direction === -1) {
                this.slider.slidePrev();
            }
        });
    }
    ngAfterViewInit() {
        const title = this.getTitle();
        this.onTitleChanged.emit(title);
        if (this.scrollToHour > 0) {
            const hourColumns = this.elm.nativeElement.querySelector('.weekview-normal-event-container').querySelectorAll('.calendar-hour-column');
            const me = this;
            setTimeout(() => {
                me.initScrollPosition = hourColumns[me.scrollToHour - me.startHour].offsetTop;
            }, 50);
        }
    }
    ngOnChanges(changes) {
        if (!this.inited) {
            return;
        }
        const eventSourceChange = changes.eventSource;
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        const lockSwipeToPrev = changes.lockSwipeToPrev;
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        const lockSwipes = changes.lockSwipes;
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    }
    ngOnDestroy() {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
        if (this.slideChangedSubscription) {
            this.slideChangedSubscription.unsubscribe();
            this.slideChangedSubscription = null;
        }
    }
    onSlideChanged() {
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        const currentViewIndex = this.currentViewIndex;
        let direction = 0;
        this.slider.getActiveIndex().then(currentSlideIndex => {
            currentSlideIndex = (currentSlideIndex + 2) % 3;
            if (isNaN(currentSlideIndex)) {
                currentSlideIndex = currentViewIndex;
            }
            if (currentSlideIndex - currentViewIndex === 1) {
                direction = 1;
            }
            else if (currentSlideIndex === 0 && currentViewIndex === 2) {
                direction = 1;
                this.slider.slideTo(1, 0, false);
            }
            else if (currentViewIndex - currentSlideIndex === 1) {
                direction = -1;
            }
            else if (currentSlideIndex === 2 && currentViewIndex === 0) {
                direction = -1;
                this.slider.slideTo(3, 0, false);
            }
            this.currentViewIndex = currentSlideIndex;
            this.move(direction);
        });
    }
    move(direction) {
        if (direction === 0) {
            return;
        }
        this.direction = direction;
        const adjacent = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
        this.calendarService.setCurrentDate(adjacent);
        this.refreshView();
        this.direction = 0;
    }
    getHourColumnLabels() {
        const hourColumnLabels = [];
        for (let hour = 0, length = this.views[0].rows.length; hour < length; hour += 1) {
            // handle edge case for DST
            if (hour === 0 && this.views[0].rows[hour][0].time.getHours() !== this.startHour) {
                const time = new Date(this.views[0].rows[hour][0].time);
                time.setDate(time.getDate() + 1);
                time.setHours(this.startHour);
                hourColumnLabels.push(this.formatHourColumnLabel(time));
            }
            else {
                hourColumnLabels.push(this.formatHourColumnLabel(this.views[0].rows[hour][0].time));
            }
        }
        return hourColumnLabels;
    }
    getViewData(startTime) {
        const dates = WeekViewComponent.getDates(startTime, 7);
        for (let i = 0; i < 7; i++) {
            dates[i].dayHeader = this.formatDayHeader(dates[i].date);
        }
        return {
            rows: WeekViewComponent.createDateObjects(startTime, this.startHour, this.endHour, this.hourSegments),
            dates
        };
    }
    getRange(currentDate) {
        const year = currentDate.getFullYear(), month = currentDate.getMonth(), date = currentDate.getDate(), day = currentDate.getDay();
        let difference = day - this.startingDayWeek;
        if (difference < 0) {
            difference += 7;
        }
        // set hour to 12 to avoid DST problem
        const firstDayOfWeek = new Date(year, month, date - difference, 12, 0, 0), endTime = new Date(year, month, date - difference + 7, 12, 0, 0);
        return {
            startTime: firstDayOfWeek,
            endTime
        };
    }
    onDataLoaded() {
        const eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = this.range.startTime, endTime = this.range.endTime, utcStartTime = Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate()), utcEndTime = Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate()), currentViewIndex = this.currentViewIndex, rows = this.views[currentViewIndex].rows, dates = this.views[currentViewIndex].dates, oneHour = 3600000, oneDay = 86400000, 
        // add allday eps
        eps = 0.016, rangeStartRowIndex = this.startHour * this.hourSegments, rangeEndRowIndex = this.endHour * this.hourSegments, allRows = 24 * this.hourSegments;
        let allDayEventInRange = false, normalEventInRange = false;
        for (let i = 0; i < 7; i += 1) {
            dates[i].events = [];
            dates[i].hasEvent = false;
        }
        for (let day = 0; day < 7; day += 1) {
            for (let hour = 0; hour < this.hourRange; hour += 1) {
                rows[hour][day].events = [];
            }
        }
        for (let i = 0; i < len; i += 1) {
            const event = eventSource[i];
            const eventStartTime = event.startTime;
            const eventEndTime = event.endTime;
            let eventUTCStartTime, eventUTCEndTime;
            if (event.allDay) {
                eventUTCStartTime = eventStartTime.getTime();
                eventUTCEndTime = eventEndTime.getTime();
            }
            else {
                eventUTCStartTime = Date.UTC(eventStartTime.getFullYear(), eventStartTime.getMonth(), eventStartTime.getDate());
                eventUTCEndTime = Date.UTC(eventEndTime.getFullYear(), eventEndTime.getMonth(), eventEndTime.getDate() + 1);
            }
            if (eventUTCEndTime <= utcStartTime || eventUTCStartTime >= utcEndTime || eventStartTime >= eventEndTime) {
                continue;
            }
            if (event.allDay) {
                allDayEventInRange = true;
                let allDayStartIndex;
                if (eventUTCStartTime <= utcStartTime) {
                    allDayStartIndex = 0;
                }
                else {
                    allDayStartIndex = Math.round((eventUTCStartTime - utcStartTime) / oneDay);
                }
                let allDayEndIndex;
                if (eventUTCEndTime >= utcEndTime) {
                    allDayEndIndex = Math.round((utcEndTime - utcStartTime) / oneDay);
                }
                else {
                    allDayEndIndex = Math.round((eventUTCEndTime - utcStartTime) / oneDay);
                }
                const displayAllDayEvent = {
                    event,
                    startIndex: allDayStartIndex,
                    endIndex: allDayEndIndex
                };
                let eventSet = dates[allDayStartIndex].events;
                if (eventSet) {
                    eventSet.push(displayAllDayEvent);
                }
                else {
                    eventSet = [];
                    eventSet.push(displayAllDayEvent);
                    dates[allDayStartIndex].events = eventSet;
                }
                dates[allDayStartIndex].hasEvent = true;
            }
            else {
                normalEventInRange = true;
                let timeDifferenceStart;
                if (eventUTCStartTime < utcStartTime) {
                    timeDifferenceStart = 0;
                }
                else {
                    timeDifferenceStart = (eventUTCStartTime - utcStartTime) / oneHour * this.hourSegments + (eventStartTime.getHours() + eventStartTime.getMinutes() / 60) * this.hourSegments;
                }
                let timeDifferenceEnd;
                if (eventUTCEndTime > utcEndTime) {
                    timeDifferenceEnd = (utcEndTime - utcStartTime) / oneHour * this.hourSegments;
                }
                else {
                    timeDifferenceEnd = (eventUTCEndTime - oneDay - utcStartTime) / oneHour * this.hourSegments + (eventEndTime.getHours() + eventEndTime.getMinutes() / 60) * this.hourSegments;
                }
                const startIndex = Math.floor(timeDifferenceStart), endIndex = Math.ceil(timeDifferenceEnd - eps);
                let startRowIndex = startIndex % allRows, dayIndex = Math.floor(startIndex / allRows), endOfDay = dayIndex * allRows, startOffset = 0, endOffset = 0;
                if (this.hourParts !== 1) {
                    if (startRowIndex < rangeStartRowIndex) {
                        startOffset = 0;
                    }
                    else {
                        startOffset = Math.floor((timeDifferenceStart - startIndex) * this.hourParts);
                    }
                }
                do {
                    endOfDay += allRows;
                    let endRowIndex;
                    if (endOfDay < endIndex) {
                        endRowIndex = allRows;
                    }
                    else {
                        if (endOfDay === endIndex) {
                            endRowIndex = allRows;
                        }
                        else {
                            endRowIndex = endIndex % allRows;
                        }
                        if (this.hourParts !== 1) {
                            if (endRowIndex > rangeEndRowIndex) {
                                endOffset = 0;
                            }
                            else {
                                endOffset = Math.floor((endIndex - timeDifferenceEnd) * this.hourParts);
                            }
                        }
                    }
                    if (startRowIndex < rangeStartRowIndex) {
                        startRowIndex = 0;
                    }
                    else {
                        startRowIndex -= rangeStartRowIndex;
                    }
                    if (endRowIndex > rangeEndRowIndex) {
                        endRowIndex = rangeEndRowIndex;
                    }
                    endRowIndex -= rangeStartRowIndex;
                    if (startRowIndex < endRowIndex) {
                        const displayEvent = {
                            event,
                            startIndex: startRowIndex,
                            endIndex: endRowIndex,
                            startOffset,
                            endOffset
                        };
                        let eventSet = rows[startRowIndex][dayIndex].events;
                        if (eventSet) {
                            eventSet.push(displayEvent);
                        }
                        else {
                            eventSet = [];
                            eventSet.push(displayEvent);
                            rows[startRowIndex][dayIndex].events = eventSet;
                        }
                        dates[dayIndex].hasEvent = true;
                    }
                    startRowIndex = 0;
                    startOffset = 0;
                    dayIndex += 1;
                } while (endOfDay < endIndex);
            }
        }
        if (normalEventInRange) {
            for (let day = 0; day < 7; day += 1) {
                let orderedEvents = [];
                for (let hour = 0; hour < this.hourRange; hour += 1) {
                    if (rows[hour][day].events) {
                        rows[hour][day].events.sort(WeekViewComponent.compareEventByStartOffset);
                        orderedEvents = orderedEvents.concat(rows[hour][day].events);
                    }
                }
                if (orderedEvents.length > 0) {
                    this.placeEvents(orderedEvents);
                }
            }
        }
        if (allDayEventInRange) {
            let orderedAllDayEvents = [];
            for (let day = 0; day < 7; day += 1) {
                if (dates[day].events) {
                    orderedAllDayEvents = orderedAllDayEvents.concat(dates[day].events);
                }
            }
            if (orderedAllDayEvents.length > 0) {
                this.placeAllDayEvents(orderedAllDayEvents);
            }
        }
        if (this.autoSelect) {
            let findSelected = false;
            let selectedDate;
            for (let r = 0; r < 7; r += 1) {
                if (dates[r].selected) {
                    selectedDate = dates[r];
                    findSelected = true;
                    break;
                }
            }
            if (findSelected) {
                let disabled = false;
                if (this.markDisabled) {
                    disabled = this.markDisabled(selectedDate.date);
                }
                this.onTimeSelected.emit({
                    selectedTime: selectedDate.date,
                    events: selectedDate.events.map(e => e.event),
                    disabled
                });
            }
        }
    }
    refreshView() {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            const title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.updateCurrentView(this.range.startTime, this.views[this.currentViewIndex]);
        this.calendarService.rangeChanged(this);
    }
    getTitle() {
        const firstDayOfWeek = new Date(this.range.startTime.getTime());
        firstDayOfWeek.setHours(12, 0, 0, 0);
        return this.formatTitle(firstDayOfWeek);
    }
    getHighlightClass(date) {
        let className = '';
        if (date.hasEvent) {
            if (className) {
                className += ' ';
            }
            className = 'weekview-with-event';
        }
        if (date.selected) {
            if (className) {
                className += ' ';
            }
            className += 'weekview-selected';
        }
        if (date.current) {
            if (className) {
                className += ' ';
            }
            className += 'weekview-current';
        }
        return className;
    }
    select(selectedTime, events) {
        let disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedTime);
        }
        this.onTimeSelected.emit({
            selectedTime,
            events: events.map(e => e.event),
            disabled
        });
    }
    placeEvents(orderedEvents) {
        this.calculatePosition(orderedEvents);
        WeekViewComponent.calculateWidth(orderedEvents, this.hourRange, this.hourParts);
    }
    placeAllDayEvents(orderedEvents) {
        this.calculatePosition(orderedEvents);
    }
    overlap(event1, event2) {
        let earlyEvent = event1, lateEvent = event2;
        if (event1.startIndex > event2.startIndex || (event1.startIndex === event2.startIndex && event1.startOffset > event2.startOffset)) {
            earlyEvent = event2;
            lateEvent = event1;
        }
        if (earlyEvent.endIndex <= lateEvent.startIndex) {
            return false;
        }
        else {
            return !(earlyEvent.endIndex - lateEvent.startIndex === 1 && earlyEvent.endOffset + lateEvent.startOffset >= this.hourParts);
        }
    }
    calculatePosition(events) {
        const len = events.length, isForbidden = new Array(len);
        let maxColumn = 0;
        for (let i = 0; i < len; i += 1) {
            let col;
            for (col = 0; col < maxColumn; col += 1) {
                isForbidden[col] = false;
            }
            for (let j = 0; j < i; j += 1) {
                if (this.overlap(events[i], events[j])) {
                    isForbidden[events[j].position] = true;
                }
            }
            for (col = 0; col < maxColumn; col += 1) {
                if (!isForbidden[col]) {
                    break;
                }
            }
            if (col < maxColumn) {
                events[i].position = col;
            }
            else {
                events[i].position = maxColumn++;
            }
        }
        if (this.dir === 'rtl') {
            for (let i = 0; i < len; i += 1) {
                events[i].position = maxColumn - 1 - events[i].position;
            }
        }
    }
    updateCurrentView(currentViewStartDate, view) {
        const currentCalendarDate = this.calendarService.currentDate, today = new Date(), oneDay = 86400000, selectedDayDifference = Math.round((Date.UTC(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), currentCalendarDate.getDate()) - Date.UTC(currentViewStartDate.getFullYear(), currentViewStartDate.getMonth(), currentViewStartDate.getDate())) / oneDay), currentDayDifference = Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getTime()) - Date.UTC(currentViewStartDate.getFullYear(), currentViewStartDate.getMonth(), currentViewStartDate.getDate())) / oneDay);
        for (let r = 0; r < 7; r += 1) {
            view.dates[r].selected = false;
        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 7 && this.autoSelect) {
            view.dates[selectedDayDifference].selected = true;
        }
        if (currentDayDifference >= 0 && currentDayDifference < 7) {
            view.dates[currentDayDifference].current = true;
        }
    }
    daySelected(viewDate) {
        const selectedDate = viewDate.date, dates = this.views[this.currentViewIndex].dates, currentViewStartDate = this.range.startTime, oneDay = 86400000, selectedDayDifference = Math.round((Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()) - Date.UTC(currentViewStartDate.getFullYear(), currentViewStartDate.getMonth(), currentViewStartDate.getDate())) / oneDay);
        this.calendarService.setCurrentDate(selectedDate);
        for (let r = 0; r < 7; r += 1) {
            dates[r].selected = false;
        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 7) {
            dates[selectedDayDifference].selected = true;
        }
        let disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedDate);
        }
        this.onTimeSelected.emit({ selectedTime: selectedDate, events: viewDate.events.map(e => e.event), disabled });
    }
    setScrollPosition(scrollPosition) {
        this.initScrollPosition = scrollPosition;
    }
}
WeekViewComponent.ɵfac = function WeekViewComponent_Factory(t) { return new (t || WeekViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
WeekViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WeekViewComponent, selectors: [["weekview"]], viewQuery: function WeekViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
    } }, hostVars: 2, hostBindings: function WeekViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("weekview", ctx.class);
    } }, inputs: { weekviewHeaderTemplate: "weekviewHeaderTemplate", weekviewAllDayEventTemplate: "weekviewAllDayEventTemplate", weekviewNormalEventTemplate: "weekviewNormalEventTemplate", weekviewAllDayEventSectionTemplate: "weekviewAllDayEventSectionTemplate", weekviewNormalEventSectionTemplate: "weekviewNormalEventSectionTemplate", weekviewInactiveAllDayEventSectionTemplate: "weekviewInactiveAllDayEventSectionTemplate", weekviewInactiveNormalEventSectionTemplate: "weekviewInactiveNormalEventSectionTemplate", formatWeekTitle: "formatWeekTitle", formatWeekViewDayHeader: "formatWeekViewDayHeader", formatHourColumn: "formatHourColumn", startingDayWeek: "startingDayWeek", allDayLabel: "allDayLabel", hourParts: "hourParts", eventSource: "eventSource", autoSelect: "autoSelect", markDisabled: "markDisabled", locale: "locale", dateFormatter: "dateFormatter", dir: "dir", scrollToHour: "scrollToHour", preserveScrollPosition: "preserveScrollPosition", lockSwipeToPrev: "lockSwipeToPrev", lockSwipes: "lockSwipes", startHour: "startHour", endHour: "endHour", sliderOptions: "sliderOptions", hourSegments: "hourSegments" }, outputs: { onRangeChanged: "onRangeChanged", onEventSelected: "onEventSelected", onTimeSelected: "onTimeSelected", onTitleChanged: "onTitleChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 26, vars: 11, consts: [[1, "slides-container", 3, "options", "dir", "ionSlideDidChange"], ["weekSlider", ""], [1, "slide-container"], [1, "table", "table-bordered", "table-fixed", "weekview-header"], [1, "calendar-hour-column"], ["class", "weekview-header text-center", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "weekview-header", "text-center", 3, "ngClass", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "weekview-allday-table"], [1, "weekview-allday-label"], [1, "weekview-allday-content-wrapper", "scroll-content"], [1, "table", "table-fixed", "weekview-allday-content-table"], ["class", "calendar-cell", 4, "ngFor", "ngForOf"], [1, "weekview-normal-event-container", 3, "initPosition", "emitEvent", "onScroll"], [1, "table", "table-bordered", "table-fixed", "weekview-normal-event-table"], [4, "ngFor", "ngForOf"], [1, "calendar-cell"], [1, "calendar-hour-column", "text-center"], ["class", "calendar-cell", "tappable", "", 3, "click", 4, "ngFor", "ngForOf"], ["tappable", "", 1, "calendar-cell", 3, "click"], [1, "weekview-normal-event-container", 3, "initPosition"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"]], template: function WeekViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlideDidChange", function WeekViewComponent_Template_ion_slides_ionSlideDidChange_0_listener() { return ctx.onSlideChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-slide", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, WeekViewComponent_th_7_Template, 2, 5, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WeekViewComponent_div_8_Template, 13, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, WeekViewComponent_div_9_Template, 13, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-slide", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, WeekViewComponent_th_15_Template, 2, 5, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, WeekViewComponent_div_16_Template, 13, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, WeekViewComponent_div_17_Template, 13, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-slide", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, WeekViewComponent_th_23_Template, 2, 5, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, WeekViewComponent_div_24_Template, 13, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, WeekViewComponent_div_25_Template, 13, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.sliderOptions)("dir", ctx.dir);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.views[0].dates);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 0 === ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 0 !== ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.views[1].dates);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 1 === ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 1 !== ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.views[2].dates);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 2 === ctx.currentViewIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 2 !== ctx.currentViewIndex);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgTemplateOutlet"], _init_position_scroll__WEBPACK_IMPORTED_MODULE_4__["initPositionScrollComponent"]], styles: ["\n        .table-fixed {\n            table-layout: fixed;\n        }\n\n        .table {\n            width: 100%;\n            max-width: 100%;\n            background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n            padding: 8px;\n            line-height: 20px;\n            vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n            vertical-align: bottom;\n            border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n            border-top: 0\n        }\n\n        .table > tbody + tbody {\n            border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n            border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n            border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n            border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n            background-color: #f9f9f9\n        }\n\n        .calendar-hour-column {\n            width: 50px;\n            white-space: nowrap;\n        }\n\n        .calendar-event-wrap {\n            position: relative;\n            width: 100%;\n            height: 100%;\n        }\n\n        .calendar-event {\n            position: absolute;\n            padding: 2px;\n            cursor: pointer;\n            z-index: 10000;\n        }\n\n        .calendar-cell {\n            padding: 0 !important;\n            height: 37px;\n        }\n\n        .slides-container {\n            height: 100%;\n        }\n\n        .slide-container {\n            display: block;\n        }\n\n        .weekview-allday-label {\n            float: left;\n            height: 100%;\n            line-height: 50px;\n            text-align: center;\n            width: 50px;\n            border-left: 1px solid #ddd;\n        }\n\n        [dir=\"rtl\"] .weekview-allday-label {\n            float: right;\n            border-right: 1px solid #ddd;\n        }\n\n        .weekview-allday-content-wrapper {\n            margin-left: 50px;\n            overflow: hidden;\n            height: 51px;\n        }\n\n        [dir=\"rtl\"] .weekview-allday-content-wrapper {\n            margin-left: 0;\n            margin-right: 50px;\n        }\n\n        .weekview-allday-content-table {\n            min-height: 50px;\n        }\n\n        .weekview-allday-content-table td {\n            border-left: 1px solid #ddd;\n            border-right: 1px solid #ddd;\n        }\n\n        .weekview-header th {\n            overflow: hidden;\n            white-space: nowrap;\n            font-size: 14px;\n        }\n\n        .weekview-allday-table {\n            height: 50px;\n            position: relative;\n            border-bottom: 1px solid #ddd;\n            font-size: 14px;\n        }\n\n        .weekview-normal-event-container {\n            margin-top: 87px;\n            overflow: hidden;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            position: absolute;\n            font-size: 14px;\n        }\n\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }\n\n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n            display: none;\n        }\n\n        .table > tbody > tr > td.calendar-hour-column {\n            padding-left: 0;\n            padding-right: 0;\n            vertical-align: middle;\n        }\n\n        @media (max-width: 750px) {\n            .weekview-allday-label, .calendar-hour-column {\n                width: 31px;\n                font-size: 12px;\n            }\n\n            .weekview-allday-label {\n                padding-top: 4px;\n            }\n\n            .table > tbody > tr > td.calendar-hour-column {\n                padding-left: 0;\n                padding-right: 0;\n                vertical-align: middle;\n                line-height: 12px;\n            }\n\n            .table > thead > tr > th.weekview-header {\n                padding-left: 0;\n                padding-right: 0;\n                font-size: 12px;\n            }\n\n            .weekview-allday-label {\n                line-height: 20px;\n            }\n\n            .weekview-allday-content-wrapper {\n                margin-left: 31px;\n            }\n\n            [dir=\"rtl\"] .weekview-allday-content-wrapper {\n                margin-left: 0;\n                margin-right: 31px;\n            }\n        }\n    "], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WeekViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'weekview',
                template: `
        <ion-slides #weekSlider [options]="sliderOptions" [dir]="dir" (ionSlideDidChange)="onSlideChanged()"
                    class="slides-container">
            <ion-slide class="slide-container">
                <table class="table table-bordered table-fixed weekview-header">
                    <thead>
                    <tr>
                        <th class="calendar-hour-column"></th>
                        <th class="weekview-header text-center" *ngFor="let date of views[0].dates"
                            [ngClass]="getHighlightClass(date)"
                            (click)="daySelected(date)">
                            <ng-template [ngTemplateOutlet]="weekviewHeaderTemplate"
                                         [ngTemplateOutletContext]="{viewDate:date}">
                            </ng-template>
                        </th>
                    </tr>
                    </thead>
                </table>
                <div *ngIf="0===currentViewIndex">
                    <div class="weekview-allday-table">
                        <div class="weekview-allday-label">{{allDayLabel}}</div>
                        <div class="weekview-allday-content-wrapper scroll-content">
                            <table class="table table-fixed weekview-allday-content-table">
                                <tbody>
                                <tr>
                                    <td *ngFor="let day of views[0].dates" class="calendar-cell">
                                        <ng-template [ngTemplateOutlet]="weekviewAllDayEventSectionTemplate"
                                                     [ngTemplateOutletContext]="{day:day, eventTemplate:weekviewAllDayEventTemplate}">
                                        </ng-template>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <init-position-scroll class="weekview-normal-event-container" [initPosition]="initScrollPosition"
                                          [emitEvent]="preserveScrollPosition" (onScroll)="setScrollPosition($event)">
                        <table class="table table-bordered table-fixed weekview-normal-event-table">
                            <tbody>
                            <tr *ngFor="let row of views[0].rows; let i = index">
                                <td class="calendar-hour-column text-center">
                                    {{hourColumnLabels[i]}}
                                </td>
                                <td *ngFor="let tm of row" class="calendar-cell" tappable
                                    (click)="select(tm.time, tm.events)">
                                    <ng-template [ngTemplateOutlet]="weekviewNormalEventSectionTemplate"
                                                 [ngTemplateOutletContext]="{tm:tm, hourParts: hourParts, eventTemplate:weekviewNormalEventTemplate}">
                                    </ng-template>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </init-position-scroll>
                </div>
                <div *ngIf="0!==currentViewIndex">
                    <div class="weekview-allday-table">
                        <div class="weekview-allday-label">{{allDayLabel}}</div>
                        <div class="weekview-allday-content-wrapper scroll-content">
                            <table class="table table-fixed weekview-allday-content-table">
                                <tbody>
                                <tr>
                                    <td *ngFor="let day of views[0].dates" class="calendar-cell">
                                        <ng-template [ngTemplateOutlet]="weekviewInactiveAllDayEventSectionTemplate"
                                                     [ngTemplateOutletContext]="{day:day}">
                                        </ng-template>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <init-position-scroll class="weekview-normal-event-container" [initPosition]="initScrollPosition">
                        <table class="table table-bordered table-fixed weekview-normal-event-table">
                            <tbody>
                            <tr *ngFor="let row of views[0].rows; let i = index">
                                <td class="calendar-hour-column text-center">
                                    {{hourColumnLabels[i]}}
                                </td>
                                <td *ngFor="let tm of row" class="calendar-cell">
                                    <ng-template [ngTemplateOutlet]="weekviewInactiveNormalEventSectionTemplate"
                                                 [ngTemplateOutletContext]="{tm:tm, hourParts: hourParts}">
                                    </ng-template>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </init-position-scroll>
                </div>
            </ion-slide>
            <ion-slide class="slide-container">
                <table class="table table-bordered table-fixed weekview-header">
                    <thead>
                    <tr>
                        <th class="calendar-hour-column"></th>
                        <th class="weekview-header text-center" *ngFor="let date of views[1].dates"
                            [ngClass]="getHighlightClass(date)"
                            (click)="daySelected(date)">
                            <ng-template [ngTemplateOutlet]="weekviewHeaderTemplate"
                                         [ngTemplateOutletContext]="{viewDate:date}">
                            </ng-template>
                        </th>
                    </tr>
                    </thead>
                </table>
                <div *ngIf="1===currentViewIndex">
                    <div class="weekview-allday-table">
                        <div class="weekview-allday-label">{{allDayLabel}}</div>
                        <div class="weekview-allday-content-wrapper scroll-content">
                            <table class="table table-fixed weekview-allday-content-table">
                                <tbody>
                                <tr>
                                    <td *ngFor="let day of views[1].dates" class="calendar-cell">
                                        <ng-template [ngTemplateOutlet]="weekviewAllDayEventSectionTemplate"
                                                     [ngTemplateOutletContext]="{day:day, eventTemplate:weekviewAllDayEventTemplate}">
                                        </ng-template>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <init-position-scroll class="weekview-normal-event-container" [initPosition]="initScrollPosition"
                                          [emitEvent]="preserveScrollPosition" (onScroll)="setScrollPosition($event)">
                        <table class="table table-bordered table-fixed weekview-normal-event-table">
                            <tbody>
                            <tr *ngFor="let row of views[1].rows; let i = index">
                                <td class="calendar-hour-column text-center">
                                    {{hourColumnLabels[i]}}
                                </td>
                                <td *ngFor="let tm of row" class="calendar-cell" tappable
                                    (click)="select(tm.time, tm.events)">
                                    <div [ngClass]="{'calendar-event-wrap': tm.events}" *ngIf="tm.events">
                                        <ng-template [ngTemplateOutlet]="weekviewNormalEventSectionTemplate"
                                                     [ngTemplateOutletContext]="{tm:tm, hourParts: hourParts, eventTemplate:weekviewNormalEventTemplate}">
                                        </ng-template>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </init-position-scroll>
                </div>
                <div *ngIf="1!==currentViewIndex">
                    <div class="weekview-allday-table">
                        <div class="weekview-allday-label">{{allDayLabel}}</div>
                        <div class="weekview-allday-content-wrapper scroll-content">
                            <table class="table table-fixed weekview-allday-content-table">
                                <tbody>
                                <tr>
                                    <td *ngFor="let day of views[1].dates" class="calendar-cell">
                                        <ng-template [ngTemplateOutlet]="weekviewInactiveAllDayEventSectionTemplate"
                                                     [ngTemplateOutletContext]="{day:day}">
                                        </ng-template>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <init-position-scroll class="weekview-normal-event-container" [initPosition]="initScrollPosition">
                        <table class="table table-bordered table-fixed weekview-normal-event-table">
                            <tbody>
                            <tr *ngFor="let row of views[1].rows; let i = index">
                                <td class="calendar-hour-column text-center">
                                    {{hourColumnLabels[i]}}
                                </td>
                                <td *ngFor="let tm of row" class="calendar-cell">
                                    <div [ngClass]="{'calendar-event-wrap': tm.events}" *ngIf="tm.events">
                                        <ng-template [ngTemplateOutlet]="weekviewInactiveNormalEventSectionTemplate"
                                                     [ngTemplateOutletContext]="{tm:tm, hourParts: hourParts}">
                                        </ng-template>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </init-position-scroll>
                </div>
            </ion-slide>
            <ion-slide class="slide-container">
                <table class="table table-bordered table-fixed weekview-header">
                    <thead>
                    <tr>
                        <th class="calendar-hour-column"></th>
                        <th class="weekview-header text-center" *ngFor="let date of views[2].dates"
                            [ngClass]="getHighlightClass(date)"
                            (click)="daySelected(date)">
                            <ng-template [ngTemplateOutlet]="weekviewHeaderTemplate"
                                         [ngTemplateOutletContext]="{viewDate:date}">
                            </ng-template>
                        </th>
                    </tr>
                    </thead>
                </table>
                <div *ngIf="2===currentViewIndex">
                    <div class="weekview-allday-table">
                        <div class="weekview-allday-label">{{allDayLabel}}</div>
                        <div class="weekview-allday-content-wrapper scroll-content">
                            <table class="table table-fixed weekview-allday-content-table">
                                <tbody>
                                <tr>
                                    <td *ngFor="let day of views[2].dates" class="calendar-cell">
                                        <ng-template [ngTemplateOutlet]="weekviewAllDayEventSectionTemplate"
                                                     [ngTemplateOutletContext]="{day:day, eventTemplate:weekviewAllDayEventTemplate}">
                                        </ng-template>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <init-position-scroll class="weekview-normal-event-container" [initPosition]="initScrollPosition"
                                          [emitEvent]="preserveScrollPosition" (onScroll)="setScrollPosition($event)">
                        <table class="table table-bordered table-fixed weekview-normal-event-table">
                            <tbody>
                            <tr *ngFor="let row of views[2].rows; let i = index">
                                <td class="calendar-hour-column text-center">
                                    {{hourColumnLabels[i]}}
                                </td>
                                <td *ngFor="let tm of row" class="calendar-cell" tappable
                                    (click)="select(tm.time, tm.events)">
                                    <div [ngClass]="{'calendar-event-wrap': tm.events}" *ngIf="tm.events">
                                        <ng-template [ngTemplateOutlet]="weekviewNormalEventSectionTemplate"
                                                     [ngTemplateOutletContext]="{tm:tm, hourParts: hourParts, eventTemplate:weekviewNormalEventTemplate}">
                                        </ng-template>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </init-position-scroll>
                </div>
                <div *ngIf="2!==currentViewIndex">
                    <div class="weekview-allday-table">
                        <div class="weekview-allday-label">{{allDayLabel}}</div>
                        <div class="weekview-allday-content-wrapper scroll-content">
                            <table class="table table-fixed weekview-allday-content-table">
                                <tbody>
                                <tr>
                                    <td *ngFor="let day of views[2].dates" class="calendar-cell">
                                        <ng-template [ngTemplateOutlet]="weekviewInactiveAllDayEventSectionTemplate"
                                                     [ngTemplateOutletContext]="{day:day}">
                                        </ng-template>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <init-position-scroll class="weekview-normal-event-container" [initPosition]="initScrollPosition">
                        <table class="table table-bordered table-fixed weekview-normal-event-table">
                            <tbody>
                            <tr *ngFor="let row of views[2].rows; let i = index">
                                <td class="calendar-hour-column text-center">
                                    {{hourColumnLabels[i]}}
                                </td>
                                <td *ngFor="let tm of row" class="calendar-cell">
                                    <div [ngClass]="{'calendar-event-wrap': tm.events}" *ngIf="tm.events">
                                        <ng-template [ngTemplateOutlet]="weekviewInactiveNormalEventSectionTemplate"
                                                     [ngTemplateOutletContext]="{tm:tm, hourParts: hourParts}">
                                        </ng-template>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </init-position-scroll>
                </div>
            </ion-slide>
        </ion-slides>
    `,
                styles: [`
        .table-fixed {
            table-layout: fixed;
        }

        .table {
            width: 100%;
            max-width: 100%;
            background-color: transparent;
        }

        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,
        .table > tbody > tr > td, .table > tfoot > tr > td {
            padding: 8px;
            line-height: 20px;
            vertical-align: top;
        }

        .table > thead > tr > th {
            vertical-align: bottom;
            border-bottom: 2px solid #ddd;
        }

        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {
            border-top: 0
        }

        .table > tbody + tbody {
            border-top: 2px solid #ddd;
        }

        .table-bordered {
            border: 1px solid #ddd;
        }

        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,
        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {
            border: 1px solid #ddd;
        }

        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {
            border-bottom-width: 2px;
        }

        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {
            background-color: #f9f9f9
        }

        .calendar-hour-column {
            width: 50px;
            white-space: nowrap;
        }

        .calendar-event-wrap {
            position: relative;
            width: 100%;
            height: 100%;
        }

        .calendar-event {
            position: absolute;
            padding: 2px;
            cursor: pointer;
            z-index: 10000;
        }

        .calendar-cell {
            padding: 0 !important;
            height: 37px;
        }

        .slides-container {
            height: 100%;
        }

        .slide-container {
            display: block;
        }

        .weekview-allday-label {
            float: left;
            height: 100%;
            line-height: 50px;
            text-align: center;
            width: 50px;
            border-left: 1px solid #ddd;
        }

        [dir="rtl"] .weekview-allday-label {
            float: right;
            border-right: 1px solid #ddd;
        }

        .weekview-allday-content-wrapper {
            margin-left: 50px;
            overflow: hidden;
            height: 51px;
        }

        [dir="rtl"] .weekview-allday-content-wrapper {
            margin-left: 0;
            margin-right: 50px;
        }

        .weekview-allday-content-table {
            min-height: 50px;
        }

        .weekview-allday-content-table td {
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
        }

        .weekview-header th {
            overflow: hidden;
            white-space: nowrap;
            font-size: 14px;
        }

        .weekview-allday-table {
            height: 50px;
            position: relative;
            border-bottom: 1px solid #ddd;
            font-size: 14px;
        }

        .weekview-normal-event-container {
            margin-top: 87px;
            overflow: hidden;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            position: absolute;
            font-size: 14px;
        }

        .scroll-content {
            overflow-y: auto;
            overflow-x: hidden;
        }

        ::-webkit-scrollbar,
        *::-webkit-scrollbar {
            display: none;
        }

        .table > tbody > tr > td.calendar-hour-column {
            padding-left: 0;
            padding-right: 0;
            vertical-align: middle;
        }

        @media (max-width: 750px) {
            .weekview-allday-label, .calendar-hour-column {
                width: 31px;
                font-size: 12px;
            }

            .weekview-allday-label {
                padding-top: 4px;
            }

            .table > tbody > tr > td.calendar-hour-column {
                padding-left: 0;
                padding-right: 0;
                vertical-align: middle;
                line-height: 12px;
            }

            .table > thead > tr > th.weekview-header {
                padding-left: 0;
                padding-right: 0;
                font-size: 12px;
            }

            .weekview-allday-label {
                line-height: 20px;
            }

            .weekview-allday-content-wrapper {
                margin-left: 31px;
            }

            [dir="rtl"] .weekview-allday-content-wrapper {
                margin-left: 0;
                margin-right: 31px;
            }
        }
    `],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['weekSlider', { static: true }]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.weekview']
        }], weekviewHeaderTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], weekviewAllDayEventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], weekviewNormalEventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], weekviewAllDayEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], weekviewNormalEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], weekviewInactiveAllDayEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], weekviewInactiveNormalEventSectionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], formatWeekTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], formatWeekViewDayHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], formatHourColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], startingDayWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allDayLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hourParts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], eventSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autoSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], markDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dateFormatter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scrollToHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], preserveScrollPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], lockSwipeToPrev: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], lockSwipes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], startHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], endHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sliderOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hourSegments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onRangeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onEventSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onTimeSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onTitleChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendar-import/calendar-import.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendar-import/calendar-import.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Import Events</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"dismiss()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h1>Upload ICS File</h1>\n  <ion-input type=\"file\" name=\"file\"  (change)=\"upload($event)\">Upload! </ion-input>\n  <br><br><br>\n  <div lines=\"none\" *ngIf=\"events\">\n    <div *ngFor=\"let event of events\">\n      <b>{{event.title}}</b>\n      \n      <p *ngIf=\"event.start_date\"><b>Start: </b> {{event.start_date}}</p>\n      <p *ngIf=\"event.end_date\"><b>End: </b> {{event.end_date}}</p>\n      <p *ngIf=\"event.description\"><b>Description: </b> {{event.description}}</p>\n      <p *ngIf=\"event.location\"><b>Location: </b> {{event.location}}</p>\n      \n    </div>\n    <ion-button *ngIf=\"events.length\" (click)=\"importEvent()\">Import</ion-button>\n  </div>\n   \n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendar/calendar.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendar/calendar.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"calendarViewOptions()\" icon-only><ion-icon name=\"menu-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n    <ion-title>{{viewTitle}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"today()\" icon-only><ion-icon name=\"calendar-outline\"></ion-icon></ion-button>\n      <ion-button icon-only small (click)=\"addEventModal()\">\n        <ion-icon name=\"add-outline\" ></ion-icon>\n      </ion-button>\n      <ion-button icon-only small (click)=\"showCalendarOptions()\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!--\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-button small expand=\"block\" [color]=\"calendar.mode == 'month' ? 'primary' : 'secondary'\" (click)=\"changeMode('month')\">Month</ion-button>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button small expand=\"block\" [color]=\"calendar.mode == 'week' ? 'primary' : 'secondary'\" (click)=\"changeMode('week')\">Week</ion-button>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button small expand=\"block\" [color]=\"calendar.mode == 'day' ? 'primary' : 'secondary'\" (click)=\"changeMode('day')\">Day</ion-button>\n    </ion-col> \n \n    <ion-col size=\"3\" class=\"ion-tex-left\">\n      <ion-button fill=\"clear\" small (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-center\">\n      <ion-button small fill=\"clear\" >\n        {{ viewTitle }}\n      </ion-button>\n    </ion-col>\n\n    <ion-col size=\"3\" class=\"ion-text-right\">\n      <ion-button small fill=\"clear\" (click)=\"next()\">\n        <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  -->\n  <div *ngIf=\"displayMode=='event'\">\n    <ion-grid *ngIf=\"sortedEvents\">\n      <ion-row *ngFor=\"let date of getKeys(sortedEvents)\">\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <h1 class=\"ion-no-margin\">{{date | slice:0:2}}</h1>\n          <p class=\"ion-no-margin\">{{date | slice:3:date.length}}</p>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-card *ngFor=\"let event of sortedEvents[date]\" class=\"ion-no-margin event\" (click)=\"onEventSelected(event)\">\n            <ion-card-header>\n              <ion-card-subtitle> {{event.title}}</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content>\n              {{event.description}}\n            </ion-card-content>\n          </ion-card>\n         \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngIf=\"displayMode=='calendar'\">\n      <calendar \n      [eventSource]=\"eventSource\" \n      [calendarMode]=\"calendar.mode\" \n      [currentDate]=\"calendar.currentDate\"\n      (onEventSelected)=\"onEventSelected($event)\"\n      (onTitleChanged)=\"onViewTitleChanged($event)\"\n      (onTimeSelected)=\"onTimeSelected($event)\" \n      startHour=\"01\"\n      endHour=\"24\"\n      step=\"10\"\n      startingDayWeek=\"1\">\n      </calendar>\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/calendar-import/calendar-import-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/calendar-import/calendar-import-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CalendarImportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarImportPageRoutingModule", function() { return CalendarImportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calendar_import_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-import.page */ "./src/app/pages/calendar-import/calendar-import.page.ts");




const routes = [
    {
        path: '',
        component: _calendar_import_page__WEBPACK_IMPORTED_MODULE_3__["CalendarImportPage"]
    }
];
let CalendarImportPageRoutingModule = class CalendarImportPageRoutingModule {
};
CalendarImportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalendarImportPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/calendar-import/calendar-import.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/calendar-import/calendar-import.module.ts ***!
  \*****************************************************************/
/*! exports provided: CalendarImportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarImportPageModule", function() { return CalendarImportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _calendar_import_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-import-routing.module */ "./src/app/pages/calendar-import/calendar-import-routing.module.ts");
/* harmony import */ var _calendar_import_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar-import.page */ "./src/app/pages/calendar-import/calendar-import.page.ts");







let CalendarImportPageModule = class CalendarImportPageModule {
};
CalendarImportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calendar_import_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarImportPageRoutingModule"]
        ],
        declarations: [_calendar_import_page__WEBPACK_IMPORTED_MODULE_6__["CalendarImportPage"]]
    })
], CalendarImportPageModule);



/***/ }),

/***/ "./src/app/pages/calendar-import/calendar-import.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/calendar-import/calendar-import.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGVuZGFyLWltcG9ydC9jYWxlbmRhci1pbXBvcnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/calendar-import/calendar-import.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/calendar-import/calendar-import.page.ts ***!
  \***************************************************************/
/*! exports provided: CalendarImportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarImportPage", function() { return CalendarImportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_icalendar_ical_import_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/icalendar/ical-import.service */ "./src/app/services/icalendar/ical-import.service.ts");




let CalendarImportPage = class CalendarImportPage {
    constructor(modalCtrl, iCalImportService) {
        this.modalCtrl = modalCtrl;
        this.iCalImportService = iCalImportService;
        this.filename = '';
        this.type = '';
        this.base64 = '';
        this.events = [];
        this.cal = [];
        this.eventCount = 0;
        this.todoCount = 0;
    }
    ngOnInit() {
    }
    upload($event) {
        const file = $event.target.files[0];
        // this.filename = file.name;
        // this.type = file.type;
        const ref = this;
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result;
            ref.base64 = base64.toString();
            const cal = ref.base64.split(',');
            this.events = this.iCalImportService.parse(atob(cal[1]));
            this.events.forEach(event => {
                event.description = decodeURI(event.description);
            });
            console.log(this.events);
        };
        reader.readAsDataURL(file);
    }
    importEvent() {
        this.modalCtrl.dismiss(this.events);
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
CalendarImportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_icalendar_ical_import_service__WEBPACK_IMPORTED_MODULE_3__["IcalImportService"] }
];
CalendarImportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar-import',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calendar-import.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendar-import/calendar-import.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calendar-import.page.scss */ "./src/app/pages/calendar-import/calendar-import.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_icalendar_ical_import_service__WEBPACK_IMPORTED_MODULE_3__["IcalImportService"]])
], CalendarImportPage);



/***/ }),

/***/ "./src/app/pages/calendar/calendar-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/calendar/calendar-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CalendarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageRoutingModule", function() { return CalendarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.page */ "./src/app/pages/calendar/calendar.page.ts");




const routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_3__["CalendarPage"]
    }
];
let CalendarPageRoutingModule = class CalendarPageRoutingModule {
};
CalendarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalendarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/calendar/calendar.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/calendar/calendar.module.ts ***!
  \***************************************************/
/*! exports provided: CalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");
/* harmony import */ var _calendar_import_calendar_import_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../calendar-import/calendar-import.module */ "./src/app/pages/calendar-import/calendar-import.module.ts");
/* harmony import */ var _event_details_event_details_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../event-details/event-details.module */ "./src/app/pages/event-details/event-details.module.ts");
/* harmony import */ var _event_form_event_form_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../event-form/event-form.module */ "./src/app/pages/event-form/event-form.module.ts");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar-routing.module */ "./src/app/pages/calendar/calendar-routing.module.ts");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calendar.page */ "./src/app/pages/calendar/calendar.page.ts");











let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_9__["CalendarPageRoutingModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_5__["NgCalendarModule"],
            _event_form_event_form_module__WEBPACK_IMPORTED_MODULE_8__["EventFormPageModule"],
            _calendar_import_calendar_import_module__WEBPACK_IMPORTED_MODULE_6__["CalendarImportPageModule"],
            _event_details_event_details_module__WEBPACK_IMPORTED_MODULE_7__["EventDetailsPageModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
        declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_10__["CalendarPage"]]
    })
], CalendarPageModule);



/***/ }),

/***/ "./src/app/pages/calendar/calendar.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/calendar/calendar.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".create-event ion-card-title {\n  font-size: 16px;\n}\n\n.monthview-eventdetail-timecolumn {\n  font-size: 13px !important;\n}\n\n.event-detail {\n  font-size: 13px !important;\n}\n\n.event {\n  border-left: 4px solid #ff9200;\n  margin-bottom: 5px;\n}\n\n.event ion-card-header {\n  padding: 8px 10px;\n  padding-bottom: 0px;\n}\n\n.event ion-card-content {\n  padding: 5px 10px;\n  padding-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdGFuZ3Bvcy9BcHBzL21lc3N5ZmFtaWx5cHJvamVjdC9tZXNzeWZhbWlseXByb2plY3Qvc3JjL2FwcC9wYWdlcy9jYWxlbmRhci9jYWxlbmRhci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhbGVuZGFyL2NhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7QUNBUjs7QURLQTtFQUNJLDBCQUFBO0FDRko7O0FES0E7RUFDSSwwQkFBQTtBQ0ZKOztBREtBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREdJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0RSOztBREdJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FsZW5kYXIvY2FsZW5kYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWF0ZS1ldmVudHtcbiAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgXG4gICAgfVxufVxuXG4ubW9udGh2aWV3LWV2ZW50ZGV0YWlsLXRpbWVjb2x1bW57XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5ldmVudC1kZXRhaWx7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5ldmVudHtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmZjkyMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGlvbi1jYXJkLWhlYWRlcntcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIH1cbn0iLCIuY3JlYXRlLWV2ZW50IGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubW9udGh2aWV3LWV2ZW50ZGV0YWlsLXRpbWVjb2x1bW4ge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuLmV2ZW50LWRldGFpbCB7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG4uZXZlbnQge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmZjkyMDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5ldmVudCBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5ldmVudCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/calendar/calendar.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/calendar/calendar.page.ts ***!
  \*************************************************/
/*! exports provided: CalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPage", function() { return CalendarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_config_auth_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/config/auth-constants */ "./src/app/config/auth-constants.ts");
/* harmony import */ var src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/events/events.service */ "./src/app/services/events/events.service.ts");
/* harmony import */ var src_app_services_icalendar_ical_export_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/icalendar/ical-export.service */ "./src/app/services/icalendar/ical-export.service.ts");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
/* harmony import */ var _calendar_import_calendar_import_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../calendar-import/calendar-import.page */ "./src/app/pages/calendar-import/calendar-import.page.ts");
/* harmony import */ var _event_details_event_details_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../event-details/event-details.page */ "./src/app/pages/event-details/event-details.page.ts");
/* harmony import */ var _event_form_event_form_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../event-form/event-form.page */ "./src/app/pages/event-form/event-form.page.ts");













let CalendarPage = class CalendarPage {
    constructor(alertCtrl, locale, cal, actionSheetController, modalCtrl, icalExportService, eventService, storageService, plt) {
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.cal = cal;
        this.actionSheetController = actionSheetController;
        this.modalCtrl = modalCtrl;
        this.icalExportService = icalExportService;
        this.eventService = eventService;
        this.storageService = storageService;
        this.plt = plt;
        this.collapseCard = true;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.displayMode = 'calendar';
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
            daysConfig: {
                cssClass: 'iCalendar'
            }
        };
        // this.plt.ready().then(()=> {
        //   this.cal.listCalendars().then(data=> {
        //     console.log(data);
        //   })
        // })
    }
    ngOnInit() {
        this.storageService.get(src_app_config_auth_constants__WEBPACK_IMPORTED_MODULE_6__["AuthConstants"].AUTH).then(res => {
            this.user = res;
        });
    }
    ionViewWillEnter() {
        this.getEvents();
    }
    getEvents() {
        this.eventService.getEvents().subscribe((res) => {
            res.forEach(event => {
                event = this.formatEvent(event);
            });
            this.eventSource = res;
        }, (error) => { });
    }
    formatEvent(event) {
        event.startTime = new Date(event.start_date);
        event.endTime = new Date(event.end_date);
        event.desc = new Date(event.description);
        return event;
    }
    showCalendarOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                buttons: [
                    {
                        text: 'Import Event',
                        handler: () => {
                            this.importExportModal();
                        }
                    }, {
                        text: 'Export Event',
                        handler: () => {
                            this.icalExportService.download();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    getKeys(obj) {
        return Object.keys(obj);
    }
    formatEvents() {
        const finalObj = [];
        this.eventSource.forEach((event) => {
            const date = moment__WEBPACK_IMPORTED_MODULE_5__(event.startTime).format('DD ddd');
            if (finalObj[date]) {
                finalObj[date].push(event);
            }
            else {
                finalObj[date] = [event];
            }
        });
        this.sortedEvents = finalObj.sort();
    }
    calendarViewOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                buttons: [
                    {
                        text: 'Day',
                        handler: () => {
                            this.displayMode = 'event';
                            this.formatEvents();
                        }
                    }, {
                        text: 'Month',
                        handler: () => {
                            this.displayMode = 'calendar';
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    importExportModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _calendar_import_calendar_import_page__WEBPACK_IMPORTED_MODULE_10__["CalendarImportPage"],
                componentProps: {}
            });
            modal.onDidDismiss().then((events) => {
                if (events.data) {
                    events.data.forEach((event) => {
                        this.addEvent(event);
                    });
                }
            });
            return yield modal.present();
        });
    }
    addEventModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _event_form_event_form_page__WEBPACK_IMPORTED_MODULE_12__["EventFormPage"],
                componentProps: {
                    preselectedDate: this.selectedDay
                }
            });
            modal.onDidDismiss().then((event) => {
                if (event.data) {
                    this.addEvent(event.data);
                }
            });
            return yield modal.present();
        });
    }
    addEvent(event) {
        const formattedEvent = {
            title: event.title,
            start_date: moment__WEBPACK_IMPORTED_MODULE_5__(event.start_date).format('YYYY-MM-DD hh:mm'),
            end_date: moment__WEBPACK_IMPORTED_MODULE_5__(event.end_date).format('YYYY-MM-DD hh:mm'),
            // allDay: event.data.allDay,
            description: event.description,
            location: event.location,
            uid: this.user.Id,
            status: 'Upcoming'
        };
        this.eventService.addEvent(formattedEvent).subscribe((res) => {
            if (res.success) {
                this.eventSource.push(this.formatEvent(res.data));
                this.myCal.loadEvents();
            }
        }, (error) => {
        });
    }
    onTimeSelected(ev) {
        this.selectedDay = new Date(ev.selectedTime);
        this.selectedDay.setHours(this.selectedDay.getHours() + 1);
    }
    next() {
        const swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slideNext();
    }
    back() {
        const swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slidePrev();
    }
    changeMode(mode) {
        this.calendar.mode = mode;
    }
    today() {
        this.calendar.currentDate = new Date();
    }
    onViewTitleChanged(title) {
        console.log(title);
        this.viewTitle = title;
    }
    // Calendar event was clicked
    onEventSelected(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _event_details_event_details_page__WEBPACK_IMPORTED_MODULE_11__["EventDetailsPage"],
                componentProps: {
                    event
                }
            });
            return yield modal.present();
        });
    }
};
CalendarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] },
    { type: _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__["Calendar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_icalendar_ical_export_service__WEBPACK_IMPORTED_MODULE_8__["IcalExportService"] },
    { type: src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"] },
    { type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ionic2_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"])
], CalendarPage.prototype, "myCal", void 0);
CalendarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calendar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendar/calendar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calendar.page.scss */ "./src/app/pages/calendar/calendar.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], String, _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__["Calendar"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_icalendar_ical_export_service__WEBPACK_IMPORTED_MODULE_8__["IcalExportService"],
        src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"],
        src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], CalendarPage);



/***/ }),

/***/ "./src/app/services/icalendar/ical-export.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/icalendar/ical-export.service.ts ***!
  \***********************************************************/
/*! exports provided: IcalExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcalExportService", function() { return IcalExportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let IcalExportService = class IcalExportService {
    constructor(platform, file, fileTransfer) {
        this.platform = platform;
        this.file = file;
        this.fileTransfer = fileTransfer;
    }
    download() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'cal-events';
        const transfer = this.fileTransfer.create();
        transfer.download(url, this.file.dataDirectory + 'calendar_events.ics').then((entry) => {
            console.log('download complete: ' + entry.toURL());
        }, (error) => {
            // handle error
        });
    }
};
IcalExportService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"] }
];
IcalExportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"]])
], IcalExportService);



/***/ }),

/***/ "./src/app/services/icalendar/ical-import.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/icalendar/ical-import.service.ts ***!
  \***********************************************************/
/*! exports provided: IcalImportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcalImportService", function() { return IcalImportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



let IcalImportService = class IcalImportService {
    constructor() {
        this.todoCount = 0;
    }
    parse(encodedData) {
        const lines = encodedData.split('\n');
        const formattedEvents = [];
        this.todoCount = 0;
        let eventStarted = false;
        lines.forEach(event => {
            if (event.includes('BEGIN:VEVENT')) {
                eventStarted = true;
                formattedEvents[this.todoCount] = {};
            }
            if (eventStarted) {
                if (event.includes('DTSTART')) {
                    const date = event.split(':');
                    const timezone = date[0].split('=');
                    formattedEvents[this.todoCount].start_date = this.calendarDate(date[1], timezone[1]);
                }
                else if (event.includes('DTEND')) {
                    const date = event.split(':');
                    const timezone = date[0].split('=');
                    formattedEvents[this.todoCount].end_date = this.calendarDate(date[1], timezone[1]);
                }
                else if (event.includes('RRULE')) {
                    const rule = event.split(':');
                    formattedEvents[this.todoCount].rRule = this.iCalendarRule(rule[1]);
                }
                else if (event.includes('SUMMARY')) {
                    const title = event.split(':');
                    formattedEvents[this.todoCount].title = title[1];
                }
                else if (event.includes('LOCATION')) {
                    const location = event.split(':');
                    location.shift();
                    formattedEvents[this.todoCount].location = location.join(':');
                }
                else if (event.includes('DESCRIPTION')) {
                    const matches = event.match(/([^:]+)[:]([\w\W]+)/);
                    formattedEvents[this.todoCount].description = decodeURI(matches[2]);
                }
                else { }
            }
            if (event.includes('END:VEVENT')) {
                eventStarted = false;
                this.todoCount = this.todoCount + 1;
            }
        });
        return formattedEvents;
    }
    iCalendarRule(rule) {
        const rRules = rule.split(';');
        const result = [];
        rRules.forEach(r => {
            const rContent = r.split('=');
            result[rContent[0]] = rContent[1];
        });
        return result;
    }
    calendarDate(iCalStr, timezone) {
        const strYear = iCalStr.substr(0, 4);
        const strMonth = iCalStr.substr(4, 2);
        const strDay = iCalStr.substr(6, 2);
        const strHour = iCalStr.substr(9, 2);
        const strMin = iCalStr.substr(11, 2);
        const strSec = iCalStr.substr(13, 2);
        const strFormat = iCalStr.substr(8, 1);
        const oDate = moment__WEBPACK_IMPORTED_MODULE_2__(strYear + '-' + strMonth + '-' + strDay + ' ' + strHour + ':' + strMin + ':' + strSec, moment__WEBPACK_IMPORTED_MODULE_2__["defaultFormat"]).toDate();
        return oDate;
    }
};
IcalImportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], IcalImportService);



/***/ })

}]);
//# sourceMappingURL=pages-calendar-calendar-module-es2015.js.map