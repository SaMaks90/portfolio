"use strict";$("#date-range").dateRangePicker({showShortcuts:!1,language:"ru",showTopbar:!1,container:".days"}).on("datepicker-first-date-selected",function(e,o){console.log(o)}).on("datepicker-change",function(e,o){console.log(o)}).on("datepicker-apply",function(e,o){console.log(o)}).on("datepicker-close",function(){console.log("before close")}).on("datepicker-closed",function(){console.log("after close")}).on("datepicker-open",function(){console.log("before open")}).on("datepicker-opened",function(){console.log("after open")}),$("#date-range").data("dateRangePicker").setDateRange("2018-01-01","2018-01-01");